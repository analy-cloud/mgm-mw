import 'dotenv/config'
import express, { Application } from 'express'

import { Server } from './src/server'
// import {g} from 'shorts'

const app: Application = express()
const server = new Server(app)


server.start()
app.get('/api', (req, res) => res.send('WOWO!'))

console.log('Hellooo1')