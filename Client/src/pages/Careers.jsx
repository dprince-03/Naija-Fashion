import React from 'react';
import PageLayout from '../components/PageLayout';

export default function Careers() {
  const openings = [
    {
      title: 'Fashion Designer',
      department: 'Design',
      location: 'Lagos, Nigeria',
      type: 'Full-time',
      description: 'We\'re looking for a creative fashion designer with experience in traditional African fashion.'
    },
    {
      title: 'E-commerce Manager',
      department: 'Digital',
      location: 'Lagos, Nigeria',
      type: 'Full-time',
      description: 'Lead our online retail strategy and digital customer experience.'
    },
    {
      title: 'Retail Store Manager',
      department: 'Retail',
      location: 'Abuja, Nigeria',
      type: 'Full-time',
      description: 'Manage our flagship store operations and team.'
    },
    {
      title: 'Customer Service Representative',
      department: 'Customer Support',
      location: 'Remote',
      type: 'Full-time',
      description: 'Provide excellent customer support via phone, email, and chat.'
    }
  ];

  return (
    <PageLayout 
      title="Careers at Aso" 
      subtitle="Join our team and help shape the future of African fashion"
    >
      <div className="max-w-5xl mx-auto">
        {/* Culture Section */}
        <section className="mb-12">
          <div className="bg-white rounded-lg shadow-sm p-8">
            <h2 className="text-2xl font-semibold mb-6">Our Culture</h2>
            <div className="grid md:grid-cols-3 gap-6">
              <div>
                <h3 className="font-medium mb-2">Innovation</h3>
                <p className="text-gray-600">We embrace creativity and new ideas in everything we do.</p>
              </div>
              <div>
                <h3 className="font-medium mb-2">Diversity</h3>
                <p className="text-gray-600">We celebrate diversity and create an inclusive workplace.</p>
              </div>
              <div>
                <h3 className="font-medium mb-2">Growth</h3>
                <p className="text-gray-600">We invest in our team's professional development.</p>
              </div>
            </div>
          </div>
        </section>

        {/* Benefits Section */}
        <section className="mb-12">
          <div className="bg-white rounded-lg shadow-sm p-8">
            <h2 className="text-2xl font-semibold mb-6">Benefits</h2>
            <div className="grid md:grid-cols-2 gap-6">
              <div>
                <h3 className="font-medium mb-2">Health & Wellness</h3>
                <ul className="list-disc pl-5 text-gray-600 space-y-1">
                  <li>Comprehensive health insurance</li>
                  <li>Mental health support</li>
                  <li>Gym membership</li>
                </ul>
              </div>
              <div>
                <h3 className="font-medium mb-2">Work-Life Balance</h3>
                <ul className="list-disc pl-5 text-gray-600 space-y-1">
                  <li>Flexible working hours</li>
                  <li>Remote work options</li>
                  <li>Paid time off</li>
                </ul>
              </div>
            </div>
          </div>
        </section>

        {/* Open Positions */}
        <section>
          <h2 className="text-2xl font-semibold mb-6">Open Positions</h2>
          <div className="space-y-4">
            {openings.map((job, index) => (
              <div key={index} className="bg-white rounded-lg shadow-sm p-6 hover:shadow-md transition-shadow">
                <div className="flex flex-wrap justify-between items-start gap-4">
                  <div>
                    <h3 className="text-lg font-medium text-gray-900">{job.title}</h3>
                    <p className="text-gray-600 mt-1">{job.department} · {job.location} · {job.type}</p>
                    <p className="text-gray-600 mt-2">{job.description}</p>
                  </div>
                  <button className="bg-green-600 text-white px-6 py-2 rounded-md hover:bg-green-700 transition-colors">
                    Apply Now
                  </button>
                </div>
              </div>
            ))}
          </div>
        </section>

        {/* Contact Section */}
        <section className="mt-12">
          <div className="bg-white rounded-lg shadow-sm p-8 text-center">
            <h2 className="text-2xl font-semibold mb-4">Don't see a perfect match?</h2>
            <p className="text-gray-600 mb-6">
              We're always looking for talented people to join our team. Send your CV to:
            </p>
            <a href="mailto:careers@aso.com" className="text-green-600 hover:text-green-700 font-medium">
              careers@aso.com
            </a>
          </div>
        </section>
      </div>
    </PageLayout>
  );
}