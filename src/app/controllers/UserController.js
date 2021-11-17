// Aqui controlo o registro do user, mostrar user, POST, UPDATE, DELETE ...
const { formatContact } = require('../../lib/utils');

const User = require('../models/User');
const Avatar = require('../models/Avatar');

module.exports = {
    registerForm( req, res ){
        return res.render('user/register')
    },


    async post ( req, res ) {
        
        if( req.files.length == 0) return res.send('Please, send at least one image')

        const userId = await User.create(req.body);
        
        const filesPromisse = req.files.map( file => Avatar.create({ ...file, avatar_id: userId }) );
        await Promise.all(filesPromisse);

        return res.redirect(`/users/${userId}`);
    },

    async show ( req, res ) {
        let results = await User.find(req.params.id);
        const user = results.rows[0];

        if(!user) return res.send('User not found!');

        // IMAGES
        results = await User.filesUser(user.id);

        const files = results.rows.map( file => ({
            ...file,
            src: `${req.protocol}://${req.headers.host}${file.path.replace('public', '')}`,
        }) )
        // END IMAGES

        return res.render('user/show', { user, files } )
    }


}