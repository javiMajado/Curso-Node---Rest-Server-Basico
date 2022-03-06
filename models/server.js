const express = require('express');
const cors = require('cors');
const UserRoutes = require('../routes/user.routes');
const bodyParser = require('body-parser');// instalar: npm install body-parser

class Server {
    constructor() {
        this.app = express();
        this.port = process.env.PORT

        //MDW
        this.middlewares();

        //RUTAS
        this.routes();
    }

    middlewares() {
        this.app.use(cors());
        this.app.use(express.static('public'));
        
        this.app.use(bodyParser.json()); 
        this.app.use(bodyParser.urlencoded({ extended: false }));

    }

    routes() {
       this.app.use('/api/users', UserRoutes)
    }

    start() {
        this.app.listen(this.port, () => {
            console.log('Servidor arrancado en el puerto', this.port);
            
        });
    }
}

module.exports = Server;