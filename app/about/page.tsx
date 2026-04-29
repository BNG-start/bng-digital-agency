export default function About() {
  const values = [
    { title: "Excellence", desc: "Nous ne livrons que le meilleur, sans compromis sur la qualité." },
    { title: "Innovation", desc: "Toujours à l'affût des dernières technologies pour nos clients." },
    { title: "Transparence", desc: "Une communication honnête et directe à chaque étape du projet." }
  ];

  return (
    <div className="pt-32 pb-20">
      <div className="max-w-7xl mx-auto px-6">
        {/* Hero About */}
        <div className="max-w-3xl mb-20">
          <h1 className="text-5xl md:text-7xl font-bold mb-8 tracking-tighter">
            L'excellence digitale <br/> <span className="text-accentBlue text-3xl md:text-5xl">depuis le cœur de Bamako.</span>
          </h1>
          <p className="text-xl text-gray-400 leading-relaxed">
            BNG Digital Agency est née d'une vision : offrir des solutions technologiques et créatives de classe mondiale aux entreprises locales et internationales.
          </p>
        </div>

        {/* Mission / Vision */}
        <div className="grid md:grid-cols-2 gap-12 mb-32">
          <div className="p-10 bg-white/5 rounded-3xl border border-white/10">
            <h3 className="text-2xl font-bold mb-4 text-accentBlue">Notre Mission</h3>
            <p className="text-gray-300">Démocratiser l'accès au digital premium et aider les marques à dominer leur marché grâce à un design d'impact et une technologie robuste.</p>
          </div>
          <div className="p-10 bg-white/5 rounded-3xl border border-white/10">
            <h3 className="text-2xl font-bold mb-4 text-accentBlue">Notre Vision</h3>
            <p className="text-gray-300">Devenir le leader panafricain de l'innovation digitale, en prouvant que l'expertise technique n'a pas de frontières.</p>
          </div>
        </div>

        {/* Valeurs */}
        <div>
          <h2 className="text-3xl font-bold mb-12 text-center tracking-tight">Nos Valeurs Fondamentales</h2>
          <div className="grid md:grid-cols-3 gap-8">
            {values.map((v, i) => (
              <div key={i} className="text-center p-8">
                <div className="text-accentBlue text-5xl font-black mb-4 opacity-20">0{i+1}</div>
                <h4 className="text-xl font-bold mb-3">{v.title}</h4>
                <p className="text-gray-400">{v.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}