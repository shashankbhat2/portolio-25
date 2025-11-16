import Link from 'next/link';

interface ButtonProps {
  href?: string;
  children: React.ReactNode;
  variant?: 'primary' | 'secondary';
  onClick?: () => void;
  className?: string;
}

export default function Button({ 
  href, 
  children, 
  variant = 'primary', 
  onClick,
  className = ''
}: ButtonProps) {
  const baseStyles = "inline-flex items-center justify-center px-6 py-3 rounded-lg font-medium transition-all duration-200 text-sm shine-effect";
  const variants = {
    primary: "bg-indigo-600 text-white hover:bg-indigo-700 shadow-md hover:shadow-lg",
    secondary: "bg-white text-gray-900 hover:bg-gray-50 border border-gray-300 shadow-sm"
  };

  const buttonClass = `${baseStyles} ${variants[variant]} ${className}`;

  if (href) {
    return (
      <Link href={href} className={buttonClass}>
        {children}
      </Link>
    );
  }

  return (
    <button onClick={onClick} className={buttonClass}>
      {children}
    </button>
  );
}
