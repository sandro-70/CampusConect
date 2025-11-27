/**
 * @swagger
 * components:
 *   schemas:
 *     Publicaciones:
 *       type: object
 *       required:
 *         - usuarioId
 *         - titulo
 *         - contenido
 *         - categoria
 *         - fecha
 *       properties:
 *         id:
 *           type: integer
 *           description: ID autogenerado de la publicación
 *           example: 1
 *         usuarioId:
 *           type: integer
 *           description: ID del usuario que crea la publicación
 *           example: 12
 *         titulo:
 *           type: string
 *           description: Título de la publicación
 *           example: "Cómo aprender JavaScript desde cero"
 *         contenido:
 *           type: string
 *           description: Contenido de la publicación
 *           example: "En este artículo te explico cómo comenzar..."
 *         categoria:
 *           type: string
 *           description: Categoría de la publicación
 *           example: "Programación"
 *         fecha:
 *           type: string
 *           description: Fecha de creación de la publicación
 *           example: "2025-01-10"
 */

/**
 * @swagger
 * tags:
 *   - name: publicaciones
 *     description: Endpoints para gestionar publicaciones
 */

/**
 * @swagger
 * /publicaciones:
 *   post:
 *     summary: Crear una nueva publicación
 *     tags: [publicaciones]
 *     requestBody:
 *       required: true
 *       content:
 *         application/x-www-form-urlencoded:
 *           schema:
 *             type: object
 *             required:
 *               - usuarioId
 *               - titulo
 *               - contenido
 *               - categoria
 *               - fecha
 *             properties:
 *               usuarioId:
 *                 type: integer
 *                 description: ID del usuario que crea la publicación
 *               titulo:
 *                 type: string
 *                 description: Título de la publicación
 *               contenido:
 *                 type: string
 *                 description: Contenido de la publicación
 *               categoria:
 *                 type: string
 *                 description: Categoría asignada a la publicación
 *               fecha:
 *                 type: string
 *                 description: Fecha de creación de la publicación (formato libre)
 *     responses:
 *       201:
 *         description: Publicación creada exitosamente
 *         content:
 *           application/json:
 *             schema:
 *               type: object
 *               properties:
 *                 status:
 *                   type: string
 *                 data:
 *                   $ref: '#/components/schemas/Publicaciones'
 *
 *       400:
 *         description: Datos incompletos o inválidos
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
 *       404:
 *         description: Usuario no encontrado
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
