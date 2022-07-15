// import express from 'express'
import data from '../model/readfile.js'
import pushdata from '../model/writefile.js'
import sha256 from 'sha256'
const router = express.Router()
// import http from "../server";
const url = req.url;

// Post

router.post('/signup', async (req, res) => {
    try {
      var signupdata = {
        name: req.body.name,
        password: sha256(req.body.password),
      }
      const user = data.find((user) => user.name === req.body.name)
      if (!user) {
        if (await pushdata(signupdata)) {
          res.send('Singed Up Successfull !')
        } else {
          res.send({ message: 'Somthing went wrong plz try again' })
        }
      } else {
        res.send({ message: 'User Already Exist !' })
      }
    } catch (err) {
      return res.status(400).send({ message: err.message })
    }
  })

// Login

router.post('/login', async (req, res) => {
  try {
    const user = data.find(
      (user) =>
        user.name === req.body.name &&
        user.password === sha256(req.body.password),
    )
    if (user) {
      res.send('Logged In Successfully !')
    } else {
      res.send({ message: 'wrong email or password' })
    }
  } catch (err) {
    return res.status(400).send({ message: err.message })
  }
})



export default router
