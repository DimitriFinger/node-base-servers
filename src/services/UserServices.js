import User from '../models/User'

class UsersController {
    async getAll(req, res) {
        try {
            const getUser = await User.find();
            return res.json(getUser);

        } catch (err) {
            console.error(err);
            return res
                .status(500)
                .json({ error: "Internal server error." });
        }

    }

    async getId(req, res) {
        try {
            const { id } = req.params;
            const user = await User.findById(id);

            if (!user) {
                return res.status(404).json();
            }

            return res.json(user);
        } catch (err) {
            console.error(err);
            return res
                .status(500)
                .json({ error: "Internal server error." });
        }
    }


    async update(req, res) {
        try {
            const { id } = req.params;
            const { name, email, password } = req.body;
            const user = await User.findById(id);

            if (!user) {
                return res.status(404).json();
            }

            const encryptedPassword = await createPasswordHash(password);
            await user.updateOne({ name, email, password: encryptedPassword });

            return res.status(200).json();

        } catch (err) {
            console.error(err);
            return res
                .status(500)
                .json({ error: "Internal server error." });
        }
    }


    async delete(req, res) {
        try {
            const { id } = req.params;
            const user = await User.findById(id);

            if (!user) {
                return res.status(404).json();
            }

            await user.deleteOne();
            return res.status(200).json();

        } catch (err) {
            return res
                .status(500)
                .json({ error: "Internal server error." });
        }
    }

    async create(req, res) {
        try {
            const { name, email, password } = req.body;
            const user = await User.findOne({ email });

            if (user) {
                return res
                    .status(422)
                    .json({ message: `User ${email} already exists.` });
            }
            const newUser = await User.create({
                name,
                email,
                password
            });

            return res
                .status(201)
                .json(newUser);

        } catch (err) {
            return res
                .status(500)
                .json('There was a problem registering the user.');
        }

    }

}

export default new UsersController();