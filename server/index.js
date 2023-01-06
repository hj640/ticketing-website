const express = require('express')
const app = express()
const port = 5000

const bodyParser = require('body-parser');
const config = require('./config/key');
const {User} = require("./models/User");

// MongoDB Connection
const mongoose = require('mongoose')
mongoose.set('strictQuery', false)
mongoose.connect(config.mongoURI, {
}).then(() => console.log('MongoDB Connected')).catch(err => console.log(err));

app.use(bodyParser.urlencoded({extended: true}));
app.use(bodyParser.json());

// app.get('/', (req, res) => res.send('Hello World! 안녕하세용'))

const reserve = async(req, res) => {
    try {
        const {email, phoneNumber} = req.body;
        let errors = {};
        const emailUser = await User.findOne({'email': email});
        console.log('emailUSER', emailUser);
        const phoneUser = await User.findOne({'phoneNumber': phoneNumber});
        console.log('phoneNumberUser', phoneUser);
        if (emailUser) {
            errors.email = "Email is Already Used."
        }
        if (phoneUser) {
            errors.phoneNumber = "Phone Number is Already Used."
        }
        if (Object.keys(errors).length > 0) {
            return res.status(400).json(errors);
        }
        const user = new User(req.body);

        await user.save((err) => {
            if(err) {
                return res.json({
                    success: false,
                    err});
            } else {
                return res.status(200).json({
                    success: true
                })
            }
        })
    } catch (err) {
        console.log(err);
        res.status(500).send("something went wrong")
    }
}

app.post('/api/users/reserve', reserve)

app.listen(port, () => console.log('Example app listening on port ${port}!'))