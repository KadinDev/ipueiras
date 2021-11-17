// Aqui controlo login, logout, recuperar senha, criar nova senha...
// Sessão do usuário

module.exports = {
    loginForm( req, res ) {
        return res.render('session/login');
    }
}