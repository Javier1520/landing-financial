'use client';

import React, { useState } from 'react';
import { ChevronDown, ChevronUp } from 'lucide-react';

const faqs = [
  {
    question: 'What types of investment services do you offer?',
    answer: 'We offer a comprehensive range of investment services including market analysis, portfolio management, cryptocurrency consulting, risk assessment, and personalized investment strategies. Our services are tailored to both beginners and experienced investors.',
  },
  {
    question: 'How do you approach cryptocurrency investments?',
    answer: 'Our approach to cryptocurrency investments combines technical analysis, market research, and risk management. We help clients understand the crypto market, select appropriate assets, and implement strategies that align with their risk tolerance and investment goals.',
  },
  {
    question: 'What is your fee structure?',
    answer: 'Our fee structure varies based on the services provided and the size of the investment portfolio. We offer transparent pricing with no hidden fees. Contact us for a detailed breakdown of our fee structure and to discuss which service package best suits your needs.',
  },
  {
    question: 'How do you help clients manage investment risks?',
    answer: 'We employ a multi-faceted approach to risk management including portfolio diversification, regular market analysis, and setting stop-loss strategies. We also provide ongoing education to help clients understand and navigate market risks effectively.',
  },
  {
    question: 'Can I get started with a small investment?',
    answer: 'Yes, we work with clients at various investment levels. Our goal is to help you grow your wealth regardless of your starting point. We can create a customized strategy that fits your budget and financial goals.',
  },
  {
    question: 'How often will I receive updates about my investments?',
    answer: 'We provide regular monthly reports and real-time updates for significant market events affecting your portfolio. Additionally, clients have access to our platform for monitoring their investments, and we schedule quarterly review meetings to discuss performance and strategy adjustments.',
  },
];

export default function FAQ() {
  const [openIndex, setOpenIndex] = useState<number | null>(null);

  const toggleFAQ = (index: number) => {
    setOpenIndex(openIndex === index ? null : index);
  };

  return (
    <section id="faq" className="py-24 bg-gray-50">
      <div className="mx-auto max-w-7xl px-6 lg:px-8">
        <div className="mx-auto max-w-2xl lg:text-center">
          <h2 className="text-base font-semibold leading-7 text-blue-600">FAQ</h2>
          <p className="mt-2 text-3xl font-bold tracking-tight text-gray-900 sm:text-4xl">
            Frequently Asked Questions
          </p>
          <p className="mt-6 text-lg leading-8 text-gray-600">
            Find answers to common questions about our investment services and approach.
          </p>
        </div>

        <div className="mx-auto mt-16 max-w-3xl divide-y divide-gray-900/10">
          {faqs.map((faq, index) => (
            <div key={index} className="py-6">
              <button
                onClick={() => toggleFAQ(index)}
                className="flex w-full items-start justify-between text-left"
              >
                <span className="text-base font-semibold leading-7 text-gray-900">
                  {faq.question}
                </span>
                <span className="ml-6 flex h-7 items-center">
                  {openIndex === index ? (
                    <ChevronUp className="h-6 w-6 text-blue-600" />
                  ) : (
                    <ChevronDown className="h-6 w-6 text-blue-600" />
                  )}
                </span>
              </button>
              {openIndex === index && (
                <div className="mt-2 pr-12">
                  <p className="text-base leading-7 text-gray-600">{faq.answer}</p>
                  {index === 2 && ( // Special case for pricing FAQ
                    <div className="mt-4">
                      <a
                        href="#contact"
                        className="text-sm font-semibold leading-6 text-blue-600 hover:text-blue-500"
                      >
                        Contact us for pricing details <span aria-hidden="true">→</span>
                      </a>
                    </div>
                  )}
                  {index === 4 && ( // Special case for getting started FAQ
                    <div className="mt-4">
                      <a
                        href="#contact"
                        className="text-sm font-semibold leading-6 text-blue-600 hover:text-blue-500"
                      >
                        Schedule a consultation <span aria-hidden="true">→</span>
                      </a>
                    </div>
                  )}
                </div>
              )}
            </div>
          ))}
        </div>

        <div className="mt-16 text-center">
          <p className="text-base leading-7 text-gray-600">
            Can't find the answer you're looking for?{' '}
            <a href="#contact" className="font-semibold text-blue-600 hover:text-blue-500">
              Contact our team
            </a>
          </p>
        </div>
      </div>
    </section>
  );
}