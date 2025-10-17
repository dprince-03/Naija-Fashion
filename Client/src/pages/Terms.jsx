import React from 'react';
import PageLayout from '../components/PageLayout';

export default function Terms() {
  return (
    <PageLayout 
      title="Terms & Conditions" 
      subtitle="Please read these terms carefully before using our services"
    >
      <div className="max-w-3xl mx-auto">
        <div className="bg-white rounded-lg shadow-sm p-8 space-y-8">
          <section>
            <h2 className="text-2xl font-semibold mb-4">1. Acceptance of Terms</h2>
            <p className="text-gray-600">
              By accessing and using this website, you accept and agree to be bound by the terms and provision of this agreement.
            </p>
          </section>

          <section>
            <h2 className="text-2xl font-semibold mb-4">2. Use License</h2>
            <div className="space-y-4 text-gray-600">
              <p>Permission is granted to temporarily download one copy of the materials for personal, non-commercial transitory viewing only.</p>
              <p>This is the grant of a license, not a transfer of title, and under this license you may not:</p>
              <ul className="list-disc pl-5 space-y-2">
                <li>Modify or copy the materials</li>
                <li>Use the materials for any commercial purpose</li>
                <li>Remove any copyright or other proprietary notations</li>
                <li>Transfer the materials to another person</li>
              </ul>
            </div>
          </section>

          <section>
            <h2 className="text-2xl font-semibold mb-4">3. Pricing and Payment</h2>
            <div className="space-y-4 text-gray-600">
              <p>All prices are in Nigerian Naira (₦) and are inclusive of VAT where applicable.</p>
              <p>We reserve the right to modify prices at any time. Your order will be processed at the price valid at the time of order.</p>
            </div>
          </section>

          <section>
            <h2 className="text-2xl font-semibold mb-4">4. Shipping and Delivery</h2>
            <div className="space-y-4 text-gray-600">
              <p>Delivery times are estimates only and commence from the date of shipping.</p>
              <p>We are not responsible for any delays caused by customs or other factors outside our control.</p>
            </div>
          </section>

          <section>
            <h2 className="text-2xl font-semibold mb-4">5. Returns and Refunds</h2>
            <div className="space-y-4 text-gray-600">
              <p>Please refer to our Returns Policy for detailed information about returns and refunds.</p>
              <p>We reserve the right to reject returns that do not meet our return criteria.</p>
            </div>
          </section>

          <section>
            <h2 className="text-2xl font-semibold mb-4">6. Disclaimer</h2>
            <div className="space-y-4 text-gray-600">
              <p>The materials on our website are provided on an 'as is' basis.</p>
              <p>We make no warranties, expressed or implied, and hereby disclaim and negate all other warranties including, without limitation, implied warranties or conditions of merchantability, fitness for a particular purpose, or non-infringement of intellectual property or other violation of rights.</p>
            </div>
          </section>

          <section>
            <h2 className="text-2xl font-semibold mb-4">7. Contact Information</h2>
            <p className="text-gray-600">
              If you have any questions about these Terms, please contact us at:
              <br />
              Email: legal@aso.com
              <br />
              Phone: +234 XXX XXX XXXX
            </p>
          </section>
        </div>
      </div>
    </PageLayout>
  );
}