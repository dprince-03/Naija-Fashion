import React, { useState } from 'react'
import { Link, useNavigate } from 'react-router-dom'

const Login = ({ setUser }) => {
  const [email, setEmail] = useState('')
  const [password, setPassword] = useState('')
  const [error, setError] = useState('')
  const navigate = useNavigate()

  function handleSubmit(e) {
    e.preventDefault()
    setError('')
    if (!email || !password) {
      setError('Please provide both email and password.')
      return
    }
    // stub: pretend we authenticate
    const user = { email }
    if (setUser) setUser(user)
    navigate('/')
  }

  return (
    <div className="min-h-screen flex items-center justify-center bg-[#E5F6DF] shadow-xl/30 p-6">
      <div className="max-w-md w-full bg-white rounded-xl shadow p-6">
        <img src="/icons/logo.webp" alt="Logo" className="w-12 h-12 mb-4 mx-auto" />
        <h2 className="text-2xl font-semibold mb-4 text-center">Log in to your account</h2>
        {error && <div className="text-red-600 mb-3">{error}</div>}
        <form onSubmit={handleSubmit} className="space-y-4">
          <input
            type="email"
            placeholder="Email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            className="w-full border rounded px-3 py-2"
          />
          <input
            type="password"
            placeholder="Password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            className="w-full border rounded px-3 py-2"
          />
          <button className="w-full bg-green-700 text-white py-2 cursor-pointer rounded">Log in</button>
        </form>
        <p className="text-sm mt-4">Don't have an account? <Link to="/signup" className="text-green-700 underline">Sign up</Link></p>
      </div>
    </div>
  )
}

export default Login
