const express = require('express')
const app = express()
import 'controller/controller.js'

app.get('/messages/:chatId', controller.getChats())