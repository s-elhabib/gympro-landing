
import { Users, Building2, Calendar, CreditCard, MessageSquare, Smartphone } from "lucide-react";

const faqs = [
  {
    question: "How do I track member attendance?",
    answer: "Our platform provides real-time check-in systems and automated attendance tracking to monitor member activity patterns...",
    icon: <Users className="w-6 h-6 text-primary dark:text-white" />,
  },
  {
    question: "Can I manage multiple gym locations?",
    answer: "Yes! Our platform supports multi-location management with centralized control and location-specific insights...",
    icon: <Building2 className="w-6 h-6 text-primary dark:text-white" />,
  },
  {
    question: "How does class scheduling work?",
    answer: "Our intuitive calendar system allows you to manage classes, instructors, and member bookings in one place...",
    icon: <Calendar className="w-6 h-6 text-primary dark:text-white" />,
  },
  {
    question: "What payment systems are supported?",
    answer: "We integrate with major payment processors and support recurring memberships, class passes, and point-of-sale transactions...",
    icon: <CreditCard className="w-6 h-6 text-primary dark:text-white" />,
  },
  {
    question: "How can I engage with members?",
    answer: "Use our built-in communication tools to send announcements, track progress, and maintain member relationships...",
    icon: <MessageSquare className="w-6 h-6 text-primary dark:text-white" />,
  },
  {
    question: "Is there a mobile app available?",
    answer: "Yes! Members can access schedules, book classes, and track their progress through our mobile app...",
    icon: <Smartphone className="w-6 h-6 text-primary dark:text-white" />,
  },
];

const FAQ = () => {
  return (
    <section id="faq" className="relative py-24 px-6 bg-gray-900 overflow-hidden">
      <div className="absolute inset-0 bg-gradient-to-b from-[#1a1f24] via-[#1F2937] to-gray-900" />
      
      <div className="relative z-10 max-w-6xl mx-auto">
        <div className="flex items-center gap-2 justify-center mb-4">
          <div className="w-6 h-6 rounded-full border border-white/20 flex items-center justify-center">
            <span className="text-sm text-white">?</span>
          </div>
          <span className="text-sm text-gray-400">Common Questions</span>
        </div>
        
        <h2 className="text-4xl md:text-6xl font-bold text-center mb-16 text-white">
          Everything you need to know
        </h2>
        
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {faqs.map((faq, index) => (
            <div 
              key={index} 
              className="bg-gray-800/50 backdrop-blur-sm p-8 rounded-3xl hover:shadow-lg transition-all duration-300 border border-gray-700"
            >
              <div className="w-12 h-12 rounded-xl bg-gray-700/50 flex items-center justify-center mb-6">
                {faq.icon}
              </div>
              <h3 className="text-xl font-medium mb-3 text-white">{faq.question}</h3>
              <p className="text-gray-400 text-sm">{faq.answer}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default FAQ;
