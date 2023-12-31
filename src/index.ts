import express, { Request, Response } from 'express'

const app = express()
const port = process.env.PORT || 8080

app.get('/', (_req: Request, res: Response) => {
  return res.send(' afen hello')
})

app.get('/ping', (_req: Request, res: Response) => {
  return res.send('pong 🏓')
})

app.get('/user', (_req: Request, res: Response) => {
  return res.send('user 🏓')
})


app.listen(port, () => {
  return console.log(`Server is listening on ${port}`)
})
