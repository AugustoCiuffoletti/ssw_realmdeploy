exports = function(payload, response) {
const {n}=payload.query;
return context.http.get({ url:"https://api.openweathermap.org/data/2.5/weather?units=metric&appid=d0fda39104b3c7c45fe031a5392964c1&q="+n})
  .then( response => {
      const ejson_body = EJSON.parse(response.body.text());
      return ejson_body.main.temp.toString();
    }
  ).then( t => {
    var collection = context.services.get("mongodb-atlas").db("Meteo").collection("Citta");
    collection.updateOne( {nome: n}, {"$set": {temperatura: t} }, { "upsert": true } );
    return t;
  })
  .catch( error => { return "Errore: "+error; } );
};