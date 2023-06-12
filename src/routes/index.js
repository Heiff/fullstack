const auth = require("./auth.route");
const home = require("./home.route");
const teacher = require("./teacher.route");
const epizodes = require('./epizod.route')
const users = require('./users.route')
const topics = require('./topics.route')

module.exports = [auth, home, teacher,epizodes,users,topics];
