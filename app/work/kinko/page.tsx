import Button from '@/components/Button';
import { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Kinko Global — Shashank Bhat',
  description: 'Fast corporate website built with React and Tailwind CSS.',
};

export default function KinkoPage() {
  return (
    <main className="min-h-screen pt-24 pb-20 px-6 lg:px-8">
      <div className="max-w-4xl mx-auto">
        <div className="mb-12">
          <h1 className="text-4xl md:text-6xl font-bold text-white mb-4">
            Kinko Global
          </h1>
          <p className="text-xl text-gray-400">
            Fast corporate website
          </p>
        </div>

        <section className="mb-16">
          <h2 className="text-2xl font-bold text-white mb-4">Overview</h2>
          <p className="text-gray-400 leading-relaxed mb-4">
            Developed a fast, professional corporate website for Kinko Global with focus on performance, 
            clean design, and user experience.
          </p>
        </section>

        <section className="mb-16">
          <h2 className="text-2xl font-bold text-white mb-8">Features</h2>
          <div className="bg-white/5 border border-white/10 rounded-xl p-8">
            <ul className="space-y-4 text-gray-400">
              <li className="flex items-start gap-3">
                <span className="text-purple-400 mt-1">•</span>
                <span>Lightning-fast page loads</span>
              </li>
              <li className="flex items-start gap-3">
                <span className="text-purple-400 mt-1">•</span>
                <span>Professional corporate design</span>
              </li>
              <li className="flex items-start gap-3">
                <span className="text-purple-400 mt-1">•</span>
                <span>Mobile-first responsive layout</span>
              </li>
              <li className="flex items-start gap-3">
                <span className="text-purple-400 mt-1">•</span>
                <span>SEO optimized</span>
              </li>
            </ul>
          </div>
        </section>

        <section className="mb-16">
          <h2 className="text-2xl font-bold text-white mb-4">Tech Stack</h2>
          <div className="flex flex-wrap gap-3">
            {['React', 'Tailwind CSS', 'TypeScript', 'Vite'].map((tech) => (
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
          <Button href="/contact" variant="secondary">Need a Corporate Site?</Button>
        </div>
      </div>
    </main>
  );
}
