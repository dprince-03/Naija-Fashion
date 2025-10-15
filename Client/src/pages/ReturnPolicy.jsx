import React from 'react';
import PageLayout from '../components/PageLayout';
import { div } from 'framer-motion/client';

export default function ReturnPolicy() {
  return (
    <PageLayout 
      title="Return Policy" 
      subtitle="Our commitment to your satisfaction"
    >
      <div className="max-w-3xl mx-auto">
        {/* General Policy */}
        <section className="mb-8">
          <div className="bg-white rounded-lg shadow-sm p-8">
            <h2 className="text-2xl font-semibold mb-4">General Return Policy</h2>
            <p className="text-gray-600 mb-4">
              We want you to be completely satisfied with your purchase. If you're not entirely happy with your order, 
              we'll gladly accept returns within 30 days of delivery.
            </p>
            <ul className="list-disc pl-5 text-gray-600 space-y-2">
              <li>Items must be unworn, unwashed, and in their original packaging with all tags attached</li>
              <li>Return shipping costs are the responsibility of the customer unless the item is defective</li>
              <li>Refunds will be processed to the original payment method within 5-7 business days</li>
            </ul>
          </div>
        </section>

        {/* Return Process */}
        <section className="mb-8">
          <div className="bg-white rounded-lg shadow-sm p-8">
            <h2 className="text-2xl font-semibold mb-4">Return Process</h2>
            <div className="space-y-6">
              <div className="flex gap-4">
                <div className="flex-shrink-0 w-8 h-8 bg-green-600 text-white rounded-full flex items-center justify-center">
                  1
                </div>
                <div>
                  <h3 className="font-medium mb-2">Initiate Your Return</h3>
                  <p className="text-gray-600">
                    Log into your account and visit the Orders section. Select the item you wish to return 
                    and follow the prompts to generate a return label.
                  </p>
                </div>
              </div>
              
              <div className="flex gap-4">
                <div className="flex-shrink-0 w-8 h-8 bg-green-600 text-white rounded-full flex items-center justify-center">
                  2
                </div>
                <div>
                  <h3 className="font-medium mb-2">Package Your Return</h3>
                  <p className="text-gray-600">
                    Pack the item securely in its original packaging or a similar suitable container. 
                    Include all tags and accessories that came with the item.
                  </p>
                </div>
              </div>

              <div className="flex gap-4">
                <div className="flex-shrink-0 w-8 h-8 bg-green-600 text-white rounded-full flex items-center justify-center">
                  3
                </div>
                <div>
                  <h3 className="font-medium mb-2">Ship Your Return</h3>
                  <p className="text-gray-600">
                    Attach the return label to your package and drop it off at your nearest post office or 
                    authorized shipping location.
                  </p>
                </div>
              </div>

              <div className="flex gap-4">
                <div className="flex-shrink-0 w-8 h-8 bg-green-600 text-white rounded-full flex items-center justify-center">
                  4
                </div>
                <div>
                  <h3 className="font-medium mb-2">Refund Processing</h3>
                  <p className="text-gray-600">
                    Once we receive and inspect your return, we'll process your refund to your original 
                    payment method within 5-7 business days.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Exceptions */}
        <section className="mb-8">
          <div className="bg-white rounded-lg shadow-sm p-8">
            <h2 className="text-2xl font-semibold mb-4">Non-Returnable Items</h2>
            <p className="text-gray-600 mb-4">
              For hygiene and safety reasons, the following items cannot be returned:
            </p>
            <ul className="list-disc pl-5 text-gray-600 space-y-2">
              <li>Intimate apparel</li>
              <li>Customized items</li>
              <li>Sale items marked as "Final Sale"</li>
              <li>Items without original tags or packaging</li>
            </ul>
          </div>
        </section>

        {/* Contact Section */}
        <section>
          <div className="bg-white rounded-lg shadow-sm p-8 text-center">
            <h2 className="text-2xl font-semibold mb-4">Need Help?</h2>
            <p className="text-gray-600 mb-6">
              Our customer service team is here to assist you with any questions about returns.
            </p>
            <div className="space-y-4">
              <div>
                <p className="font-medium">Email us at:</p>
                <a href="mailto:returns@aso.com" className="text-green-600 hover:text-green-700">
                  returns@aso.com
                </a>
              </div>
              <div>
                <p className="font-medium">Call us at:</p>
                <a href="tel:+2348000000000" className="text-green-600 hover:text-green-700">
                  +234 800 000 0000
                </a>
              </div>
            </div>
          </div>
        </section>
      </div>
    </PageLayout>
  );
}