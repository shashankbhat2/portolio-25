import Button from '@/components/Button';
import { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'ClickRecord Case Study — Shashank Bhat',
  description: 'The fastest way to record your screen, tab, or camera — with instant share links.',
};

export default function ClickRecordPage() {
  return (
    <main className="min-h-screen pt-24 pb-20 px-6 lg:px-8">
      <div className="max-w-4xl mx-auto">
        {/* Header */}
        <div className="mb-12">
          <h1 className="text-4xl md:text-6xl font-bold text-white mb-4">
            ClickRecord — Instant Recording & Video Studio
          </h1>
          <p className="text-xl text-gray-400">
            The fastest way to record your screen, tab, or camera — with instant share links.
          </p>
        </div>

        {/* Overview */}
        <section className="mb-16">
          <h2 className="text-2xl font-bold text-white mb-4">Overview</h2>
          <p className="text-gray-400 leading-relaxed mb-4">
            ClickRecord is a lightweight Chrome extension that captures video and auto-uploads it to a 
            Node.js backend where users can edit, trim, and export.
          </p>
        </section>

        {/* Core Features */}
        <section className="mb-16">
          <h2 className="text-2xl font-bold text-white mb-8">Core Features</h2>

          <div className="bg-white/5 border border-white/10 rounded-xl p-8">
            <ul className="space-y-4 text-gray-400">
              <li className="flex items-start gap-3">
                <span className="text-blue-400 mt-1">•</span>
                <span>Chrome extension with native recording UI</span>
              </li>
              <li className="flex items-start gap-3">
                <span className="text-blue-400 mt-1">•</span>
                <span>Screen / camera / tab capture</span>
              </li>
              <li className="flex items-start gap-3">
                <span className="text-blue-400 mt-1">•</span>
                <span>Instant upload</span>
              </li>
              <li className="flex items-start gap-3">
                <span className="text-blue-400 mt-1">•</span>
                <span>In-browser video editor</span>
              </li>
              <li className="flex items-start gap-3">
                <span className="text-blue-400 mt-1">•</span>
                <span>Fast shareable links</span>
              </li>
              <li className="flex items-start gap-3">
                <span className="text-blue-400 mt-1">•</span>
                <span>Backend storage & processing (Node.js)</span>
              </li>
            </ul>
          </div>
        </section>

        {/* Tech Used */}
        <section className="mb-16">
          <h2 className="text-2xl font-bold text-white mb-4">Tech Used</h2>
          <div className="flex flex-wrap gap-3">
            {['Chrome Extensions API', 'Node.js', 'Express', 'React', 'FFmpeg'].map((tech) => (
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
