
class UserControler {

    showAcessForm(){
        return function(req, res){
            res.marko( require ('../views/costumers/index.marko'));
        }
    }

}

module.exports = UserControler;

