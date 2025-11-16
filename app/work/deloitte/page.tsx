import Button from '@/components/Button';
import { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Deloitte Case Study — Shashank Bhat',
  description: 'Designed business processes using BPMN 2.0 & IBM Blueworks.',
};

export default function DeloittePage() {
  return (
    <main className="min-h-screen pt-24 pb-20 px-6 lg:px-8">
      <div className="max-w-4xl mx-auto">
        <div className="mb-12">
          <h1 className="text-4xl md:text-6xl font-bold text-white mb-4">
            Deloitte — Business Process Design
          </h1>
          <p className="text-xl text-gray-400">
            Designed business processes using BPMN 2.0 & IBM Blueworks.
          </p>
        </div>

        <section className="mb-16">
          <h2 className="text-2xl font-bold text-white mb-4">Overview</h2>
          <p className="text-gray-400 leading-relaxed mb-4">
            As an Associate Analyst at Deloitte, I focused on designing and improving business processes 
            using industry-standard methodologies and tools.
          </p>
        </section>

        <section className="mb-16">
          <h2 className="text-2xl font-bold text-white mb-8">Key Contributions</h2>
          <div className="bg-white/5 border border-white/10 rounded-xl p-8">
            <ul className="space-y-4 text-gray-400">
              <li className="flex items-start gap-3">
                <span className="text-green-400 mt-1">✓</span>
                <span>Designed business processes using BPMN 2.0 standards.</span>
              </li>
              <li className="flex items-start gap-3">
                <span className="text-green-400 mt-1">✓</span>
                <span>Utilized IBM Blueworks for process mapping and collaboration.</span>
              </li>
              <li className="flex items-start gap-3">
                <span className="text-green-400 mt-1">✓</span>
                <span>Improved ICAAP (Internal Capital Adequacy Assessment Process) workflows.</span>
              </li>
              <li className="flex items-start gap-3">
                <span className="text-green-400 mt-1">✓</span>
                <span>Enhanced compliance workflows for financial institutions.</span>
              </li>
            </ul>
          </div>
        </section>

        <section className="mb-16">
          <h2 className="text-2xl font-bold text-white mb-4">Tools & Methodologies</h2>
          <div className="flex flex-wrap gap-3">
            {['BPMN 2.0', 'IBM Blueworks', 'Process Design', 'ICAAP', 'Compliance'].map((tech) => (
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
          <Button href="/contact" variant="secondary">Get In Touch</Button>
        </div>
      </div>
    </main>
  );
}
