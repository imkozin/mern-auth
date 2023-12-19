import User from '../models/user.js'
import bcrypt from 'bcrypt'

export const test = (req, res) => {
  res.json('test is working')
}

export const registerUser = async (req, res) => {
    try {
        const { username, email, password, dateOfBirth, sex, avatarUrl } =
        req.body
        if (!username || !password || !email || !dateOfBirth || !sex) {
            return res.status(400).json({ error: 'All fields are required' })
        }
        
        if (password.length < 6) {
            res
            .status(400)
            .json({
                error:
                'Password is required and should be at least 6 characters long',
            })
        }
        
        const isExisting = await User.findOne({ $or: [{ email }, { username }] })
        if (isExisting) {
            return res
            .status(400)
            .json({ error: 'Email or username is already taken' })
        }
        
        const salt = await bcrypt.genSalt(10)
        const hash = await bcrypt.hash(password, salt)

        const user = await User.create({
          username,
          email,
          password: hash,
          dateOfBirth,
          sex,
          avatarUrl,
        })
        res.status(201).json({ message: 'User registered successfully', user })
    } catch (err) {
        console.error(err)
        res.status(500).json({ error: 'Internal Server Error' })
    }
}