import { writeFile, mkdir, readFile } from 'fs'
import express from 'express'
import { engine } from 'express-handlebars'


function getRndNum(min, max) {
    return Math.floor(Math.random() * (max - min)) + min;
}


const app = express()
const database = './database/data.json'

app.engine('handlebars', engine());
app.set('view engine', 'handlebars');
app.set('views', './views');

// //Direktorijos sukurimas

// mkdir('./failai', function (err) {
//     if (!err) {
//         console.log('Direktorija sekmingai sukurta')
//     } else {
//         console.log('Ivyko klaida')
//     }
// })

// //Failo sukurimas:

// writeFile('./failai/hello.txt', 'Labas pasauli', 'utf8', function (err) {
//     if (!err) {
//         console.log('Failas sekmingai issaugotas')
//     } else {
//         console.log('Ivyko klaida')
//     }
// })


//----------------------------------------------------------------

// app.get('/create-file', function (req, res) {

//     mkdir('./database', function (err) {

//         let masyvas = [20, 50, 60]
//         let objektas = {
//             masyvas: masyvas
//         }

//         writeFile(database, JSON.stringify(objektas), 'utf8', function (err) {
//             if (!err) {
//                 console.log('Failas sekmingai issaugotas')
//             } else {
//                 console.log('Ivyko klaida')
//             }
//         })

//     })



//     // JSON.parse() - issifruoja JSON stringa ir ji konvartuoja i JS objekta
//     // JSON.stringify() - konvertuoja objekta i stringa JSON formatu

//     res.send('Success')
// })

// app.get('/check-file', (req, res) => {

//     readFile(database, 'utf8', (err, data) => {
//         res.send(data)
//     })

// })

//------------------------------------------------------------------


app.get('/create-file', function (req, res) {

    let masyvas = []

    for (let i = 0; i < 101; i++) {
        let sk1110 = getRndNum(1, 101)
        masyvas.push(sk1110)
    }

    mkdir('./database', function (err) {


        writeFile(database, JSON.stringify(masyvas), 'utf8', function (err) {
            if (!err) {
                console.log('Failas sekmingai issaugotas')
            } else {
                console.log('Ivyko klaida')
            }
        })

    })



    // JSON.parse() - issifruoja JSON stringa ir ji konvartuoja i JS objekta
    // JSON.stringify() - konvertuoja objekta i stringa JSON formatu

    res.send('Success')
})

app.get('/check-file', (req, res) => {

    readFile(database, 'utf8', (err, data) => {

        let number = JSON.parse(data)
        const result = number.filter(num => (num % 2) === 0)
        res.send(result)
    })

})




app.listen(3001)