import Link from "next/link";

export default function Home() {
  return (
    <div className="py-12 space-y-12">
      <section className="text-center space-y-6">
        <h1>Val op met een wrap die verkoopt. Supersnel ontworpen met AI, perfect afgewerkt door ons.</h1>
        <p className="text-gray-300">Binnen <strong>24 uur</strong> je eerste designconcept. Keuze uit 3 pakketten. Print & montage inhouse.</p>
        <div className="flex gap-3 justify-center">
          <Link href="/wrap-calculator" className="btn btn-primary">Boek intake (€49 – verrekend)</Link>
          <a href="#pakketten" className="btn btn-ghost">Bekijk pakketten</a>
        </div>
        <div className="text-sm text-gray-400">★★★★★ Klanttevredenheid • Premium folies • Bancontact/kaart • Factuur met btw</div>
      </section>

      <section className="grid grid-cols-1 md:grid-cols-3 gap-4" id="pakketten">
        {[
          { title: "AI-Wrap Start", price: "vanaf €1.199", bullets: ["1 AI-concept + 1 revisie","Basis belettering","Zijpanelen + achter","Print + laminaat"] },
          { title: "AI-Wrap Pro", price: "vanaf €1.799", tag: "meest gekozen", bullets: ["2 AI-concepten + 2 revisies","Uitgebreide belettering/patronen","Zij, achter, motorkap of dakkant","Kleurcorrecte print + laminaat"] },
          { title: "AI-Wrap Elite", price: "vanaf €2.999", bullets: ["3 AI-concepten + onbeperkte proofs","Full/near-full wrap","Premium cast + long-term laminaat","Detailwerk & fotoreportage"] }
        ].map((p, idx) => (
          <div key={idx} className="card">
            <div className="flex items-center justify-between">
              <h3>{p.title}</h3>
              {p.tag && <span className="text-xs bg-green-500/20 text-green-300 px-2 py-1 rounded">{p.tag}</span>}
            </div>
            <div className="text-2xl font-bold mt-2">{p.price}</div>
            <ul className="mt-4 space-y-2 text-gray-300">{p.bullets.map((b,i)=><li key={i}>• {b}</li>)}</ul>
            <div className="mt-6"><Link href="/wrap-calculator" className="btn btn-primary w-full">Kies pakket</Link></div>
          </div>
        ))}
      </section>

      <section className="card">
        <h3>Ontwerppakket – € 245 excl. btw</h3>
        <p className="text-gray-300">Inclusief <b>3 verschillende ontwerpen</b> en <b>3 aanpassingsrondes</b>. Perfect om snel tot een sterk, printklaar resultaat te komen.</p>
        <div className="mt-3 flex gap-3">
          <a href="/design" className="btn btn-primary">Start ontwerp</a>
          <a href="/wrap-calculator" className="btn btn-ghost">Bereken wrap</a>
        </div>
      </section>

      <section className="grid-two items-center">
        <div className="space-y-3">
          <h2>Hoe het werkt</h2>
          <ol className="list-decimal list-inside text-gray-300 space-y-2">
            <li><strong>Intake & metingen</strong> – Doel, stijl, budget. We noteren voertuigdata en wensen.</li>
            <li><strong>AI-versneld ontwerp</strong> – We genereren routes en werken jouw favoriet uit tot printklaar.</li>
            <li><strong>Print & montage</strong> – Hoogwaardige folie, nette randen, garantie op hechting en kleur.</li>
          </ol>
        </div>
        <div className="card">
          <h3>Zonwerende folie (gebouw)</h3>
          <p className="text-gray-300">Betere privacy en minder warmte. Voeg je ruiten toe en krijg direct een richtprijs.</p>
          <a href="/tint-calculator" className="btn btn-ghost mt-4">Bereken gebouw-folie</a>
        </div>
      </section>
    </div>
  );
}
