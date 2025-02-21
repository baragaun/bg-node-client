"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const faker_1 = require("@faker-js/faker");
const User_js_1 = require("../../types/models/User.js");
const createUser = (attributes) => {
    const user = new User_js_1.User(attributes);
    if (!user.id) {
        user.id = faker_1.faker.string.uuid();
    }
    if (!user.userHandle) {
        user.userHandle = faker_1.faker.internet.username();
    }
    if (!user.firstName) {
        user.firstName = faker_1.faker.person.firstName();
    }
    if (!user.lastName) {
        user.lastName = faker_1.faker.person.lastName();
    }
    if (!user.email) {
        user.email = faker_1.faker.internet.email();
    }
    if (!user.avatarUrl) {
        user.avatarUrl = faker_1.faker.image.avatar();
    }
    if (!user.createdAt) {
        user.createdAt = new Date();
    }
    if (!user.updatedAt) {
        user.updatedAt = new Date();
    }
    return user;
};
exports.default = createUser;
