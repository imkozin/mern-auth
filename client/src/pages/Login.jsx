import React from 'react'

const Login = () => {
  return (
    <div>
      <form action="">
        <label>Email</label>
        <input
          type="email"
          name="email"
          //   value={formData.email}
          //   onChange={handleChange}
          placeholder="Enter email..."
          required
        />

        <label>Password</label>
        <input
          type="password"
          name="password"
          placeholder="enter password..."
          required
        />
      </form>
    </div>
  )
}

export default Login