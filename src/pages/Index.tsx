
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Clock, Users, FileText, Folder, Image, Calendar, Check, Book, ArrowDown, ArrowUp } from "lucide-react";
import { useState } from "react";

const Index = () => {
  const [openFAQ, setOpenFAQ] = useState<number | null>(null);

  const painPoints = [
    {
      title: "Hours Lost Daily",
      description: "Repeated tenant queries and manual reports slow down your team",
      icon: Clock
    },
    {
      title: "Leads Go Cold", 
      description: "Delayed follow-ups lose potential tenants",
      icon: Users
    },
    {
      title: "Revenue Leaks",
      description: "Disconnected tools cause data loss and inefficiencies", 
      icon: FileText
    }
  ];

  const standaloneTools = [
    { name: "AI Tenant Assistant (Retell AI / Chatling)", icon: Users },
    { name: "Lead Nurturing Automation", icon: Book },
    { name: "Maintenance Ticket Routing", icon: FileText },
    { name: "Owner Reporting Generator", icon: Folder },
    { name: "Call Summarizer & CRM Logger", icon: Users },
    { name: "Inbox Auto-Triage System", icon: FileText },
    { name: "Broadcast & Campaign Messaging", icon: Book },
    { name: "Data Cleanup & Enrichment Tool", icon: Folder }
  ];

  const systemFeatures = [
    { name: "End-to-End AI Communications Hub", icon: Users },
    { name: "Integrated PM CRM Sync", icon: Folder },
    { name: "Smart Maintenance Coordination Suite", icon: FileText },
    { name: "Real-Time Owner Dashboard", icon: Image },
    { name: "Lead-to-Lease Pipeline Automation", icon: Book },
    { name: "Staff Time Saver Bundle", icon: Clock },
    { name: "Multi-Channel Notification Engine", icon: Users },
    { name: "Unified Data Insights Layer", icon: Folder }
  ];

  const results = [
    { icon: Clock, text: "Up to 70% faster tenant response times" },
    { icon: ArrowUp, text: "2× faster lead-to-lease conversion" },
    { icon: ArrowDown, text: "60% reduction in manual administrative work" },
    { icon: FileText, text: "90% of maintenance requests auto-handled" },
    { icon: Folder, text: "Real-time owner reporting with zero manual input" }
  ];

  const faqs = [
    {
      question: "What if I don’t have a CRM system?",
      answer: "No problem. We offer a ready-to-use CRM solution specifically built for property managers. It can be deployed out-of-the-box or integrated with your existing tools to ensure seamless workflows and unified data."
    },

    {
      question: "How do I trust AI decisions for tenant and maintenance issues?",
      answer: "Our AI operates with configurable confidence thresholds and escalation protocols. Critical decisions are flagged for human review, while routine tasks are handled automatically. You maintain full oversight and can adjust automation levels based on your comfort."
    },
    {
      question: "Will this really save my staff time?",
      answer: "Absolutely. Our clients typically report 60-70% reduction in repetitive administrative tasks, allowing staff to focus on high-value activities like tenant relationships and strategic planning."
    },
    {
      question: "How soon can we see results?",
      answer: "Most clients see immediate improvements in response times within the first week. Full ROI typically becomes apparent within 30-60 days as the system learns your processes and optimizes workflows."
    },
    {
      question: "What about data security and compliance?",
      answer: "We implement enterprise-grade security with SOC 2 compliance, encrypted data transmission, and secure cloud infrastructure. All systems meet industry standards for handling sensitive tenant and financial information."
    },
    {
      question: "Do I need to retrain my team?",
      answer: "Minimal training is required. Our systems are designed to work behind the scenes, enhancing your existing workflows rather than replacing them. We provide comprehensive onboarding and ongoing support."
    },
    {
      question: "Is this system for residential, commercial, or mixed properties?",
      answer: "Our AI systems work across all property types - residential, commercial, and mixed-use portfolios. The automation adapts to different tenant communication styles and maintenance requirements."
    },
    {
      question: "Can I start with a pilot before full deployment?",
      answer: "Yes, we recommend starting with a pilot program on a subset of properties or specific workflows. This allows you to see results and refine the system before full-scale implementation."
    }
  ];

  return (
    <div className="min-h-screen bg-white">
      {/* Header */}
      <header className="bg-white border-b border-gray-100 py-4">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex justify-between items-center">
          <div className="flex items-center space-x-3">
          <img src="/rentelligence_logo.png" alt="Rentelligence Logo" className="h-10 w-auto" />
          <span className="text-xl font-bold text-gray-900">Rentelligence AI</span>
    </div>

          <div className="text-lg font-medium text-gray-700">[PHONE_PLACEHOLDER]</div>
        </div>
      </header>

      {/* Hero Section */}
      <section className="bg-gradient-to-br from-blue-50 to-indigo-100 py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h1 className="text-5xl md:text-6xl font-bold text-gray-900 mb-6">
            Complete AI Systems for<br />Property Management
          </h1>
          <p className="text-xl text-gray-600 mb-8 max-w-4xl mx-auto leading-relaxed">
            Replace repetitive tasks and disconnected tools with one streamlined AI system — automating tenant queries, lead nurturing, maintenance routing, and owner reporting.
          </p>
          <Button className="bg-blue-800 hover:bg-blue-900 text-white px-8 py-4 text-lg font-semibold rounded-lg mb-4">
            Book Your AI Strategy Session
          </Button>
          <p className="text-sm text-gray-500">
            No commitment required • 30-minute consultation
          </p>
        </div>
      </section>

      {/* Pain Points Section */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-gray-900 mb-4">
              Why Property Managers Lose Time and Money
            </h2>
          </div>
          <div className="grid md:grid-cols-3 gap-8">
            {painPoints.map((point, index) => (
              <Card key={index} className="p-8 text-center shadow-lg border border-gray-100">
                <CardContent className="pt-6">
                  <point.icon className="w-12 h-12 text-red-500 mx-auto mb-4" />
                  <h3 className="text-xl font-bold text-gray-900 mb-3">{point.title}</h3>
                  <p className="text-gray-600">{point.description}</p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Standalone Tools Section */}
      <section className="py-20 bg-gradient-to-br from-gray-50 to-blue-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-gray-900 mb-4">
              Choose Specific Tools (If You Must)
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              We offer powerful standalone modules tailored to key pain points — but real ROI comes from orchestration.
            </p>
          </div>
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            {standaloneTools.map((tool, index) => (
              <Card key={index} className="p-6 hover:shadow-lg transition-shadow border border-gray-100">
                <CardContent className="pt-4">
                  <tool.icon className="w-8 h-8 text-blue-600 mb-3" />
                  <h3 className="font-semibold text-gray-900">{tool.name}</h3>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Integrated System Section */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-gray-900 mb-4">
              Unlock Full ROI with a Complete AI System
            </h2>
            <p className="text-xl text-gray-600 max-w-4xl mx-auto">
              Clients who adopt our full-stack system experience the biggest leap in efficiency, tenant satisfaction, and cost savings.
            </p>
          </div>
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            {systemFeatures.map((feature, index) => (
              <Card key={index} className="p-6 bg-gradient-to-br from-blue-50 to-indigo-50 border border-blue-100 hover:shadow-lg transition-shadow">
                <CardContent className="pt-4">
                  <feature.icon className="w-8 h-8 text-blue-700 mb-3" />
                  <h3 className="font-semibold text-gray-900">{feature.name}</h3>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Results Section */}
      <section className="py-20 bg-gradient-to-br from-green-50 to-blue-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-gray-900 mb-4">
              What Automation Leaders Are Reporting
            </h2>
            <p className="text-xl text-gray-600 mb-12 max-w-3xl mx-auto">
              Across the property management industry, firms that adopt complete AI systems often report:
            </p>
          </div>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 mb-8">
            {results.map((result, index) => (
              <div key={index} className="flex items-center space-x-4 bg-white p-6 rounded-lg shadow-sm border border-gray-100">
                <result.icon className="w-8 h-8 text-green-600 flex-shrink-0" />
                <span className="text-lg font-medium text-gray-900">{result.text}</span>
              </div>
            ))}
          </div>
          <p className="text-sm text-gray-500 text-center italic">
            *Based on industry benchmarks and self-reported gains from automation-first PM firms.
          </p>
        </div>
      </section>

      {/* FAQ Section */}
      <section className="py-20 bg-white">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-gray-900 mb-4">
              Frequently Asked Questions
            </h2>
          </div>
          <div className="space-y-4">
            {faqs.map((faq, index) => (
              <Card key={index} className="border border-gray-200">
                <CardContent className="p-0">
                  <button
                    className="w-full text-left p-6 hover:bg-gray-50 transition-colors"
                    onClick={() => setOpenFAQ(openFAQ === index ? null : index)}
                  >
                    <div className="flex justify-between items-center">
                      <h3 className="text-lg font-semibold text-gray-900 pr-4">{faq.question}</h3>
                      {openFAQ === index ? (
                        <ArrowUp className="w-5 h-5 text-gray-500 flex-shrink-0" />
                      ) : (
                        <ArrowDown className="w-5 h-5 text-gray-500 flex-shrink-0" />
                      )}
                    </div>
                  </button>
                  {openFAQ === index && (
                    <div className="px-6 pb-6">
                      <p className="text-gray-600 leading-relaxed">{faq.answer}</p>
                    </div>
                  )}
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Final CTA Section */}
      <section className="py-20 bg-gradient-to-br from-blue-800 to-indigo-900 text-white">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-4xl font-bold mb-6">
            Ready to Transform Your Property Management Operations?
          </h2>
          <p className="text-xl mb-8 opacity-90">
            Book a free strategy session to explore how complete AI systems can automate your workflows and drive measurable ROI.
          </p>
          <Button className="bg-white hover:bg-gray-100 text-blue-800 px-8 py-4 text-lg font-semibold rounded-lg mb-4">
            Book Your AI Strategy Session
          </Button>
          <p className="text-blue-200">
            No commitment required
          </p>
          <div className="mt-8 text-sm opacity-75">
            [BOOKING_LINK]
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-gray-900 text-white py-12">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <div className="text-xl font-semibold mb-4">Rentelligence AI</div>
          <p className="text-gray-400">Complete AI Systems for Property Management</p>
        </div>
      </footer>
    </div>
  );
};

export default Index;
