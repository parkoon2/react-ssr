import 'babel-polyfill'
import express from 'express'
import bodyParser from 'body-parser'
import React from 'react'
import ReactDOMServer from 'react-dom/server'
import { StaticRouter } from 'react-router'
import { Helmet } from 'react-helmet'
import App from './src/app'

const app = express()
const PORT = process.env.PORT || 3000

app.use(bodyParser.json())
app.use(express.static('build/public'))
app.use(express.static('public'))

app.get('/ybmnet', (req, res) => {
    const context = {}

    const content = ReactDOMServer.renderToString(
        <StaticRouter location={req.url} context={context}>
            <App />
        </StaticRouter>
    )
    const helmet = Helmet.renderStatic()
    const html = `
    <html>
        <head>
            ${helmet.meta.toString()}
            ${helmet.title.toString()}
            <link rel="stylesheet" type="text/css" href="css/reset.css">
            <link rel="stylesheet" type="text/css" href="css/style.css">
        </head>
        <body>
            <div id="root">
                ${content}
            </div>
            <script src="client_bundle.js"></script>
        </body>
    </html>
    
    `

    res.send(html)
})

app.listen(PORT, () => {
    console.log(`Server is running on ${PORT}`)
})
