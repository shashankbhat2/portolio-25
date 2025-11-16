import Link from 'next/link';

export default function Footer() {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="relative border-t border-gray-200 bg-gray-50">
      <div className="max-w-5xl mx-auto px-6 lg:px-8 py-12">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8 mb-8">
          {/* Brand */}
          <div className="col-span-1">
            <h3 className="text-xl font-bold text-gray-900 mb-2">Shashank Bhat</h3>
            <p className="text-gray-600 text-sm">Full-Stack Engineer · AI-Native Product Builder</p>
          </div>

          {/* Navigation */}
          <div>
            <h4 className="text-gray-900 font-semibold mb-4 text-sm">Navigation</h4>
            <ul className="space-y-2">
              <li><Link href="/" className="text-gray-600 hover:text-indigo-600 text-sm transition-colors">Home</Link></li>
              <li><Link href="/work" className="text-gray-600 hover:text-indigo-600 text-sm transition-colors">Work</Link></li>
              <li><Link href="/about" className="text-gray-600 hover:text-indigo-600 text-sm transition-colors">About</Link></li>
              <li><Link href="/contact" className="text-gray-600 hover:text-indigo-600 text-sm transition-colors">Contact</Link></li>
            </ul>
          </div>

          {/* Projects */}
          <div>
            <h4 className="text-gray-900 font-semibold mb-4 text-sm">Featured Work</h4>
            <ul className="space-y-2">
              <li><Link href="/work/supergrow" className="text-gray-600 hover:text-indigo-600 text-sm transition-colors">Supergrow</Link></li>
              <li><Link href="/work/kenpath" className="text-gray-600 hover:text-indigo-600 text-sm transition-colors">Kenpath</Link></li>
              <li><Link href="/work/fireshort" className="text-gray-600 hover:text-indigo-600 text-sm transition-colors">Fireshort</Link></li>
              <li><Link href="/work/clickrecord" className="text-gray-600 hover:text-indigo-600 text-sm transition-colors">ClickRecord</Link></li>
            </ul>
          </div>

          {/* Contact */}
          <div>
            <h4 className="text-gray-900 font-semibold mb-4 text-sm">Contact</h4>
            <ul className="space-y-2">
              <li>
                <a href="mailto:shashank.bhat@kenpath.io" className="text-gray-600 hover:text-indigo-600 text-sm transition-colors">
                  Email
                </a>
              </li>
              <li>
                <a href="tel:+919148894655" className="text-gray-600 hover:text-indigo-600 text-sm transition-colors">
                  Phone
                </a>
              </li>
            </ul>
          </div>
        </div>

        <div className="pt-8 border-t border-gray-200">
          <p className="text-gray-500 text-sm text-center">
            © {currentYear} Shashank Bhat. All rights reserved.
          </p>
        </div>
      </div>
    </footer>
  );
}
