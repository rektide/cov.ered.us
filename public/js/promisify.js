export default function( fn, self){
	return function( ..args){
		return new Promise(function( res, rej){
			args.push( function(err, val){
				if( err){
					return rej( err)
				}
				res( val)
			})
			fn.apply( self, args)
		})
	}
}
