import { useState, useEffect } from "react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Textarea } from "@/components/ui/textarea";
import { Card } from "@/components/ui/card";

export default function Intake() {
  const [currentStep, setCurrentStep] = useState(1);
  const [formData, setFormData] = useState<any>({
    services: [],
    socialMedia: [],
  });

  const totalSteps = 6;
  const progress = (currentStep / totalSteps) * 100;

  useEffect(() => {
    // Load saved progress from localStorage
    const saved = localStorage.getItem("intakeFormProgress");
    if (saved) {
      const data = JSON.parse(saved);
      setFormData(data);
      setCurrentStep(data.currentStep || 1);
    }
  }, []);

  useEffect(() => {
    // Auto-save progress
    const saveData = { ...formData, currentStep };
    localStorage.setItem("intakeFormProgress", JSON.stringify(saveData));
  }, [formData, currentStep]);

  const handleInputChange = (e: any) => {
    const { name, value, type, checked } = e.target;
    
    if (type === "checkbox") {
      const currentArray = formData[name] || [];
      if (checked) {
        setFormData({ ...formData, [name]: [...currentArray, value] });
      } else {
        setFormData({ ...formData, [name]: currentArray.filter((v: string) => v !== value) });
      }
    } else {
      setFormData({ ...formData, [name]: value });
    }
  };

  const handleNext = () => {
    if (currentStep < totalSteps) {
      setCurrentStep(currentStep + 1);
      window.scrollTo(0, 0);
    }
  };

  const handleBack = () => {
    if (currentStep > 1) {
      setCurrentStep(currentStep - 1);
      window.scrollTo(0, 0);
    }
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    
    console.log("Form submitted:", formData);
    
    // Clear saved progress
    localStorage.removeItem("intakeFormProgress");
    
    // Show success step
    setCurrentStep(totalSteps + 1);
  };

  const toggleService = (service: string) => {
    const services = formData.services || [];
    if (services.includes(service)) {
      setFormData({ ...formData, services: services.filter((s: string) => s !== service) });
    } else {
      setFormData({ ...formData, services: [...services, service] });
    }
  };

  const setRating = (field: string, value: number) => {
    setFormData({ ...formData, [field]: value });
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-blue-600 via-blue-500 to-green-500">
      <div className="container max-w-2xl mx-auto px-4 py-8">
        {/* Header */}
        <div className="bg-card rounded-t-3xl p-8 text-center shadow-xl">
          <div className="flex items-center justify-center gap-3 mb-4">
            <img src="/logo-nc.png" alt="617 East Trust" className="h-12 w-12" />
            <div className="text-2xl font-bold text-foreground">617 EAST TRUST</div>
          </div>
          <p className="text-muted-foreground">Professional Business Consulting & Advisory Services</p>
        </div>

        {/* Progress Bar */}
        <div className="bg-gray-200 h-1.5">
          <div 
            className="h-full bg-gradient-to-r from-blue-600 to-green-600 transition-all duration-300"
            style={{ width: `${progress}%` }}
          />
        </div>

        {/* Form Container */}
        <div className="bg-card rounded-b-3xl shadow-xl p-8 mb-8">
          <form onSubmit={handleSubmit}>
            {/* Step 1: Getting Started */}
            {currentStep === 1 && (
              <div className="space-y-6 animate-in fade-in slide-in-from-right-4 duration-300">
                <div>
                  <h2 className="text-3xl font-bold text-foreground mb-2">Let's Get Started! 🚀</h2>
                  <p className="text-muted-foreground">Welcome! We're excited to learn about your business and how we can help you succeed.</p>
                </div>

                <div className="space-y-4">
                  <div>
                    <Label htmlFor="companyName">Company/Business Name *</Label>
                    <Input
                      id="companyName"
                      name="companyName"
                      value={formData.companyName || ""}
                      onChange={handleInputChange}
                      required
                      className="mt-1"
                    />
                  </div>

                  <div>
                    <Label htmlFor="contactName">Primary Contact Name *</Label>
                    <Input
                      id="contactName"
                      name="contactName"
                      value={formData.contactName || ""}
                      onChange={handleInputChange}
                      required
                      className="mt-1"
                    />
                  </div>

                  <div>
                    <Label htmlFor="email">Email Address *</Label>
                    <Input
                      id="email"
                      name="email"
                      type="email"
                      value={formData.email || ""}
                      onChange={handleInputChange}
                      required
                      className="mt-1"
                    />
                  </div>

                  <div>
                    <Label htmlFor="phone">Phone Number *</Label>
                    <Input
                      id="phone"
                      name="phone"
                      type="tel"
                      value={formData.phone || ""}
                      onChange={handleInputChange}
                      required
                      className="mt-1"
                    />
                  </div>
                </div>
              </div>
            )}

            {/* Step 2: About Your Business */}
            {currentStep === 2 && (
              <div className="space-y-6 animate-in fade-in slide-in-from-right-4 duration-300">
                <div>
                  <h2 className="text-3xl font-bold text-foreground mb-2">About Your Business 🏢</h2>
                  <p className="text-muted-foreground">Help us understand your business structure and background.</p>
                </div>

                <div className="space-y-4">
                  <div>
                    <Label htmlFor="businessStructure">Business Structure</Label>
                    <select
                      id="businessStructure"
                      name="businessStructure"
                      value={formData.businessStructure || ""}
                      onChange={handleInputChange}
                      className="w-full mt-1 p-3 border-2 border-gray-200 rounded-xl focus:border-blue-600 focus:outline-none"
                    >
                      <option value="">Select structure</option>
                      <option value="sole-proprietorship">Sole Proprietorship</option>
                      <option value="llc">LLC</option>
                      <option value="corporation">Corporation</option>
                      <option value="partnership">Partnership</option>
                      <option value="not-yet-formed">Not Yet Formed</option>
                    </select>
                  </div>

                  <div>
                    <Label htmlFor="yearsOperation">Years in Operation</Label>
                    <select
                      id="yearsOperation"
                      name="yearsOperation"
                      value={formData.yearsOperation || ""}
                      onChange={handleInputChange}
                      className="w-full mt-1 p-3 border-2 border-gray-200 rounded-xl focus:border-blue-600 focus:outline-none"
                    >
                      <option value="">Select range</option>
                      <option value="startup">Startup (Idea Stage)</option>
                      <option value="0-1">0-1 years</option>
                      <option value="1-3">1-3 years</option>
                      <option value="3-5">3-5 years</option>
                      <option value="5+">5+ years</option>
                    </select>
                  </div>

                  <div>
                    <Label htmlFor="industry">Industry/Sector</Label>
                    <Input
                      id="industry"
                      name="industry"
                      value={formData.industry || ""}
                      onChange={handleInputChange}
                      placeholder="e.g., Technology, Retail, Healthcare"
                      className="mt-1"
                    />
                  </div>

                  <div>
                    <Label htmlFor="employeeCount">Number of Employees</Label>
                    <select
                      id="employeeCount"
                      name="employeeCount"
                      value={formData.employeeCount || ""}
                      onChange={handleInputChange}
                      className="w-full mt-1 p-3 border-2 border-gray-200 rounded-xl focus:border-blue-600 focus:outline-none"
                    >
                      <option value="">Select range</option>
                      <option value="just-me">Just me</option>
                      <option value="2-5">2-5</option>
                      <option value="6-10">6-10</option>
                      <option value="11-25">11-25</option>
                      <option value="26-50">26-50</option>
                      <option value="50+">50+</option>
                    </select>
                  </div>
                </div>
              </div>
            )}

            {/* Step 3: Current Status */}
            {currentStep === 3 && (
              <div className="space-y-6 animate-in fade-in slide-in-from-right-4 duration-300">
                <div>
                  <h2 className="text-3xl font-bold text-foreground mb-2">Current Status 📊</h2>
                  <p className="text-muted-foreground">Tell us about your current business situation.</p>
                </div>

                <div className="space-y-4">
                  <div>
                    <Label htmlFor="revenueRange">Annual Revenue Range</Label>
                    <select
                      id="revenueRange"
                      name="revenueRange"
                      value={formData.revenueRange || ""}
                      onChange={handleInputChange}
                      className="w-full mt-1 p-3 border-2 border-gray-200 rounded-xl focus:border-blue-600 focus:outline-none"
                    >
                      <option value="">Select range</option>
                      <option value="0-25k">$0 - $25k</option>
                      <option value="25k-100k">$25k - $100k</option>
                      <option value="100k-500k">$100k - $500k</option>
                      <option value="500k+">$500k+</option>
                      <option value="prefer-not-to-say">Prefer not to say</option>
                    </select>
                  </div>

                  <div>
                    <Label htmlFor="websiteUrl">Current Website URL (if applicable)</Label>
                    <Input
                      id="websiteUrl"
                      name="websiteUrl"
                      type="url"
                      value={formData.websiteUrl || ""}
                      onChange={handleInputChange}
                      placeholder="https://"
                      className="mt-1"
                    />
                  </div>

                  <div>
                    <Label>Social Media Presence (select all that apply)</Label>
                    <div className="grid grid-cols-2 gap-3 mt-2">
                      {["Facebook", "Instagram", "LinkedIn", "Twitter", "TikTok", "None"].map((platform) => (
                        <label key={platform} className="flex items-center p-3 border-2 border-gray-200 rounded-xl cursor-pointer hover:border-blue-600 transition-colors">
                          <input
                            type="checkbox"
                            name="socialMedia"
                            value={platform.toLowerCase()}
                            checked={formData.socialMedia?.includes(platform.toLowerCase())}
                            onChange={handleInputChange}
                            className="mr-2"
                          />
                          <span>{platform}</span>
                        </label>
                      ))}
                    </div>
                  </div>
                </div>
              </div>
            )}

            {/* Step 4: What You Need */}
            {currentStep === 4 && (
              <div className="space-y-6 animate-in fade-in slide-in-from-right-4 duration-300">
                <div>
                  <h2 className="text-3xl font-bold text-foreground mb-2">What You Need 🎯</h2>
                  <p className="text-muted-foreground">Select all the services you're interested in.</p>
                </div>

                <div className="grid grid-cols-1 gap-4">
                  {[
                    { id: "business-formation", icon: "🏢", title: "Business Formation & Structure", desc: "LLC setup, incorporation, business registration" },
                    { id: "website-development", icon: "💻", title: "Website Development", desc: "Professional websites that convert visitors to customers" },
                    { id: "branding-logo", icon: "🎨", title: "Branding & Logo Design", desc: "Create a memorable brand identity" },
                    { id: "funding-guidance", icon: "💰", title: "Funding & Investment Guidance", desc: "SBA loans, grants, investor connections" },
                    { id: "credit-building", icon: "📈", title: "Business Credit Building", desc: "Establish and improve business credit scores" },
                    { id: "digital-marketing", icon: "📱", title: "Digital Marketing Strategy", desc: "SEO, social media, online advertising" },
                    { id: "financial-planning", icon: "📊", title: "Financial Planning & Analysis", desc: "Budgeting, forecasting, financial health" },
                    { id: "operations-optimization", icon: "⚙️", title: "Operations Optimization", desc: "Streamline processes and improve efficiency" },
                  ].map((service) => (
                    <Card
                      key={service.id}
                      className={`p-4 cursor-pointer transition-all ${
                        formData.services?.includes(service.id)
                          ? "border-2 border-blue-600 bg-blue-50"
                          : "border-2 border-gray-200 hover:border-blue-400"
                      }`}
                      onClick={() => toggleService(service.id)}
                    >
                      <div className="flex items-start gap-4">
                        <div className="text-3xl">{service.icon}</div>
                        <div className="flex-1">
                          <h3 className="font-semibold text-foreground mb-1">{service.title}</h3>
                          <p className="text-sm text-muted-foreground">{service.desc}</p>
                        </div>
                      </div>
                    </Card>
                  ))}
                </div>
              </div>
            )}

            {/* Step 5: Your Vision */}
            {currentStep === 5 && (
              <div className="space-y-6 animate-in fade-in slide-in-from-right-4 duration-300">
                <div>
                  <h2 className="text-3xl font-bold text-foreground mb-2">Your Vision ✨</h2>
                  <p className="text-muted-foreground">Help us understand your goals so we can create the perfect roadmap for your success.</p>
                </div>

                <div className="space-y-4">
                  <div>
                    <Label htmlFor="shortTermGoals">Short-term Goals (6-12 months)</Label>
                    <Textarea
                      id="shortTermGoals"
                      name="shortTermGoals"
                      value={formData.shortTermGoals || ""}
                      onChange={handleInputChange}
                      placeholder="What do you want to achieve in the next 6-12 months?"
                      className="mt-1 min-h-[100px]"
                    />
                  </div>

                  <div>
                    <Label htmlFor="longTermVision">Long-term Vision (2-5 years)</Label>
                    <Textarea
                      id="longTermVision"
                      name="longTermVision"
                      value={formData.longTermVision || ""}
                      onChange={handleInputChange}
                      placeholder="Where do you see your business in 2-5 years?"
                      className="mt-1 min-h-[100px]"
                    />
                  </div>

                  <div>
                    <Label>Priority Areas (Rate 1-5, where 5 = Highest Priority)</Label>
                    <div className="space-y-4 mt-3">
                      {[
                        { field: "priorityRevenue", label: "💰 Revenue Growth" },
                        { field: "priorityMarket", label: "🌍 Market Expansion" },
                        { field: "priorityOperations", label: "⚙️ Operational Efficiency" },
                        { field: "priorityDigital", label: "📱 Digital Presence" },
                      ].map((priority) => (
                        <div key={priority.field} className="flex items-center justify-between">
                          <span className="text-foreground">{priority.label}</span>
                          <div className="flex gap-2">
                            {[1, 2, 3, 4, 5].map((value) => (
                              <button
                                key={value}
                                type="button"
                                onClick={() => setRating(priority.field, value)}
                                className={`w-10 h-10 rounded-full border-2 font-semibold transition-all ${
                                  formData[priority.field] === value
                                    ? "bg-blue-600 text-white border-blue-600"
                                    : "border-gray-300 text-muted-foreground hover:border-blue-600"
                                }`}
                              >
                                {value}
                              </button>
                            ))}
                          </div>
                        </div>
                      ))}
                    </div>
                  </div>
                </div>
              </div>
            )}

            {/* Step 6: Final Details */}
            {currentStep === 6 && (
              <div className="space-y-6 animate-in fade-in slide-in-from-right-4 duration-300">
                <div>
                  <h2 className="text-3xl font-bold text-foreground mb-2">Almost Done! 🎉</h2>
                  <p className="text-muted-foreground">Just a few more details and we'll be in touch.</p>
                </div>

                <div className="space-y-4">
                  <div>
                    <Label htmlFor="communicationMethod">Preferred Communication Method</Label>
                    <select
                      id="communicationMethod"
                      name="communicationMethod"
                      value={formData.communicationMethod || ""}
                      onChange={handleInputChange}
                      className="w-full mt-1 p-3 border-2 border-gray-200 rounded-xl focus:border-blue-600 focus:outline-none"
                    >
                      <option value="">Select method</option>
                      <option value="email">Email</option>
                      <option value="phone">Phone Call</option>
                      <option value="text">Text Message</option>
                      <option value="video">Video Call</option>
                    </select>
                  </div>

                  <div>
                    <Label htmlFor="bestTime">Best Time to Contact</Label>
                    <select
                      id="bestTime"
                      name="bestTime"
                      value={formData.bestTime || ""}
                      onChange={handleInputChange}
                      className="w-full mt-1 p-3 border-2 border-gray-200 rounded-xl focus:border-blue-600 focus:outline-none"
                    >
                      <option value="">Select time</option>
                      <option value="morning">Morning (9 AM - 12 PM)</option>
                      <option value="afternoon">Afternoon (12 PM - 5 PM)</option>
                      <option value="evening">Evening (5 PM - 8 PM)</option>
                      <option value="anytime">Anytime</option>
                    </select>
                  </div>

                  <div>
                    <Label htmlFor="additionalInfo">Additional Information (Optional)</Label>
                    <Textarea
                      id="additionalInfo"
                      name="additionalInfo"
                      value={formData.additionalInfo || ""}
                      onChange={handleInputChange}
                      placeholder="Anything else you'd like us to know?"
                      className="mt-1 min-h-[100px]"
                    />
                  </div>
                </div>
              </div>
            )}

            {/* Success Step */}
            {currentStep === 7 && (
              <div className="text-center py-12 animate-in fade-in zoom-in duration-500">
                <div className="text-6xl mb-6">✅</div>
                <h2 className="text-3xl font-bold text-foreground mb-4">Thank You!</h2>
                <p className="text-lg text-muted-foreground mb-6">
                  Your intake form has been successfully submitted. We'll review your information and get back to you within 24-48 hours.
                </p>
                <p className="text-muted-foreground mb-8">
                  Check your email for a confirmation and next steps.
                </p>
                <Button
                  onClick={() => window.location.href = "/"}
                  className="bg-gradient-to-r from-blue-600 to-green-600 hover:from-blue-700 hover:to-green-700"
                >
                  Return to Home
                </Button>
              </div>
            )}

            {/* Navigation Buttons */}
            {currentStep <= totalSteps && (
              <div className="flex gap-4 mt-8">
                {currentStep > 1 && (
                  <Button
                    type="button"
                    onClick={handleBack}
                    variant="outline"
                    className="flex-1"
                  >
                    Back
                  </Button>
                )}
                {currentStep < totalSteps && (
                  <Button
                    type="button"
                    onClick={handleNext}
                    className="flex-1 bg-gradient-to-r from-blue-600 to-green-600 hover:from-blue-700 hover:to-green-700"
                  >
                    Continue
                  </Button>
                )}
                {currentStep === totalSteps && (
                  <Button
                    type="submit"
                    className="flex-1 bg-gradient-to-r from-blue-600 to-green-600 hover:from-blue-700 hover:to-green-700"
                  >
                    Submit Application
                  </Button>
                )}
              </div>
            )}
          </form>
        </div>
      </div>
    </div>
  );
}

