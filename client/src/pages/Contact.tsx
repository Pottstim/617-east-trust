import Layout from "@/components/Layout";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Link } from "wouter";

export default function Contact() {
  return (
    <Layout>
      {/* Hero Section */}
      <section className="bg-gradient-to-br from-blue-50 via-white to-purple-50 py-16">
        <div className="container mx-auto px-4 text-center">
          <h1 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6">
            Get in Touch
          </h1>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Ready to start your journey toward financial prosperity? We're here to help.
          </p>
        </div>
      </section>

      {/* Contact Options */}
      <section className="py-20 bg-white">
        <div className="container mx-auto px-4">
          <div className="max-w-5xl mx-auto">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-16">
              <Card className="hover:shadow-xl transition-shadow">
                <CardHeader>
                  <div className="w-16 h-16 bg-blue-100 rounded-xl flex items-center justify-center mb-4">
                    <svg className="w-8 h-8 text-blue-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M8 7V3m8 4V3m-9 8h10M5 21h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v12a2 2 0 002 2z" />
                    </svg>
                  </div>
                  <CardTitle className="text-2xl">Schedule a Consultation</CardTitle>
                  <CardDescription className="text-base">
                    Complete our intake form to schedule a personalized consultation with our team.
                  </CardDescription>
                </CardHeader>
                <CardContent>
                  <Link href="/intake">
                    <Button className="w-full bg-gradient-to-r from-blue-600 to-purple-600 hover:from-blue-700 hover:to-purple-700">
                      Start Intake Form
                    </Button>
                  </Link>
                </CardContent>
              </Card>

              <Card className="hover:shadow-xl transition-shadow">
                <CardHeader>
                  <div className="w-16 h-16 bg-purple-100 rounded-xl flex items-center justify-center mb-4">
                    <svg className="w-8 h-8 text-purple-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
                    </svg>
                  </div>
                  <CardTitle className="text-2xl">Visit Our Office</CardTitle>
                  <CardDescription className="text-base">
                    We're located in the heart of the North Carolina Sandhills.
                  </CardDescription>
                </CardHeader>
                <CardContent>
                  <p className="text-gray-700 mb-4">
                    <strong>617 East Trust</strong><br />
                    North Carolina Sandhills Region
                  </p>
                  <p className="text-sm text-gray-600">
                    By appointment only. Please schedule through our intake form.
                  </p>
                </CardContent>
              </Card>
            </div>

            {/* Contact Information */}
            <div className="bg-gradient-to-br from-blue-50 to-purple-50 rounded-2xl p-8 md:p-12">
              <div className="text-center mb-12">
                <h2 className="text-3xl font-bold text-gray-900 mb-4">
                  We're Here to Help
                </h2>
                <p className="text-lg text-gray-600">
                  Have questions? We're committed to providing clear, transparent communication.
                </p>
              </div>

              <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
                <div className="text-center">
                  <div className="w-12 h-12 bg-white rounded-full flex items-center justify-center mx-auto mb-4 shadow-md">
                    <svg className="w-6 h-6 text-blue-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
                    </svg>
                  </div>
                  <h3 className="font-semibold text-gray-900 mb-2">Email Us</h3>
                  <p className="text-gray-600 text-sm">
                    Response within 24 hours
                  </p>
                </div>

                <div className="text-center">
                  <div className="w-12 h-12 bg-white rounded-full flex items-center justify-center mx-auto mb-4 shadow-md">
                    <svg className="w-6 h-6 text-purple-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" />
                    </svg>
                  </div>
                  <h3 className="font-semibold text-gray-900 mb-2">Call Us</h3>
                  <p className="text-gray-600 text-sm">
                    Available during business hours
                  </p>
                </div>

                <div className="text-center">
                  <div className="w-12 h-12 bg-white rounded-full flex items-center justify-center mx-auto mb-4 shadow-md">
                    <svg className="w-6 h-6 text-green-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M8 7V3m8 4V3m-9 8h10M5 21h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v12a2 2 0 002 2z" />
                    </svg>
                  </div>
                  <h3 className="font-semibold text-gray-900 mb-2">Schedule Online</h3>
                  <p className="text-gray-600 text-sm">
                    Book a consultation anytime
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Business Hours */}
      <section className="py-20 bg-gray-50">
        <div className="container mx-auto px-4">
          <div className="max-w-3xl mx-auto">
            <Card>
              <CardHeader>
                <CardTitle className="text-2xl text-center">Business Hours</CardTitle>
                <CardDescription className="text-center">
                  We're available to serve you during the following hours
                </CardDescription>
              </CardHeader>
              <CardContent>
                <div className="space-y-4">
                  <div className="flex justify-between items-center py-3 border-b">
                    <span className="font-medium text-gray-900">Monday - Friday</span>
                    <span className="text-gray-600">9:00 AM - 5:00 PM EST</span>
                  </div>
                  <div className="flex justify-between items-center py-3 border-b">
                    <span className="font-medium text-gray-900">Saturday</span>
                    <span className="text-gray-600">By Appointment Only</span>
                  </div>
                  <div className="flex justify-between items-center py-3">
                    <span className="font-medium text-gray-900">Sunday</span>
                    <span className="text-gray-600">Closed</span>
                  </div>
                </div>
                <div className="mt-6 p-4 bg-blue-50 rounded-lg">
                  <p className="text-sm text-gray-700 text-center">
                    <strong>Note:</strong> All consultations are by appointment. Please use our intake form to schedule your visit.
                  </p>
                </div>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* FAQ Section */}
      <section className="py-20 bg-white">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto">
            <div className="text-center mb-12">
              <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
                Frequently Asked Questions
              </h2>
              <p className="text-lg text-gray-600">
                Quick answers to common questions
              </p>
            </div>

            <div className="space-y-6">
              <Card>
                <CardHeader>
                  <CardTitle className="text-lg">How do I get started?</CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-gray-600">
                    Simply complete our intake form to schedule your free initial consultation. We'll review your information and reach out to schedule a meeting at your convenience.
                  </p>
                </CardContent>
              </Card>

              <Card>
                <CardHeader>
                  <CardTitle className="text-lg">What should I bring to my first consultation?</CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-gray-600">
                    We'll provide a detailed checklist after you schedule your appointment. Generally, bring any relevant financial documents, business plans, or questions you'd like to discuss.
                  </p>
                </CardContent>
              </Card>

              <Card>
                <CardHeader>
                  <CardTitle className="text-lg">Do you offer virtual consultations?</CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-gray-600">
                    Yes! We offer both in-person and virtual consultations to accommodate your schedule and preferences. Indicate your preference in the intake form.
                  </p>
                </CardContent>
              </Card>

              <Card>
                <CardHeader>
                  <CardTitle className="text-lg">What areas do you serve?</CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-gray-600">
                    While we're based in the North Carolina Sandhills, we serve clients throughout North Carolina and beyond through our virtual consultation services.
                  </p>
                </CardContent>
              </Card>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-gradient-to-r from-blue-600 to-purple-600 text-white">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-3xl md:text-4xl font-bold mb-6">
            Ready to Take the Next Step?
          </h2>
          <p className="text-xl mb-8 max-w-2xl mx-auto opacity-90">
            Start your journey toward financial prosperity today.
          </p>
          <Link href="/intake">
            <Button size="lg" variant="secondary" className="bg-white text-blue-600 hover:bg-gray-100">
              Complete Intake Form
            </Button>
          </Link>
        </div>
      </section>
    </Layout>
  );
}

