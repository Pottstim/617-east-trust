import Layout from "@/components/Layout";
import { Card } from "@/components/ui/card";
import { Star } from "lucide-react";

export default function Testimonials() {
  const testimonials = [
    {
      name: "Sarah Johnson",
      role: "Tech Startup Founder",
      rating: 5,
      text: "My business was registered in 24 hours! The team at 617 East Trust made the entire process seamless and connected me with SBA funding opportunities I didn't even know existed.",
      icon: "👤"
    },
    {
      name: "Michael Chen",
      role: "Small Business Owner",
      rating: 5,
      text: "Improved my credit score by 100 points in just 6 months. Their credit repair service is professional, transparent, and incredibly effective.",
      icon: "💼"
    },
    {
      name: "Emily Rodriguez",
      role: "Restaurant Owner",
      rating: 5,
      text: "Secured funding thanks to their guidance and expertise. The end-to-end support from formation to funding was exactly what I needed as a first-time entrepreneur.",
      icon: "🏢"
    },
    {
      name: "David Thompson",
      role: "E-commerce Entrepreneur",
      rating: 5,
      text: "The website they built for my business has tripled my online sales. Professional, fast, and they understood exactly what I needed.",
      icon: "🛒"
    },
    {
      name: "Lisa Martinez",
      role: "Consultant",
      rating: 5,
      text: "Their business credit building service helped me establish strong vendor relationships and get better payment terms. Game changer for my consulting business.",
      icon: "📊"
    },
    {
      name: "James Wilson",
      role: "Retail Store Owner",
      rating: 5,
      text: "From LLC formation to marketing strategy, 617 East Trust has been my partner every step of the way. Their same-day service is no joke - they deliver!",
      icon: "🏪"
    }
  ];

  return (
    <Layout>
      <div className="min-h-screen bg-background">
        {/* Hero Section */}
        <section className="bg-gradient-blue-green text-white py-20">
          <div className="container max-w-4xl text-center">
            <h1 className="text-4xl md:text-5xl font-bold mb-6">Client Success Stories</h1>
            <p className="text-xl text-blue-50">
              Real results from entrepreneurs and consumers we've helped succeed
            </p>
          </div>
        </section>

        {/* Testimonials Grid */}
        <section className="py-16">
          <div className="container max-w-6xl">
            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
              {testimonials.map((testimonial, index) => (
                <Card key={index} className="p-6 hover:shadow-lg transition-shadow">
                  <div className="flex items-center gap-1 mb-4">
                    {[...Array(testimonial.rating)].map((_, i) => (
                      <Star key={i} className="w-5 h-5 fill-yellow-400 text-yellow-400" />
                    ))}
                  </div>
                  <p className="text-foreground mb-6 leading-relaxed">"{testimonial.text}"</p>
                  <div className="flex items-center gap-3">
                    <div className="w-12 h-12 rounded-full bg-blue-100 flex items-center justify-center text-2xl">
                      {testimonial.icon}
                    </div>
                    <div>
                      <div className="font-semibold text-foreground">{testimonial.name}</div>
                      <div className="text-sm text-muted-foreground">{testimonial.role}</div>
                    </div>
                  </div>
                </Card>
              ))}
            </div>
          </div>
        </section>

        {/* CTA Section */}
        <section className="py-16 bg-card">
          <div className="container max-w-4xl text-center">
            <h2 className="text-3xl font-bold text-foreground mb-4">
              Ready to Write Your Success Story?
            </h2>
            <p className="text-lg text-muted-foreground mb-8">
              Join hundreds of satisfied clients who have achieved their business and financial goals with 617 East Trust.
            </p>
            <a
              href="/intake"
              className="inline-block bg-green-600 hover:bg-green-700 text-white font-semibold px-8 py-4 rounded-lg transition-colors"
            >
              Get Your Free Quote
            </a>
          </div>
        </section>
      </div>
    </Layout>
  );
}

