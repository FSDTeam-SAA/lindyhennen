"use client"
import { SetStateAction, useState } from "react"

const FAQ = () => {
  const [openIndex, setOpenIndex] = useState(0)

  const faqItems = [
    {
      question: "Is there a free trial available?",
      answer:
        "Yes, you can try us for free for 30 days. If you want, we'll provide you with a free, personalized 30-minute onboarding call to get you up and running as soon as possible.",
    },
    {
      question: "Can I change my plan later?",
      answer:
        "Yes, you can upgrade or downgrade your plan at any time. Changes to your plan will be reflected in your next billing cycle.",
    },
    {
      question: "What is your cancellation policy?",
      answer:
        "You can cancel your subscription at any time. If you cancel, you'll continue to have access to your plan until the end of your current billing period.",
    },
    {
      question: "Can other info be added to an invoice?",
      answer:
        "Yes, you can add custom information to your invoices such as purchase order numbers, project codes, or additional billing details through your account settings.",
    },
    {
      question: "How does billing work?",
      answer:
        "We offer monthly and annual billing options. Payments are processed securely and you'll receive an email receipt after each successful payment. You can update your payment method at any time.",
    },
    {
      question: "How do I change my account email?",
      answer:
        "You can change your account email by going to Account Settings → Profile. You'll need to verify the new email address before the change takes effect.",
    },
  ]

  const toggleFAQ = (index: SetStateAction<number>) => {
    setOpenIndex(openIndex === index ? -1 : index)
  }

  return (
    <section className="relative py-16 md:py-24 bg-[url('/faq.jpg')] bg-cover bg-center">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8 max-w-3xl">
        {/* Header Section */}
        <div className="text-center mb-12 md:mb-16">
          <h5 className="text-sm font-semibold text-gray-600 uppercase tracking-widest mb-3">FAQs</h5>
          <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-4">Frequently Asked Questions</h2>
          <p className="text-lg text-gray-600 max-w-2xl mx-auto">
            Answers to common questions about buying, selling, and valuing your home
          </p>
        </div>

        {/* FAQ Items */}
        <div className="space-y-4">
          {faqItems.map((item, index) => {
            const isOpen = openIndex === index

            return (
              <div key={index} className="border-b border-gray-200 last:border-b-0">
                <button
                  onClick={() => toggleFAQ(index)}
                  className="flex justify-between items-center w-full py-5 text-left focus:outline-none group"
                  aria-expanded={isOpen}
                >
                  <span className="text-base font-medium text-[#212121] pr-8">{item.question}</span>
                  <div
                    className={`flex-shrink-0 flex items-center justify-center w-6 h-6 rounded-full transition-colors duration-200 ${isOpen ? "bg-primary" : "bg-primary"} hover:bg-primary`}
                  >
                    <svg className="w-4 h-4 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      {isOpen ? (
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={3} d="M20 12H4" />
                      ) : (
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={3} d="M12 4v16m8-8H4" />
                      )}
                    </svg>
                  </div>
                </button>

                {/* Answer Section */}
                {isOpen && (
                  <div className="pb-5 pt-2">
                    <p className="text-gray-600 leading-relaxed">{item.answer}</p>
                  </div>
                )}
              </div>
            )
          })}
        </div>
      </div>
    </section>
  )
}

export default FAQ
