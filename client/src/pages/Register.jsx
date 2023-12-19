import { useState } from "react"
import axios from 'axios'
import {toast} from 'react-hot-toast'
import { useNavigate } from "react-router-dom"

const Register = () => {
    const [data, setData] = useState({
      username: '',
      email: '',
      password: '',
      dateOfBirth: undefined,
      sex: '',
      avatarUrl: ''
    })

    const navigate = useNavigate();

    const registerUser = async (e) => {
      e.preventDefault()
      const { username, email, password, dateOfBirth, sex, avatarUrl } = data

      try {
        const response = await axios.post(
          'http://localhost:8000/api/register',
          {
            username,
            email,
            password,
            dateOfBirth,
            sex,
            avatarUrl,
          }
        )

        const responseData = response.data

        if (responseData.error) {
          toast.error(responseData.error)
        } else {
          setData({
            username: '',
            email: '',
            password: '',
            dateOfBirth: '',
            sex: '',
            avatarUrl: '',
          })

          toast.success('Registration Successful! Welcome!')
          navigate('/login')
        }
      } catch (err) {
        console.error(err)
        toast.error('Error during registration')
      }
    }


  return (
    <div>
      <form className="form" onSubmit={registerUser}>
        <label>Username</label>
        <input
          type="text"
          name="username"
          value={data.username}
          onChange={(e) => setData({ ...data, username: e.target.value })}
          placeholder="Enter username..."
          required
        />

        <label>Email</label>
        <input
          type="email"
          name="email"
          value={data.email}
          onChange={(e) => setData({ ...data, email: e.target.value })}
          placeholder="Enter email..."
          required
        />

        <label>Password</label>
        <input
          type="password"
          name="password"
          value={data.password}
          onChange={(e) => setData({ ...data, password: e.target.value })}
          placeholder="Enter password..."
          required
        />

        <label>Date of Birth</label>
        <input
          type="date"
          name="dateOfBirth"
          value={data.dateOfBirth}
          onChange={(e) => setData({ ...data, dateOfBirth: e.target.value })}
          required
        />

        <label>Sex</label>
        <div>
          <input
            type="radio"
            name="sex"
            value="male"
            onChange={(e) => setData({ ...data, sex: e.target.value })}
            checked={data.sex === 'male'}
          />
          <label>Male</label>

          <input
            type="radio"
            name="sex"
            value="female"
            onChange={(e) => setData({ ...data, sex: e.target.value })}
            checked={data.sex === 'female'}
          />
          <label>Female</label>

          <input
            type="radio"
            name="sex"
            value="other"
            onChange={(e) => setData({ ...data, sex: e.target.value })}
            checked={data.sex === 'other'}
          />
          <label>Other</label>
        </div>

        <label>Profile Picture (URL)</label>
        <input
          type="url"
          name="avatarUrl"
          value={data.avatarUrl}
          onChange={(e) => setData({ ...data, avatarUrl: e.target.value })}
          placeholder="Enter profile picture URL..."
          required
        />

        <button type="submit">Register</button>
      </form>
    </div>
  )
}

export default Register