const db = require('../../config/db');

const { hash } = require('bcryptjs');

module.exports = {

    allUsers(callback) {
        db.query(`SELECT * FROM users`, function(err, results) {
            if (err) throw `Database Error! ${err}`

            callback(results.rows)
        });
    },

    async create (data) {
        const query = `
            INSERT INTO users (
                avatar,
                name,
                email,
                password,
                contact,
                address,
                instagram,
                facebook,
                youtube,
                about,
                latitude,
                longitude,
                attendance,
                open_weekend
            ) VALUES ( $1, $2, $3, $4, $5, $6, $7, $8, $9, $10, $11, $12, $13, $14 )
            RETURNING id
        `
        
        //aqui a força da senha antes estava em 20, por esse motivo estava demorando
        //muito para salvar no banco de dados. aí mudei para 5
        const passwordHash = await hash(data.password, 5);

        const values = [
            data.avatar,
            data.name,
            data.email,
            passwordHash,
            data.contact,
            data.address,
            data.instagram,
            data.facebook,
            data.youtube,
            data.about,
            data.latitude,
            data.longitude,
            data.attendance,
            data.open_weekend
        ]

        const results = await db.query(query, values)

        return results.rows[0].id
    },
        
    find(id) {
        return db.query('SELECT * FROM users WHERE id = $1', [id] )
    },

    findBy( filter, callback) {
        db.query(`
            SELECT * FROM users
            WHERE users.name ILIKE '%${filter}%'
            OR users.about ILIKE '%${filter}%'
            GROUP BY users.id
        `, function ( err, results ) {
            if (err) throw `Database Error! ${err}`

            callback(results.rows)
        } )
    },
    
    filesUser(id) {
        return db.query(`
            SELECT * FROM avatares WHERE avatar_id = $1
        `, [id] )
    },

}
