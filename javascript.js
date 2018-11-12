var db = new PouchDB('http://localhost:5984/pouchdbtodo');
var id = Math.random();
var date = new Date();
function putdata(){
    var tododata = document.getElementById('todo').value;
    var todoobject = {
        _id : 'todo_' + id,
        value : tododata,
        date : date
    }
    db.put(todoobject, function(err, response){
        if(err){
            return console.log(err);
        }else{
            console.log("database is updated");
        }
    })
}
var addbutton = document.getElementById('add');
addbutton.addEventListener('click', function(e){
    putdata();
    e.preventDefault();
})
// Displaying the data
db.allDocs({include_docs : true}, function(err, doc){
    if(err){
        return console.log(err);
    }
    else{
        for(var i = 0; i < doc.rows.length; i++){
            var display = document.getElementById('display');
            var elementcreated = document.createElement('H1');
            elementcreated.textContent = doc.rows[i].doc.value;
            display.appendChild(elementcreated);
            console.log(doc.rows[i].doc.value);
        }
    }
})