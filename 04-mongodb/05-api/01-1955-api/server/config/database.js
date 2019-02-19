const mongoose = require('mongoose');
const path = require('path');
const fs = require('fs');
const reg = new RegExp('\\.js$', 'i');

const modelsPath = path.resolve('server', 'models');

mongoose.Promise = global.Promise;
//mongodb connection
mongoose.connect('mongodb://localhost/1955_api');
mongoose.connection.on('connected', () => console.log('connected to the 1955 API database'));

fs.readdirSync(modelsPath).forEach(file => {
    if(reg.test(file)){
        require(path.join(modelsPath, file));
    }
});
