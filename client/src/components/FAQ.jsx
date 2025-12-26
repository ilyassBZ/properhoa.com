import { useState } from "react";

export default function FAQ() {
  const [openIndex, setOpenIndex] = useState(null);

  const faqs = [
    {
      question: "Is this software complicated to use?",
      answer: "No. If you can send an email, you can use ProperHOA. No training required."
    },
    {
      question: "Does this replace our HOA management company?",
      answer: "If you're already self-managed — YES. If not, this replaces 80% of management tasks at a fraction of the cost."
    },
    {
      question: "Can renters access the system?",
      answer: "Only if your board approves. All residency is verified automatically."
    },
    {
      question: "What if only a few people want to use it?",
      answer: "It still works. Homeowners can view records anytime, even if not everyone participates."
    },
    {
      question: "Is my data secure?",
      answer: "2FA, encrypted storage, and legal-grade audit logging included."
    }
  ];

  const toggleFAQ = (index) => {
    setOpenIndex(openIndex === index ? null : index);
  };

  return (
    <div className="faq-container">
      {faqs.map((faq, index) => (
        <div 
          key={index} 
          className={`faq-item ${openIndex === index ? 'open' : ''}`}
        >
          <button 
            className="faq-question"
            onClick={() => toggleFAQ(index)}
            aria-expanded={openIndex === index}
          >
            <span>{faq.question}</span>
            <span className="faq-icon">
              {openIndex === index ? '−' : '+'}
            </span>
          </button>
          <div className="faq-answer">
            <p>{faq.answer}</p>
          </div>
        </div>
      ))}
    </div>
  );
}

