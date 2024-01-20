const router = require("express").Router();
const userData = require("../model/userData");
const cors = require("cors");
router.use(cors());

const jwt = require('jsonwebtoken');

// Signup
router.post("/add", async (req, res) => {
  try {
    const data = req.body;
    const newUser = await userData(data).save();
    res.status(200).send({ message: "Successfully registered" });
    console.log(data)
  } catch (error) {
    res.status(400).send(error);
  }
});


//Login

router.post('/login', async (req, res) => {
    try {
        const { email, password } = req.body;

        if (!email || !password) {
            return res.status(400).json({ status: 'error', message: 'Email and password are required' });
        }

        const user = await userData.findOne({ email });
        console.log("user the user is ", user);



        idString = user._id;
        const x = idString.toString();
        IDofthecurrentuser = x;
        console.log('IDofthecurrentuser: in login', IDofthecurrentuser);

        if (user) {
            // Compare the provided password with the password stored in the database
            if (password === user.password) {
                let payload = { email: user.email, userId: user._id }; // Include other relevant information in the payload
                let token = jwt.sign(payload, 'reactInternshipApp');
                res.status(200).send({ message: 'success', token: token });
            } else {
                res.status(401).send({ message: 'Invalid password' });
            }
        } else {
            res.status(404).send({ message: 'User not found' });
        }
    } catch (error) {
        console.error(error);
        res.status(500).json({ status: 'error', message: 'Internal server error' });
    }
});





module.exports = router;
