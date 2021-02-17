var mongoose  =  require('mongoose');  
let i=1;
var csvSchema = new mongoose.Schema({  
    username:{  
        type:String  
    },  
    password:{  
        type:String  
    },
    EmailId:{
        type:String,
        
    },
    FirstName:{  
        type:String  
    },  
    LastName:{  
        type:String  
    },  
    Age:{  
        type:Number  
    },  
    Position:{  
        type:String  
    },  
    Mobile:{  
        type:Number  
    },  
      
    DOB:{  
        type:String  
    },
    year:{
        type:Number
    },
    
},{ versionKey: i++ });  
  
module.exports = mongoose.model('users',csvSchema);