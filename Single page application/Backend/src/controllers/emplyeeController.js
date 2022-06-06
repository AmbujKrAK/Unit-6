const { Router } = require("express");
const express = require("express");
const router = express.Router();
const Employees = require("../models/employeeModel");

router.get("/", async (req, res) => {
    try {
      const page = req.query.page || 1;
      const pagesize = req.query.pagesize || 10; 
      const skip = (page - 1) * pagesize; 
        if(req.query.sort){
            const filter = req.query.filter;
            const sort = req.query.sort;
            const s = { [sort] : -1 };
            const f = {genre: {$all: ["Family","Drama"]} }
            console.log(f, req.query);
            var employee = await Employees.find(f).sort(s).skip(skip) 
            .limit(pagesize) 
            .lean()
            .exec();
        }else{
            var employee = await Employees.find().skip(skip) 
            .limit(pagesize) 
            .lean()
            .exec();
        }
        
      const totalPages = Math.ceil((await Employees.find().countDocuments()) / pagesize
      );
  
      return res.status(200).send({ employee, totalPages });
    } catch (err) {
      return res.status(500).send({ message: err.message });
    }
  });


  router.post("/", async (req, res) => {
    const x = await Employees.create(req.body);
    res.send("success");
  });


  module.exports = router;