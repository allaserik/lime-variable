export default function Home() {
  return (
    <main className="min-h-screen p-8 sm:p-20 flex flex-col gap-12 font-[family-name:var(--font-geist-sans)]">
      <section className="flex flex-col gap-4 items-center sm:items-start">
        <h1 className="text-3xl font-bold">Gamified Household Chore Tracker</h1>
        <p className="text-lg max-w-prose text-center sm:text-left">
          A fun and engaging way to manage household responsibilities.
        </p>
      </section>

      <section className="flex flex-col gap-6">
        <h2 className="text-2xl font-semibold">User Stories</h2>

        <div>
          <h3 className="text-xl font-medium mb-2">👨‍👩‍👧 Parent Role:</h3>
          <ul className="list-disc list-inside space-y-1">
            <li>As a parent, I can create chores and assign them to a specific child.</li>
            <li>As a parent, I can assign points to each chore when creating it.</li>
            <li>As a parent, I can approve or reject completed chores submitted by children.</li>
            <li>As a parent, I can view the family’s overall progress on a dashboard.</li>
          </ul>
        </div>

        <div>
          <h3 className="text-xl font-medium mb-2">🧒 Child Role:</h3>
          <ul className="list-disc list-inside space-y-1">
            <li>As a child, I can view the chores assigned to me.</li>
            <li>As a child, I can mark chores as complete and upload photos as proof.</li>
            <li>As a child, I can track my current points (point balance).</li>
          </ul>
        </div>
      </section>
    </main>
  );
}
