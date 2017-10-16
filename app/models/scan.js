const mongoose = require("mongoose");

let scanSchema = new mongoose.Schema({
    day: String,
    hour: String,
    zone: String,
    macs: Array
}, { collection: 'scans' });

module.exports = mongoose.model('ScanSchema',scanSchema);
