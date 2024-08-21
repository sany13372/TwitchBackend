'use strict';

module.exports = {
  /**
   * An asynchronous register function that runs before
   * your application is initialized.
   *
   * This gives you an opportunity to extend code.
   */
  register(/*{ strapi }*/) {},

  /**
   * An asynchronous bootstrap function that runs before
   * your application gets started.
   *
   * This gives you an opportunity to set up your data model,
   * run jobs, or perform some special logic.
   */
  bootstrap(/*{ strapi }*/) {
    let interval;
    var io = require('socket.io')(strapi.server.httpServer, {
      rejectUnauthorized:   false,
      cors: {
        origin: "http://localhost:5173",
        methods: ["GET", "POST"]
      }
    });

    // io.use(async (socket, next) => {
    //   try {
    //     //Socket Authentication
    //     let result = await strapi.plugins[
    //       'users-permissions'
    //       ].services.jwt.verify(socket.handshake.query.token);
    //     //Save the User ID to the socket connection
    //     socket.user = result.id;
    //     next();
    //   } catch (error) {
    //     console.log(error)
    //   }
    // })

    io.on('connection', function (socket) {
      socket.on('message', async (data) => {
        console.log('uss',data)
        // const account = await strapi.service('api::streamer.streamer').findOne(data.id);
      })
    });
    //Make the socket global
    strapi.io = io
  },
};
