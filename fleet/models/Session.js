module.exports = {
	// Idenitity is a unique name for this model
  	identity: 'session',
	connection: 'authentication',
	
	types: {
		stamp: function(time){
			return time.opened && time.expires
		}
	},
	
	attributes: {
		username: {
			type: 'string',
			required: true,
			unique: true // This will disable dual sessions
		},

		access: {
			type: 'string',
			enum: ['approved', 'provoked']
		},
		
		ipAddress: {
			type: 'string',
			required: true
		},
		
		stamp: {
		  type: 'json',
		  stamp: true
		}
	}
};