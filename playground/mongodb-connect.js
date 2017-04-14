const MongoClient = require('mongodb').MongoClient;

MongoClient.connect('mongodb://localhost:27017/TodoApp', (err, db)=>{
    
    if(err)
       return console.log('Unable to connect to MongoDB Server.');
    
    console.log('Connected to MongoDB Servers.');
    
    var textArray = ['hello', 'how are'];
    db.collection('Todos').insertOne({
        text: textArray,
        type: 'String2'
        
    }, (err, result)=>{
        if (err)
            return console.log('Unable to insert', err);
        
        console.log(result.ops[0]._id);
    });
    
    db.close();
});