import { Link } from "wouter";
import { Button } from "@/components/ui/button";

interface LayoutProps {
  children: React.ReactNode;
}

export default function Layout({ children }: LayoutProps) {
  return (
    <div className="min-h-screen flex flex-col">
      {/* Header */}
      <header className="bg-white border-b border-gray-200 sticky top-0 z-50">
        <div className="container mx-auto px-4">
          <div className="flex items-center justify-between h-20">
            {/* Logo */}
            <Link href="/">
              <div className="flex items-center gap-3 cursor-pointer">
                <img src="/logo-nc.png" alt="617 East Trust" className="h-12 w-12" />
                <div>
                  <div className="text-xl font-bold text-gray-900">617 EAST TRUST</div>
                  <div className="text-xs text-gray-600">Accountability. Trust. Transparency.</div>
                </div>
              </div>
            </Link>

            {/* Navigation */}
            <nav className="hidden md:flex items-center gap-8">
              <Link href="/">
                <a className="text-gray-700 hover:text-blue-600 font-medium transition-colors">
                  Home
                </a>
              </Link>
              <Link href="/services">
                <a className="text-gray-700 hover:text-blue-600 font-medium transition-colors">
                  Services
                </a>
              </Link>
              <Link href="/philosophy">
                <a className="text-gray-700 hover:text-blue-600 font-medium transition-colors">
                  Philosophy & Values
                </a>
              </Link>
              <Link href="/about">
                <a className="text-gray-700 hover:text-blue-600 font-medium transition-colors">
                  About Us
                </a>
              </Link>
              <Link href="/contact">
                <a className="text-gray-700 hover:text-blue-600 font-medium transition-colors">
                  Contact
                </a>
              </Link>
              <Link href="/intake">
                <Button className="bg-gradient-to-r from-blue-600 to-purple-600 hover:from-blue-700 hover:to-purple-700">
                  Get Started
                </Button>
              </Link>
            </nav>

            {/* Mobile menu button */}
            <button className="md:hidden p-2">
              <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
              </svg>
            </button>
          </div>
        </div>
      </header>

      {/* Main Content */}
      <main className="flex-1">
        {children}
      </main>

      {/* Footer */}
      <footer className="bg-gray-900 text-white py-12">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
            {/* Company Info */}
            <div className="col-span-1 md:col-span-2">
              <div className="flex items-center gap-3 mb-4">
                <img src="/logo-nc.png" alt="617 East Trust" className="h-10 w-10" />
                <div className="text-xl font-bold">617 EAST TRUST</div>
              </div>
              <p className="text-gray-400 mb-4">
                Merging timeless financial wisdom with forward-thinking technology to guide our clients toward lasting financial prosperity.
              </p>
              <p className="text-sm text-gray-500">
                Accountability Powered by Technology. Trust Built on Transparency.
              </p>
            </div>

            {/* Quick Links */}
            <div>
              <h3 className="font-semibold mb-4">Quick Links</h3>
              <ul className="space-y-2">
                <li>
                  <Link href="/services">
                    <a className="text-gray-400 hover:text-white transition-colors">Services</a>
                  </Link>
                </li>
                <li>
                  <Link href="/philosophy">
                    <a className="text-gray-400 hover:text-white transition-colors">Philosophy & Values</a>
                  </Link>
                </li>
                <li>
                  <Link href="/about">
                    <a className="text-gray-400 hover:text-white transition-colors">About Us</a>
                  </Link>
                </li>
                <li>
                  <Link href="/contact">
                    <a className="text-gray-400 hover:text-white transition-colors">Contact</a>
                  </Link>
                </li>
              </ul>
            </div>

            {/* Contact Info */}
            <div>
              <h3 className="font-semibold mb-4">Get in Touch</h3>
              <ul className="space-y-2 text-gray-400">
                <li>North Carolina Sandhills</li>
                <li>
                  <Link href="/intake">
                    <a className="hover:text-white transition-colors">Schedule Consultation</a>
                  </Link>
                </li>
              </ul>
            </div>
          </div>

          <div className="border-t border-gray-800 mt-8 pt-8 text-center text-gray-500 text-sm">
            <p>&copy; {new Date().getFullYear()} 617 East Trust. All rights reserved.</p>
          </div>
        </div>
      </footer>
    </div>
  );
}

