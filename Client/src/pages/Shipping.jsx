import React from 'react';
import PageLayout from '../components/PageLayout';
import { Truck, Clock, Globe2, ShieldCheck } from 'lucide-react';

export default function Shipping() {
  const shippingMethods = [
    {
      name: 'Standard Shipping',
      time: '5-7 business days',
      price: '₦2,000',
      description: 'Best for non-urgent deliveries within Nigeria'
    },
    {
      name: 'Express Shipping',
      time: '2-3 business days',
      price: '₦5,000',
      description: 'Fast delivery for time-sensitive orders'
    },
    {
      name: 'Next Day Delivery',
      time: 'Next business day',
      price: '₦8,000',
      description: 'Available for orders placed before 2 PM'
    },
    {
      name: 'International Shipping',
      time: '7-14 business days',
      price: 'From ₦15,000',
      description: 'Worldwide delivery with tracking'
    }
  ];

  return (
    <PageLayout
      title="Shipping Information"
      subtitle="Everything you need to know about our shipping services"
    >
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Shipping Features */}
        <section className="mb-12">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            <div className="text-center">
              <div className="mx-auto w-12 h-12 bg-green-100 rounded-full flex items-center justify-center mb-4">
                <Truck className="w-6 h-6 text-green-600" />
              </div>
              <h3 className="font-medium mb-2">Free Shipping</h3>
              <p className="text-gray-600 text-sm">On orders above ₦50,000</p>
            </div>

            <div className="text-center">
              <div className="mx-auto w-12 h-12 bg-green-100 rounded-full flex items-center justify-center mb-4">
                <Clock className="w-6 h-6 text-green-600" />
              </div>
              <h3 className="font-medium mb-2">Fast Delivery</h3>
              <p className="text-gray-600 text-sm">2-5 business days delivery</p>
            </div>

            <div className="text-center">
              <div className="mx-auto w-12 h-12 bg-green-100 rounded-full flex items-center justify-center mb-4">
                <Globe2 className="w-6 h-6 text-green-600" />
              </div>
              <h3 className="font-medium mb-2">Worldwide</h3>
              <p className="text-gray-600 text-sm">International shipping available</p>
            </div>

            <div className="text-center">
              <div className="mx-auto w-12 h-12 bg-green-100 rounded-full flex items-center justify-center mb-4">
                <ShieldCheck className="w-6 h-6 text-green-600" />
              </div>
              <h3 className="font-medium mb-2">Secure</h3>
              <p className="text-gray-600 text-sm">Full tracking on all orders</p>
            </div>
          </div>
        </section>

        {/* Shipping Methods */}
        <section className="mb-12">
          <h2 className="text-2xl font-semibold mb-8">Shipping Methods</h2>
          <div className="space-y-6">
            {shippingMethods.map((method, index) => (
              <div key={index} className="bg-white rounded-lg shadow-sm p-6">
                <div className="flex flex-wrap items-center justify-between gap-4">
                  <div>
                    <h3 className="font-medium text-lg">{method.name}</h3>
                    <p className="text-gray-600 mt-1">{method.description}</p>
                  </div>
                  <div className="text-right">
                    <div className="font-medium text-green-600">{method.price}</div>
                    <div className="text-sm text-gray-500">{method.time}</div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </section>

        {/* Shipping Policies */}
        <section className="mb-12">
          <h2 className="text-2xl font-semibold mb-6">Shipping Policies</h2>
          <div className="bg-white rounded-lg shadow-sm p-8">
            <div className="prose prose-green max-w-none">
              <h3>Order Processing</h3>
              <p>Orders are processed within 24-48 hours of being placed. You will receive a confirmation email with tracking information once your order ships.</p>

              <h3 className="mt-6">Delivery Areas</h3>
              <p>We currently deliver to all states in Nigeria and select international destinations. Some remote areas might experience slightly longer delivery times.</p>

              <h3 className="mt-6">Tracking Your Order</h3>
              <p>Once your order ships, you'll receive a tracking number via email. You can track your order status through our website or the courier's tracking portal.</p>

              <h3 className="mt-6">International Shipping</h3>
              <p>For international orders, please note:</p>
              <ul>
                <li>Customs duties and taxes are not included in the shipping fee</li>
                <li>Delivery times may vary depending on the destination country</li>
                <li>Not all products are available for international shipping</li>
              </ul>
            </div>
          </div>
        </section>

        {/* FAQ Section */}
        <section>
          <h2 className="text-2xl font-semibold mb-6">Frequently Asked Questions</h2>
          <div className="space-y-4">
            <div className="bg-white rounded-lg shadow-sm p-6">
              <h3 className="font-medium mb-2">How can I track my order?</h3>
              <p className="text-gray-600">You'll receive a tracking number via email once your order ships. You can use this to track your order through our website or the courier's tracking portal.</p>
            </div>

            <div className="bg-white rounded-lg shadow-sm p-6">
              <h3 className="font-medium mb-2">What if I'm not home to receive my delivery?</h3>
              <p className="text-gray-600">The courier will attempt delivery three times. After the third attempt, the package will be held at the nearest pickup location for 5 business days.</p>
            </div>

            <div className="bg-white rounded-lg shadow-sm p-6">
              <h3 className="font-medium mb-2">Do you ship to PO boxes?</h3>
              <p className="text-gray-600">Yes, we ship to PO boxes for standard shipping only. Express and Next Day delivery services require a physical address.</p>
            </div>
          </div>
        </section>
      </div>
    </PageLayout>
  );
}