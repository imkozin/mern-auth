import express from 'express';
import dotenv from 'dotenv'
import cors from 'cors'
import router from './routes/routes.js'
import mongoose from 'mongoose'

const app = express();
dotenv.config();

app.use(express.json())
app.use(cors())


mongoose.connect(process.env.MONGO_URL)
    .then(() => console.log('Database connected'))
    .catch((err) => console.log('Database not connected', err))


app.listen(process.env.PORT, () => {
    console.log(`Server is listening on PORT ${process.env.PORT}`)
})

app.use('', router)


