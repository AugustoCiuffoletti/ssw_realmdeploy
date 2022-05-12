// This function is the webhook's request handler.
exports = function(payload, response) {
    const {n} = payload.query;
    var collection = 
      context.services.get("mongodb-atlas").db("Meteo").collection("Citta");
    var t = collection.count({nome: n})
      .then( (cnt) => {  if ( cnt === 0 ) {
                    var doc={"nome": n, temperatura: 0};
                    collection.insertOne(doc);
                    return doc;
                  } else {
                    return ("Gia' presente");
                  } } );
    return t;
};
