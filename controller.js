////MODULARIZATION WITH MODELS:
const Cake = require("./models")


//EXPORT OUR CONTROLLERS SO OUR ROUTES CAN ACCESS IT
module.exports = {
    index : ( req , res ) => {
        Cake.find ( { } )
        .then ( data => {
            console.log ( 'displaying objects' , data );
            res.json ( { message : 'success' , data : data } );
        } )
        .catch ( err => {
            console.log ( 'query error' , err );
            res.json ( { message : 'Error' , error : err } );
        } )
    } ,
		

	show : ( req , res ) => {
		console.log ( req.params )
		Cake.findById( req.params.id )
		.then ( data => {
			console.log ( 'reading data' , data );
			res.json ( { message : 'showing object' , data : data } )
		} )
		.catch ( err => {
			console.log ( 'error' , err );
			res.json ( {message: 'Could not find' , error : err } );
		} )
	} ,
		

	add : ( req , res ) => {
		console.log ( req.params )
		Cake.create( {
			name : req.body.name,
			url : req.body.url,
			name: req.body.baker

		} )
		.then ( data => {
			console.log ( 'successfully added' , data );
			res.json ( { message : 'Object added' , data : data } )
		} )
		.catch ( err => {
			console.log ( 'error' , err );
			res.json ( {message: 'Could not add' , error : err } );
		} )
	} ,
		

	updt : ( req , res ) => {
		console.log ( req.params )
		Cake.findByIdAndUpdate( req.params.id, {
			$push: {comments: {
				comment :req.body.comment,
				rate : req.body.rate,

			}}} )
		.then ( data => {
			console.log ( 'successfully updeted' , data );
			res.json ( { message : 'Object added' , data : data } )
		} )
		.catch ( err => {
			console.log ( 'error' , err );
			res.json ( {message: 'Could not add' , error : err } );
		} )
	} ,
		
	
    
    delete : ( req , res ) => {

		console.log ( req.params )
		Cake.findByIdAndDelete( req.params.id )
		.then ( data => {
			console.log ( 'successfully deleted' , data );
			res.json ( { message : 'Object deleted' , data : data } )
		} )
		.catch ( err => {
			console.log ( 'error' , err );
			res.json ( {message: 'Could not delete' , error : err } );
		} )
	} ,







    // c_index : ( req , res ) => {
	// 	Cake.findById( req.params.cakeId )
	// 	.then ( data => {
	// 		console.log ( 'reading data' , data );
	// 		res.json ( { message : 'showing object' , data : data } )
	// 	} )
	// 	.catch ( err => {
	// 		console.log ( 'error' , err );
	// 		res.json ( {message: 'Could not find' , error : err } );
	// 	} )
    // } ,
		

	// c_show : ( req , res ) => {
	// 	console.log ( req.params )
	// 	Cake.findById( req.params.cakeId )
	// 	.then ( data => {
	// 		console.log ( 'reading data' , data );
	// 		res.json ( { message : 'showing object' , data : data } )
	// 	} )
	// 	.catch ( err => {
	// 		console.log ( 'error' , err );
	// 		res.json ( {message: 'Could not find' , error : err } );
	// 	} )
	// } ,
		

	c_add : ( req , res ) => {

		Cake.findById( req.params.cakeId )
			.then ( data => {
				// data is the cake information (from db)
				// req.body is info from user (comment information)
				let cake = data;
				let newComment = req.body;
				cake.comments.push(newComment);
				cake.save()
				.then ( saveData => {
					console.log ( 'successfully added comment' , saveData );
					res.json ( { message : 'Comment added' , data : saveData } )
				} )
				.catch ( err => {
					console.log ( 'error' , err );
					res.json ( {message: 'Could not add' , error : err } );
				} )
			} )
			.catch ( err => {
				console.log ( 'error' , err );
				res.json ( {message: 'Could not find' , error : err } );
			} )
		console.log ( req.params )
	} ,
		

	c_updt : ( req , res ) => {
		Cake.findById( req.params.cakeId )
		.then ( data => {
			console.log ( 'reading data' , data );
			res.json ( { message : 'showing object' , data : data } )
		} )
		.catch ( err => {
			console.log ( 'error' , err );
			res.json ( {message: 'Could not find' , error : err } );
		} )
		console.log ( req.params )
		Cake.findByIdAndUpdate( req.params.id, {
			$push: {comments: {
				comment :req.body.comment,
				rate : req.body.rate,

			}}} )
		.then ( data => {
			console.log ( 'successfully updeted' , data );
			res.json ( { message : 'Object added' , data : data } )
		} )
		.catch ( err => {
			console.log ( 'error' , err );
			res.json ( {message: 'Could not add' , error : err } );
		} )
	} ,
		
	
    
    c_delete : ( req , res ) => {

		Cake.findById( req.params.cakeId )
		.then ( data => {
			console.log ( 'reading data' , data );
			res.json ( { message : 'showing object' , data : data } )
		} )
		.catch ( err => {
			console.log ( 'error' , err );
			res.json ( {message: 'Could not find' , error : err } );
		} )
		console.log ( req.params )
		Cake.findByIdAndDelete( req.params.id )
		.then ( data => {
			console.log ( 'successfully deleted' , data );
			res.json ( { message : 'Object deleted' , data : data } )
		} )
		.catch ( err => {
			console.log ( 'error' , err );
			res.json ( {message: 'Could not delete' , error : err } );
		} )
	} ,


    
}