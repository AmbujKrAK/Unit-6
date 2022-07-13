import app from './index.js'

let PORT = 5000

app.listen(PORT, () => {
  try {
    console.log(`Running on ${PORT}`)
  } catch (error) {
    console.log(error)
  }
})
