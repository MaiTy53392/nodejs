const mongoose = require("mongoose");
const username = "";
const password = "";
async function connect() {
  try {
    await mongoose.connect(
      `mongodb+srv://${username}:${password}@cluster0.sxpff.mongodb.net/UDAUNI?retryWrites=true&w=majority`,
      {
        useNewUrlParser: true,
        useUnifiedTopology: true,
      }
    );
    console.log("Connect successfully!!!");
  } catch (error) {
    console.log(error);
  }
}

module.exports = { connect };
