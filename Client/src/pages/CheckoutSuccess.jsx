import React from 'react';
import { Link } from 'react-router-dom';
import { Check } from 'lucide-react';

export default function CheckoutSuccess() {
  // Generate dynamic order number based on date
  const generateOrderNumber = () => {
    const now = new Date();
    const year = now.getFullYear();
    const month = String(now.getMonth() + 1).padStart(2, '0');
    const day = String(now.getDate()).padStart(2, '0');
    const random = Math.floor(Math.random() * 1000).toString().padStart(3, '0');
    return `${year}${month}${day}${random}`;
  };

  // Calculate estimated delivery date (3-5 business days from now)
  const getEstimatedDelivery = () => {
    const today = new Date();
    const minDays = 3;
    const maxDays = 5;
    
    const minDelivery = new Date(today);
    minDelivery.setDate(today.getDate() + minDays);
    
    const maxDelivery = new Date(today);
    maxDelivery.setDate(today.getDate() + maxDays);

    const formatDate = (date) => {
      return date.toLocaleDateString('en-US', { 
        month: 'long', 
        day: 'numeric' 
      });
    };

    return `${formatDate(minDelivery)} - ${formatDate(maxDelivery)}`;
  };
  return (
    <div className="min-h-screen flex items-center justify-center bg-gray-50 py-12 px-4 sm:px-6 lg:px-8">
      <div className="max-w-md w-full space-y-8 text-center">
        <div className="mx-auto w-16 h-16 bg-green-100 rounded-full flex items-center justify-center">
          <Check className="w-8 h-8 text-green-600" />
        </div>
        
        <div>
          <h2 className="text-3xl font-bold text-gray-900">Order Confirmed!</h2>
          <p className="mt-2 text-gray-600">
            Thank you for your purchase. We'll send you a confirmation email with your order details.
          </p>
        </div>

        <div className="bg-white shadow rounded-lg p-6 mt-8">
          <h3 className="font-medium text-gray-900 mb-4">Order Details</h3>
          <div className="space-y-2 text-sm text-gray-600">
            <p>Order #: {generateOrderNumber()}</p>
            <p>Estimated Delivery: {getEstimatedDelivery()}</p>
          </div>
        </div>

        <div className="mt-6 space-y-4">
          <Link
            to="/shop"
            className="block w-full bg-green-600 text-white py-2 px-4 rounded-md hover:bg-green-700"
          >
            Continue Shopping
          </Link>
          <Link
            to="/account/orders"
            className="block w-full bg-gray-100 text-gray-700 py-2 px-4 rounded-md hover:bg-gray-200"
          >
            View Order History
          </Link>
        </div>
      </div>
    </div>
  );
}