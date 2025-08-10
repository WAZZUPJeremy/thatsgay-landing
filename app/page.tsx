"use client";

function StyleBrand() {
  return (
    <style>{`
      @import url('https://fonts.googleapis.com/css2?family=Inter:wght@400;500;600;700&family=Space+Grotesk:wght@500;700&display=swap');
    `}</style>
  );
}

export default function Page() {
  return (
    <main className="min-h-screen bg-ink text-cloud">
      <StyleBrand />
      <section className="section">
        <div className="max-w-6xl mx-auto px-6">
          <h1 className="font-display text-5xl sm:text-6xl">thatsgay?</h1>
          <p className="font-sans text-lg mt-4 opacity-90">
            Build test OK. On remettra le vrai contenu après le déploiement vert ✅
          </p>
        </div>
      </section>
    </main>
  );
}
