/**
 * User.js
 *
 * @description :: Model to store user information
 * */

module.exports = {
    attributes: {
        name: {
            type: "string",
            required: true
        },
        address: {
            type: "string",
            allowNull: true
        }
    }
};