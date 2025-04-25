import express from 'express'
import mongoose from 'mongoose'
import dotenv from 'dotenv'
import cors from 'cors'
import authRouter from './routes/authRouter.js'

dotenv.config();
const app = express();

app.use(express.json());
app.use(cors());


app.use('/api/auth', authRouter);