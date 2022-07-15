// import app from './index.js'
import http from 'http';

let PORT = 5000

http.createServer((req,res)=> {
    try {
      res.statusCode = 200;
      res.end()
    } catch (error) {
      console.log(error)
    }
})

.listen(PORT, ()=> {
  try {
    console.log(`Server running at ${PORT}`);
  } catch (error) {
    console.log({"error": "Please check server."})
  }
  
})

export default http;

// app.listen(PORT, () => {
//   try {
//     console.log(`Running on ${PORT}`)
//   } catch (error) {
//     console.log(error)
//   }
// })
