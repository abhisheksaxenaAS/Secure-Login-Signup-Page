import express from 'express'
import cors from 'cors'
import authRouter from './routes/authRoutes.js'

const app = express();
app.use(cors())
app.use(express.json())
app.use('/auth', authRouter)

// const port = 3000;


// app.get('/',(req,res)=>{
//     res.send("Hello")
// })

app.listen(process.env.PORT, () => {
  console.log("Server is running.");
});
