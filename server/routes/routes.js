import express from 'express';
import cors from 'cors'
import { registerUser, test } from '../controllers/user-controllers.js'

const router = express.Router()

router.use(
  cors({
    credentials: true,
    origin: 'http://localhost:5173',
  })
)

router.get('/', test)
router.post('/api/register', registerUser)

export default router;