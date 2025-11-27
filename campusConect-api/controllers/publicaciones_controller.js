const { Publicaciones, Usuarios } = require("../models");

const publicacionesController = {
  // Crear una nueva publicación
  async crearPublicacion(req, res) {
    try {
      const { usuarioId, titulo, contenido, categoria, fecha } = req.body;

      // Validar campos requeridos
      if (!usuarioId || !titulo || !contenido || !categoria || !fecha) {
        return res.status(400).json({
          status: "error",
          message: "Todos los campos son requeridos",
        });
      }

      // Verificar que el usuario exista
      const usuarioExiste = await Usuarios.findByPk(usuarioId);
      if (!usuarioExiste) {
        return res.status(404).json({
          status: "error",
          message: "El usuario no existe",
        });
      }

      // Crear la publicación
      const nuevaPublicacion = await Publicaciones.create({
        usuarioId,
        titulo,
        contenido,
        categoria,
        fecha,
      });

      return res.status(201).json({
        status: "success",
        data: nuevaPublicacion,
      });
    } catch (error) {
      console.error("❌ Error al crear publicación:", error);
      return res.status(500).json({
        status: "error",
        message: "Error del servidor",
      });
    }
  },
};

module.exports = publicacionesController;
