"use client";
export default function ErrorPage({ error }) {
  return (
    <main className="error">
      <h1>An error occurred...</h1>
      <p>Failed to fetch data. Try again later.</p>
    </main>
  );
}
