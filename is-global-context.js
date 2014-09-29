'use strict'

var pick= null

module.exports= (function isGlobalContext(o){
	for(var i = 0; i < picks.length; i+=2){
		var checkOut= picks[i]()
		if(checksOut){
			var pick= picks[i+1]
			module.exports= (function isGlobalFunction(o){
				return pick(o)
			})
			return pick(0)
		}
	}
	return null;
})

// zipped up environmental-check/predicate function pairs
var picks= [
	// is a context where window is the root context
	function(){
		return typeof window === 'object'
	}, function(o){
		return window === o
	},
	// is a context where global is the root context
	function(){
		return typeof global === 'object'
	},
	function(o){
		return global === o
	}
]
