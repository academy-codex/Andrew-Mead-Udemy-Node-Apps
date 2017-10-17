const {ObjectID,MongoClient} = require('mongodb');

/* ----------------------- MongoDB Init -----------------*/
// MongoClient.connect("mongodb://localhost:27017/TodoApp", (err, db)=>{
//    if (err){
//        return console.log("Error: ", err);
//    }

   console.log("MongoDB server up and running!");

   /* ------------------- Specifying Collection ---------*/
  //  let todos = db.collection('Todos');

    let objs = [{
        name: 'Siddhant Chadha',
        age: 20,
        location: "New Delhi"
    }, {
        name: 'Arzoo Chadha',
        age: 23,
        location: "New Delhi"
    }];

    /* --------------------- INSERTING -----------------*/
    // todos.insertOne({
    //     name: 'Siddhant Chadha',
    //     age: 20,
    //     location: "New Delhi"
    // }, (err, result)=>{
    //    if (err)
    //        return console.log(err);
    //
    //    console.log(JSON.stringify(result.ops, undefined, 2));
    // });

    // todos.insertMany(objs, (err, result)=>{
    //    if (err)
    //        return console.log((err));
    // });

    /* --------------------- FINDING -----------------*/
    // todos.find().toArray().then((docs)=>{
    //     console.log(JSON.stringify(docs, undefined, 2));
    // });

    // todos.find({age:23}).toArray().then((docs)=>{
    //     console.log(JSON.stringify(docs, undefined, 2));
    // });


    /* --------------------- DELETING ---------------*/
    // todos.deleteOne({age:20}).then((res)=>{
    //     console.log(res);
    // });

    // todos.findOneAndDelete({age:20}).then((res)=>{
    //    console.log("Successfully Deleted: ",res.value);
    // });

    /* --------------------- UPDATING ----------------*/

    // todos.findOneAndUpdate({_id:new ObjectID("59e5bd81a98a371c313e787c")},{
    //     $set:{
    //         completed:true
    //     }
    // },{
    //     returnOriginal: false
    // }).then((results)=>{
    //     console.log(results);
    // });

    db.close();

});