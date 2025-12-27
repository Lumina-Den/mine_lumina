-- Enable pgcrypto extension for UUID generation if not already enabled
create extension if not exists "pgcrypto";

-- Events catalogue
create table if not exists public.events (
  id text primary key,
  name text not null,
  description text,
  date timestamptz not null,
  type text not null,
  created_at timestamptz default now()
);

-- Seed the Project Showcase event
insert into public.events (id, name, description, date, type)
values (
  'project_showcase_community_2025',
  'Project Showcase',
  'A focused community showcase where squads present their latest builds and research.',
  '2025-03-15T14:00:00Z',
  'Community'
)
on conflict (id) do update
set name = excluded.name,
    description = excluded.description,
    date = excluded.date,
    type = excluded.type;

-- Registrations table
create table if not exists public.registrations (
  id uuid primary key default gen_random_uuid(),
  event_id text not null references public.events(id) on delete cascade,
  name text not null,
  reg_no text not null,
  department text not null,
  year text not null,
  section text not null,
  clan text not null,
  email text not null,
  project_title text not null,
  description text not null,
  category text not null,
  slot text,
  created_at timestamptz default now()
);

alter table public.registrations
  add column if not exists email text;

create unique index if not exists registrations_event_reg_unique
  on public.registrations(event_id, reg_no);

-- Optional slot catalogue for random assignment
create table if not exists public.event_slots (
  id uuid primary key default gen_random_uuid(),
  event_id text not null references public.events(id) on delete cascade,
  slot_label text not null,
  assigned_registration uuid references public.registrations(id),
  unique (event_id, slot_label)
);

alter table public.event_slots
  drop constraint if exists event_slots_assigned_registration_fkey;

alter table public.event_slots
  add constraint event_slots_assigned_registration_fkey
    foreign key (assigned_registration)
    references public.registrations(id)
    on delete set null;

insert into public.event_slots (event_id, slot_label)
values
  ('project_showcase_community_2025', 'Slot 01'),
  ('project_showcase_community_2025', 'Slot 02'),
  ('project_showcase_community_2025', 'Slot 03'),
  ('project_showcase_community_2025', 'Slot 04'),
  ('project_showcase_community_2025', 'Slot 05'),
  ('project_showcase_community_2025', 'Slot 06'),
  ('project_showcase_community_2025', 'Slot 07'),
  ('project_showcase_community_2025', 'Slot 08'),
  ('project_showcase_community_2025', 'Slot 09'),
  ('project_showcase_community_2025', 'Slot 10'),
  ('project_showcase_community_2025', 'Slot 11'),
  ('project_showcase_community_2025', 'Slot 12'),
  ('project_showcase_community_2025', 'Slot 13'),
  ('project_showcase_community_2025', 'Slot 14'),
  ('project_showcase_community_2025', 'Slot 15'),
  ('project_showcase_community_2025', 'Slot 16'),
  ('project_showcase_community_2025', 'Slot 17'),
  ('project_showcase_community_2025', 'Slot 18'),
  ('project_showcase_community_2025', 'Slot 19'),
  ('project_showcase_community_2025', 'Slot 20')
on conflict (event_id, slot_label) do nothing;

-- Automatically assign an available slot before storing each registration
create or replace function public.assign_random_slot()
returns trigger
language plpgsql
as $$
declare
  selected_slot record;
begin
  if new.slot is not null then
    return new;
  end if;

  select id, slot_label
  into selected_slot
  from public.event_slots
  where event_id = new.event_id
    and assigned_registration is null
  order by random()
  limit 1
  for update skip locked;

  if selected_slot is null then
    raise exception 'No slots remaining for event %', new.event_id
      using errcode = 'P0001';
  end if;

  update public.event_slots
  set assigned_registration = new.id
  where id = selected_slot.id;

  update public.registrations
  set slot = selected_slot.slot_label
  where id = new.id;

  return new;
end;
$$;

drop trigger if exists registrations_assign_slot on public.registrations;

create trigger registrations_assign_slot
after insert on public.registrations
for each row
execute function public.assign_random_slot();
