exports = function(payload, response) {
    const {n} = payload.query;
    console.log("n=", n);
    var collection = 
      context.services.get("mongodb-atlas").db("Meteo").collection("Citta");
    var t = collection.findOne({nome: n}).then(
      doc => doc.temperatura.toString() 
    );
    return t;
};
