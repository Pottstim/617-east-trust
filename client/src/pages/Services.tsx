import Layout from "@/components/Layout";
import { Card } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Check } from "lucide-react";

export default function Services() {
  const businessServices = [
    {
      icon: "⚡",
      title: "Same-Day Business Registration",
      description: "Get your business registered and ready to operate in just 24 hours. We handle all the paperwork, filings, and compliance requirements."
    },
    {
      icon: "💰",
      title: "SBA Funding Connections",
      description: "Direct access to SBA funding opportunities and application support. We guide you through the entire process."
    },
    {
      icon: "💻",
      title: "Website Development",
      description: "Professional websites that drive growth and customer engagement. Responsive, SEO-optimized sites that convert."
    },
    {
      icon: "📈",
      title: "Business Credit Building",
      description: "Establish and build strong business credit profiles. Separate personal and business credit effectively."
    },
    {
      icon: "📱",
      title: "Marketing & SEO",
      description: "Comprehensive marketing strategies to gain exposure and customers. Social media, SEO, and online advertising."
    },
    {
      icon: "⚙️",
      title: "Operations Optimization",
      description: "Streamline your business processes and improve efficiency. Save time and reduce costs."
    }
  ];

  const consumerServices = [
    {
      icon: "🔧",
      title: "Credit Repair",
      description: "Professional credit repair services to improve your financial standing. Remove inaccurate items and build stronger credit."
    },
    {
      icon: "🎯",
      title: "Life Consulting",
      description: "Personal guidance and strategic planning for life goals. Career transitions, financial planning, and personal development."
    },
    {
      icon: "📋",
      title: "Task Assistance",
      description: "Help with tedious tasks and administrative work. Document preparation, research, and more."
    },
    {
      icon: "💡",
      title: "Financial Wellness",
      description: "Comprehensive financial planning and wellness strategies. Budgets, debt management, and wealth building."
    }
  ];

  return (
    <Layout>
      <div className="min-h-screen bg-gray-50">
        {/* Hero Section */}
        <section className="bg-gradient-blue-green text-white py-20">
          <div className="container max-w-4xl text-center">
            <h1 className="text-4xl md:text-5xl font-bold mb-6">Our Services</h1>
            <p className="text-xl text-blue-50">
              Comprehensive solutions for businesses and individuals. From formation to funding, credit repair to wealth building.
            </p>
          </div>
        </section>

        {/* Business Services */}
        <section className="py-20">
          <div className="container">
            <div className="max-w-6xl mx-auto">
              <div className="text-center mb-12">
                <div className="inline-block bg-blue-100 text-blue-700 px-4 py-2 rounded-full text-sm font-semibold mb-4">
                  For Businesses
                </div>
                <h2 className="text-4xl font-bold text-gray-900 mb-4">Business Services</h2>
                <p className="text-xl text-gray-600">Complete business formation and growth solutions</p>
              </div>

              <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
                {businessServices.map((service, index) => (
                  <Card key={index} className="p-6 hover:shadow-lg transition-shadow border-2 border-blue-100 hover:border-blue-300">
                    <div className="text-4xl mb-4">{service.icon}</div>
                    <h3 className="text-xl font-bold text-gray-900 mb-3">{service.title}</h3>
                    <p className="text-gray-600 leading-relaxed">{service.description}</p>
                  </Card>
                ))}
              </div>

              <div className="text-center mt-12">
                <a href="/intake">
                  <Button className="bg-blue-600 hover:bg-blue-700 text-white px-8 py-6 text-lg">
                    Get Business Quote →
                  </Button>
                </a>
              </div>
            </div>
          </div>
        </section>

        {/* Consumer Services */}
        <section className="py-20 bg-white">
          <div className="container">
            <div className="max-w-6xl mx-auto">
              <div className="text-center mb-12">
                <div className="inline-block bg-green-100 text-green-700 px-4 py-2 rounded-full text-sm font-semibold mb-4">
                  For Individuals
                </div>
                <h2 className="text-4xl font-bold text-gray-900 mb-4">Consumer Services</h2>
                <p className="text-xl text-gray-600">Personal financial assistance and life consulting</p>
              </div>

              <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
                {consumerServices.map((service, index) => (
                  <Card key={index} className="p-6 hover:shadow-lg transition-shadow border-2 border-green-100 hover:border-green-300">
                    <div className="text-4xl mb-4">{service.icon}</div>
                    <h3 className="text-xl font-bold text-gray-900 mb-3">{service.title}</h3>
                    <p className="text-gray-600 leading-relaxed">{service.description}</p>
                  </Card>
                ))}
              </div>

              <div className="text-center mt-12">
                <a href="/intake">
                  <Button className="bg-green-600 hover:bg-green-700 text-white px-8 py-6 text-lg">
                    Get Consumer Quote →
                  </Button>
                </a>
              </div>
            </div>
          </div>
        </section>

        {/* Why Choose Us */}
        <section className="py-20 bg-gray-50">
          <div className="container max-w-4xl">
            <h2 className="text-3xl font-bold text-gray-900 text-center mb-12">Why Choose 617 East Trust?</h2>
            <div className="grid md:grid-cols-2 gap-6">
              <div className="flex gap-4">
                <div className="flex-shrink-0">
                  <div className="w-12 h-12 bg-blue-100 rounded-full flex items-center justify-center">
                    <Check className="w-6 h-6 text-blue-600" />
                  </div>
                </div>
                <div>
                  <h3 className="font-bold text-gray-900 mb-2">Banking Expertise</h3>
                  <p className="text-gray-600">Founded by a banking professional with a decade of experience.</p>
                </div>
              </div>
              <div className="flex gap-4">
                <div className="flex-shrink-0">
                  <div className="w-12 h-12 bg-green-100 rounded-full flex items-center justify-center">
                    <Check className="w-6 h-6 text-green-600" />
                  </div>
                </div>
                <div>
                  <h3 className="font-bold text-gray-900 mb-2">Same-Day Service</h3>
                  <p className="text-gray-600">Get your business registered in 24 hours, not weeks.</p>
                </div>
              </div>
              <div className="flex gap-4">
                <div className="flex-shrink-0">
                  <div className="w-12 h-12 bg-purple-100 rounded-full flex items-center justify-center">
                    <Check className="w-6 h-6 text-purple-600" />
                  </div>
                </div>
                <div>
                  <h3 className="font-bold text-gray-900 mb-2">Technology Integration</h3>
                  <p className="text-gray-600">Traditional service with cutting-edge technology.</p>
                </div>
              </div>
              <div className="flex gap-4">
                <div className="flex-shrink-0">
                  <div className="w-12 h-12 bg-yellow-100 rounded-full flex items-center justify-center">
                    <Check className="w-6 h-6 text-yellow-600" />
                  </div>
                </div>
                <div>
                  <h3 className="font-bold text-gray-900 mb-2">End-to-End Support</h3>
                  <p className="text-gray-600">From formation to funding - we're with you every step.</p>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* CTA Section */}
        <section className="py-20 bg-gradient-blue-green text-white">
          <div className="container max-w-4xl text-center">
            <h2 className="text-4xl font-bold mb-4">Ready to Get Started?</h2>
            <p className="text-xl text-blue-50 mb-8">
              Schedule a free consultation and discover how we can help you achieve your goals.
            </p>
            <a href="/intake">
              <Button className="bg-white text-blue-600 hover:bg-gray-100 px-8 py-6 text-lg font-semibold">
                Get Your Free Quote →
              </Button>
            </a>
          </div>
        </section>
      </div>
    </Layout>
  );
}

