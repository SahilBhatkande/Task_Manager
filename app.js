const connectDB = require('./database/connect');
const express = require('express')
const app = express();
const router = require('./Routes/Task.js')
require('dotenv').config()

const PORT = 3000;

//middleware 
app.use(express.json())



//routes
app.get('/' , (req , res ) => {
    res.send("Hello my boy")
})


app.use('/api/v1/users' , router)



const startserver = async() => {

    try {
        await connectDB();
        app.listen(PORT , console.log(`Server is listening at port  ${PORT}`))
        
    } catch (error) {

        console.error("Failed to start the server:", error);
        
    }
}

startserver();


