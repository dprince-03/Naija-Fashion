import React from 'react';
import { Link } from 'react-router-dom';

export default function Account() {
  // In a real app, user data would come from context or API
  const user = {
    name: 'Jane Doe',
    email: 'janedoe@email.com',
    orders: [
      { id: 1, date: '2025-09-01', status: 'Delivered', total: 45000 },
      { id: 2, date: '2025-09-10', status: 'Shipped', total: 75000 },
    ],
    history: [
      { id: 1, name: 'Premium Aso-Oke Set', price: 75000 },
      { id: 2, name: 'Designer Ankara Dress', price: 45000 },
    ]
  };

  return (
    <div className="max-w-2xl mx-auto py-10 px-4">
      <div className="bg-gradient-to-br from-green-100 via-white to-green-50 rounded-2xl shadow-xl p-8 mb-10 border border-green-200">
        <div className="flex items-center gap-4 mb-6">
          <div className="w-16 h-16 rounded-full bg-green-200 flex items-center justify-center text-2xl font-bold text-green-700 shadow">
            {user.name[0]}
          </div>
          <div>
            <h1 className="text-3xl font-bold text-green-700 mb-1">{user.name}</h1>
            <p className="text-gray-600">{user.email}</p>
          </div>
        </div>
        <div className="flex gap-4 mb-4">
          <Link to="/login" className="bg-green-600 text-white px-4 py-2 rounded hover:bg-green-700 transition">Sign In</Link>
          <button className="bg-gray-200 px-4 py-2 rounded hover:bg-gray-300 transition">Sign Out</button>
        </div>
      </div>
      <div className="bg-white rounded-xl shadow-lg p-6 mb-8 border border-gray-100">
        <h2 className="text-xl font-semibold mb-4 text-green-700">Order Tracking</h2>
        <ul className="divide-y">
          {user.orders.map(order => (
            <li key={order.id} className="py-3 flex justify-between items-center">
              <span className="font-medium text-gray-700">Order #{order.id}</span>
              <span className="text-green-600 font-semibold">{order.status}</span>
              <span className="text-gray-600">₦{order.total.toLocaleString()}</span>
            </li>
          ))}
        </ul>
      </div>
      <div className="bg-white rounded-xl shadow-lg p-6 border border-gray-100">
        <h2 className="text-xl font-semibold mb-4 text-green-700">Order History</h2>
        <ul className="divide-y">
          {user.history.map(item => (
            <li key={item.id} className="py-3 flex justify-between items-center">
              <span className="text-gray-700">{item.name}</span>
              <span className="text-gray-600">₦{item.price.toLocaleString()}</span>
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
}
