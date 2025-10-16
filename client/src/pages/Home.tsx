import Layout from "@/components/Layout";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Link } from "wouter";

export default function Home() {
  return (
    <Layout>
      {/* Hero Section */}
      <section className="relative bg-gradient-to-br from-blue-50 via-white to-purple-50 py-20 md:py-32">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
            <div>
              <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-gray-900 mb-6 leading-tight">
                Welcome to 617 East Trust
              </h1>
              <p className="text-xl text-gray-700 mb-8 leading-relaxed">
                Where the steadfast values of the North Carolina Sandhills meet the dynamic possibilities of modern finance. Founded by Lamont Legrand, a UNC Charlotte alumnus with a decade of banking experience, our firm was born from a desire to bring a new caliber of financial stewardship to our community.
              </p>
              <p className="text-lg text-gray-600 mb-8">
                Witnessing the financial industry's shift toward impersonal automation, Lamont envisioned a firm that harmonizes the best of both worlds: the unwavering integrity of traditional relationship-based service and the efficiency of cutting-edge <strong>technology integration</strong>.
              </p>
              <div className="flex gap-4">
                <Link href="/intake">
                  <Button size="lg" className="bg-gradient-to-r from-blue-600 to-purple-600 hover:from-blue-700 hover:to-purple-700">
                    Get Started
                  </Button>
                </Link>
                <Link href="/services">
                  <Button size="lg" variant="outline">
                    Our Services
                  </Button>
                </Link>
              </div>
            </div>
            <div className="flex justify-center">
              <img 
                src="/logo-main.jpg" 
                alt="617 East Trust Logo" 
                className="w-full max-w-md rounded-2xl shadow-2xl"
              />
            </div>
          </div>
        </div>
      </section>

      {/* Tagline Section */}
      <section className="bg-gradient-to-r from-blue-600 to-purple-600 text-white py-12">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-3xl md:text-4xl font-bold mb-4">
            Accountability Powered by Technology. Trust Built on Transparency.
          </h2>
          <p className="text-xl opacity-90">
            Our mission is to empower clients through clear, reliable, and technologically integrated financial guidance.
          </p>
        </div>
      </section>

      {/* Core Values Section */}
      <section className="py-20 bg-white">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
              Built on a Foundation of Excellence
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              We believe that true <strong>financial prosperity</strong> is achieved not just through sound strategies, but through a partnership grounded in <strong>accountability</strong> and <strong>trust</strong>.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <Card className="border-2 hover:border-blue-500 transition-all hover:shadow-lg">
              <CardHeader>
                <div className="w-12 h-12 bg-blue-100 rounded-lg flex items-center justify-center mb-4">
                  <svg className="w-6 h-6 text-blue-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
                  </svg>
                </div>
                <CardTitle>Accountability</CardTitle>
              </CardHeader>
              <CardContent>
                <CardDescription className="text-base">
                  Every decision is transparent and trackable. Our proprietary dashboard gives you 24/7 real-time visibility into your financial journey.
                </CardDescription>
              </CardContent>
            </Card>

            <Card className="border-2 hover:border-purple-500 transition-all hover:shadow-lg">
              <CardHeader>
                <div className="w-12 h-12 bg-purple-100 rounded-lg flex items-center justify-center mb-4">
                  <svg className="w-6 h-6 text-purple-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 15v2m-6 4h12a2 2 0 002-2v-6a2 2 0 00-2-2H6a2 2 0 00-2 2v6a2 2 0 002 2zm10-10V7a4 4 0 00-8 0v4h8z" />
                  </svg>
                </div>
                <CardTitle>Trust</CardTitle>
              </CardHeader>
              <CardContent>
                <CardDescription className="text-base">
                  Built on relationships, not transactions. We're your dedicated partner in building a resilient and prosperous future.
                </CardDescription>
              </CardContent>
            </Card>

            <Card className="border-2 hover:border-green-500 transition-all hover:shadow-lg">
              <CardHeader>
                <div className="w-12 h-12 bg-green-100 rounded-lg flex items-center justify-center mb-4">
                  <svg className="w-6 h-6 text-green-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 12a3 3 0 11-6 0 3 3 0 016 0z" />
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M2.458 12C3.732 7.943 7.523 5 12 5c4.478 0 8.268 2.943 9.542 7-1.274 4.057-5.064 7-9.542 7-4.477 0-8.268-2.943-9.542-7z" />
                  </svg>
                </div>
                <CardTitle>Transparency</CardTitle>
              </CardHeader>
              <CardContent>
                <CardDescription className="text-base">
                  No hidden fees, no surprises. We provide detailed breakdowns of all strategies, fees, and potential risks upfront.
                </CardDescription>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Services Preview */}
      <section className="py-20 bg-gray-50">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
              Comprehensive Financial Solutions
            </h2>
            <p className="text-xl text-gray-600">
              Tailored services for businesses and individuals
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-5xl mx-auto">
            <Card className="bg-white hover:shadow-xl transition-shadow">
              <CardHeader>
                <div className="w-16 h-16 bg-blue-100 rounded-xl flex items-center justify-center mb-4">
                  <svg className="w-8 h-8 text-blue-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 21V5a2 2 0 00-2-2H7a2 2 0 00-2 2v16m14 0h2m-2 0h-5m-9 0H3m2 0h5M9 7h1m-1 4h1m4-4h1m-1 4h1m-5 10v-5a1 1 0 011-1h2a1 1 0 011 1v5m-4 0h4" />
                  </svg>
                </div>
                <CardTitle className="text-2xl">Business Services</CardTitle>
              </CardHeader>
              <CardContent>
                <CardDescription className="text-base mb-6">
                  Transform your vision into a thriving enterprise with our comprehensive business services. From formation to SBA grants, we're your dedicated partner in building a resilient business.
                </CardDescription>
                <ul className="space-y-2 text-gray-700 mb-6">
                  <li className="flex items-start">
                    <span className="text-green-500 mr-2">✓</span>
                    <span>Business Formation & Structure</span>
                  </li>
                  <li className="flex items-start">
                    <span className="text-green-500 mr-2">✓</span>
                    <span>SBA Grants & Funding</span>
                  </li>
                  <li className="flex items-start">
                    <span className="text-green-500 mr-2">✓</span>
                    <span>Technology Integration</span>
                  </li>
                  <li className="flex items-start">
                    <span className="text-green-500 mr-2">✓</span>
                    <span>Operations Optimization</span>
                  </li>
                </ul>
                <Link href="/services">
                  <Button variant="outline" className="w-full">
                    Learn More
                  </Button>
                </Link>
              </CardContent>
            </Card>

            <Card className="bg-white hover:shadow-xl transition-shadow">
              <CardHeader>
                <div className="w-16 h-16 bg-purple-100 rounded-xl flex items-center justify-center mb-4">
                  <svg className="w-8 h-8 text-purple-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M16 7a4 4 0 11-8 0 4 4 0 018 0zM12 14a7 7 0 00-7 7h14a7 7 0 00-7-7z" />
                  </svg>
                </div>
                <CardTitle className="text-2xl">Personal Services</CardTitle>
              </CardHeader>
              <CardContent>
                <CardDescription className="text-base mb-6">
                  Empower your path to financial prosperity with expert guidance and a human touch. We provide solutions that are both effective and empathetic.
                </CardDescription>
                <ul className="space-y-2 text-gray-700 mb-6">
                  <li className="flex items-start">
                    <span className="text-green-500 mr-2">✓</span>
                    <span>Credit Repair & Building</span>
                  </li>
                  <li className="flex items-start">
                    <span className="text-green-500 mr-2">✓</span>
                    <span>Legal Document Preparation</span>
                  </li>
                  <li className="flex items-start">
                    <span className="text-green-500 mr-2">✓</span>
                    <span>Fiduciary Care</span>
                  </li>
                  <li className="flex items-start">
                    <span className="text-green-500 mr-2">✓</span>
                    <span>Generational Wealth Planning</span>
                  </li>
                </ul>
                <Link href="/services">
                  <Button variant="outline" className="w-full">
                    Learn More
                  </Button>
                </Link>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-gradient-to-r from-blue-600 to-purple-600 text-white">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-3xl md:text-4xl font-bold mb-6">
            Ready to Build Your Financial Legacy?
          </h2>
          <p className="text-xl mb-8 max-w-2xl mx-auto opacity-90">
            At 617 East Trust, we don't just manage finances; we build lasting legacies, one transparent relationship at a time.
          </p>
          <Link href="/intake">
            <Button size="lg" variant="secondary" className="bg-white text-blue-600 hover:bg-gray-100">
              Schedule Your Consultation
            </Button>
          </Link>
        </div>
      </section>
    </Layout>
  );
}

