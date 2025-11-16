import Button from '@/components/Button';
import { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Kenpath Case Study — Shashank Bhat',
  description: 'Building scalable, interactive dashboards for enterprise clients using React, D3.js, Sigma.js, and Chart.js.',
};

export default function KenpathPage() {
  return (
    <main className="min-h-screen pt-24 pb-20 px-6 lg:px-8">
      <div className="max-w-4xl mx-auto">
        {/* Header */}
        <div className="mb-12">
          <h1 className="text-4xl md:text-6xl font-bold text-white mb-4">
            Kenpath — Enterprise Dashboards & Intelligence Systems
          </h1>
          <p className="text-xl text-gray-400">
            Building scalable, interactive dashboards for enterprise clients.
          </p>
        </div>

        {/* Overview */}
        <section className="mb-16">
          <h2 className="text-2xl font-bold text-white mb-4">Overview</h2>
          <p className="text-gray-400 leading-relaxed mb-4">
            At Kenpath, I work across complex, data-heavy UI systems — designing visualizations, 
            building reusable components, and optimizing rendering performance.
          </p>
        </section>

        {/* Highlights */}
        <section className="mb-16">
          <h2 className="text-2xl font-bold text-white mb-8">Highlights</h2>

          <div className="bg-white/5 border border-white/10 rounded-xl p-8">
            <ul className="space-y-4 text-gray-400">
              <li className="flex items-start gap-3">
                <span className="text-green-400 mt-1">✓</span>
                <span>Interactive dashboards with Chart.js, D3.js, Sigma.js.</span>
              </li>
              <li className="flex items-start gap-3">
                <span className="text-green-400 mt-1">✓</span>
                <span>Reusable React component systems with Tiptap integration.</span>
              </li>
              <li className="flex items-start gap-3">
                <span className="text-green-400 mt-1">✓</span>
                <span>Converted Figma designs into responsive, production-ready UI.</span>
              </li>
              <li className="flex items-start gap-3">
                <span className="text-green-400 mt-1">✓</span>
                <span>Improved render speed and state handling (~30%).</span>
              </li>
              <li className="flex items-start gap-3">
                <span className="text-green-400 mt-1">✓</span>
                <span>Docker-based CI/CD pipelines.</span>
              </li>
              <li className="flex items-start gap-3">
                <span className="text-green-400 mt-1">✓</span>
                <span>Collaborated with backend on scalable API-driven UX.</span>
              </li>
            </ul>
          </div>
        </section>

        {/* Tech Used */}
        <section className="mb-16">
          <h2 className="text-2xl font-bold text-white mb-4">Tech Used</h2>
          <div className="flex flex-wrap gap-3">
            {['React', 'D3.js', 'Sigma.js', 'Chart.js', 'Docker', 'Tiptap'].map((tech) => (
              <span
                key={tech}
                className="px-4 py-2 bg-white/5 border border-white/10 rounded-lg text-gray-300 text-sm"
              >
                {tech}
              </span>
            ))}
          </div>
        </section>

        {/* Navigation */}
        <div className="flex flex-wrap gap-4 pt-8 border-t border-white/10">
          <Button href="/work">← Back to Work</Button>
          <Button href="/contact" variant="secondary">Discuss This Project</Button>
        </div>
      </div>
    </main>
  );
}
