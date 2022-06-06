

const mongoose = require("mongoose");

const employeeSchema = new mongoose.Schema(
  {
    title: { type: String, required: true },
    
  },
  {
    versionKey: false,
    timestamps: true,
  }
);

const Employees = mongoose.model("Emplyees", employeeSchema);

module.exports = Employees;