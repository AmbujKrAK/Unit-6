import express from 'express'
import data from '../model/readfile.js'
import pushdata from '../model/writefile.js'
import sha256 from 'sha256'
import deleteData from '../model/deleteFile.js'
import updatedata from '../model/updatefile.js'
const router = express.Router()

// To get all data 

router.get('/get', async (req, res) => {
  try {
    res.send(data)
  } catch (err) {
    return res.status(400).send({ message: err.message })
  }
})


// Add new data


router.post('/create', async (req, res) => {
  try {
    var signupdata = {
      name: req.body.name,
      password: sha256(req.body.password),
    }
    const user = data.find((user) => user.name === req.body.name)
    if (!user) {
      if (await pushdata(signupdata)) {
        res.send('User Created Successfully')
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

// To update

router.patch('/update', async (req, res) => {
  try {
    const usercheck = data.find(
      (user) =>
        user.name === req.body.name ||
        user.password === sha256(req.body.password),
    )
    if (usercheck) {
      const user = [
        {
          name: req.body.name,
          password: sha256(req.body.password),
        },
      ]
      if (await updatedata(user)) {
        res.send('User Updated Successfully !')
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

// To delete 

router.delete('/delete', async (req, res) => {
  try {
    const usercheck = data.find(
      (user) =>
        user.name === req.body.name &&
        user.password === sha256(req.body.password),
    )
    if (usercheck) {
      const user = data.filter((user) => {
        return user.name != usercheck.name
      })
      if (await deleteData(user)) {
        res.send('User Delete Successfully !')
      } else {
        res.send({ message: 'Somthing went wrong plz try again' })
      }
    } else {
      res.send({ message: 'User Alredy Exist !' })
    }
  } catch (err) {
    return res.status(400).send({ message: err.message })
  }
})
export default router
