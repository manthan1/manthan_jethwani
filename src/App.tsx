import { useState, useEffect } from 'react';
import { ChevronDown, ArrowRight, Calendar, Clock, MapPin, CheckCircle2, PlayCircle, Users, Target } from 'lucide-react';
import { motion, AnimatePresence } from 'motion/react';

const FAQItem = ({ question, answer }: { question: string, answer: string }) => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <div className="border-b border-slate-200 py-6">
      <button 
        onClick={() => setIsOpen(!isOpen)} 
        className="flex justify-between items-center w-full text-left focus:outline-none group"
      >
        <span className="font-display text-xl font-medium tracking-tight text-slate-900 group-hover:text-blue-600 transition-colors pr-4">{question}</span>
        <div className={`w-8 h-8 shrink-0 rounded-full flex items-center justify-center transition-colors ${isOpen ? 'bg-blue-100 text-blue-600' : 'bg-slate-100 text-slate-500 group-hover:bg-blue-50 group-hover:text-blue-600'}`}>
          <ChevronDown className={`w-5 h-5 transition-transform duration-300 ${isOpen ? 'rotate-180' : ''}`} />
        </div>
      </button>
      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ height: 0, opacity: 0 }}
            animate={{ height: 'auto', opacity: 1 }}
            exit={{ height: 0, opacity: 0 }}
            className="overflow-hidden"
          >
            <p className="mt-4 text-slate-600 text-lg leading-relaxed font-sans max-w-3xl pb-2">
              {answer}
            </p>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
};

export default function App() {
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 50);
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <div className="min-h-screen bg-slate-50/50 font-sans text-slate-900 selection:bg-blue-100 selection:text-blue-900">
      {/* Navigation */}
      <nav className={`fixed w-full z-50 transition-all duration-300 ${scrolled ? 'bg-white/80 backdrop-blur-xl shadow-sm shadow-slate-200/50 py-4 border-b border-slate-200' : 'bg-transparent py-6'}`}>
        <div className="max-w-7xl mx-auto px-6 lg:px-12 flex items-center justify-between">
          <div className="flex items-center gap-3">
            <div className="w-9 h-9 rounded-xl bg-gradient-to-br from-blue-600 to-indigo-600 shadow-md shadow-blue-600/20 flex items-center justify-center text-white font-display font-bold text-lg">
              P
            </div>
            <span className="font-display font-semibold text-xl tracking-tight text-slate-900">Phaze AI</span>
          </div>
          <div className="hidden md:flex items-center gap-8">
            <a href="#about" className="text-sm font-medium text-slate-600 hover:text-blue-600 transition-colors">The Workshop</a>
            <a href="#curriculum" className="text-sm font-medium text-slate-600 hover:text-blue-600 transition-colors">Curriculum</a>
            <a href="#instructor" className="text-sm font-medium text-slate-600 hover:text-blue-600 transition-colors">Instructor</a>
          </div>
          <a href="#register" className="bg-blue-600 text-white hover:bg-blue-700 hover:shadow-lg hover:shadow-blue-600/20 transition-all px-6 py-2.5 text-sm font-medium rounded-full">
            Reserve a Seat
          </a>
        </div>
      </nav>

      {/* Hero Section */}
      <header className="pt-40 pb-20 px-6 lg:px-12 max-w-7xl mx-auto flex flex-col lg:flex-row gap-16 lg:gap-20 items-center">
        <div className="flex-1 space-y-10">
          <div className="space-y-6">
            <div className="inline-flex items-center gap-2 border border-blue-200 bg-blue-50 px-4 py-1.5 text-xs font-bold uppercase tracking-widest text-blue-700 rounded-full shadow-sm">
              <span className="w-2 h-2 rounded-full bg-blue-500 animate-pulse" />
              Workshop • Jaipur • 18th July
            </div>
            
            <h1 className="text-5xl sm:text-6xl lg:text-7xl font-display font-semibold tracking-tight text-slate-900 leading-[1.1]">
              AI, made useful for <br />
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-600 to-indigo-600">your business.</span>
            </h1>
            
            <p className="text-xl sm:text-2xl text-slate-600 leading-relaxed max-w-2xl font-normal">
              Learn how to use AI in your business, and how to scale your brand on social media — practical sessions built for business owners, not engineers.
            </p>
          </div>

          <div className="flex flex-col sm:flex-row items-center gap-6 pt-4">
            <a href="#register" className="w-full sm:w-auto bg-blue-600 text-white hover:bg-blue-700 hover:shadow-xl hover:shadow-blue-600/30 transition-all px-8 py-4 text-lg font-medium flex items-center justify-center gap-3 rounded-full group">
              Register Now
              <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
            </a>
            <div className="text-slate-500 text-sm w-full sm:w-auto text-center sm:text-left">
              Starting at <span className="font-semibold text-slate-900">₹1,999</span> / session. <br className="hidden sm:block"/>
              Combined pass available.
            </div>
          </div>
        </div>

        {/* Hero Visual - Premium & Soft */}
        <div className="flex-1 w-full max-w-xl lg:max-w-none">
          <div className="relative aspect-square sm:aspect-[4/3] lg:aspect-[4/4.5] w-full rounded-[2rem] overflow-hidden shadow-2xl shadow-indigo-900/10 border border-white bg-white/60 backdrop-blur-3xl group">
            
            {/* Background abstract decoration for color & depth */}
            <div className="absolute -top-32 -right-32 w-80 h-80 bg-blue-200/50 rounded-full mix-blend-multiply filter blur-3xl opacity-70 group-hover:bg-blue-300/50 transition-colors duration-700" />
            <div className="absolute -bottom-32 -left-32 w-80 h-80 bg-indigo-200/50 rounded-full mix-blend-multiply filter blur-3xl opacity-70 group-hover:bg-indigo-300/50 transition-colors duration-700" />
            
            {/* Inner Dashboard Placeholder Layer */}
            <div className="absolute inset-4 sm:inset-8 bg-white rounded-3xl shadow-sm border border-slate-100 flex flex-col overflow-hidden">
              <div className="h-12 border-b border-slate-100 flex items-center px-6 gap-2 bg-slate-50/50">
                <div className="w-3 h-3 rounded-full bg-slate-200" />
                <div className="w-3 h-3 rounded-full bg-slate-200" />
                <div className="w-3 h-3 rounded-full bg-slate-200" />
              </div>
              <div className="flex-1 flex flex-col items-center justify-center p-8 text-center bg-gradient-to-b from-white to-slate-50">
                <div className="w-20 h-20 mb-6 bg-blue-50 rounded-2xl flex items-center justify-center text-blue-600 shadow-inner border border-blue-100">
                  <PlayCircle className="w-10 h-10" />
                </div>
                <p className="font-display font-semibold text-xl text-slate-800">Workshop Environment</p>
                <p className="text-slate-500 mt-2 text-sm max-w-[250px]">Live demonstrations and practical problem-solving sessions.</p>
              </div>
            </div>
          </div>
        </div>
      </header>

      {/* Quick Logistics Bar */}
      <section className="px-6 lg:px-12 -mt-8 relative z-20">
        <div className="max-w-5xl mx-auto bg-white rounded-2xl shadow-xl shadow-slate-200/50 border border-slate-100 p-6 sm:p-8 flex flex-col sm:flex-row divide-y sm:divide-y-0 sm:divide-x divide-slate-100 gap-6 sm:gap-0">
          <div className="flex-1 flex items-center gap-4 sm:justify-center sm:px-6">
            <div className="w-12 h-12 rounded-full bg-blue-50 flex items-center justify-center shrink-0">
              <Calendar className="w-6 h-6 text-blue-600" />
            </div>
            <div>
              <p className="text-sm font-semibold text-slate-500 uppercase tracking-wider mb-1">Date</p>
              <p className="font-medium text-slate-900 text-lg">Saturday, 18th July</p>
            </div>
          </div>
          <div className="flex-1 flex items-center gap-4 sm:justify-center sm:px-6 pt-6 sm:pt-0">
            <div className="w-12 h-12 rounded-full bg-indigo-50 flex items-center justify-center shrink-0">
              <Clock className="w-6 h-6 text-indigo-600" />
            </div>
            <div>
              <p className="text-sm font-semibold text-slate-500 uppercase tracking-wider mb-1">Time</p>
              <p className="font-medium text-slate-900 text-lg">12:00 PM – 5:00 PM</p>
            </div>
          </div>
          <div className="flex-1 flex items-center gap-4 sm:justify-center sm:px-6 pt-6 sm:pt-0">
            <div className="w-12 h-12 rounded-full bg-blue-50 flex items-center justify-center shrink-0">
              <MapPin className="w-6 h-6 text-blue-600" />
            </div>
            <div>
              <p className="text-sm font-semibold text-slate-500 uppercase tracking-wider mb-1">Venue</p>
              <p className="font-medium text-slate-900 text-lg">JECRC University</p>
            </div>
          </div>
        </div>
      </section>

      {/* Quote / Context Segment */}
      <section id="about" className="mt-32 py-32 px-6 lg:px-12 bg-slate-900 relative overflow-hidden">
        {/* Soft atmospheric background inside dark section */}
        <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_top_right,_var(--tw-gradient-stops))] from-blue-900/60 via-slate-900 to-slate-900" />
        
        <div className="max-w-7xl mx-auto flex flex-col md:flex-row gap-12 lg:gap-24 items-start relative z-10">
          <div className="md:w-1/3">
            <h2 className="text-sm font-bold uppercase tracking-widest text-blue-400 mb-6 flex items-center gap-3">
              <span className="w-8 h-px bg-blue-400" /> Why This, Why Now
            </h2>
          </div>
          <div className="md:w-2/3 space-y-10">
            <blockquote className="text-3xl sm:text-4xl md:text-4xl lg:text-5xl font-display font-medium leading-[1.2] text-white">
              "The businesses that adopted the internet early didn't wait for it to mature. <span className="text-slate-400">The same is happening with AI — right now.</span>"
            </blockquote>
            <p className="text-xl leading-relaxed text-slate-300 max-w-3xl font-light">
              Every business owner has heard about AI. Few have actually used it to change how their business runs day to day, or how their brand shows up on social media. This workshop closes that gap — with the same tools and AI agents already being used to move faster, on the same budget.
            </p>
          </div>
        </div>
      </section>

      {/* Curriculum */}
      <section id="curriculum" className="py-32 px-6 lg:px-12 relative">
        <div className="max-w-7xl mx-auto">
          <div className="mb-20 text-center">
            <h2 className="text-sm font-bold uppercase tracking-widest text-blue-600 mb-4 tracking-widest">Two Sessions, One Day</h2>
            <h3 className="text-4xl sm:text-5xl font-display font-semibold tracking-tight text-slate-900">The Curriculum</h3>
          </div>

          <div className="grid lg:grid-cols-2 gap-8 lg:gap-12 relative">
            
            {/* Session 1 Card */}
            <div className="bg-white p-8 sm:p-12 rounded-[2.5rem] border border-slate-200 shadow-lg shadow-slate-200/50 hover:shadow-xl hover:shadow-blue-900/5 transition-all group relative overflow-hidden">
              <div className="absolute top-0 right-0 w-48 h-48 bg-blue-50 rounded-bl-full -z-0 opacity-50 group-hover:scale-110 transition-transform duration-500" />
              
              <div className="relative z-10">
                <div className="inline-flex border border-slate-200 bg-slate-50 px-4 py-2 text-sm font-medium text-slate-700 rounded-full mb-8">
                  12:00 PM – 2:00 PM
                </div>
                <h4 className="text-3xl font-display font-semibold tracking-tight text-slate-900 mb-8">AI for Business</h4>
                
                <ul className="space-y-6">
                  {[
                    "What AI actually is, why it matters now, and how it compares to past tech shifts (internet, smartphones, cloud)",
                    "Using AI tools: ChatGPT, Gemini, Claude, NotebookLM",
                    "Building AI agents for every department — HR, Content, SEO/Ads, Operations, Sales",
                    "Common misconceptions, and what NOT to do with AI",
                    "Comparing AI implementation to hiring a new employee — it takes onboarding and time, not magic"
                  ].map((item, idx) => (
                    <li key={idx} className="flex items-start gap-4 text-slate-700 text-lg">
                      <CheckCircle2 className="w-6 h-6 text-blue-500 shrink-0 mt-0.5" />
                      <span className="leading-relaxed">{item}</span>
                    </li>
                  ))}
                </ul>
              </div>
            </div>

            {/* Session 2 Card */}
            <div className="bg-white p-8 sm:p-12 rounded-[2.5rem] border border-slate-200 shadow-lg shadow-slate-200/50 hover:shadow-xl hover:shadow-indigo-900/5 transition-all group relative overflow-hidden">
              <div className="absolute top-0 right-0 w-48 h-48 bg-indigo-50 rounded-bl-full -z-0 opacity-50 group-hover:scale-110 transition-transform duration-500" />
              
              <div className="relative z-10">
                <div className="inline-flex border border-slate-200 bg-slate-50 px-4 py-2 text-sm font-medium text-slate-700 rounded-full mb-8">
                  03:00 PM – 5:00 PM
                </div>
                <h4 className="text-3xl font-display font-semibold tracking-tight text-slate-900 mb-8">AI for Content <br className="hidden sm:block"/>& Social Media</h4>
                
                <ul className="space-y-6">
                  {[
                    "How to scale your brand's presence on social media using AI",
                    "7 different Claude skills and AI agents for content creation, repurposing, and distribution",
                    "Building a content system, not just one-off posts",
                    "Live demos — not theory, practical implementations"
                  ].map((item, idx) => (
                    <li key={idx} className="flex items-start gap-4 text-slate-700 text-lg">
                      <CheckCircle2 className="w-6 h-6 text-indigo-500 shrink-0 mt-0.5" />
                      <span className="leading-relaxed">{item}</span>
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Target & Outcomes */}
      <section className="py-24 px-6 lg:px-12 bg-white">
        <div className="max-w-7xl mx-auto grid lg:grid-cols-2 gap-12 lg:gap-16">
          
          {/* Who This Is For */}
          <div className="bg-slate-50 p-10 sm:p-12 rounded-[2.5rem] border border-slate-200/60">
            <div className="w-16 h-16 bg-orange-100 rounded-2xl flex items-center justify-center mb-8 border border-orange-200 shadow-inner">
               <Users className="w-8 h-8 text-orange-600" />
            </div>
            <h3 className="text-3xl font-display font-semibold tracking-tight mb-8 text-slate-900">Who This Is For</h3>
            <div className="space-y-4">
               {[
                 "Small & medium business owners",
                 "Founders & operators",
                 "Marketing/content leads",
                 "Anyone tired of AI hype with no substance"
               ].map((item, idx) => (
                 <div key={idx} className="flex items-center gap-4 p-5 bg-white border border-slate-200 rounded-2xl shadow-sm">
                   <div className="w-8 h-8 rounded-full bg-orange-50 text-orange-600 flex items-center justify-center font-bold text-sm shrink-0">
                     0{idx + 1}
                   </div>
                   <span className="text-lg font-medium text-slate-800">{item}</span>
                 </div>
               ))}
            </div>
          </div>

          {/* What You'll Walk Away With */}
          <div className="bg-slate-50 p-10 sm:p-12 rounded-[2.5rem] border border-slate-200/60">
            <div className="w-16 h-16 bg-emerald-100 rounded-2xl flex items-center justify-center mb-8 border border-emerald-200 shadow-inner">
               <Target className="w-8 h-8 text-emerald-600" />
            </div>
             <h3 className="text-3xl font-display font-semibold tracking-tight mb-8 text-slate-900">What You'll Walk Away With</h3>
             <ul className="space-y-6">
                {[
                  "A working understanding of AI tools directly relevant to your business model.",
                  "7 Claude skills and AI agents you can plug in and start using immediately.",
                  "A repeatable framework for scaling your brand's content entirely on social media.",
                  "Clarity on what AI can and can't do — and how to set realistic expectations (like onboarding a new employee)."
                ].map((item, idx) => (
                  <li key={idx} className="flex gap-4">
                    <div className="w-1.5 h-1.5 rounded-full bg-emerald-500 mt-2.5 shrink-0" />
                    <p className="text-xl text-slate-700 leading-relaxed">{item}</p>
                  </li>
                ))}
              </ul>
          </div>
        </div>
      </section>

      {/* Trainer Profile */}
      <section id="instructor" className="py-32 px-6 lg:px-12 bg-slate-50/50">
        <div className="max-w-5xl mx-auto flex flex-col md:flex-row gap-12 lg:gap-16 items-start bg-white p-8 md:p-16 rounded-[3rem] border border-slate-200 shadow-xl shadow-slate-200/50">
          
          <div className="w-full md:w-1/3 shrink-0">
            <div className="aspect-[4/5] bg-gradient-to-br from-slate-100 to-slate-200 rounded-[2rem] border border-slate-200 flex items-center justify-center p-8 text-center shadow-inner relative overflow-hidden">
              <div className="text-slate-400 font-medium">
                <div className="w-16 h-16 mx-auto mb-4 bg-white rounded-full flex items-center justify-center shadow-sm">
                  <Users className="w-8 h-8 text-slate-300" />
                </div>
                [ Trainer Image ]
              </div>
            </div>
          </div>
          
          <div className="w-full md:w-2/3 space-y-8">
            <div>
              <h2 className="text-sm font-bold uppercase tracking-widest text-blue-600 mb-4">The Instructor</h2>
              <h3 className="text-4xl font-display font-semibold tracking-tight text-slate-900">Manthan Jethwani</h3>
              <p className="text-xl text-slate-500 mt-2">Founder, Phaze AI</p>
            </div>

            <p className="text-xl text-slate-600 leading-relaxed">
              Manthan runs Phaze AI, an agency helping businesses adopt AI through practical tools, custom AI agents, and hands-on training — not theory. 
            </p>
            
            <p className="text-xl text-slate-600 leading-relaxed">
              This session is built from real implementation work across content, sales, operations, and marketing — the same playbooks used with paying clients, simplified for a room of business owners.
            </p>
            
            <div className="pt-4">
              <a href="mailto:manthanjethwani@phazeai.com" className="inline-flex items-center gap-3 text-blue-600 font-medium hover:text-blue-700 bg-blue-50 px-6 py-3 rounded-full hover:bg-blue-100 transition-colors">
                Contact Manthan
                <ArrowRight className="w-4 h-4" />
              </a>
            </div>
          </div>
        </div>
      </section>

      {/* FAQ Section */}
      <section className="py-32 px-6 lg:px-12 bg-white">
        <div className="max-w-4xl mx-auto">
          <div className="mb-16 text-center">
             <h2 className="text-sm font-bold uppercase tracking-widest text-blue-600 mb-4">Details & Logistics</h2>
             <h3 className="text-4xl font-display font-semibold tracking-tight text-slate-900">Common Questions</h3>
          </div>
          
          <div className="border-t border-slate-200">
            <FAQItem 
              question="Is this beginner-friendly?" 
              answer="Yes — no technical background needed. The sessions are built for business owners and operators, not software engineers." 
            />
            <FAQItem 
              question="What is included in the ticket?" 
              answer="Access to your selected session(s), all physical workbook materials, and the digital AI agent templates covered live during the workshop." 
            />
            <FAQItem 
              question="Can my entire team attend?" 
              answer="Yes, multiple seats can be booked so you and your team can learn and implement the playbooks together." 
            />
            <FAQItem 
              question="What is the refund and reschedule policy?" 
              answer="Tickets are fully refundable up to 48 hours before the event. You can also transfer your ticket to a colleague if you are unable to attend." 
            />
          </div>
        </div>
      </section>

      {/* Footer / Final CTA */}
      <footer id="register" className="bg-slate-900 relative pt-32 pb-16 px-6 lg:px-12 overflow-hidden">
        {/* Glow Effects */}
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[800px] bg-blue-600/20 rounded-full blur-[120px] pointer-events-none" />
        
        <div className="max-w-7xl mx-auto text-center relative z-10">
          <h2 className="text-5xl sm:text-6xl md:text-7xl font-display font-semibold tracking-tighter mb-8 text-white">
            Reserve Your Seat.
          </h2>
          <p className="text-xl text-slate-300 font-light mb-12 max-w-2xl mx-auto">
            Seats are strictly limited to keep this a working session, not a lecture hall.
          </p>
          
          <div className="flex flex-col items-center gap-6">
            <button className="bg-blue-600 text-white hover:bg-blue-500 hover:shadow-2xl hover:shadow-blue-500/50 hover:-translate-y-1 transition-all duration-300 px-12 py-5 text-xl font-medium rounded-full">
              Register via Razorpay
            </button>
            <p className="text-slate-400 text-base tracking-wide flex flex-wrap justify-center gap-2">
              <span>₹1,999 / session</span> 
              <span className="hidden sm:inline">•</span> 
              <span>₹3,000 combined</span> 
              <span className="text-blue-400 font-medium px-2 py-0.5 bg-blue-500/10 rounded-full">(Save ₹998)</span>
            </p>
          </div>
        </div>

        <div className="max-w-7xl mx-auto mt-32 pt-8 border-t border-slate-800 flex flex-col md:flex-row items-center justify-between gap-6 text-slate-400 text-sm font-sans relative z-10">
          <div className="flex items-center gap-3">
             <div className="w-8 h-8 rounded-lg bg-slate-800 flex items-center justify-center text-slate-300 font-display font-bold text-sm shadow-sm border border-slate-700">
               P
             </div>
             <span className="tracking-wide">Phaze AI × JECRC University</span>
          </div>
          <div className="flex gap-6 items-center">
            <span>18th July, Jaipur.</span>
            <a href="mailto:manthanjethwani@phazeai.com" className="text-blue-400 hover:text-blue-300 transition-colors">manthanjethwani@phazeai.com</a>
          </div>
        </div>
      </footer>
    </div>
  );
}
