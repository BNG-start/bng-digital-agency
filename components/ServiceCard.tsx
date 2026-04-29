interface ServiceProps {
  title: string;
  description: string;
  icon?: React.ReactNode;
  benefits: string[];
}

export default function ServiceCard({ title, description, benefits }: ServiceProps) {
  return (
    <div className="group p-8 rounded-3xl bg-white/5 border border-white/10 hover:border-accentBlue/50 transition-all duration-500">
      <div className="mb-6 h-12 w-12 bg-accentBlue/10 rounded-2xl flex items-center justify-center group-hover:bg-accentBlue transition-colors duration-500">
        <div className="h-2 w-2 bg-accentBlue group-hover:bg-white rounded-full"></div>
      </div>
      
      <h3 className="text-2xl font-bold mb-4 tracking-tight">{title}</h3>
      <p className="text-gray-400 mb-8 leading-relaxed">
        {description}
      </p>

      <ul className="space-y-3">
        {benefits.map((benefit, index) => (
          <li key={index} className="flex items-center text-sm text-gray-300">
            <span className="text-accentBlue mr-2">✓</span> {benefit}
          </li>
        ))}
      </ul>
      
      <button className="mt-10 text-sm font-bold text-accentBlue uppercase tracking-tighter group-hover:translate-x-2 transition-transform">
        En savoir plus →
      </button>
    </div>
  );
}