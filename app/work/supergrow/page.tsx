import Button from '@/components/Button';
import { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Supergrow Case Study — Shashank Bhat',
  description: 'Voice Notes, Content Calendar, YouTube-to-Post tools engineered using React and FastAPI.',
};

export default function SupergrowPage() {
  return (
    <main className="min-h-screen pt-24 pb-20 px-6 lg:px-8 relative">
      <div className="max-w-5xl mx-auto">
        {/* Hero Image Placeholder */}
        <div className="relative h-96 rounded-3xl overflow-hidden mb-12 bg-gradient-to-br from-blue-500/10 to-indigo-500/10 flex items-center justify-center shadow-2xl border border-indigo-200">
          <div className="text-9xl font-bold text-indigo-200/40">S</div>
          <div className="absolute inset-0 bg-gradient-to-t from-indigo-900/20 to-transparent" />
          <div className="absolute bottom-0 left-0 right-0 p-8">
            <h1 className="text-4xl md:text-5xl font-bold text-gray-900 mb-4">
              Supergrow — AI-Powered Content OS for Creators
            </h1>
            <p className="text-xl text-gray-700">
              Built the key features behind one of the fastest-growing creator platforms.
            </p>
          </div>
        </div>

        {/* Overview */}
        <section className="mb-16">
          <h2 className="text-2xl font-bold text-gray-900 mb-4">Overview</h2>
          <p className="text-gray-600 leading-relaxed text-lg mb-4">
            I worked with Supergrow to engineer several of their most-used features, from voice-driven 
            content creation to drag-and-drop scheduling. All frontend work was built with{' '}
            <span className="text-gray-900 font-semibold">React (no state management libraries)</span>, and 
            backend contributions used <span className="text-gray-900 font-semibold">FastAPI + Python</span>.
          </p>
        </section>

        {/* My Contributions */}
        <section className="mb-16">
          <h2 className="text-2xl font-bold text-gray-900 mb-8">My Contributions</h2>

          <div className="space-y-6">
            {/* Feature 1 */}
            <div className="bg-white border border-gray-200 rounded-2xl p-8 hover:border-indigo-300 hover:shadow-lg transition-all">
              <div className="flex items-start gap-3 mb-4">
                <span className="text-2xl">⭐</span>
                <div>
                  <h3 className="text-xl font-semibold text-gray-900 mb-2">
                    1. Voice Notes → Post Generator
                  </h3>
                  <p className="text-indigo-600 mb-4 font-medium text-sm">One of the top-3 most-used features.</p>
                </div>
              </div>
              <ul className="space-y-2 text-gray-600 ml-8">
                <li>• Built entire React UI (record → upload → transcribe → post).</li>
                <li>• Integrated FastAPI + Whisper for transcription.</li>
                <li>• Smooth UX with real-time states, retries, and processing sequences.</li>
              </ul>
            </div>

            {/* Feature 2 */}
            <div className="bg-white border border-gray-200 rounded-2xl p-8 hover:border-indigo-300 hover:shadow-lg transition-all">
              <div className="flex items-start gap-3 mb-4">
                <span className="text-2xl">⭐</span>
                <div>
                  <h3 className="text-xl font-semibold text-gray-900 mb-2">
                    2. Content Calendar (Week + Month Views)
                  </h3>
                  <p className="text-indigo-600 mb-4 font-medium text-sm">A fully interactive scheduling system.</p>
                </div>
              </div>
              <ul className="space-y-2 text-gray-600 ml-8">
                <li>• Entire UI engineered in pure React (drag, drop, hover states).</li>
                <li>• Custom grid architecture for time slots.</li>
                <li>• Efficient re-renders & transitions for large calendars.</li>
              </ul>
            </div>

            {/* Feature 3 */}
            <div className="bg-white border border-gray-200 rounded-2xl p-8 hover:border-indigo-300 hover:shadow-lg transition-all">
              <div className="flex items-start gap-3 mb-4">
                <span className="text-2xl">⭐</span>
                <div>
                  <h3 className="text-xl font-semibold text-gray-900 mb-2">
                    3. YouTube → Post Tool
                  </h3>
                  <p className="text-indigo-600 mb-4 font-medium text-sm">Repurpose long-form videos into posts.</p>
                </div>
              </div>
              <ul className="space-y-2 text-gray-600 ml-8">
                <li>• Built the FastAPI backend for transcription.</li>
                <li>• FFmpeg pipeline for audio extraction.</li>
                <li>• React frontend for progress, editing, AI-generated output.</li>
              </ul>
            </div>
          </div>
        </section>

        {/* Other Work */}
        <section className="mb-16">
          <h2 className="text-2xl font-bold text-gray-900 mb-4">Other Work</h2>
          <div className="bg-gray-50 border border-gray-200 rounded-2xl p-6">
            <ul className="space-y-2 text-gray-600">
              <li className="flex items-center gap-2"><span className="text-indigo-600">✓</span> Role-based UI system architecture</li>
              <li className="flex items-center gap-2"><span className="text-indigo-600">✓</span> Internal influencer tracker</li>
              <li className="flex items-center gap-2"><span className="text-indigo-600">✓</span> Global frontend improvements</li>
            </ul>
          </div>
        </section>

        {/* Tech Used */}
        <section className="mb-16">
          <h2 className="text-2xl font-bold text-gray-900 mb-4">Tech Stack</h2>
          <div className="flex flex-wrap gap-3">
            {['React', 'FastAPI', 'Python', 'Whisper', 'FFmpeg', 'AWS'].map((tech) => (
              <span
                key={tech}
                className="px-4 py-2 bg-white border border-gray-300 rounded-lg text-gray-700 text-sm font-medium shadow-sm hover:shadow-md hover:border-indigo-300 transition-all"
              >
                {tech}
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
