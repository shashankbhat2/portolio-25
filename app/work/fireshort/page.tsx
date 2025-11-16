import Button from '@/components/Button';
import { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Fireshort Case Study — Shashank Bhat',
  description: 'AI-powered repurposing engine for marketers and creators. Turn 1 video into endless content.',
};

export default function FireshortPage() {
  return (
    <main className="min-h-screen pt-24 pb-20 px-6 lg:px-8">
      <div className="max-w-4xl mx-auto">
        {/* Header */}
        <div className="mb-12">
          <h1 className="text-4xl md:text-6xl font-bold text-white mb-4">
            Fireshort — Turn 1 Video into Endless Content
          </h1>
          <p className="text-xl text-gray-400">
            AI-powered repurposing engine for marketers and creators.
          </p>
        </div>

        {/* Overview */}
        <section className="mb-16">
          <h2 className="text-2xl font-bold text-white mb-4">Overview</h2>
          <p className="text-gray-400 leading-relaxed mb-4">
            Fireshort automates the workflow of transforming a long-form video into multiple derivative 
            content formats.
          </p>
        </section>

        {/* Core Features */}
        <section className="mb-16">
          <h2 className="text-2xl font-bold text-white mb-8">Core Features</h2>

          <div className="grid md:grid-cols-2 gap-4">
            {[
              'Auto-subtitling with Whisper',
              'Clip detection and highlights',
              'Reels/shorts export',
              'Audiograms',
              'Templates & AI captions',
              'Branding presets',
              'Social-ready content exports'
            ].map((feature, index) => (
              <div
                key={index}
                className="bg-white/5 border border-white/10 rounded-lg p-4 hover:border-white/20 transition-all"
              >
                <p className="text-gray-300 text-sm">{feature}</p>
              </div>
            ))}
          </div>
        </section>

        {/* Tech Used */}
        <section className="mb-16">
          <h2 className="text-2xl font-bold text-white mb-4">Tech Used</h2>
          <div className="flex flex-wrap gap-3">
            {['FastAPI', 'Python', 'FFmpeg', 'React', 'Whisper', 'AWS'].map((tech) => (
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
