import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { ChevronLeft, ChevronRight, Check } from 'lucide-react';

const steps = ['Shipping', 'Payment', 'Review'];

export default function Checkout() {
  const navigate = useNavigate();
  const [currentStep, setCurrentStep] = useState(0);
  const [formData, setFormData] = useState({
    // Shipping details
    firstName: '',
    lastName: '',
    email: '',
    phone: '',
    address: '',
    city: '',
    state: '',
    zipCode: '',
    // Payment details
    cardNumber: '',
    cardName: '',
    expiry: '',
    cvv: '',
  });

  const [loading, setLoading] = useState(false);

  const updateField = (field, value) => {
    setFormData(prev => ({ ...prev, [field]: value }));
  };

  const handleNext = () => {
    if (currentStep < steps.length - 1) {
      setCurrentStep(curr => curr + 1);
      window.scrollTo(0, 0);
    }
  };

  const handleBack = () => {
    if (currentStep > 0) {
      setCurrentStep(curr => curr - 1);
      window.scrollTo(0, 0);
    }
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setLoading(true);
    
    // Simulate API call
    await new Promise(resolve => setTimeout(resolve, 2000));
    
    // Navigate to success page
    navigate('/checkout/success');
  };

  const ShippingForm = () => (
    <div className="space-y-4">
      <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
        <div>
          <label className="block text-sm font-medium text-gray-700 mb-1">
            First Name
          </label>
          <input
            type="text"
            value={formData.firstName}
            onChange={(e) => updateField('firstName', e.target.value)}
            className="w-full px-3 py-2 border rounded-md"
            required
          />
        </div>
        <div>
          <label className="block text-sm font-medium text-gray-700 mb-1">
            Last Name
          </label>
          <input
            type="text"
            value={formData.lastName}
            onChange={(e) => updateField('lastName', e.target.value)}
            className="w-full px-3 py-2 border rounded-md"
            required
          />
        </div>
      </div>

      <div>
        <label className="block text-sm font-medium text-gray-700 mb-1">
          Email
        </label>
        <input
          type="email"
          value={formData.email}
          onChange={(e) => updateField('email', e.target.value)}
          className="w-full px-3 py-2 border rounded-md"
          required
        />
      </div>

      <div>
        <label className="block text-sm font-medium text-gray-700 mb-1">
          Phone
        </label>
        <input
          type="tel"
          value={formData.phone}
          onChange={(e) => updateField('phone', e.target.value)}
          className="w-full px-3 py-2 border rounded-md"
          required
        />
      </div>

      <div>
        <label className="block text-sm font-medium text-gray-700 mb-1">
          Address
        </label>
        <input
          type="text"
          value={formData.address}
          onChange={(e) => updateField('address', e.target.value)}
          className="w-full px-3 py-2 border rounded-md"
          required
        />
      </div>

      <div className="grid grid-cols-2 sm:grid-cols-4 gap-4">
        <div className="col-span-2">
          <label className="block text-sm font-medium text-gray-700 mb-1">
            City
          </label>
          <input
            type="text"
            value={formData.city}
            onChange={(e) => updateField('city', e.target.value)}
            className="w-full px-3 py-2 border rounded-md"
            required
          />
        </div>
        <div>
          <label className="block text-sm font-medium text-gray-700 mb-1">
            State
          </label>
          <input
            type="text"
            value={formData.state}
            onChange={(e) => updateField('state', e.target.value)}
            className="w-full px-3 py-2 border rounded-md"
            required
          />
        </div>
        <div>
          <label className="block text-sm font-medium text-gray-700 mb-1">
            Zip Code
          </label>
          <input
            type="text"
            value={formData.zipCode}
            onChange={(e) => updateField('zipCode', e.target.value)}
            className="w-full px-3 py-2 border rounded-md"
            required
          />
        </div>
      </div>
    </div>
  );

  const PaymentForm = () => (
    <div className="space-y-4">
      <div>
        <label className="block text-sm font-medium text-gray-700 mb-1">
          Card Number
        </label>
        <input
          type="text"
          value={formData.cardNumber}
          onChange={(e) => updateField('cardNumber', e.target.value)}
          placeholder="1234 5678 9012 3456"
          className="w-full px-3 py-2 border rounded-md"
          required
        />
      </div>

      <div>
        <label className="block text-sm font-medium text-gray-700 mb-1">
          Name on Card
        </label>
        <input
          type="text"
          value={formData.cardName}
          onChange={(e) => updateField('cardName', e.target.value)}
          className="w-full px-3 py-2 border rounded-md"
          required
        />
      </div>

      <div className="grid grid-cols-2 gap-4">
        <div>
          <label className="block text-sm font-medium text-gray-700 mb-1">
            Expiry Date
          </label>
          <input
            type="text"
            value={formData.expiry}
            onChange={(e) => updateField('expiry', e.target.value)}
            placeholder="MM/YY"
            className="w-full px-3 py-2 border rounded-md"
            required
          />
        </div>
        <div>
          <label className="block text-sm font-medium text-gray-700 mb-1">
            CVV
          </label>
          <input
            type="text"
            value={formData.cvv}
            onChange={(e) => updateField('cvv', e.target.value)}
            placeholder="123"
            className="w-full px-3 py-2 border rounded-md"
            required
          />
        </div>
      </div>
    </div>
  );

  const ReviewOrder = () => (
    <div className="space-y-6">
      <div className="border rounded-lg p-4">
        <h3 className="font-medium mb-2">Shipping Address</h3>
        <div className="text-sm text-gray-600">
          <p>{formData.firstName} {formData.lastName}</p>
          <p>{formData.address}</p>
          <p>{formData.city}, {formData.state} {formData.zipCode}</p>
          <p>{formData.phone}</p>
          <p>{formData.email}</p>
        </div>
      </div>

      <div className="border rounded-lg p-4">
        <h3 className="font-medium mb-2">Payment Method</h3>
        <div className="text-sm text-gray-600">
          <p>Card ending in {formData.cardNumber.slice(-4)}</p>
          <p>Expires {formData.expiry}</p>
        </div>
      </div>

      <div className="border rounded-lg p-4">
        <h3 className="font-medium mb-2">Order Summary</h3>
        <div className="space-y-2">
          <div className="flex justify-between text-sm">
            <span>Subtotal</span>
            <span>₦185,000</span>
          </div>
          <div className="flex justify-between text-sm">
            <span>Shipping</span>
            <span>₦2,000</span>
          </div>
          <div className="flex justify-between font-medium pt-2 border-t">
            <span>Total</span>
            <span>₦187,000</span>
          </div>
        </div>
      </div>
    </div>
  );

  return (
    <div className="min-h-screen bg-gray-50 py-8">
      <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Progress Steps */}
        <nav className="mb-8">
          <ol className="flex items-center">
            {steps.map((step, index) => (
              <li key={step} className="relative flex-1">
                <div className="flex items-center justify-center">
                  <div
                    className={`w-8 h-8 rounded-full flex items-center justify-center border-2 
                      ${
                        index < currentStep
                          ? 'border-green-600 bg-green-600 text-white'
                          : index === currentStep
                          ? 'border-green-600 text-green-600'
                          : 'border-gray-300 text-gray-300'
                      }`}
                  >
                    {index < currentStep ? (
                      <Check className="w-4 h-4" />
                    ) : (
                      <span>{index + 1}</span>
                    )}
                  </div>
                  {index < steps.length - 1 && (
                    <div
                      className={`h-0.5 w-full ${
                        index < currentStep ? 'bg-green-600' : 'bg-gray-300'
                      }`}
                    />
                  )}
                </div>
                <span
                  className={`absolute w-max -bottom-6 left-1/2 -translate-x-1/2 text-sm
                    ${
                      index <= currentStep ? 'text-green-600' : 'text-gray-500'
                    }`}
                >
                  {step}
                </span>
              </li>
            ))}
          </ol>
        </nav>

        <div className="bg-white rounded-lg shadow p-6 mt-12">
          <form onSubmit={handleSubmit}>
            {currentStep === 0 && <ShippingForm />}
            {currentStep === 1 && <PaymentForm />}
            {currentStep === 2 && <ReviewOrder />}

            <div className="mt-8 flex justify-between">
              <button
                type="button"
                onClick={handleBack}
                className={`flex items-center gap-2 px-4 py-2 border rounded-md hover:bg-gray-50
                  ${currentStep === 0 ? 'invisible' : ''}`}
              >
                <ChevronLeft className="w-4 h-4" />
                Back
              </button>

              {currentStep < steps.length - 1 ? (
                <button
                  type="button"
                  onClick={handleNext}
                  className="flex items-center gap-2 px-6 py-2 bg-green-600 text-white rounded-md hover:bg-green-700"
                >
                  Next
                  <ChevronRight className="w-4 h-4" />
                </button>
              ) : (
                <button
                  type="submit"
                  disabled={loading}
                  className="flex items-center gap-2 px-6 py-2 bg-green-600 text-white rounded-md hover:bg-green-700 disabled:opacity-50"
                >
                  {loading ? (
                    <>
                      <span className="animate-spin">⟳</span>
                      Processing...
                    </>
                  ) : (
                    'Place Order'
                  )}
                </button>
              )}
            </div>
          </form>
        </div>
      </div>
    </div>
  );
}
