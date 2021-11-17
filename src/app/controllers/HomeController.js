const Users = require('../models/User');

module.exports = {

    landingPage(req, res) {
        return res.render('landingPage/landingPage');
    } ,

    
    index(req, res) {

        let { filter } = req.query;

        if(filter){
            Users.findBy( filter, function(users) {
                return res.render('home/index', { users, filter } );
            } )
        } else {
            Users.allUsers(function(users) {
    
                return res.render('home/index', { users });
            })
        }
    }

}