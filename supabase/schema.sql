-- PlainMarket database blueprint.
-- Run this once in the Supabase SQL editor to create the tables.
-- It mirrors the shapes in src/types/index.ts. Safe to re-run: it drops and
-- recreates the tables.

drop table if exists news cascade;
drop table if exists fundamentals cascade;
drop table if exists glossary cascade;
drop table if exists companies cascade;

-- One row per Nifty 50 company.
create table companies (
  symbol      text primary key,
  name        text not null,
  sector      text not null,
  description text not null
);

-- Plain-English definitions of financial terms. id is referenced by the
-- entries inside fundamentals.metrics.
create table glossary (
  id            text primary key,
  term          text not null,
  plain_english text not null,
  analogy       text
);

-- One financial snapshot per company. breakdown and metrics keep their
-- nested shape (a small object / a list of objects) as JSON.
create table fundamentals (
  symbol    text primary key references companies (symbol) on delete cascade,
  as_of     date not null,
  generated boolean not null default false,
  breakdown jsonb not null,
  metrics   jsonb not null
);

-- Recent news, many rows per company.
create table news (
  id           bigint generated always as identity primary key,
  symbol       text not null references companies (symbol) on delete cascade,
  headline     text not null,
  summary      text not null,
  source       text not null,
  published_at date not null,
  url          text not null
);

create index news_symbol_published_idx on news (symbol, published_at desc);

-- Read-only public access (the app never writes). Row Level Security on,
-- with a policy that allows anyone to select.
alter table companies    enable row level security;
alter table glossary     enable row level security;
alter table fundamentals enable row level security;
alter table news         enable row level security;

create policy "public read" on companies    for select using (true);
create policy "public read" on glossary     for select using (true);
create policy "public read" on fundamentals for select using (true);
create policy "public read" on news         for select using (true);
