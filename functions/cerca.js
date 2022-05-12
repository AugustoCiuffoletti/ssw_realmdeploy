exports = (arg) => {
  /*
    Accessing application's values:
    var x = context.values.get("value_name");

    Accessing a mongodb service:
    var collection = context.services.get("mongodb-atlas").db("dbname").collection("coll_name");
    var doc = collection.findOne({owner_id: context.user.id});

    To call other named functions:
    var result = context.functions.execute("function_name", arg1, arg2);

    Try running in the console below.
  */
    var collection = context.services.get("mongodb-atlas").db("Meteo").collection("Citta");
  var t = collection.findOne({nome: arg}).then(
    (doc)=>{return doc.temperatura.toString()});
  return t;
};