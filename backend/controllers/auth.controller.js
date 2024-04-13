import bcrpyt from 'bcryptjs';
import User from '../models/user.model.js';


export const signup = async (req, res) => {
    console.log('signupUser');
    console.log(req.body);
    try {
        const { fullName, username, password, confirmPassword, gender} = req.body;

        if (password !== confirmPassword) {
            return res.status(400).json({error: "Passwords don't match"});
        
        }

        const user = await User.findOne({ username: username });
        if (user) {
            return res.status(400).json({error: "Username already exists"});
        }

        // Hash password here
        const salt = await bcrpyt.genSalt(10);
        const hashedPassword = await bcrpyt.hash(password, salt);
        // https://avatar-placeholder.iran.liara.run/

        const boyProfilePic = `https://avatar.iran.liara.run/public/boy?username=${username}`
        const girlProfilePic = `https://avatar.iran.liara.run/public/girl?username=${username}`

        const newUser = new User({
            fullName,
            username,
            password: hashedPassword,
            gender,
            profilePic: gender === "male" ? boyProfilePic : girlProfilePic
        })

        if (newUser) {
            // Generate JWT token here
            await newUser.save();

            res.status(201).json({
                _id: newUser._id,
                fullName: newUser.fullName,
                username: newUser.username,
                profilePic: newUser.profilePic
            });
        } else {
            res.status(400).json({error: "Invalid user data"});
        }
    }
    catch (error) {
        console.log("Error in signup controller", error);
        res.status(500).json({error: "Internal Server Error"})    
    }
};

export const login = (req, res) => {
    console.log("loginUser");
}

export const logout = (req, res) => {
    console.log("logoutUser");
}
