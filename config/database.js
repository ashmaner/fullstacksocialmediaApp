const mongoose = require('mongoose')

exports.connectDatabase = () => {
  mongoose
    .connect(
      process.env.MONGO_URI ||
        'mongodb+srv://AshishManer:6h8U3oMixVp2CWjF@cluster0.b8asuxa.mongodb.net/social',
    )
    .then((con) => console.log(`Database Connected: ${con.connection.host}`))
    .catch((err) => console.log(err))
}
