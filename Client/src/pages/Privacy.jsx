import React from 'react';
import PageLayout from '../components/PageLayout';

export default function Privacy() {
  const sections = [
    {
      title: "Information We Collect",
      content: [
        {
          subtitle: "Personal Information",
          text: "When you create an account or place an order, we collect:",
          items: [
            "Name and contact details",
            "Delivery address",
            "Email address",
            "Phone number",
            "Payment information (securely processed)"
          ]
        },
        {
          subtitle: "Automatically Collected Information",
          text: "We automatically collect certain information when you visit our website:",
          items: [
            "IP address",
            "Browser type",
            "Device information",
            "Pages visited",
            "Time spent on pages"
          ]
        }
      ]
    },
    {
      title: "How We Use Your Information",
      content: [
        {
          text: "We use your information for:",
          items: [
            "Processing and fulfilling your orders",
            "Communicating with you about your orders",
            "Sending you marketing communications (with your consent)",
            "Improving our website and services",
            "Analyzing user behavior and preferences",
            "Preventing fraud and maintaining security"
          ]
        }
      ]
    },
    {
      title: "Information Sharing",
      content: [
        {
          text: "We share your information with:",
          items: [
            "Delivery partners to fulfill your orders",
            "Payment processors to handle transactions",
            "Marketing partners (with your consent)",
            "Law enforcement when required by law"
          ]
        }
      ]
    },
    {
      title: "Data Security",
      content: [
        {
          text: "We protect your data through:",
          items: [
            "Encryption of sensitive information",
            "Regular security assessments",
            "Limited employee access",
            "Secure data storage",
            "Regular system updates"
          ]
        }
      ]
    },
    {
      title: "Your Rights",
      content: [
        {
          text: "You have the right to:",
          items: [
            "Access your personal information",
            "Correct inaccurate data",
            "Request deletion of your data",
            "Withdraw marketing consent",
            "Export your data",
            "Lodge a complaint with authorities"
          ]
        }
      ]
    },
    {
      title: "Cookies",
      content: [
        {
          text: "We use cookies for:",
          items: [
            "Essential website functionality",
            "Remembering your preferences",
            "Analyzing site usage",
            "Personalizing your experience",
            "Marketing purposes (with consent)"
          ]
        }
      ]
    }
  ];

  return (
    <PageLayout
      title="Privacy Policy"
      subtitle="Your privacy is important to us. Learn how we protect and manage your personal information."
    >
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Last Updated */}
        <div className="mb-8 text-center">
          <p className="text-gray-600">Last Updated: October 14, 2025</p>
        </div>

        {/* Introduction */}
        <div className="bg-white rounded-lg shadow-sm p-6 mb-8">
          <p className="text-gray-600">
            At Aso, we take your privacy seriously. This Privacy Policy explains how
            we collect, use, disclose, and safeguard your information when you visit
            our website or make a purchase. Please read this privacy policy carefully.
            If you do not agree with the terms of this privacy policy, please do not
            access the site.
          </p>
        </div>

        {/* Privacy Sections */}
        <div className="space-y-8">
          {sections.map((section, index) => (
            <section key={index} className="bg-white rounded-lg shadow-sm p-6">
              <h2 className="text-xl font-semibold mb-4">{section.title}</h2>
              {section.content.map((content, contentIndex) => (
                <div key={contentIndex} className="space-y-4">
                  {content.subtitle && (
                    <h3 className="font-medium text-lg">{content.subtitle}</h3>
                  )}
                  <p className="text-gray-600">{content.text}</p>
                  {content.items && (
                    <ul className="list-disc pl-5 space-y-2 text-gray-600">
                      {content.items.map((item, itemIndex) => (
                        <li key={itemIndex}>{item}</li>
                      ))}
                    </ul>
                  )}
                </div>
              ))}
            </section>
          ))}
        </div>

        {/* Contact Section */}
        <div className="mt-12 bg-green-50 rounded-lg p-8 text-center">
          <h2 className="text-xl font-semibold mb-4">Questions About Privacy?</h2>
          <p className="text-gray-600 mb-4">
            If you have any questions or concerns about our Privacy Policy or data handling practices,
            please don't hesitate to contact us.
          </p>
          <div className="space-y-2">
            <p className="font-medium">Email us at:</p>
            <a href="mailto:privacy@aso.com" className="text-green-600 hover:text-green-700">
              privacy@aso.com
            </a>
          </div>
        </div>

        {/* Cookie Preferences */}
        <div className="mt-8 text-center">
          <button className="text-green-600 hover:text-green-700 font-medium">
            Manage Cookie Preferences
          </button>
        </div>
      </div>
    </PageLayout>
  );
}