import express from 'express'

const app = express()
const port = 4000

app.get('/', (_req, res) => {
  res.send('Hello World haha!')
})

app.listen(port, () => {
  /* eslint-disable no-console */
  console.log(`Example app listening at http://localhost:${port}`)
})
