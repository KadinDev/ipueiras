const db = require('../../config/db');

const fs = require('fs');

module.exports = {
    create({ filename, path, avatar_id }) {
        const query = `
            INSERT INTO avatares (
                name,
                path,
                avatar_id
            ) VALUES ($1, $2, $3)
            RETURNING id
        `

        const values = [
            filename,
            path,
            avatar_id
        ]

        return db.query( query, values )
    }
}