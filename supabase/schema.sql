create table if not exists public.customer_reviews (
  id uuid primary key default gen_random_uuid(),
  created_at timestamptz not null default now(),
  customer_name text not null default 'Cafe guest'
    check (char_length(customer_name) between 1 and 40),
  dish_name text not null
    check (char_length(dish_name) between 1 and 120),
  rating smallint not null
    check (rating between 1 and 5),
  comment text not null default ''
    check (char_length(comment) <= 600),
  status text not null default 'pending'
    check (status in ('pending', 'approved', 'rejected'))
);

alter table public.customer_reviews enable row level security;

drop policy if exists "Anyone can read approved reviews" on public.customer_reviews;
create policy "Anyone can read approved reviews"
  on public.customer_reviews
  for select
  to anon
  using (status = 'approved');

drop policy if exists "Anyone can submit pending reviews" on public.customer_reviews;
create policy "Anyone can submit pending reviews"
  on public.customer_reviews
  for insert
  to anon
  with check (status = 'pending');

revoke all on public.customer_reviews from anon, authenticated;
grant select (id, created_at, customer_name, dish_name, rating, comment)
  on public.customer_reviews to anon;
grant insert (customer_name, dish_name, rating, comment, status)
  on public.customer_reviews to anon;
