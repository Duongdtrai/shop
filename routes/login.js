const express = require('express')
const router = express.Router();
var jwt = require('jsonwebtoken');
/**
 * @swagger
 * tags:
 *   name: Login
 *   description: Login API
 */

/**
 * @swagger
 * /sessions:
 *   post:
 *     summary: Create a new book
 *     tags: [Login]
 *     requestBody:
 *       required: true
 *       content:
 *         application/json:
 *           schema:
 *             type: object
 *             properties:
 *              username:
 *                  type: string
 *              password:
 *                  type: string
 *     responses:
 *       200:
 *         description: Login successfully
 *       500:
 *         description: Server error
 */

router.post('/', function (req, res) {
    console.log(123);
    console.log(req.body.username, req.body.password);
    const login = req.app.db.get('login').find({ username: req.body.username, password: req.body.password }).value()
    if (!login) {
        res.status(404).send("Không tìm thấy email")
    }
    else {
        console.log(login);
        res.send(login);
    }
})

module.exports = router;