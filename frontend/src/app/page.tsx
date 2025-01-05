async function getData() {
  const res = await fetch(`${process.env.NEXT_PUBLIC_BACKEND_URL}/api/hello`, { cache: 'no-store' });
  if (!res.ok) throw new Error('Failed to fetch data');
  return res.json();
}

export default async function Page() {
  const data = await getData();

  return (
    <div>
      <h1>Next.js App with TypeScript</h1>
      <p>{data.message}</p>
    </div>
  );
}
