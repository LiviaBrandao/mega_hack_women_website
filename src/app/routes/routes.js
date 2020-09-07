// Instance constrollers classes ---------------------------
const UserControler = require('../controllers/user_controler.js');
const userCont      = new UserControler();


//Export method object app, that calls the website pages
module.exports = (app) => {

   //Avoiding CORS problems 
    app.use((req, res, next) => {
        res.header('Access-Control-Allow-Origin', '*');
        res.header('Access-Control-Allow-Origin',  "http://localhost");
        res.header('Access-Control-Allow-Methods', 'GET,PUT,POST,DELETE');
        res.header('Access-Control-Allow-Headers', 'Content-Type');
        next();
    }); 


    /*****************   ROUTES  *****************/

    //  opens index.marko page
    app.get('/', userCont.showAcessForm());


}   //ENDS app


