import Button from '@/components/Button';
import { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'About — Shashank Bhat',
  description: 'Full-stack engineer focused on building fast, practical, AI-enabled products.',
};

export default function AboutPage() {
  return (
    <main className="min-h-screen pt-24 pb-20 px-6 lg:px-8 relative">
      <div className="max-w-4xl mx-auto">
        {/* Header */}
        <div className="mb-12">
          <h1 className="text-5xl md:text-6xl font-bold text-gray-900 mb-6">About Me</h1>
        </div>

        {/* Bio */}
        <section className="mb-16">
          <div className="prose max-w-none">
            <p className="text-xl text-gray-700 leading-relaxed mb-6">
              I&apos;m Shashank, a full-stack engineer focused on building fast, practical, AI-enabled products.
            </p>
            <p className="text-lg text-gray-600 leading-relaxed mb-6">
              I enjoy turning real-world problems into polished digital experiences — whether that&apos;s a 
              high-traffic SaaS platform, a content pipeline, a video tool, or a custom business workflow.
            </p>
          </div>
        </section>

        {/* Values */}
        <section className="mb-16">
          <h2 className="text-2xl font-bold text-gray-900 mb-8">I value:</h2>
          
          <div className="grid md:grid-cols-2 gap-4">
            {[
              'Clear product thinking',
              'Simple, scalable systems',
              'Aesthetically clean UI',
              'Reliability',
              'Ownership + fast shipping'
            ].map((value, index) => (
              <div
                key={index}
                className="bg-white border border-gray-200 rounded-2xl p-6 hover:border-indigo-300 hover:shadow-lg transition-all"
              >
                <div className="flex items-center gap-3">
                  <span className="text-2xl text-green-600">✓</span>
                  <span className="text-gray-700">{value}</span>
                </div>
              </div>
            ))}
          </div>
        </section>

        {/* Experience Summary */}
        <section className="mb-16">
          <div className="bg-gradient-to-br from-indigo-50 to-purple-50 border border-indigo-200 rounded-2xl p-8">
            <p className="text-gray-700 leading-relaxed mb-6">
              I&apos;ve built tools for creators, enterprises, and startups, with a strong overlap in:
            </p>
            <div className="flex flex-wrap gap-3">
              {[
                'React',
                'Node.js',
                'FastAPI',
                'Python',
                'AI Systems',
                'Complex UI/UX Flows'
              ].map((tech) => (
                <span
                  key={tech}
                  className="px-4 py-2 bg-white border border-indigo-200 rounded-lg text-gray-900 text-sm font-medium shadow-sm"
                >
                  {tech}
                </span>
              ))}
            </div>
          </div>
        </section>

        {/* CTA */}
        <div className="pt-8 border-t border-gray-200">
          <div className="flex flex-wrap gap-4">
            <Button href="/work">View My Work</Button>
            <Button href="/contact" variant="secondary">Get In Touch</Button>
          </div>
        </div>
      </div>
    </main>
  );
}
