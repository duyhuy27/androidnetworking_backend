const mongoose = require("mongoose");

mongoose.connect("mongodb://localhost:27017/Comic").catch((err) => {
  console.error("Lỗi kết nối CSDL\n" + err);
});

module.exports = { mongoose };
