import React, { useState } from 'react'
import { Link, useNavigate } from 'react-router-dom'

const Signup = ({ setUser }) => {
  const [email, setEmail] = useState('')
  const [password, setPassword] = useState('')
  const [confirm, setConfirm] = useState('')
  const [error, setError] = useState('')
  const navigate = useNavigate()

  function handleSubmit(e) {
    e.preventDefault()
    setError('')
    if (!email || !password) {
      setError('Please provide email and password.')
      return
    }
    if (password !== confirm) {
      setError('Passwords do not match.')
      return
    }
    // stub: save user
    const user = { email }
    if (setUser) setUser(user)
    navigate('/')
  }

  return (
    <div className="min-h-screen flex items-center justify-center bg-[#E5F6DF] shadow-xl/30 p-6">
      <div className="max-w-md w-full bg-white rounded-2xl shadow p-6">
          <img src="/icons/logo.webp" alt="Logo" className="w-12 h-12 mb-4 mx-auto" />
          <h2 className="text-2xl font-semibold mb-4 text-center">Create an account</h2>
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
          <input
            type="password"
            placeholder="Confirm password"
            value={confirm}
            onChange={(e) => setConfirm(e.target.value)}
            className="w-full border rounded px-3 py-2"
          />
          <button className="w-48 mx-auto block bg-green-600 text-white py-2 cursor-pointer rounded-2xl hover:bg-green-700 transition">Sign up</button>
        </form>
        <p className="text-sm mt-4">Already have an account? <Link to="/login" className="text-green-700 underline">Log in</Link></p>
      </div>
    </div>
  )
}

export default Signup
