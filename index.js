import { writeFile, mkdir } from 'fs'
import express from 'express'
import { engine } from 'express-handlebars'


const app = express()

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

app.get('/create-file', function (req, res) {
    let message = ''

    mkdir('./database', function (err) {
        if (!err) {
            message = 'Direktorija sekmingai sukurta'
            res.render('create-file', { message })
        }
    })

    writeFile('./database/data.json', '"{Data}"', 'utf8', function (err) {
        if (err) {
            message = 'Kuriant faila ivyko klaida'
            res.render('create-file', { message })
        }
    })
    res.render('create-file', { message })
})


















app.listen(3001)