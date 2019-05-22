//REQUIRE CONTROLLER TO HAVE ACCESS TO ROUTE LOGIC
const controller = require("./controller")

//EXPORT ROUTES SO OUR SERVER.JS CAN ACCESS IT
module.exports = function(app){
    app.get('/cakes', controller.index)
    app.get ( '/cakes/:id' , controller.show );
    app.post ( '/cakes' , controller.add );
    app.put( '/cakes/:id' , controller.updt );
    app.delete( '/cakes/:id' , controller.delete );

    // app.get('/cakes/:cakeId/comments', controller.c_index)
    // app.get ( '/cakes/:cakeId/comments/:commentId' , controller.c_show );
    app.post ( '/cakes/:cakeId/comments' , controller.c_add );
    // app.put( '/cakes/:cakeId/comments/:commentId' , controller.c_updt );
    // app.delete( '/cakes/:cakeId/comments/:commentId' , controller.c_delete );
}