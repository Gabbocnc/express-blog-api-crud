/* Esercizio
Per il nostro blog, concentriamoci sul creare una rotta:
la rotta dovrá rispondere al verbo POST e delegare un metodo store del controller dei posts per effettuare le operazioni di creazione della risorsa.
Questa dovrà riceve i dati in formato json e dovrà restituire l'elenco dei posts in formato json incluso il nuovo elemento appena creato
Tutte le funzioni delle rotte dovranno essere scritte nel controller dedicato.
Testare le rotte tramite Postman. */

const express = require('express')
const app = express()
const myRoutes = require('./routes/route.js')

app.use(express.json());


app.listen(3004, () => {
    console.log('Server started on port 3004 ');
    
})

app.use('/', myRoutes);