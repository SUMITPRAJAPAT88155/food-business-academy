/*
# Create contact_enquiries table

1. New Tables
- `contact_enquiries`
  - `id` (uuid, primary key)
  - `name` (text, not null) — full name of the enquirer
  - `phone` (text, not null) — phone number
  - `email` (text, not null) — email address
  - `business_name` (text, nullable) — optional business name
  - `business_type` (text, nullable) — Restaurant, Cloud Kitchen, Cafe, Food Brand, Home Kitchen, Other
  - `message` (text, nullable) — optional message
  - `created_at` (timestamptz, default now())
2. Security
- Enable RLS on `contact_enquiries`.
- Allow anon + authenticated INSERT only (public contact form submissions).
- No SELECT/UPDATE/DELETE for anon — only service role can read enquiries.
3. Important Notes
- This is a public contact form with no sign-in, so INSERT is open to anon.
- Enquiries can only be read by the service role (server-side), protecting user data.
*/

CREATE TABLE IF NOT EXISTS contact_enquiries (
  id uuid PRIMARY KEY DEFAULT gen_random_uuid(),
  name text NOT NULL,
  phone text NOT NULL,
  email text NOT NULL,
  business_name text,
  business_type text,
  message text,
  created_at timestamptz DEFAULT now()
);

ALTER TABLE contact_enquiries ENABLE ROW LEVEL SECURITY;

DROP POLICY IF EXISTS "anon_insert_enquiries" ON contact_enquiries;
CREATE POLICY "anon_insert_enquiries"
ON contact_enquiries FOR INSERT
TO anon, authenticated
WITH CHECK (true);
