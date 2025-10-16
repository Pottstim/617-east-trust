import Layout from "@/components/Layout";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Textarea } from "@/components/ui/textarea";
import { Card } from "@/components/ui/card";
import { useState } from "react";

export default function Contact() {
  const [formData, setFormData] = useState({
    firstName: "",
    lastName: "",
    email: "",
    phone: "",
    serviceInterest: "",
    message: ""
  });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    console.log("Form submitted:", formData);
    // Handle form submission
  };

  const handleChange = (e: any) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  };

  return (
    <Layout>
      <div className="min-h-screen bg-gray-50">
        {/* Hero Section */}
        <section className="bg-gradient-blue-green text-white py-20">
          <div className="container max-w-4xl text-center">
            <h1 className="text-4xl md:text-5xl font-bold mb-6">Get in Touch</h1>
            <p className="text-xl text-blue-50">
              Ready to achieve your goals? Contact us today for a free consultation.
            </p>
          </div>
        </section>

        {/* Contact Section */}
        <section className="py-20">
          <div className="container max-w-6xl">
            <div className="grid md:grid-cols-2 gap-12">
              {/* Contact Info */}
              <div>
                <h2 className="text-3xl font-bold text-gray-900 mb-6">Ready to Achieve Your Goals?</h2>
                <p className="text-lg text-gray-600 mb-8">
                  Get a free quote and discover how we can help you launch, grow, and succeed.
                </p>

                <div className="space-y-6 mb-8">
                  <div className="flex items-center gap-4">
                    <div className="w-12 h-12 bg-green-100 rounded-full flex items-center justify-center flex-shrink-0">
                      <span className="text-2xl">📞</span>
                    </div>
                    <div>
                      <div className="font-semibold text-gray-900">Phone</div>
                      <a href="tel:9103151800" className="text-blue-600 hover:underline">(910) 315-1800</a>
                    </div>
                  </div>

                  <div className="flex items-center gap-4">
                    <div className="w-12 h-12 bg-blue-100 rounded-full flex items-center justify-center flex-shrink-0">
                      <span className="text-2xl">✉️</span>
                    </div>
                    <div>
                      <div className="font-semibold text-gray-900">Email</div>
                      <a href="mailto:info@617east.com" className="text-blue-600 hover:underline">info@617east.com</a>
                    </div>
                  </div>

                  <div className="flex items-center gap-4">
                    <div className="w-12 h-12 bg-purple-100 rounded-full flex items-center justify-center flex-shrink-0">
                      <span className="text-2xl">📍</span>
                    </div>
                    <div>
                      <div className="font-semibold text-gray-900">Location</div>
                      <div className="text-gray-600">North Carolina, USA</div>
                    </div>
                  </div>
                </div>

                <Card className="p-6 bg-blue-50 border-blue-200">
                  <h3 className="font-semibold text-gray-900 mb-2">Response Time Guarantee</h3>
                  <p className="text-gray-600 text-sm">
                    Expect a response within 24 hours. Same-day response for inquiries received before 3 PM EST.
                  </p>
                </Card>
              </div>

              {/* Contact Form */}
              <Card className="p-8">
                <h3 className="text-2xl font-bold text-gray-900 mb-2">Get Your Free Quote</h3>
                <p className="text-gray-600 mb-6">Tell us about your needs and we'll provide a customized solution</p>

                <form onSubmit={handleSubmit} className="space-y-4">
                  <div className="grid grid-cols-2 gap-4">
                    <div>
                      <Label htmlFor="firstName">First Name</Label>
                      <Input
                        id="firstName"
                        name="firstName"
                        value={formData.firstName}
                        onChange={handleChange}
                        placeholder="John"
                        required
                        className="mt-1"
                      />
                    </div>
                    <div>
                      <Label htmlFor="lastName">Last Name</Label>
                      <Input
                        id="lastName"
                        name="lastName"
                        value={formData.lastName}
                        onChange={handleChange}
                        placeholder="Doe"
                        required
                        className="mt-1"
                      />
                    </div>
                  </div>

                  <div>
                    <Label htmlFor="email">Email</Label>
                    <Input
                      id="email"
                      name="email"
                      type="email"
                      value={formData.email}
                      onChange={handleChange}
                      placeholder="john@example.com"
                      required
                      className="mt-1"
                    />
                  </div>

                  <div>
                    <Label htmlFor="phone">Phone</Label>
                    <Input
                      id="phone"
                      name="phone"
                      type="tel"
                      value={formData.phone}
                      onChange={handleChange}
                      placeholder="(555) 123-4567"
                      required
                      className="mt-1"
                    />
                  </div>

                  <div>
                    <Label htmlFor="serviceInterest">Service Interest</Label>
                    <select
                      id="serviceInterest"
                      name="serviceInterest"
                      value={formData.serviceInterest}
                      onChange={handleChange}
                      required
                      className="w-full mt-1 p-3 border-2 border-gray-200 rounded-lg focus:border-blue-600 focus:outline-none"
                    >
                      <option value="">Select a service</option>
                      <option value="business">Business Services</option>
                      <option value="consumer">Consumer Services</option>
                      <option value="both">Both</option>
                    </select>
                  </div>

                  <div>
                    <Label htmlFor="message">Message</Label>
                    <Textarea
                      id="message"
                      name="message"
                      value={formData.message}
                      onChange={handleChange}
                      placeholder="Tell us about your needs..."
                      className="mt-1 min-h-[120px]"
                    />
                  </div>

                  <Button type="submit" className="w-full bg-green-600 hover:bg-green-700 text-white py-6 text-lg">
                    Submit Request
                  </Button>
                </form>
              </Card>
            </div>
          </div>
        </section>

        {/* FAQ Section */}
        <section className="py-20 bg-white">
          <div className="container max-w-4xl">
            <h2 className="text-3xl font-bold text-gray-900 text-center mb-12">Frequently Asked Questions</h2>
            <div className="space-y-6">
              <Card className="p-6">
                <h3 className="font-bold text-gray-900 mb-2">How quickly can you register my business?</h3>
                <p className="text-gray-600">We offer same-day business registration services. In most cases, your business will be registered and ready to operate within 24 hours.</p>
              </Card>

              <Card className="p-6">
                <h3 className="font-bold text-gray-900 mb-2">Do you help with SBA funding applications?</h3>
                <p className="text-gray-600">Yes! We provide direct connections to SBA funding opportunities and guide you through the entire application process.</p>
              </Card>

              <Card className="p-6">
                <h3 className="font-bold text-gray-900 mb-2">What's included in your website development service?</h3>
                <p className="text-gray-600">Our website development includes design, development, SEO optimization, mobile responsiveness, and deployment. We create professional websites that convert visitors into customers.</p>
              </Card>

              <Card className="p-6">
                <h3 className="font-bold text-gray-900 mb-2">How does credit repair work?</h3>
                <p className="text-gray-600">We work with credit bureaus to identify and remove inaccurate items from your credit report, while helping you build positive credit history through strategic planning.</p>
              </Card>

              <Card className="p-6">
                <h3 className="font-bold text-gray-900 mb-2">What areas do you serve?</h3>
                <p className="text-gray-600">While we're based in North Carolina, we serve clients nationwide for most of our services, including business registration, credit repair, and consulting.</p>
              </Card>
            </div>
          </div>
        </section>
      </div>
    </Layout>
  );
}

