import express from 'express'
const app = express()
import volleyball from 'volleyball'
import dotenv from 'dotenv'
dotenv.config()

const port = process.env.PORT

app.use(express.json())
app.use(volleyball)
app.get('/',(req,res) =>{
  res.json('BONJOUR')
})

app.listen(port,()=>console.log(`🔥🐳⚡️ Server ⚡️ is  running on ${port}`))