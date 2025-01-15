module.exports = {
    create: async function(req, res) {
        const { first_name, last_name, email, phone, address } = req.body;
        try {
            const newUser = await User.create({
                firstName: first_name,
                lastName: last_name,
                email: email,
                phone: phone,
                address: address
            }).fetch();
            return res.json(newUser);
        } catch (err) {
            return res.serverError(err);
        }
    },

    read: async function(req, res) {
        try {
            const users = await User.find();
            return res.json(users);
        } catch (err) {
            return res.serverError(err);
        }
    },

    update: async function(req, res) {
        const userId = req.params.id;
        const { first_name, last_name, email, phone, address } = req.body;
        try {
            const updatedUser = await User.updateOne({ id: userId }).set({
                firstName: first_name,
                lastName: last_name,
                email: email,
                phone: phone,
                address: address
            });
            return res.json(updatedUser);
        } catch (err) {
            return res.serverError(err);
        }
    },

    delete: async function(req, res) {
        const userId = req.params.id;
        try {
            await User.destroyOne({ id: userId });
            return res.ok();
        } catch (err) {
            return res.serverError(err);
        }
    }
};