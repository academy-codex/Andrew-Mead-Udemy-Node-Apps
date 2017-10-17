const {MongoClient} = require('mongodb');

MongoClient.connect("mongodb://localhost:27017/TodoApp", (err, db)=>{
   if (err){
       return console.log("Error: ", err);
   }

   console.log("MongoDB server up and running!");

    let todos = db.collection('Todos');
    todos.find({completed: false}).toArray().then((docs)=>{
        console.log("Documents Loaded: ");
        console.log(JSON.stringify(docs, undefined, 2));
    }).catch((err)=>{
        console.log(err);
    });

    db.close();

});