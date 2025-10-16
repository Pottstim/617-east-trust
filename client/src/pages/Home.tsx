import Layout from "@/components/Layout";
import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import { Check, Zap, Award, Users } from "lucide-react";

export default function Home() {
  return (
    <Layout>
      {/* Hero Section */}
      <section className="bg-gray-50 py-20">
        <div className="container">
          <div className="grid md:grid-cols-2 gap-12 items-center">
            <div>
              <div className="inline-block bg-blue-100 text-blue-700 px-4 py-2 rounded-full text-sm font-semibold mb-6">
                ✨ Same-Day Business Registration
              </div>
              <h1 className="text-5xl font-bold text-gray-900 mb-4">
                Launch, Grow, <span className="text-blue-600">Succeed</span>
              </h1>
              <p className="text-xl text-gray-600 mb-8">
                Your end-to-end partner for business & financial empowerment. Leveraging banking acumen and technological prowess to empower new entrepreneurs and consumers.
              </p>
              <div className="flex gap-4">
                <a href="/intake">
                  <Button className="bg-green-600 hover:bg-green-700 text-white px-8 py-6 text-lg">
                    Start Your Business Today →
                  </Button>
                </a>
                <a href="/services">
                  <Button variant="outline" className="px-8 py-6 text-lg border-2">
                    Learn More
                  </Button>
                </a>
              </div>
              <div className="grid grid-cols-3 gap-6 mt-8">
                <div className="flex items-center gap-2 text-sm">
                  <Check className="w-5 h-5 text-green-600" />
                  <span className="text-gray-700">Same-Day Registration</span>
                </div>
                <div className="flex items-center gap-2 text-sm">
                  <Check className="w-5 h-5 text-green-600" />
                  <span className="text-gray-700">SBA Funding Connections</span>
                </div>
                <div className="flex items-center gap-2 text-sm">
                  <Check className="w-5 h-5 text-green-600" />
                  <span className="text-gray-700">End-to-End Support</span>
                </div>
              </div>
            </div>
            <div className="flex justify-center">
              <div className="bg-gradient-to-br from-green-100 to-blue-100 rounded-3xl p-12 shadow-xl">
                <img 
                  src="/logo-main.jpg" 
                  alt="617 East Trust Compass" 
                  className="w-full max-w-md rounded-2xl shadow-lg"
                />
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Trust Indicators */}
      <section className="py-12 bg-white border-y">
        <div className="container">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8 text-center">
            <div>
              <div className="flex justify-center mb-2">
                <div className="w-12 h-12 bg-blue-100 rounded-full flex items-center justify-center">
                  <Award className="w-6 h-6 text-blue-600" />
                </div>
              </div>
              <div className="font-semibold text-gray-900">Banking Expertise</div>
            </div>
            <div>
              <div className="flex justify-center mb-2">
                <div className="w-12 h-12 bg-green-100 rounded-full flex items-center justify-center">
                  <Zap className="w-6 h-6 text-green-600" />
                </div>
              </div>
              <div className="font-semibold text-gray-900">Same-Day Service</div>
            </div>
            <div>
              <div className="flex justify-center mb-2">
                <div className="w-12 h-12 bg-yellow-100 rounded-full flex items-center justify-center">
                  <Award className="w-6 h-6 text-yellow-600" />
                </div>
              </div>
              <div className="font-semibold text-gray-900">SBA Connected</div>
            </div>
            <div>
              <div className="flex justify-center mb-2">
                <div className="w-12 h-12 bg-purple-100 rounded-full flex items-center justify-center">
                  <Users className="w-6 h-6 text-purple-600" />
                </div>
              </div>
              <div className="font-semibold text-gray-900">End-to-End Support</div>
            </div>
          </div>
        </div>
      </section>

      {/* Services Section */}
      <section className="py-20 bg-gray-50">
        <div className="container">
          <div className="text-center mb-12">
            <h2 className="text-4xl font-bold text-gray-900 mb-4">
              Comprehensive Business & Consumer Services
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              From business formation to funding, marketing to expansion - we provide complete support for your journey.
            </p>
          </div>

          <div className="grid md:grid-cols-2 gap-8 max-w-5xl mx-auto">
            {/* Business Services */}
            <Card className="p-8 border-2 border-blue-200 bg-gradient-to-br from-blue-50 to-white">
              <div className="flex items-center gap-3 mb-6">
                <div className="w-12 h-12 bg-blue-600 rounded-lg flex items-center justify-center text-white text-2xl">
                  🏢
                </div>
                <div>
                  <h3 className="text-2xl font-bold text-gray-900">Business Services</h3>
                  <p className="text-sm text-gray-600">Complete business formation and growth solutions</p>
                </div>
              </div>
              <ul className="space-y-4">
                <li>
                  <div className="flex items-start gap-3">
                    <Check className="w-5 h-5 text-green-600 mt-1 flex-shrink-0" />
                    <div>
                      <div className="font-semibold text-gray-900">Same-Day Business Registration</div>
                      <div className="text-sm text-gray-600">Get your business registered and ready to operate in just 24 hours</div>
                    </div>
                  </div>
                </li>
                <li>
                  <div className="flex items-start gap-3">
                    <Check className="w-5 h-5 text-green-600 mt-1 flex-shrink-0" />
                    <div>
                      <div className="font-semibold text-gray-900">SBA Funding Connections</div>
                      <div className="text-sm text-gray-600">Direct access to SBA funding opportunities and application support</div>
                    </div>
                  </div>
                </li>
                <li>
                  <div className="flex items-start gap-3">
                    <Check className="w-5 h-5 text-green-600 mt-1 flex-shrink-0" />
                    <div>
                      <div className="font-semibold text-gray-900">Website Development</div>
                      <div className="text-sm text-gray-600">Professional websites that drive growth and customer engagement</div>
                    </div>
                  </div>
                </li>
                <li>
                  <div className="flex items-start gap-3">
                    <Check className="w-5 h-5 text-green-600 mt-1 flex-shrink-0" />
                    <div>
                      <div className="font-semibold text-gray-900">Business Credit Building</div>
                      <div className="text-sm text-gray-600">Establish and build strong business credit profiles</div>
                    </div>
                  </div>
                </li>
                <li>
                  <div className="flex items-start gap-3">
                    <Check className="w-5 h-5 text-green-600 mt-1 flex-shrink-0" />
                    <div>
                      <div className="font-semibold text-gray-900">Marketing & SEO</div>
                      <div className="text-sm text-gray-600">Comprehensive marketing strategies to gain exposure and customers</div>
                    </div>
                  </div>
                </li>
              </ul>
              <a href="/intake">
                <Button className="w-full mt-6 bg-blue-600 hover:bg-blue-700 text-white py-6">
                  Get Business Quote
                </Button>
              </a>
            </Card>

            {/* Consumer Services */}
            <Card className="p-8 border-2 border-green-200 bg-gradient-to-br from-green-50 to-white">
              <div className="flex items-center gap-3 mb-6">
                <div className="w-12 h-12 bg-green-600 rounded-lg flex items-center justify-center text-white text-2xl">
                  💼
                </div>
                <div>
                  <h3 className="text-2xl font-bold text-gray-900">Consumer Services</h3>
                  <p className="text-sm text-gray-600">Personal financial assistance and life consulting</p>
                </div>
              </div>
              <ul className="space-y-4">
                <li>
                  <div className="flex items-start gap-3">
                    <Check className="w-5 h-5 text-green-600 mt-1 flex-shrink-0" />
                    <div>
                      <div className="font-semibold text-gray-900">Credit Repair</div>
                      <div className="text-sm text-gray-600">Professional credit repair services to improve your financial standing</div>
                    </div>
                  </div>
                </li>
                <li>
                  <div className="flex items-start gap-3">
                    <Check className="w-5 h-5 text-green-600 mt-1 flex-shrink-0" />
                    <div>
                      <div className="font-semibold text-gray-900">Life Consulting</div>
                      <div className="text-sm text-gray-600">Personal guidance and strategic planning for life goals</div>
                    </div>
                  </div>
                </li>
                <li>
                  <div className="flex items-start gap-3">
                    <Check className="w-5 h-5 text-green-600 mt-1 flex-shrink-0" />
                    <div>
                      <div className="font-semibold text-gray-900">Task Assistance</div>
                      <div className="text-sm text-gray-600">Help with tedious tasks and administrative work</div>
                    </div>
                  </div>
                </li>
                <li>
                  <div className="flex items-start gap-3">
                    <Check className="w-5 h-5 text-green-600 mt-1 flex-shrink-0" />
                    <div>
                      <div className="font-semibold text-gray-900">Financial Wellness</div>
                      <div className="text-sm text-gray-600">Comprehensive financial planning and wellness strategies</div>
                    </div>
                  </div>
                </li>
              </ul>
              <a href="/intake">
                <Button className="w-full mt-6 bg-green-600 hover:bg-green-700 text-white py-6">
                  Get Consumer Quote
                </Button>
              </a>
            </Card>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-gradient-blue-green text-white">
        <div className="container max-w-4xl text-center">
          <h2 className="text-4xl font-bold mb-4">Ready to Achieve Your Goals?</h2>
          <p className="text-xl text-blue-50 mb-8">
            Get a free quote and discover how we can help you launch, grow, and succeed.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center items-center mb-8">
            <div className="flex items-center gap-2">
              <span className="text-2xl">📞</span>
              <a href="tel:9103151800" className="text-xl font-semibold hover:underline">(910) 315-1800</a>
            </div>
            <div className="hidden sm:block text-blue-200">|</div>
            <div className="flex items-center gap-2">
              <span className="text-2xl">✉️</span>
              <a href="mailto:info@617east.com" className="text-xl font-semibold hover:underline">info@617east.com</a>
            </div>
          </div>
          <a href="/intake">
            <Button className="bg-white text-blue-600 hover:bg-gray-100 px-8 py-6 text-lg font-semibold">
              Get Your Free Quote →
            </Button>
          </a>
          <p className="text-sm text-blue-100 mt-4">
            Response Time Guarantee: Expect a response within 24 hours. Same-day response for inquiries received before 3 PM EST.
          </p>
        </div>
      </section>
    </Layout>
  );
}

