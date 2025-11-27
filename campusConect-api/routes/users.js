/**
 * @swagger
 * components:
 *   schemas:
 *     Usuarios:
 *       type: object
 *       required:
 *         - nombre
 *         - correo
 *         - password
 *         - carrera
 *         - foto
 *       properties:
 *         id:
 *           type: integer
 *           description: ID autogenerado del usuario
 *           example: 1
 *         nombre:
 *           type: string
 *           description: Nombre del usuario
 *           example: "Sandro Fernandez"
 *         correo:
 *           type: string
 *           description: Correo electrónico del usuario
 *           example: "sandro@example.com"
 *         password:
 *           type: string
 *           description: Contraseña del usuario
 *           example: "$2a$10$hJk9123asd12klj123asd"
 *         carrera:
 *           type: string
 *           description: Carrera del usuario
 *           example: "Ingeniería en Ciencias de Datos e IA"
 *         foto:
 *           type: string
 *           description: Foto de perfil del usuario
 *           example: "https://example.com/uploads/user1.jpg"
 */

/**
 * @swagger
 * tags:
 *   - name: usuarios
 *     description: Endpoints para gestión de usuarios
 */

/**
 * @swagger
 * /users/createNewUser:
 *   post:
 *     summary: Crear un nuevo usuario
 *     tags: [usuarios]
 *     requestBody:
 *       required: true
 *       content:
 *         application/x-www-form-urlencoded:
 *           schema:
 *             type: object
 *             required:
 *               - nombre
 *               - correo
 *               - password
 *               - carrera
 *               - foto
 *             properties:
 *               nombre:
 *                 type: string
 *                 description: Nombre del usuario
 *               correo:
 *                 type: string
 *                 description: Correo único del usuario
 *               password:
 *                 type: string
 *                 description: Contraseña de 8 a 15 caracteres
 *               carrera:
 *                 type: string
 *                 description: Carrera universitaria
 *               foto:
 *                 type: string
 *                 description: URL de foto de perfil
 *     responses:
 *       201:
 *         description: Usuario creado con éxito
 *         content:
 *           application/json:
 *             schema:
 *               type: object
 *               properties:
 *                 status:
 *                   type: string
 *                 data:
 *                   $ref: '#/components/schemas/Usuarios'
 *
 *       400:
 *         description: No se enviaron todos los campos (Bad Request)
 *         content:
 *           application/json:
 *             schema:
 *               type: object
 *               properties:
 *                 status:
 *                   type: string
 *                 message:
 *                   type: string
 *
 *       409:
 *         description: Correo ya registrado
 *         content:
 *           application/json:
 *             schema:
 *               type: object
 *               properties:
 *                 status:
 *                   type: string
 *                 message:
 *                   type: string
 *
 *       500:
 *         description: Error del servidor
 *         content:
 *           application/json:
 *             schema:
 *               type: object
 *               properties:
 *                 status:
 *                   type: string
 *                 message:
 *                   type: string
 */

var express = require("express");
var router = express.Router();

/* GET users listing. */

router.get("/", function (req, res, next) {
  res.send("respond with a resource");
});

module.exports = router;
