import { Link } from "wouter";
import { Button } from "./ui/button";

export default function Layout({ children }: { children: React.ReactNode }) {
  return (
    <div className="min-h-screen flex flex-col">
      {/* Header */}
      <header className="bg-white border-b sticky top-0 z-50">
        <div className="container">
          <div className="flex items-center justify-between h-20">
            {/* Logo */}
            <Link href="/">
              <a className="flex items-center gap-3 hover:opacity-80 transition-opacity">
                <img src="/logo-nc.png" alt="617 East Trust" className="h-10 w-10" />
                <div className="flex flex-col">
                  <span className="font-bold text-xl text-gray-900">617 EAST TRUST</span>
                  <span className="text-xs text-gray-600">Accountability. Trust. Transparency.</span>
                </div>
              </a>
            </Link>

            {/* Navigation */}
            <nav className="hidden md:flex items-center gap-6">
              <Link href="/">
                <a className="relative text-gray-700 hover:text-blue-600 font-medium transition-colors">
                  <span className="relative">
                    Home
                    <span className="absolute -top-1 -right-2 w-2 h-2 bg-blue-500 rounded-full"></span>
                  </span>
                </a>
              </Link>
              <Link href="/services">
                <a className="relative text-gray-700 hover:text-blue-600 font-medium transition-colors">
                  <span className="relative">
                    Services
                    <span className="absolute -top-1 -right-2 w-2 h-2 bg-yellow-500 rounded-full"></span>
                  </span>
                </a>
              </Link>
              <Link href="/testimonials">
                <a className="relative text-gray-700 hover:text-blue-600 font-medium transition-colors">
                  <span className="relative">
                    Testimonials
                    <span className="absolute -top-1 -right-2 w-2 h-2 bg-purple-500 rounded-full"></span>
                  </span>
                </a>
              </Link>
              <Link href="/contact">
                <a className="relative text-gray-700 hover:text-blue-600 font-medium transition-colors">
                  <span className="relative">
                    Contact
                    <span className="absolute -top-1 -right-2 w-2 h-2 bg-green-500 rounded-full"></span>
                  </span>
                </a>
              </Link>
              <Link href="/intake">
                <a>
                  <Button className="bg-green-600 hover:bg-green-700 text-white">
                    Get Free Quote
                  </Button>
                </a>
              </Link>
            </nav>

            {/* Mobile Menu Button */}
            <button className="md:hidden p-2">
              <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
              </svg>
            </button>
          </div>
        </div>
      </header>

      {/* Main Content */}
      <main className="flex-1">{children}</main>

      {/* Footer */}
      <footer className="bg-gray-900 text-white py-12">
        <div className="container">
          <div className="grid md:grid-cols-4 gap-8">
            {/* Brand */}
            <div>
              <div className="flex items-center gap-2 mb-4">
                <img src="/logo-nc.png" alt="617 East Trust" className="h-8 w-8" />
                <span className="font-bold text-lg">617 EAST TRUST</span>
              </div>
              <p className="text-gray-400 text-sm">
                Merging timeless financial wisdom with forward-thinking technology to guide our clients toward lasting financial prosperity.
              </p>
            </div>

            {/* Services */}
            <div>
              <h3 className="font-semibold text-lg mb-4">Services</h3>
              <ul className="space-y-2 text-gray-400 text-sm">
                <li><Link href="/services"><a className="hover:text-white transition-colors">Business Registration</a></Link></li>
                <li><Link href="/services"><a className="hover:text-white transition-colors">SBA Funding</a></Link></li>
                <li><Link href="/services"><a className="hover:text-white transition-colors">Website Development</a></Link></li>
                <li><Link href="/services"><a className="hover:text-white transition-colors">Credit Building</a></Link></li>
                <li><Link href="/services"><a className="hover:text-white transition-colors">Marketing & SEO</a></Link></li>
              </ul>
            </div>

            {/* Company */}
            <div>
              <h3 className="font-semibold text-lg mb-4">Company</h3>
              <ul className="space-y-2 text-gray-400 text-sm">
                <li><Link href="/"><a className="hover:text-white transition-colors">About Us</a></Link></li>
                <li><Link href="/testimonials"><a className="hover:text-white transition-colors">Testimonials</a></Link></li>
                <li><Link href="/contact"><a className="hover:text-white transition-colors">Contact</a></Link></li>
                <li><Link href="/intake"><a className="hover:text-white transition-colors">Get Started</a></Link></li>
              </ul>
            </div>

            {/* Contact Info */}
            <div>
              <h3 className="font-semibold text-lg mb-4">Get in Touch</h3>
              <ul className="space-y-3 text-gray-400 text-sm">
                <li className="flex items-center gap-2">
                  <span>📞</span>
                  <a href="tel:9103151800" className="hover:text-white transition-colors">(910) 315-1800</a>
                </li>
                <li className="flex items-center gap-2">
                  <span>✉️</span>
                  <a href="mailto:info@617east.com" className="hover:text-white transition-colors">info@617east.com</a>
                </li>
                <li className="flex items-center gap-2">
                  <span>📍</span>
                  <span>North Carolina Sandhills</span>
                </li>
              </ul>
            </div>
          </div>

          <div className="border-t border-gray-800 mt-8 pt-8 text-center text-gray-400 text-sm">
            <p>&copy; 2025 617 East Trust. All rights reserved.</p>
          </div>
        </div>
      </footer>
    </div>
  );
}

