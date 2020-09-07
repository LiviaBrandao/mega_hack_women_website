/* COLOCAR/INSTANCIAR TODOS OS PACOTES QUE USAREI 
   NO PROJETO  */
   require('marko/node-require').install();
   require('marko/express');
   
   const express = require('express');
   const app     = express();
// para usar variavel de sessao
   const session = require('express-session');
   const express_store = require('express-mysql-session')(session);
   
   
   // app.use((req, res) => {
   //    res.send()
   // })

   const bodyParser = require('body-parser');
   
// essa permite que o nodejs consiga pegar dados via req.body
   // app.use(bodyParser.urlencoded({
   //     extended: true
   // }));
   
   
// chamando o pacote method-override
   const methodOverride = require('method-override');

   
   
// criando a forma de armazenamento das variaveis de sessao no BD
   // var opcoes = {
   //               host:'localhost',
   //               port:3306,
   //               user:'root',
   //               password:'',
   //               database:'nodevesp'
   //              }
   // var session_store = new express_store(opcoes);
   
   
// para permitir o POST e PUT para o formulario
   // app.use(methodOverride(function (req,res) {
   //     if (req.body && typeof req.body === 'object' && '_method' in req.body) 
   //     {
   //       var method = req.body._method;
   //       delete req.body._method;
   //       return method;
   //     }
   // }));
   
// trabalhando com variaveis de sessao
   // app.use(session({
   //     secret: 'odesempre',
   //     saveUninitialized: true,
   //     resave: true,
   //     store: session_store
   // }));
   
// indicando um caminho de diretorio
   // app.use('/caminho',express.static('src/app/views'));

   // var reqTeste = "IAHUUUUU";

   // console.log("antes de entrar no método :c");
   //    app.get("/", (req, res)=> {
   //    res.send(reqTeste).then(sorvete => {console.log("ola mundo");})
   //    .catch(err => {console.log("deu erro porr" + err);});
   // });

   const rota = require('../app/routes/routes.js');
   rota(app);
   
   
// estou habilitando qq *.js a usar o meu app
// o app é a aplicação NODEJS
   module.exports = app;