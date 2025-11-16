import Button from '@/components/Button';
import { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Rua Skin & Hair — Shashank Bhat',
  description: 'Clean, modern website for Rua Skin & Hair built with Next.js.',
};

export default function RuaPage() {
  return (
    <main className="min-h-screen pt-24 pb-20 px-6 lg:px-8">
      <div className="max-w-4xl mx-auto">
        <div className="mb-12">
          <h1 className="text-4xl md:text-6xl font-bold text-white mb-4">
            Rua Skin & Hair
          </h1>
          <p className="text-xl text-gray-400">
            Clean, modern website
          </p>
        </div>

        <section className="mb-16">
          <h2 className="text-2xl font-bold text-white mb-4">Overview</h2>
          <p className="text-gray-400 leading-relaxed mb-4">
            Built a clean, modern, and responsive website for Rua Skin & Hair, a beauty and wellness brand. 
            The site features a polished UI with smooth animations and optimized performance.
          </p>
        </section>

        <section className="mb-16">
          <h2 className="text-2xl font-bold text-white mb-8">Features</h2>
          <div className="bg-white/5 border border-white/10 rounded-xl p-8">
            <ul className="space-y-4 text-gray-400">
              <li className="flex items-start gap-3">
                <span className="text-blue-400 mt-1">•</span>
                <span>Responsive design across all devices</span>
              </li>
              <li className="flex items-start gap-3">
                <span className="text-blue-400 mt-1">•</span>
                <span>Optimized performance and SEO</span>
              </li>
              <li className="flex items-start gap-3">
                <span className="text-blue-400 mt-1">•</span>
                <span>Clean, modern UI design</span>
              </li>
              <li className="flex items-start gap-3">
                <span className="text-blue-400 mt-1">•</span>
                <span>Product showcase and booking system</span>
              </li>
            </ul>
          </div>
        </section>

        <section className="mb-16">
          <h2 className="text-2xl font-bold text-white mb-4">Tech Stack</h2>
          <div className="flex flex-wrap gap-3">
            {['Next.js', 'React', 'Tailwind CSS', 'TypeScript'].map((tech) => (
              <span
                key={tech}
                className="px-4 py-2 bg-white/5 border border-white/10 rounded-lg text-gray-300 text-sm"
              >
                {tech}
              </span>
            ))}
          </div>
        </section>

        <div className="flex flex-wrap gap-4 pt-8 border-t border-white/10">
          <Button href="/work">← Back to Work</Button>
          <Button href="/contact" variant="secondary">Similar Project?</Button>
        </div>
      </div>
    </main>
  );
}
