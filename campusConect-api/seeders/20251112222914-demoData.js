'use strict';

/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up (queryInterface, Sequelize) {
    /**
     * Add seed commands here.
     *
     * Example:
     * await queryInterface.bulkInsert('People', [{
     *   name: 'John Doe',
     *   isBetaMember: false
     * }], {});
    */
   const usuarios = await queryInterface.bulkInsert('Usuarios', [
      {
        nombre: 'Ana García',
        correo: 'ana.garcia@example.com',
        password: 'password123',
        carrera: 'Ingeniería de Sistemas',
        foto: 'ana_garcia.jpg',
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        nombre: 'Luis Martínez',
        correo: 'luis.martinez@example.com',
        password: 'securepass',
        carrera: 'Medicina',
        foto: 'luis_martinez.jpg',
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        nombre: 'Carla Rodríguez',
        correo: 'carla.rodriguez@example.com',
        password: 'mypassword',
        carrera: 'Arquitectura',
        foto: 'carla_rodriguez.jpg',
        createdAt: new Date(),
        updatedAt: new Date()
      }
    ], { returning: true });
    
    const publicaciones = await queryInterface.bulkInsert('Publicaciones', [
      {
        titulo: 'Nuevo laboratorio de computación',
        contenido: 'Se ha inaugurado un nuevo laboratorio de computación en el campus.',
        categoria: 'Noticias',
        fecha: '2025-11-10',
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        titulo: 'Conferencia sobre IA',
        contenido: 'El próximo viernes habrá una conferencia sobre inteligencia artificial.',
        categoria: 'Eventos',
        fecha: '2025-11-15',
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        titulo: 'Taller de desarrollo web',
        contenido: 'Inscríbete en el taller de desarrollo web que se realizará este mes.',
        categoria: 'Talleres',
        fecha: '2025-11-20',
        createdAt: new Date(),
        updatedAt: new Date()
      } 
    ], { returning: true });
    
    const comentarios = await queryInterface.bulkInsert('Comentarios', [
      {
        texto: '¡Qué buena noticia sobre el laboratorio!',
        usuarioId: usuarios[0].id,
        publicacionId: publicaciones[0].id,
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        texto: 'Estoy interesado en la conferencia de IA.',
        usuarioId: usuarios[1].id,
        publicacionId: publicaciones[1].id,
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        texto: '¿Cuándo empiezan las inscripciones para el taller?',
        usuarioId: usuarios[2].id,
        publicacionId: publicaciones[2].id,
        createdAt: new Date(),
        updatedAt: new Date()
      }
    ], { returning: true });

    const eventos = await queryInterface.bulkInsert('Eventos', [
      {
        titulo: 'Feria de empleo 2025',
        descripcion: 'Oportunidades laborales para estudiantes y egresados.',
        fecha: '2025-12-01',
        lugar: 'Auditorio Principal',
        tipo_evento: 'Feria',
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        titulo: 'Semana de la Ciencia',
        descripcion: 'Actividades y charlas sobre avances científicos.',
        fecha: '2025-11-25',
        lugar: 'Campus Universitario',
        tipo_evento: 'Cultural',
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        titulo: 'Maratón de Programación',
        descripcion: 'Competencia de programación para estudiantes.',
        fecha: '2025-12-10',
        lugar: 'Laboratorio de Computación',
        tipo_evento: 'Deportivo',
        createdAt: new Date(),
        updatedAt: new Date()
      }
    ], { returning: true });

    const asistencias = await queryInterface.bulkInsert('Asistencia', [
      {
        UsuarioId: usuarios[0].id,
        EventoId: eventos[0].id,
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        UsuarioId: usuarios[1].id,
        EventoId: eventos[1].id,
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        UsuarioId: usuarios[2].id,
        EventoId: eventos[2].id,
        createdAt: new Date(),
        updatedAt: new Date()
      }
    ], { returning: true });

  },

  async down (queryInterface, Sequelize) {
    /**
     * Add commands to revert seed here.
     *
     * Example:
     * await queryInterface.bulkDelete('People', null, {});
     */
  await queryInterface.bulkDelete('Asistencia', null, {});
    await queryInterface.bulkDelete('Eventos', null, {});
    await queryInterface.bulkDelete('Comentarios', null, {});
    await queryInterface.bulkDelete('Publicaciones', null, {});
    await queryInterface.bulkDelete('Usuarios', null, {});
  }
};
