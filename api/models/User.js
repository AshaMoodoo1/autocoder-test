/**
 * User.js
 *
 * @description :: Model for User
 */

module.exports = {
    attributes: {
        firstName: {
            type: "string",
            required: true
        },
        lastName: {
            type: "string",
            required: true
        },
        email: {
            type: "string",
            required: true,
            unique: true
        },
        phone: {
            type: "string"
        },
        address: {
            type: "string"
        }
    }
};