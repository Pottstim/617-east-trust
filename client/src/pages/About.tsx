import Layout from "@/components/Layout";
import { Card, CardContent } from "@/components/ui/card";

export default function About() {
  return (
    <Layout>
      {/* Hero Section */}
      <section className="bg-gradient-to-br from-blue-50 via-white to-purple-50 py-16">
        <div className="container mx-auto px-4 text-center">
          <h1 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6">
            About 617 East Trust
          </h1>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            A new caliber of financial stewardship for the North Carolina Sandhills
          </p>
        </div>
      </section>

      {/* Origin Story */}
      <section className="py-20 bg-white">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-8 text-center">
              Our Story
            </h2>
            <div className="prose prose-lg max-w-none">
              <p className="text-lg text-gray-700 leading-relaxed mb-6">
                617 East Trust began with a simple yet powerful observation: the financial world was becoming increasingly polarized. On one side stood the impersonal, algorithm-driven fintech giants, and on the other, traditional firms, often slow to adapt to the pace of modern life.
              </p>
              <p className="text-lg text-gray-700 leading-relaxed mb-6">
                From his vantage point in Charlotte's bustling financial sector, our founder, Lamont Legrand, saw an opportunity to create something different. After a distinguished 10-year banking career, he returned to the serene landscape of the Sandhills, bringing with him a vision to establish a firm that would redefine financial consultancy.
              </p>
              <p className="text-lg text-gray-700 leading-relaxed mb-6">
                This vision was 617 East Trust, a firm built on the idea that <strong>trust</strong> and <strong>technology integration</strong> are not mutually exclusive.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Founder Section */}
      <section className="py-20 bg-gray-50">
        <div className="container mx-auto px-4">
          <div className="max-w-5xl mx-auto">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
              <div>
                <img 
                  src="/logo-nc.png" 
                  alt="Lamont Legrand - Founder" 
                  className="w-full max-w-sm mx-auto rounded-2xl shadow-xl"
                />
              </div>
              <div>
                <div className="inline-block bg-blue-100 text-blue-600 px-4 py-2 rounded-full text-sm font-semibold mb-4">
                  FOUNDER
                </div>
                <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-6">
                  Lamont Legrand
                </h2>
                <p className="text-lg text-gray-700 leading-relaxed mb-4">
                  A UNC Charlotte alumnus with a decade of banking experience, Lamont founded 617 East Trust with a clear mission: to bring a new caliber of financial stewardship to the North Carolina Sandhills community.
                </p>
                <p className="text-lg text-gray-700 leading-relaxed mb-4">
                  Witnessing the financial industry's shift toward impersonal automation, Lamont envisioned a firm that harmonizes the best of both worlds: the unwavering integrity of traditional relationship-based service and the efficiency of cutting-edge technology.
                </p>
                <p className="text-lg text-gray-700 leading-relaxed">
                  His commitment to <strong>accountability</strong>, <strong>trust</strong>, and <strong>transparency</strong> forms the foundation of every client relationship at 617 East Trust.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Our Approach */}
      <section className="py-20 bg-white">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-8 text-center">
              Our Unique Approach
            </h2>
            <div className="prose prose-lg max-w-none">
              <p className="text-lg text-gray-700 leading-relaxed mb-6">
                Our leadership team, complemented by a network of esteemed partners, holds credentials that reflect our dual commitment to excellence. We are not just financial experts; we are innovators, thinkers, and community members dedicated to the <strong>financial prosperity</strong> of our clients.
              </p>
              <p className="text-lg text-gray-700 leading-relaxed mb-6">
                Our unique proposition lies in our ability to seamlessly weave together the threads of time-honored integrity and cutting-edge innovation. We believe in the power of a handshake and the efficiency of a secure digital portal.
              </p>
              <p className="text-lg text-gray-700 leading-relaxed mb-6">
                This synthesis of <strong>old-fashioned principles with modern innovation</strong> allows us to offer a level of service that is both deeply personal and exceptionally effective.
              </p>
              <p className="text-lg text-gray-700 leading-relaxed">
                Our commitment to <strong>accountability</strong> and <strong>transparency</strong> is not just a promise; it is the very fabric of our firm, ensuring that every piece of advice and every strategy is delivered with your best interests at heart.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* What Sets Us Apart */}
      <section className="py-20 bg-gray-50">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
              What Sets Us Apart
            </h2>
            <p className="text-xl text-gray-600">
              The 617 East Trust difference
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 max-w-6xl mx-auto">
            <Card className="bg-white hover:shadow-lg transition-shadow">
              <CardContent className="pt-6">
                <div className="w-12 h-12 bg-blue-100 rounded-lg flex items-center justify-center mb-4">
                  <svg className="w-6 h-6 text-blue-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 20h5v-2a3 3 0 00-5.356-1.857M17 20H7m10 0v-2c0-.656-.126-1.283-.356-1.857M7 20H2v-2a3 3 0 015.356-1.857M7 20v-2c0-.656.126-1.283.356-1.857m0 0a5.002 5.002 0 019.288 0M15 7a3 3 0 11-6 0 3 3 0 016 0zm6 3a2 2 0 11-4 0 2 2 0 014 0zM7 10a2 2 0 11-4 0 2 2 0 014 0z" />
                  </svg>
                </div>
                <h3 className="text-xl font-bold text-gray-900 mb-3">
                  Community-Focused
                </h3>
                <p className="text-gray-600">
                  Rooted in the North Carolina Sandhills, we understand the unique needs and values of our community.
                </p>
              </CardContent>
            </Card>

            <Card className="bg-white hover:shadow-lg transition-shadow">
              <CardContent className="pt-6">
                <div className="w-12 h-12 bg-purple-100 rounded-lg flex items-center justify-center mb-4">
                  <svg className="w-6 h-6 text-purple-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z" />
                  </svg>
                </div>
                <h3 className="text-xl font-bold text-gray-900 mb-3">
                  Proven Experience
                </h3>
                <p className="text-gray-600">
                  A decade of banking expertise combined with innovative thinking to deliver exceptional results.
                </p>
              </CardContent>
            </Card>

            <Card className="bg-white hover:shadow-lg transition-shadow">
              <CardContent className="pt-6">
                <div className="w-12 h-12 bg-green-100 rounded-lg flex items-center justify-center mb-4">
                  <svg className="w-6 h-6 text-green-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 18h.01M8 21h8a2 2 0 002-2V5a2 2 0 00-2-2H8a2 2 0 00-2 2v14a2 2 0 002 2z" />
                  </svg>
                </div>
                <h3 className="text-xl font-bold text-gray-900 mb-3">
                  Technology-Enabled
                </h3>
                <p className="text-gray-600">
                  Cutting-edge tools and platforms that provide real-time insights and secure communication.
                </p>
              </CardContent>
            </Card>

            <Card className="bg-white hover:shadow-lg transition-shadow">
              <CardContent className="pt-6">
                <div className="w-12 h-12 bg-yellow-100 rounded-lg flex items-center justify-center mb-4">
                  <svg className="w-6 h-6 text-yellow-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4.318 6.318a4.5 4.5 0 000 6.364L12 20.364l7.682-7.682a4.5 4.5 0 00-6.364-6.364L12 7.636l-1.318-1.318a4.5 4.5 0 00-6.364 0z" />
                  </svg>
                </div>
                <h3 className="text-xl font-bold text-gray-900 mb-3">
                  Relationship-Driven
                </h3>
                <p className="text-gray-600">
                  We build lasting partnerships based on trust, not one-time transactions.
                </p>
              </CardContent>
            </Card>

            <Card className="bg-white hover:shadow-lg transition-shadow">
              <CardContent className="pt-6">
                <div className="w-12 h-12 bg-indigo-100 rounded-lg flex items-center justify-center mb-4">
                  <svg className="w-6 h-6 text-indigo-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5H7a2 2 0 00-2 2v12a2 2 0 002 2h10a2 2 0 002-2V7a2 2 0 00-2-2h-2M9 5a2 2 0 002 2h2a2 2 0 002-2M9 5a2 2 0 012-2h2a2 2 0 012 2m-6 9l2 2 4-4" />
                  </svg>
                </div>
                <h3 className="text-xl font-bold text-gray-900 mb-3">
                  Comprehensive Solutions
                </h3>
                <p className="text-gray-600">
                  From business formation to personal wealth planning, we offer end-to-end financial services.
                </p>
              </CardContent>
            </Card>

            <Card className="bg-white hover:shadow-lg transition-shadow">
              <CardContent className="pt-6">
                <div className="w-12 h-12 bg-pink-100 rounded-lg flex items-center justify-center mb-4">
                  <svg className="w-6 h-6 text-pink-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 10V3L4 14h7v7l9-11h-7z" />
                  </svg>
                </div>
                <h3 className="text-xl font-bold text-gray-900 mb-3">
                  Forward-Thinking
                </h3>
                <p className="text-gray-600">
                  We stay ahead of industry trends to provide you with the most effective strategies.
                </p>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-gradient-to-r from-blue-600 to-purple-600 text-white">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-3xl md:text-4xl font-bold mb-6">
            Join the 617 East Trust Family
          </h2>
          <p className="text-xl mb-8 max-w-2xl mx-auto opacity-90">
            Experience the difference of working with a firm that truly puts your interests first.
          </p>
        </div>
      </section>
    </Layout>
  );
}

