const MongoClient = require('mongodb').MongoClient;

MongoClient.connect('mongodb://localhost:27017/TodoApp', (err, db)=>{
    
    if(err)
       return console.log('Unable to connect to MongoDB Server.');
    
    console.log('Connected to MongoDB Servers.');
    
    db.collection('Todos').find().count().then((count)=>{
       
        console.log('COUNT:', count);
    }, (err)=>{
        
        console.log('Unable to fetch todos', err);
    });
    
});