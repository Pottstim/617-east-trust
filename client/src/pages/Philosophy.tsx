import Layout from "@/components/Layout";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";

export default function Philosophy() {
  return (
    <Layout>
      {/* Hero Section */}
      <section className="bg-gradient-to-br from-blue-50 via-white to-purple-50 py-16">
        <div className="container mx-auto px-4 text-center">
          <h1 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6">
            Our Philosophy & Values
          </h1>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Merging timeless financial wisdom with forward-thinking technology
          </p>
        </div>
      </section>

      {/* Brand Positioning */}
      <section className="py-20 bg-white">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto">
            <div className="text-center mb-12">
              <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-6">
                Our Foundation
              </h2>
            </div>
            <div className="prose prose-lg max-w-none">
              <p className="text-lg text-gray-700 leading-relaxed mb-6">
                At 617 East Trust, we merge timeless financial wisdom with forward-thinking technology to guide our clients toward lasting financial prosperity. Our firm is built on a foundation of <strong>accountability, trust, and transparency</strong>, offering a refreshing alternative to impersonal fintech solutions and outdated traditional firms.
              </p>
              <p className="text-lg text-gray-700 leading-relaxed mb-6">
                We are committed to fostering generational wealth by providing bespoke financial strategies that honor old-fashioned principles while embracing modern innovation. Our tagline, <strong>"Accountability Powered by Technology. Trust Built on Transparency,"</strong> encapsulates our mission to empower clients through clear, reliable, and technologically integrated financial guidance, ensuring their success is built on a bedrock of integrity.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Core Values */}
      <section className="py-20 bg-gray-50">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
              Our Core Values
            </h2>
            <p className="text-xl text-gray-600">
              The principles that guide everything we do
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-16">
            <Card className="border-2 border-blue-200 bg-white">
              <CardHeader>
                <div className="w-16 h-16 bg-blue-100 rounded-xl flex items-center justify-center mb-4 mx-auto">
                  <svg className="w-8 h-8 text-blue-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
                  </svg>
                </div>
                <CardTitle className="text-center text-2xl">Accountability</CardTitle>
              </CardHeader>
              <CardContent>
                <CardDescription className="text-base text-center">
                  Every decision is transparent and trackable. We take full responsibility for our recommendations and actions, ensuring you always know where your money is and how it's working for you.
                </CardDescription>
              </CardContent>
            </Card>

            <Card className="border-2 border-purple-200 bg-white">
              <CardHeader>
                <div className="w-16 h-16 bg-purple-100 rounded-xl flex items-center justify-center mb-4 mx-auto">
                  <svg className="w-8 h-8 text-purple-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 15v2m-6 4h12a2 2 0 002-2v-6a2 2 0 00-2-2H6a2 2 0 00-2 2v6a2 2 0 002 2zm10-10V7a4 4 0 00-8 0v4h8z" />
                  </svg>
                </div>
                <CardTitle className="text-center text-2xl">Trust</CardTitle>
              </CardHeader>
              <CardContent>
                <CardDescription className="text-base text-center">
                  Built on relationships, not transactions. We earn your trust through consistent, ethical service and by always putting your best interests first.
                </CardDescription>
              </CardContent>
            </Card>

            <Card className="border-2 border-green-200 bg-white">
              <CardHeader>
                <div className="w-16 h-16 bg-green-100 rounded-xl flex items-center justify-center mb-4 mx-auto">
                  <svg className="w-8 h-8 text-green-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 12a3 3 0 11-6 0 3 3 0 016 0z" />
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M2.458 12C3.732 7.943 7.523 5 12 5c4.478 0 8.268 2.943 9.542 7-1.274 4.057-5.064 7-9.542 7-4.477 0-8.268-2.943-9.542-7z" />
                  </svg>
                </div>
                <CardTitle className="text-center text-2xl">Transparency</CardTitle>
              </CardHeader>
              <CardContent>
                <CardDescription className="text-base text-center">
                  No hidden fees, no surprises. We provide detailed breakdowns of all strategies, fees, and potential risks before we engage in any action.
                </CardDescription>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Value Propositions */}
      <section className="py-20 bg-white">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
              How We Deliver on Our Promises
            </h2>
            <p className="text-xl text-gray-600">
              Concrete actions that demonstrate our commitment to you
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-6xl mx-auto">
            <Card className="hover:shadow-xl transition-shadow bg-gradient-to-br from-blue-50 to-white">
              <CardHeader>
                <div className="flex items-start gap-4">
                  <div className="w-12 h-12 bg-blue-600 rounded-lg flex items-center justify-center flex-shrink-0">
                    <svg className="w-6 h-6 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 19v-6a2 2 0 00-2-2H5a2 2 0 00-2 2v6a2 2 0 002 2h2a2 2 0 002-2zm0 0V9a2 2 0 012-2h2a2 2 0 012 2v10m-6 0a2 2 0 002 2h2a2 2 0 002-2m0 0V5a2 2 0 012-2h2a2 2 0 012 2v14a2 2 0 01-2 2h-2a2 2 0 01-2-2z" />
                    </svg>
                  </div>
                  <div>
                    <CardTitle className="text-xl mb-2">Accountability in Action</CardTitle>
                  </div>
                </div>
              </CardHeader>
              <CardContent>
                <CardDescription className="text-base">
                  Our proprietary financial tracking dashboard provides you with a 24/7, real-time view of your portfolio's performance. Every transaction and adjustment is logged and explained in plain language, ensuring you always know where your money is and how it's working for you. This is <strong>accountability powered by technology</strong>.
                </CardDescription>
              </CardContent>
            </Card>

            <Card className="hover:shadow-xl transition-shadow bg-gradient-to-br from-purple-50 to-white">
              <CardHeader>
                <div className="flex items-start gap-4">
                  <div className="w-12 h-12 bg-purple-600 rounded-lg flex items-center justify-center flex-shrink-0">
                    <svg className="w-6 h-6 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 12a3 3 0 11-6 0 3 3 0 016 0z" />
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M2.458 12C3.732 7.943 7.523 5 12 5c4.478 0 8.268 2.943 9.542 7-1.274 4.057-5.064 7-9.542 7-4.477 0-8.268-2.943-9.542-7z" />
                    </svg>
                  </div>
                  <div>
                    <CardTitle className="text-xl mb-2">Transparency You Can See</CardTitle>
                  </div>
                </div>
              </CardHeader>
              <CardContent>
                <CardDescription className="text-base">
                  Before we engage in any strategy, we provide a detailed, easy-to-understand breakdown of all associated fees and potential risks. Our commitment to <strong>transparency</strong> means no hidden clauses and no surprises, building a foundation of <strong>trust</strong> from day one.
                </CardDescription>
              </CardContent>
            </Card>

            <Card className="hover:shadow-xl transition-shadow bg-gradient-to-br from-green-50 to-white">
              <CardHeader>
                <div className="flex items-start gap-4">
                  <div className="w-12 h-12 bg-green-600 rounded-lg flex items-center justify-center flex-shrink-0">
                    <svg className="w-6 h-6 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 18h.01M8 21h8a2 2 0 002-2V5a2 2 0 00-2-2H8a2 2 0 00-2 2v14a2 2 0 002 2z" />
                    </svg>
                  </div>
                  <div>
                    <CardTitle className="text-xl mb-2">Technology with a Human Touch</CardTitle>
                  </div>
                </div>
              </CardHeader>
              <CardContent>
                <CardDescription className="text-base">
                  We utilize a secure, encrypted client portal for all communications and document sharing. This <strong>technology integration</strong> not only protects your sensitive information but also streamlines our interactions, allowing us to spend more time on what truly matters: understanding your goals and crafting your path to <strong>financial prosperity</strong>.
                </CardDescription>
              </CardContent>
            </Card>

            <Card className="hover:shadow-xl transition-shadow bg-gradient-to-br from-yellow-50 to-white">
              <CardHeader>
                <div className="flex items-start gap-4">
                  <div className="w-12 h-12 bg-yellow-600 rounded-lg flex items-center justify-center flex-shrink-0">
                    <svg className="w-6 h-6 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 10V3L4 14h7v7l9-11h-7z" />
                    </svg>
                  </div>
                  <div>
                    <CardTitle className="text-xl mb-2">Innovation Rooted in Principle</CardTitle>
                  </div>
                </div>
              </CardHeader>
              <CardContent>
                <CardDescription className="text-base">
                  Our credit repair service combines advanced data analysis with one-on-one coaching. While our technology identifies the most effective strategies, our advisors provide the personalized guidance and encouragement that are hallmarks of our commitment to <strong>old-fashioned principles with modern innovation</strong>.
                </CardDescription>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Philosophy Statement */}
      <section className="py-20 bg-gradient-to-r from-blue-600 to-purple-600 text-white">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto text-center">
            <h2 className="text-3xl md:text-4xl font-bold mb-8">
              Old-Fashioned Principles with Modern Innovation
            </h2>
            <p className="text-xl leading-relaxed mb-6 opacity-90">
              This philosophy of balanced <strong>old-fashioned principles with modern innovation</strong> is the cornerstone of our approach. We believe that true <strong>financial prosperity</strong> is achieved not just through sound strategies, but through a partnership grounded in <strong>accountability</strong> and <strong>trust</strong>.
            </p>
            <p className="text-xl leading-relaxed opacity-90">
              At 617 East Trust, we don't just manage finances; we build lasting legacies, one transparent relationship at a time.
            </p>
          </div>
        </div>
      </section>
    </Layout>
  );
}

