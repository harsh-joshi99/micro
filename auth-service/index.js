import express from 'express'
import env from 'dotenv'
import authRoutes from './routes/auth.js'
import cors from 'cors'
import http from 'http'

const app = express()
http.globalAgent.maxSockets = Infinity

app.use(cors())
app.use(express.json())
app.use(express.urlencoded({ extended: true }))


app.use('/api/v1/', authRoutes)

app.listen(3000, () => {
    console.clear()
    console.log('Auth service is running on port 3000')
})

