import Button from '@/components/Button';
import Image from 'next/image';
import { ReactNode } from 'react';

interface ProjectLayoutProps {
  title: string;
  subtitle: string;
  overview: string;
  tech: string[];
  gradient?: string;
  children?: ReactNode;
}

export default function ProjectLayout({ 
  title, 
  subtitle, 
  overview, 
  tech,
  gradient = "from-indigo-500/10 to-purple-500/10",
  children 
}: ProjectLayoutProps) {
  return (
    <main className="min-h-screen pt-24 pb-20 px-6 lg:px-8 relative">
      <div className="max-w-5xl mx-auto">
        {/* Hero Image Placeholder */}
        <div className={`relative h-96 rounded-3xl overflow-hidden mb-12 bg-gradient-to-br ${gradient} flex items-center justify-center shadow-2xl`}>
          <div className="text-8xl font-bold text-white/20">{title.charAt(0)}</div>
          <div className="absolute inset-0 bg-gradient-to-t from-black/40 to-transparent" />
          <div className="absolute bottom-0 left-0 right-0 p-8">
            <h1 className="text-4xl md:text-6xl font-bold text-white mb-4 drop-shadow-lg">
              {title}
            </h1>
            <p className="text-xl text-white/90 drop-shadow">
              {subtitle}
            </p>
          </div>
        </div>

        {/* Overview */}
        <section className="mb-16">
          <h2 className="text-2xl font-bold text-gray-900 mb-4">Overview</h2>
          <p className="text-gray-600 leading-relaxed text-lg">
            {overview}
          </p>
        </section>

        {/* Main Content */}
        {children}

        {/* Tech Used */}
        <section className="mb-16">
          <h2 className="text-2xl font-bold text-gray-900 mb-4">Tech Stack</h2>
          <div className="flex flex-wrap gap-3">
            {tech.map((item) => (
              <span
                key={item}
                className="px-4 py-2 bg-white border border-gray-300 rounded-lg text-gray-700 text-sm font-medium shadow-sm hover:shadow-md hover:border-indigo-300 transition-all"
              >
                {item}
              </span>
            ))}
          </div>
        </section>

        {/* Navigation */}
        <div className="flex flex-wrap gap-4 pt-8 border-t border-gray-200">
          <Button href="/work">← Back to Work</Button>
          <Button href="/contact" variant="secondary">Discuss This Project</Button>
        </div>
      </div>
    </main>
  );
}
