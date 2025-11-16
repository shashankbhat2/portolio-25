import Link from 'next/link';
import Image from 'next/image';

interface ProjectCardProps {
  title: string;
  description: string;
  tags: string;
  href: string;
  gradient?: string;
  image?: string;
}

export default function ProjectCard({ 
  title, 
  description, 
  tags, 
  href,
  gradient = "from-indigo-500/10 to-purple-500/10",
  image
}: ProjectCardProps) {
  return (
    <Link href={href} className="group">
      <div className="relative overflow-hidden rounded-2xl bg-white border border-gray-200 hover:border-indigo-300 hover:shadow-xl transition-all duration-300 hover:transform hover:-translate-y-1">
        {/* Image Placeholder */}
        <div className="relative h-48 bg-gradient-to-br from-gray-100 to-gray-200 overflow-hidden">
          {image ? (
            <Image src={image} alt={title} fill className="object-cover" />
          ) : (
            <div className={`absolute inset-0 bg-gradient-to-br ${gradient} flex items-center justify-center`}>
              <div className="text-6xl font-bold text-gray-300/30">{title.charAt(0)}</div>
            </div>
          )}
          <div className="absolute inset-0 bg-gradient-to-t from-black/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity" />
        </div>
        
        <div className="relative p-6">
          <h3 className="text-xl font-semibold text-gray-900 mb-2 group-hover:text-indigo-600 transition-colors">{title}</h3>
          <p className="text-gray-600 text-sm mb-4 line-clamp-2">{description}</p>
          <p className="text-xs text-gray-500">{tags}</p>
          
          <div className="mt-4 flex items-center text-indigo-600 text-sm font-medium group-hover:text-indigo-700 transition-colors">
            View Case Study
            <svg className="w-4 h-4 ml-2 group-hover:translate-x-1 transition-transform" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
            </svg>
          </div>
        </div>
      </div>
    </Link>
  );
}
