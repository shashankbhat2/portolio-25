import Button from '@/components/Button';
import Link from 'next/link';
import { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Work — Shashank Bhat',
  description: 'Explore professional, freelance, and side projects including Supergrow, Kenpath, Fireshort, ClickRecord, Rua, and Kinko.',
};

export default function WorkPage() {
  return (
    <main className="min-h-screen pt-24 pb-20 px-6 lg:px-8 relative">
      <div className="max-w-5xl mx-auto">
        {/* Header */}
        <div className="mb-16">
          <h1 className="text-5xl md:text-6xl font-bold text-gray-900 mb-6">Work</h1>
          <p className="text-xl text-gray-600 max-w-3xl">
            A collection of professional, freelance, and personal projects that showcase my engineering range.
          </p>
        </div>

        {/* Professional Work */}
        <section className="mb-16">
          <h2 className="text-2xl font-bold text-gray-900 mb-8 border-b border-gray-200 pb-4">
            Professional Work
          </h2>
          <div className="grid md:grid-cols-2 gap-6">
            <ProjectCard
              title="Kenpath Technologies"
              description="Enterprise analytics & dashboards"
              tags="React, D3.js, Sigma.js"
              href="/work/kenpath"
            />
            <ProjectCard
              title="Deloitte"
              description="Process mapping & workflows"
              tags="BPMN 2.0, Blueworks"
              href="/work/deloitte"
            />
          </div>
        </section>

        {/* Freelance Work */}
        <section className="mb-16">
          <h2 className="text-2xl font-bold text-gray-900 mb-8 border-b border-gray-200 pb-4">
            Freelance Work
          </h2>
          <div className="grid md:grid-cols-2 gap-6">
            <ProjectCard
              title="Supergrow"
              description="AI-powered creator tools"
              tags="React, FastAPI, Whisper"
              href="/work/supergrow"
            />
            <ProjectCard
              title="Videogrow"
              description="AI video repurposing SaaS (shelved)"
              tags="React, Python"
              href="/work/videogrow"
            />
            <ProjectCard
              title="Rua Skin & Hair"
              description="Clean, modern website"
              tags="Next.js"
              href="/work/rua"
            />
            <ProjectCard
              title="Kinko Global"
              description="Fast corporate website"
              tags="React, Tailwind"
              href="/work/kinko"
            />
          </div>
        </section>

        {/* Side Projects */}
        <section className="mb-16">
          <h2 className="text-2xl font-bold text-gray-900 mb-8 border-b border-gray-200 pb-4">
            Side Projects
          </h2>
          <div className="grid md:grid-cols-2 gap-6">
            <ProjectCard
              title="Fireshort"
              description="Transform 1 video into multiple content formats"
              tags="AI, FFmpeg, FastAPI"
              href="/work/fireshort"
            />
            <ProjectCard
              title="ClickRecord"
              description="Record screen/camera & auto-generate shareable videos"
              tags="Chrome Extension, Node.js"
              href="/work/clickrecord"
            />
          </div>
        </section>

        <div className="text-center mt-16">
          <Button href="/contact">Let&apos;s Work Together</Button>
        </div>
      </div>
    </main>
  );
}

interface ProjectCardProps {
  title: string;
  description: string;
  tags: string;
  href: string;
}

function ProjectCard({ title, description, tags, href }: ProjectCardProps) {
  return (
    <Link href={href} className="group">
      <div className="bg-white border border-gray-200 hover:border-indigo-300 hover:shadow-lg rounded-2xl p-6 transition-all duration-300 hover:transform hover:-translate-y-1">
        <h3 className="text-xl font-semibold text-gray-900 mb-2 group-hover:text-indigo-600 transition-colors">
          {title}
        </h3>
        <p className="text-gray-600 text-sm mb-4">{description}</p>
        <p className="text-xs text-gray-500">{tags}</p>
        
        <div className="mt-4 flex items-center text-indigo-600 text-sm font-medium group-hover:text-indigo-700 transition-colors">
          View Project
          <svg className="w-4 h-4 ml-2 group-hover:translate-x-1 transition-transform" fill="none" viewBox="0 0 24 24" stroke="currentColor">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
          </svg>
        </div>
      </div>
    </Link>
  );
}
