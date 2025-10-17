import React, { useState } from 'react';
import PageLayout from '../components/PageLayout';
import { ChevronDown, ChevronUp } from 'lucide-react';

export default function FAQ() {
  const [activeCategory, setActiveCategory] = useState('all');
  const [openQuestions, setOpenQuestions] = useState([]);

  const categories = [
    { id: 'all', name: 'All Questions' },
    { id: 'orders', name: 'Orders & Shipping' },
    { id: 'products', name: 'Products' },
    { id: 'returns', name: 'Returns & Refunds' },
    { id: 'account', name: 'Account & Payment' },
    { id: 'sizing', name: 'Sizing & Fit' }
  ];

  const faqs = [
    {
      category: 'orders',
      question: 'How long does shipping take?',
      answer: 'Standard shipping within Nigeria takes 3-5 business days. International shipping typically takes 7-14 business days. Express shipping options are available at checkout.'
    },
    {
      category: 'orders',
      question: 'Do you ship internationally?',
      answer: 'Yes, we ship to most countries worldwide. International shipping rates and delivery times vary by location. You can see specific shipping rates at checkout.'
    },
    {
      category: 'products',
      question: 'Are your fabrics sustainable?',
      answer: 'Yes, we prioritize sustainable and ethically sourced materials. Many of our fabrics are sourced from local Nigerian artisans who use traditional, eco-friendly production methods.'
    },
    {
      category: 'products',
      question: 'How do I care for my garments?',
      answer: 'Each garment comes with specific care instructions on the label. Generally, we recommend hand washing or dry cleaning for delicate items, and using cold water for machine-washable items.'
    },
    {
      category: 'returns',
      question: 'What is your return policy?',
      answer: 'We accept returns within 30 days of purchase. Items must be unworn, unwashed, and have all original tags attached. See our Returns page for detailed information.'
    },
    {
      category: 'returns',
      question: 'How do I initiate a return?',
      answer: 'Log into your account, go to your orders, and select the item you wish to return. Follow the prompts to generate a return label. Contact customer service if you need assistance.'
    },
    {
      category: 'account',
      question: 'How do I track my order?',
      answer: 'Once your order ships, you\'ll receive a tracking number via email. You can also track your order by logging into your account and viewing your order history.'
    },
    {
      category: 'account',
      question: 'What payment methods do you accept?',
      answer: 'We accept major credit cards, debit cards, PayPal, and local payment methods like bank transfers. All payments are processed securely.'
    },
    {
      category: 'sizing',
      question: 'How do I find my size?',
      answer: 'Check our Size Guide for detailed measurements. We provide size charts for all items. If you\'re between sizes, we recommend choosing the larger size for a more comfortable fit.'
    },
    {
      category: 'sizing',
      question: 'Do your sizes run true to size?',
      answer: 'Our sizes generally run true to standard Nigerian/UK sizing. We recommend checking the size guide for each item as measurements may vary by style.'
    },
    {
      category: 'orders',
      question: 'Can I modify my order after placing it?',
      answer: 'We process orders quickly, but we\'ll do our best to accommodate changes if you contact us within 1 hour of placing your order. Contact customer service immediately.'
    },
    {
      category: 'products',
      question: 'Are your products handmade?',
      answer: 'Many of our items are handcrafted by skilled Nigerian artisans. Product descriptions indicate which items are handmade versus machine-made.'
    }
  ];

  const toggleQuestion = (index) => {
    setOpenQuestions(prev => 
      prev.includes(index)
        ? prev.filter(i => i !== index)
        : [...prev, index]
    );
  };

  const filteredFaqs = faqs.filter(faq => 
    activeCategory === 'all' || faq.category === activeCategory
  );

  return (
    <PageLayout
      title="Frequently Asked Questions"
      subtitle="Find answers to common questions about our products and services"
    >
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Category Navigation */}
        <div className="mb-8 overflow-x-auto">
          <div className="flex space-x-4 pb-2">
            {categories.map(category => (
              <button
                key={category.id}
                className={
                  activeCategory === category.id
                    ? "px-4 py-2 rounded-full whitespace-nowrap bg-green-600 text-white"
                    : "px-4 py-2 rounded-full whitespace-nowrap bg-gray-100 text-gray-700 hover:bg-gray-200"
                }
                onClick={() => setActiveCategory(category.id)}
              >
                {category.name}
              </button>
            ))}
          </div>
        </div>

        {/* FAQs */}
        <div className="space-y-4">
          {filteredFaqs.map((faq, index) => (
            <div
              key={index}
              className="bg-white rounded-lg shadow-sm overflow-hidden"
            >
              <button
                className="w-full px-6 py-4 text-left flex justify-between items-center hover:bg-gray-50"
                onClick={() => toggleQuestion(index)}
              >
                <span className="font-medium text-gray-900">{faq.question}</span>
                {openQuestions.includes(index) ? (
                  <ChevronUp className="w-5 h-5 text-gray-500" />
                ) : (
                  <ChevronDown className="w-5 h-5 text-gray-500" />
                )}
              </button>

              {openQuestions.includes(index) && (
                <div className="px-6 pb-4">
                  <p className="text-gray-600">{faq.answer}</p>
                </div>
              )}
            </div>
          ))}
        </div>

        {/* Contact Section */}
        <div className="mt-12 bg-green-50 rounded-lg p-8 text-center">
          <h2 className="text-xl font-semibold mb-4">Still Have Questions?</h2>
          <p className="text-gray-600 mb-6">
            Can't find the answer you're looking for? Please contact our customer support team.
          </p>
          <div className="space-y-4">
            <a
              href="/contact"
              className="inline-block bg-green-600 text-white px-6 py-2 rounded-md hover:bg-green-700 transition-colors"
            >
              Contact Us
            </a>
            <p className="text-sm text-gray-500">
              Our customer service team is available Monday through Friday, 9am - 5pm WAT
            </p>
          </div>
        </div>
      </div>
    </PageLayout>
  );
}