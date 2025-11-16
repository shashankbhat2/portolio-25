import Button from '@/components/Button';
import { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Videogrow — Shashank Bhat',
  description: 'AI video repurposing SaaS platform (shelved project).',
};

export default function VideogrowPage() {
  return (
    <main className="min-h-screen pt-24 pb-20 px-6 lg:px-8">
      <div className="max-w-4xl mx-auto">
        <div className="mb-12">
          <h1 className="text-4xl md:text-6xl font-bold text-white mb-4">
            Videogrow
          </h1>
          <p className="text-xl text-gray-400">
            AI video repurposing SaaS (shelved)
          </p>
        </div>

        <section className="mb-16">
          <h2 className="text-2xl font-bold text-white mb-4">Overview</h2>
          <p className="text-gray-400 leading-relaxed mb-4">
            Videogrow was an early exploration into AI-powered video repurposing for content creators. 
            While the project was eventually shelved, it provided valuable insights into video processing 
            and AI content generation.
          </p>
        </section>

        <section className="mb-16">
          <h2 className="text-2xl font-bold text-white mb-4">Tech Stack</h2>
          <div className="flex flex-wrap gap-3">
            {['React', 'Python', 'AI/ML', 'Video Processing'].map((tech) => (
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
        </div>
      </div>
    </main>
  );
}
