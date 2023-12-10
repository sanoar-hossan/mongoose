import express, { Application } from 'express'
import cors from 'cors'
import { UserRoutes } from './app/modules/user/user.route';
const app:Application = express()


//parser
app.use(express.json());
app.use(cors())

//application routes

app.use('/',UserRoutes)





console.log(process.cwd());

export default app;