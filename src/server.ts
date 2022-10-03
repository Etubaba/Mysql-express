import express,{Application} from 'express';
import dotenv from 'dotenv'
import cors from 'cors';
import userRoute from './routes/userRoutes'


const app:Application = express();

dotenv.config()
const port = process.env.PORT || 6000;


//midlewares
app.use(express.urlencoded({ extended: false }));
app.use(express.json());
app.use(cors())



//routes
app.use('/',userRoute)





app.listen(port,()=>{
   console.log( `Server is running on port ${port}`)
})