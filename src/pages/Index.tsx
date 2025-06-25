
import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Dialog, DialogContent, DialogHeader, DialogTitle } from "@/components/ui/dialog";
import { Card, CardContent } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Separator } from "@/components/ui/separator";
import { 
  MessageCircle, 
  Monitor, 
  BarChart3, 
  Clock, 
  Users, 
  TrendingUp, 
  CheckCircle, 
  Shield, 
  Phone,
  ChevronDown,
  Zap,
  Target,
  Database,
  Brain
} from "lucide-react";

const Index = () => {
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [openFaq, setOpenFaq] = useState<number | null>(null);

  const aiSystems = [
    {
      icon: MessageCircle,
      title: "AI Tenant Communications",
      description: "24/7 automated responses, lease inquiries, and maintenance requests with intelligent routing"
    },
    {
      icon: Target,
      title: "Lead Nurturing Engine",
      description: "Automated follow-up sequences that convert prospects into qualified tenants faster"
    },
    {
      icon: Monitor,
      title: "Maintenance Coordination",
      description: "Smart work order management with vendor scheduling and tenant communication"
    },
    {
      icon: BarChart3,
      title: "Owner Reporting Dashboard",
      description: "Automated financial reports and performance insights delivered on schedule"
    },
    {
      icon: Database,
      title: "Unified Analytics Platform",
      description: "Single source of truth connecting all your property data for actionable insights"
    }
  ];

  const benefits = [
    "70% faster tenant response times",
    "2× faster lead-to-lease conversion",
    "60% reduction in manual administrative tasks",
    "90% of maintenance requests handled automatically",
    "Real-time owner reporting with zero manual input"
  ];

  const caseExamples = [
    {
      company: "Simplifeye + URBN Dental",
      result: "10–20 new patients/mo via live chat; 39% of leads after hours"
    },
    {
      company: "Bola AI + Heartland Dental",
      result: "18.5 min saved/hygienist/day; $22.5K/mo in added revenue"
    },
    {
      company: "Overjet AI",
      result: "10–20% jump in case acceptance after adopting diagnostic AI"
    },
    {
      company: "UiPath for RCM firms",
      result: "Saved 15,000 staff hours/month, 30% ROI from document automation"
    },
    {
      company: "Zentist AI for Billing",
      result: "49.5% of payment postings automated; 3× throughput"
    }
  ];

  const faqs = [
    {
      question: "Will AI integrate with my existing CRM and property management software?",
      answer: "Yes. Our AI systems are built with integration-first architecture. We connect seamlessly with major property management platforms like AppFolio, Buildium, RentManager, and Yardi, ensuring your existing workflows remain intact while adding intelligent automation."
    },
    {
      question: "How do I trust AI decisions for tenant requests and maintenance issues?",
      answer: "Our AI systems include human oversight protocols and escalation triggers. Critical decisions are flagged for human review, while routine communications and scheduling are handled automatically. You maintain full control with complete audit trails of all AI interactions."
    },
    {
      question: "Will this really save my staff time, or just create more work?",
      answer: "Our implementations typically save 15-25 hours per week per property manager. The AI handles routine inquiries, scheduling, and reporting automatically, freeing your team to focus on strategic relationship building and complex problem-solving that drives revenue."
    },
    {
      question: "How quickly can we see results?",
      answer: "Most clients see immediate improvements in response times within the first week. Measurable ROI typically appears within 30-60 days as automation reduces manual tasks and improves tenant satisfaction scores."
    },
    {
      question: "What about data security and compliance?",
      answer: "We maintain enterprise-grade security with SOC 2 compliance, end-to-end encryption, and GDPR readiness. Your tenant data is protected with bank-level security protocols and remains under your complete control."
    }
  ];

  return (
    <div className="min-h-screen bg-white">
      {/* Header */}
      <header className="bg-white border-b border-gray-200 sticky top-0 z-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between items-center h-16">
            <div className="flex items-center">
              <div className="w-8 h-8 bg-indigo-600 rounded-lg flex items-center justify-center">
                <Brain className="w-5 h-5 text-white" />
              </div>
              <span className="ml-3 text-xl font-bold text-gray-900">Rentelligence AI</span>
            </div>
            <div className="flex items-center space-x-4">
              <a href="tel:[PHONE_PLACEHOLDER]" className="flex items-center text-indigo-600 hover:text-indigo-800 font-medium">
                <Phone className="w-4 h-4 mr-2" />
                [PHONE_PLACEHOLDER]
              </a>
            </div>
          </div>
        </div>
      </header>

      {/* Hero Section */}
      <section className="bg-gradient-to-br from-indigo-50 to-white py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center max-w-4xl mx-auto">
            <h1 className="text-5xl md:text-6xl font-bold text-gray-900 mb-6">
              Complete AI Systems for 
              <span className="text-indigo-600"> Property Management</span>
            </h1>
            <p className="text-xl text-gray-600 mb-8 leading-relaxed">
              Stop juggling disconnected tools. Get end-to-end AI automation that handles tenant communications, lead nurturing, maintenance coordination, and owner reporting—all in one integrated system.
            </p>
            <Button 
              onClick={() => setIsModalOpen(true)}
              className="bg-indigo-600 hover:bg-indigo-700 text-white px-8 py-4 text-lg font-semibold rounded-lg shadow-lg hover:shadow-xl transition-all duration-200"
            >
              Book Your AI Strategy Session
            </Button>
            <p className="text-sm text-gray-500 mt-4">
              No commitment required • 30-minute consultation
            </p>
          </div>
        </div>
      </section>

      {/* Problem Agitation */}
      <section className="py-16 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-4xl mx-auto text-center">
            <h2 className="text-3xl font-bold text-gray-900 mb-8">
              Property Managers Lose Money Every Day to Manual Workflows
            </h2>
            <div className="grid md:grid-cols-3 gap-8">
              <div className="text-center">
                <div className="w-16 h-16 bg-red-100 rounded-full flex items-center justify-center mx-auto mb-4">
                  <Clock className="w-8 h-8 text-red-600" />
                </div>
                <h3 className="font-semibold text-gray-900 mb-2">Hours Lost Daily</h3>
                <p className="text-gray-600">Answering the same tenant questions, scheduling maintenance, and creating manual reports</p>
              </div>
              <div className="text-center">
                <div className="w-16 h-16 bg-red-100 rounded-full flex items-center justify-center mx-auto mb-4">
                  <Users className="w-8 h-8 text-red-600" />
                </div>
                <h3 className="font-semibold text-gray-900 mb-2">Leads Go Cold</h3>
                <p className="text-gray-600">Prospects wait days for responses while your team handles routine administrative tasks</p>
              </div>
              <div className="text-center">
                <div className="w-16 h-16 bg-red-100 rounded-full flex items-center justify-center mx-auto mb-4">
                  <TrendingUp className="w-8 h-8 text-red-600" />
                </div>
                <h3 className="font-semibold text-gray-900 mb-2">Revenue Leaks</h3>
                <p className="text-gray-600">Disconnected tools create data silos and missed opportunities for growth</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* AI Systems Overview */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-gray-900 mb-4">
              Your Complete AI Transformation
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              We don't sell individual tools. We deliver integrated AI systems that work together to transform your entire operation.
            </p>
          </div>
          
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {aiSystems.map((system, index) => (
              <Card key={index} className="border-2 border-gray-100 hover:border-indigo-200 transition-colors duration-200">
                <CardContent className="p-6">
                  <div className="w-12 h-12 bg-indigo-100 rounded-lg flex items-center justify-center mb-4">
                    <system.icon className="w-6 h-6 text-indigo-600" />
                  </div>
                  <h3 className="text-xl font-semibold text-gray-900 mb-3">{system.title}</h3>
                  <p className="text-gray-600">{system.description}</p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Benefits Section */}
      <section className="py-20 bg-indigo-600">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-white mb-4">
              Measurable Results from Day One
            </h2>
            <p className="text-xl text-indigo-100 max-w-3xl mx-auto">
              Our clients see immediate improvements in efficiency, tenant satisfaction, and bottom-line results.
            </p>
          </div>
          
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {benefits.map((benefit, index) => (
              <div key={index} className="flex items-center space-x-3 bg-white/10 backdrop-blur-sm rounded-lg p-4">
                <CheckCircle className="w-6 h-6 text-green-400 flex-shrink-0" />
                <span className="text-white font-medium">{benefit}</span>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Case Examples */}
      <section className="py-20 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-gray-900 mb-4">
              Real-World AI System Results
            </h2>
            <p className="text-xl text-gray-600 max-w-4xl mx-auto mb-8">
              These are real-world results from industry deployments that illustrate what's possible with AI systems. Rentelligence AI is built on the same principles of system-wide automation—adapted specifically for property management firms.
            </p>
          </div>
          
          <div className="grid md:grid-cols-2 gap-8">
            {caseExamples.map((example, index) => (
              <Card key={index} className="border-l-4 border-l-indigo-600">
                <CardContent className="p-6">
                  <h3 className="font-semibold text-gray-900 mb-2">{example.company}</h3>
                  <p className="text-gray-600">{example.result}</p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* FAQ Section */}
      <section className="py-20 bg-white">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-gray-900 mb-4">
              Common Questions About AI Implementation
            </h2>
          </div>
          
          <div className="space-y-4">
            {faqs.map((faq, index) => (
              <Card key={index} className="border border-gray-200">
                <CardContent className="p-0">
                  <button
                    onClick={() => setOpenFaq(openFaq === index ? null : index)}
                    className="w-full text-left p-6 flex justify-between items-center hover:bg-gray-50 transition-colors"
                  >
                    <span className="font-semibold text-gray-900">{faq.question}</span>
                    <ChevronDown className={`w-5 h-5 text-gray-500 transition-transform ${openFaq === index ? 'rotate-180' : ''}`} />
                  </button>
                  {openFaq === index && (
                    <div className="px-6 pb-6">
                      <Separator className="mb-4" />
                      <p className="text-gray-600 leading-relaxed">{faq.answer}</p>
                    </div>
                  )}
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Security & Compliance */}
      <section className="py-16 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center">
            <h3 className="text-2xl font-bold text-gray-900 mb-8">Enterprise-Grade Security & Compliance</h3>
            <div className="flex justify-center items-center space-x-8 flex-wrap">
              <Badge variant="outline" className="px-4 py-2 text-sm font-medium">
                <Shield className="w-4 h-4 mr-2" />
                SOC 2 Compliant
              </Badge>
              <Badge variant="outline" className="px-4 py-2 text-sm font-medium">
                <Shield className="w-4 h-4 mr-2" />
                GDPR Ready
              </Badge>
              <Badge variant="outline" className="px-4 py-2 text-sm font-medium">
                <Shield className="w-4 h-4 mr-2" />
                Bank-Level Encryption
              </Badge>
            </div>
          </div>
        </div>
      </section>

      {/* Final CTA */}
      <section className="py-20 bg-gray-900">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-4xl font-bold text-white mb-6">
            Ready to Transform Your Property Management Business?
          </h2>
          <p className="text-xl text-gray-300 mb-8">
            Book a 30-minute strategy session to see how complete AI systems can automate your workflows and drive measurable ROI.
          </p>
          <Button 
            onClick={() => setIsModalOpen(true)}
            className="bg-indigo-600 hover:bg-indigo-700 text-white px-8 py-4 text-lg font-semibold rounded-lg shadow-lg hover:shadow-xl transition-all duration-200"
          >
            <Zap className="w-5 h-5 mr-2" />
            Book Your AI Strategy Session
          </Button>
        </div>
      </section>

      {/* Booking Modal */}
      <Dialog open={isModalOpen} onOpenChange={setIsModalOpen}>
        <DialogContent className="max-w-4xl max-h-[90vh] overflow-hidden">
          <DialogHeader>
            <DialogTitle className="text-2xl font-bold text-center">Book Your AI Strategy Session</DialogTitle>
          </DialogHeader>
          <div className="w-full h-[600px]">
            <iframe
              src="https://crm.myrentelligence.ai/call-booking"
              className="w-full h-full border-0 rounded-lg"
              title="Book Strategy Session"
            />
          </div>
        </DialogContent>
      </Dialog>
    </div>
  );
};

export default Index;
