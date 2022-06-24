
module.export = {
    async login(req, res) {
        const { email, password } = req.body;
        await User.findOne({ email }).then(user => {
            if (!user) {
                return res.status(400).json({ error: 'User not found' });
            }
            if (!user.comparePassword(password)) {
                return res.status(400).json({ error: 'Password does not match' });
            }
            return res.json({
                user: {
                    id: user._id,
                    name: user.name,
                    email: user.email,
                    createdAt: user.createdAt,
                    updatedAt: user.updatedAt
                },
                message: 'User logged in successfully'
            });
        }
        ).catch(err => {
            return res.status(400).json({ error: err });
        }
        );
    },

    async register(req, res) {
        const { fname,lname,bday, email, password } = req.body;
        const createdAt = new Date();
        const updatedAt = new Date();
        const user = new User({
            fname,
            lname,
            bday,
            email,
            password,
            createdAt,
            updatedAt
        });
        await user.save().then(user => {
            return res.json({
                user: {
                    id: user._id,
                    name: user.name,
                    email: user.email,
                    createdAt: user.createdAt,
                    updatedAt: user.updatedAt
                },
                message: 'User created successfully'
            });
    
        }
        ).catch(err => {
            return res.status(400).json({ error: err });
        }
        );
    },

    async logout(req, res) {
     // To logout, we just need to delete the token
        // from the user's cookie
        res.clearCookie('token');
        return res.json({ message: 'User logged out successfully' });
    }
}

