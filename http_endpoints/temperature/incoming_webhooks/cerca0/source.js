exports = (payload, response) => {
    const {n} = payload.query;
    var collection = 
      context.services.get("mongodb-atlas").db("Meteo").collection("Citta");
    var t = collection.findOne({nome: n});
    return t;
};
