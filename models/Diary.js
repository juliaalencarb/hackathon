const db = require('../database/connect.js');

class DiaryEntry {
    constructor(entry_id, author, date, entry) {
        this.entry_id = entry_id
        this.author = author
        this.date = date
        this.entry = entry
    }
}

class DiaryService {
    static mapToModel(dbResponse) {
        return dbResponse.rows.map(e => new DiaryEntry(e.entry_id, e.author, e.date, e.entry))
    }

    static async getAll() {
        const entries = await db.query(`
        SELECT *
        FROM diary`)

        return mapToModel(entries);
    }

    static async create(data) {
        const { author, date, entry } = data;
        const response = await db.query(`
        INSERT INTO diary (author, date, entry)
        VALUES ($1, $2, $3)`, [ data.author, data.date, data.entry ]);

        return new DiaryEntry(response.rows[0])
    }

    static async show(id) {
        const response = await db.query(`
        SELECT *
        FROM diary
        WHERE entry_id = ${id}`)

        return (response.rows[0])
    }

    async update(id, data) {
        const { author, date, entry } = data;
        const response = await db.query(`
        UPDATE diary
        SET ($1, $2, $3)
        WHERE entry_id = ${id}`, [ data.author, data.date, data.entry ])

        return (response.rows[0])
    }

    async destroy(id) {
        const response = await db.query(`
        DELETE FROM diary
        WHERE entry_id = ${id}
        RETURNING *
        `)
        
        return (response.rows[0])
    }
}


module.exports = { DiaryEntry, DiaryService }

