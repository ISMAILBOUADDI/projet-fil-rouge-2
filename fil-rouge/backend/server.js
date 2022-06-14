const express = require('express')
const dotenv = require('dotenv')
const morgan = require('morgan')
const connectDB = require('./config/db.js')
const fileUpload = require('express-fileupload');
const cookieParser = require('cookie-parser');
const cors = require('cors')

dotenv.config()


const authRoute = require('./routes/auth')
const categoryRoute = require('./routes/categories') 
const userRoute = require('./routes/user')
const productRoute = require('./routes/product')
const upload =require('./routes/upload')


// /**
//  * Connecting DB
//  */
connectDB()

const app = express()
app.use(cors());
app.use(cookieParser());
app.use(fileUpload({
    useTempFiles: true,
}));

if (process.env.NODE_ENV === 'development') {
  app.use(morgan('dev'))
}

app.use(express.json())

// /**
//  * define routes
//  */
app.use('/api/users', authRoute);
app.use('/api/category', categoryRoute)
app.use('/api/profile', userRoute)
app.use('/api/product', productRoute)
app.use('/api',upload)

// app.get('/api/config/paypal', (req, res) =>
//   res.send(process.env.PAYPAL_CLIENT_ID)
// )





const PORT = process.env.PORT || 5000



app.listen(PORT,() => {

      console.log( `Server Started on ${PORT} welcome ${process.env.NAME}
      `);
});


