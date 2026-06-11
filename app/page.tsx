import SpotifyNowPlaying from './SpotifyNowPlaying';

export default async function Home() {


  return (
    <main className="mx-auto max-w-xl px-8 py-24">
      <nav className="flex justify-end gap-8 text-sm uppercase">
        <a href="/">Home</a>
        <a href="/guestbook">Guestbook</a>
      </nav>

      <section className="mt-20">
        <h1
          className="font-bold text-6xl"
          style={{ fontFamily: "var(--font-playfair)" }}
        >
          Mayowa
        </h1>

        <p className="mt-4 text-xs uppercase tracking-[0.2em]">
          Frontend Developer
        </p>

        <p className="mt-4 max-w-md text-zinc-400">
          Building modern web applications with React,TypeScript and Next.js.
        </p>

        <div className="mt-4 flex items-center gap-4 text-sm">
          <a href="https://github.com/onaolapomay" className="underline underline-offset-6"
            target="_blank" rel="noopener noreferrer">
            GitHub
          </a>

          <span className="text-zinc-600">|</span>

          <a
            href="https://twitter.com/air_mayor"
            className="underline underline-offset-6"
            target="_blank"
            rel="noopener noreferrer"
          >
            X
          </a>

          <span className="text-zinc-600">|</span>

          <a href="mailto:raphy.mayo@gmail.com" className="underline underline-offset-6">
            Email
          </a>
        </div>

        <div className="mt-10 rounded-xl border border-zinc-800 text-white bg-zinc-900 p-6">
          <p>i'm currently listening to </p>
          <SpotifyNowPlaying/>
        </div>
        
        <section className="mt-24">
          <h2 className="text-4xl"
          style={{ fontFamily: "var(--font-playfair)" }}
          >
            Projects
          </h2>
          <hr className="my-4 border-zinc-800" />

          <a href="https://my-solar-smart-plan.onrender.com/" className="block py-10"
            target="_blank"
            rel="noopener noreferrer"
          >
            <div className="flex items-center justify-between">
            <div>
              <h3 className="text-2xl"
              style={{ fontFamily: "var(--font-playfair)"}}>My Solar Smart Plan</h3>
              <p className="mt-2 text-xs tracking-[0.2em] text-zinc-500">my-solar-smart-plan.onrender.com</p>

              <p className="mt-2 text-sm text-zinc-400">
                Design and size your solar setups based on energy usage, battery capacity, and inverter limits
              </p>
            </div>
          </div>
          </a>
          <hr className="my-4border-zinc-800" />

          <a href="https://expensesrack.netlify.app/" className="block py-10"
            target="_blank"
            rel="noopener noreferrer"
          >
            <div className="flex items-center justify-between">
            <div>
              <h3 className="text-2xl"
              style={{ fontFamily: "var(--font-playfair)"}}>Expense Tracker</h3>
              <p className="mt-2 text-xs tracking-[0.2em] text-zinc-500">expensesrack.netlify.app</p>

              <p className="mt-2 text-sm text-zinc-400">
                Track expenses and manage personal budgets.
              </p>
            </div>
          </div>
          </a>
          <hr className="my-4border-zinc-800" />

            <a href="https://globalp.netlify.app/" className="block py-10"
            target="_blank"
            rel="noopener noreferrer">
            <div className="flex items-center justify-between">
            <div>
              <h3 className="text-2xl"
              style={{ fontFamily: "var(--font-playfair)"}}>GlobalPay</h3>
              <p className="mt-2 text-xs tracking-[0.2em] text-zinc-500">globalp.netlify.app</p>

              <p className="mt-2 text-sm text-zinc-400">
                A modern fintech platform for payment processing, recurring billing, and business payment solution.
              </p>
            </div>
          </div>
          </a>
          <hr className="my-4border-zinc-800" />

            <a href="https://the-revamp.netlify.app/" className="block py-10"
            target="_blank"
            rel="noopener noreferrer">
            <div className="flex items-center justify-between">
            <div>
              <h3 className="text-2xl"
              style={{ fontFamily: "var(--font-playfair)"}}>Revamp</h3>
              <p className="mt-2 text-xs tracking-[0.2em] text-zinc-500">the-revamp.netlify.app/</p>

              <p className="mt-2 text-sm text-zinc-400">
                A fashion e-commerce platform featuring product browsing, promotions, collections and responsive shopping experiences.
              </p>
            </div>
          </div>
          </a>
          <hr className="my-4 border-zinc-800" />

        </section>
      </section>
    </main>
  );
}