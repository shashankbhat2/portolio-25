import Button from '@/components/Button';
import ProjectCard from '@/components/ProjectCard';
import ExperienceCard from '@/components/ExperienceCard';

export default function Home() {
  return (
    <main className="min-h-screen relative">
      {/* Hero Section */}
      <section className="pt-32 pb-20 px-6 lg:px-8 relative">
        <div className="line-horizontal left-0 right-0 top-32" />
        <div className="max-w-5xl mx-auto">
          <div className="max-w-4xl">
            <h1 className="text-5xl md:text-7xl font-bold text-gray-900 mb-6 leading-tight">
              I build fast, scalable, <span className="bg-gradient-to-r from-indigo-600 to-purple-600 bg-clip-text text-transparent">AI-powered</span> digital products.
            </h1>
            <p className="text-xl text-gray-600 mb-8 leading-relaxed max-w-3xl">
              From enterprise dashboards to creator-focused SaaS, I specialize in building smooth, 
              production-ready experiences using <span className="text-gray-900 font-semibold">React, FastAPI, Node.js, and AI pipelines</span>.
            </p>
            <div className="flex flex-wrap gap-4">
              <Button href="/work">View My Work</Button>
              <Button href="/contact" variant="secondary">Contact Me</Button>
            </div>
          </div>
        </div>
      </section>

      {/* Featured Work Section */}
      <section className="py-20 px-6 lg:px-8 relative">
        <div className="line-horizontal left-0 right-0 top-0" />
        <div className="max-w-5xl mx-auto">
          <div className="mb-12">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">Featured Work</h2>
            <p className="text-gray-600 text-lg">
              A selection of professional work, freelance projects, and products I've built end-to-end.
            </p>
          </div>

          <div className="grid md:grid-cols-2 gap-6">
            <ProjectCard
              title="Supergrow"
              description="AI-powered content OS used by thousands of LinkedIn creators"
              tags="React • FastAPI • Python • Whisper"
              href="/work/supergrow"
              gradient="from-blue-500/10 to-indigo-500/10"
            />
            <ProjectCard
              title="Kenpath"
              description="Enterprise dashboards and visualization systems"
              tags="React • D3.js • Sigma.js • Chart.js"
              href="/work/kenpath"
              gradient="from-emerald-500/10 to-teal-500/10"
            />
            <ProjectCard
              title="Fireshort"
              description="Turn one video into multiple repurposed content formats"
              tags="AI • FastAPI • FFmpeg • React"
              href="/work/fireshort"
              gradient="from-orange-500/10 to-amber-500/10"
            />
            <ProjectCard
              title="ClickRecord"
              description="Screen + camera recorder with instant video studio"
              tags="Chrome Extension • Node.js • Video Editing"
              href="/work/clickrecord"
              gradient="from-pink-500/10 to-rose-500/10"
            />
          </div>
        </div>
      </section>

      {/* What I Do Section */}
      <section className="py-20 px-6 lg:px-8 bg-gray-50/50 relative">
        <div className="line-horizontal left-0 right-0 top-0" />
        <div className="max-w-5xl mx-auto">
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-12 text-center">
            I build products end-to-end.
          </h2>

          <div className="grid md:grid-cols-3 gap-8">
            {/* Frontend */}
            <div className="bg-white border border-gray-200 rounded-2xl p-8 hover:border-indigo-300 hover:shadow-lg transition-all">
              <div className="w-12 h-12 bg-blue-100 rounded-lg flex items-center justify-center mb-4">
                <svg className="w-6 h-6 text-blue-600" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9.75 17L9 20l-1 1h8l-1-1-.75-3M3 13h18M5 17h14a2 2 0 002-2V5a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
                </svg>
              </div>
              <h3 className="text-xl font-semibold text-gray-900 mb-3">Frontend Engineering</h3>
              <ul className="text-gray-600 space-y-2 text-sm">
                <li>• React (no state libraries)</li>
                <li>• Modern UX / Responsive UI</li>
                <li>• Component systems</li>
                <li>• Drag-and-drop interactions</li>
                <li>• Visualization systems (Chart.js / D3 / Sigma.js)</li>
              </ul>
            </div>

            {/* Backend & AI */}
            <div className="bg-white border border-gray-200 rounded-2xl p-8 hover:border-purple-300 hover:shadow-lg transition-all">
              <div className="w-12 h-12 bg-purple-100 rounded-lg flex items-center justify-center mb-4">
                <svg className="w-6 h-6 text-purple-600" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 12h14M5 12a2 2 0 01-2-2V6a2 2 0 012-2h14a2 2 0 012 2v4a2 2 0 01-2 2M5 12a2 2 0 00-2 2v4a2 2 0 002 2h14a2 2 0 002-2v-4a2 2 0 00-2-2m-2-4h.01M17 16h.01" />
                </svg>
              </div>
              <h3 className="text-xl font-semibold text-gray-900 mb-3">Backend & AI Systems</h3>
              <ul className="text-gray-600 space-y-2 text-sm">
                <li>• FastAPI, Node.js</li>
                <li>• Python pipelines</li>
                <li>• Whisper, FFmpeg</li>
                <li>• LLM-based content generation</li>
                <li>• API design & integrations</li>
              </ul>
            </div>

            {/* Product Building */}
            <div className="bg-white border border-gray-200 rounded-2xl p-8 hover:border-green-300 hover:shadow-lg transition-all">
              <div className="w-12 h-12 bg-green-100 rounded-lg flex items-center justify-center mb-4">
                <svg className="w-6 h-6 text-green-600" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 10V3L4 14h7v7l9-11h-7z" />
                </svg>
              </div>
              <h3 className="text-xl font-semibold text-gray-900 mb-3">Product Building</h3>
              <ul className="text-gray-600 space-y-2 text-sm">
                <li>• SaaS architecture</li>
                <li>• Workflow design</li>
                <li>• Chrome extensions</li>
                <li>• Video tooling</li>
                <li>• Idea → shipped MVP</li>
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* Experience Section */}
      <section className="py-20 px-6 lg:px-8 relative">
        <div className="line-horizontal left-0 right-0 top-0" />
        <div className="max-w-5xl mx-auto">
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-12">Professional Experience</h2>

          <div className="space-y-6">
            <ExperienceCard
              company="Kenpath Technologies"
              role="Software Engineer"
              period="2023 – Present"
              description="Built interactive dashboards, reusable component systems, and optimized rendering by ~30%. Data viz: D3.js, Sigma.js, Chart.js. Docker-based CI/CD, code reviews, scalable API-driven UI engineering."
              tags={['React', 'D3.js', 'Sigma.js', 'Chart.js', 'Docker']}
            />
            <ExperienceCard
              company="Deloitte"
              role="Associate Analyst"
              period="2022 – 2023"
              description="Designed business processes using BPMN 2.0 & IBM Blueworks. Improved ICAAP & compliance workflows."
              tags={['BPMN 2.0', 'IBM Blueworks', 'Process Design']}
            />
          </div>

          <div className="mt-12 text-center">
            <Button href="/work">See All Work</Button>
          </div>
        </div>
      </section>

      {/* Contact CTA Section */}
      <section className="py-20 px-6 lg:px-8 bg-gradient-to-br from-indigo-50 to-purple-50 relative">
        <div className="line-horizontal left-0 right-0 top-0" />
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="text-3xl md:text-5xl font-bold text-gray-900 mb-6">
            Let&apos;s build something.
          </h2>
          <p className="text-xl text-gray-600 mb-8">
            I&apos;m open to freelance work, collaborations, and product engineering roles.
          </p>
          <Button href="/contact">Contact Me</Button>
        </div>
      </section>
    </main>
  );
}
