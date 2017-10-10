const mongoose = require("mongoose");
mongoose.connect("mongodb://teste:teste123@ds113825.mlab.com:13825/gsmart");

let scanSchema = new mongoose.Schema({
  day: String,
  hour: String,
  zone: String,
  macs: Array
}, { collection: 'scans' });

module.exports = { 
  Mongoose: mongoose, 
  ScanSchema: scanSchema }