interface ButtonProps {
  label: string;
  variant?: 'primary' | 'outline';
  href?: string;
  className?: string;
}

export default function Button({ label, variant = 'primary', href, className = "" }: ButtonProps) {
  const baseStyles = "inline-block px-8 py-4 rounded-full font-bold text-sm uppercase tracking-widest transition duration-300 transform hover:scale-105 active:scale-95";
  
  const variants = {
    primary: "bg-accentBlue text-white hover:bg-blue-700 shadow-lg shadow-accentBlue/20",
    outline: "border border-white/20 text-white hover:bg-white hover:text-black"
  };

  const content = <span className="flex items-center gap-2">{label}</span>;

  if (href) {
    return (
      <a href={href} className={`${baseStyles} ${variants[variant]} ${className}`}>
        {content}
      </a>
    );
  }

  return (
    <button className={`${baseStyles} ${variants[variant]} ${className}`}>
      {content}
    </button>
  );
}