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
        return dbResponse.rows.map(e => new DiaryEntry(e.entry_id, e.writer_name, e.e_date, e.w_entry))
    }

    static async getAll() {
        const entries = await db.query(`
        SELECT *
        FROM diary`)

        return DiaryService.mapToModel(entries);
    }

    static async create(data) {
        const response = await db.query(`
        INSERT INTO diary (writer_name, e_date, w_entry)
        VALUES ($1, $2, $3) RETURNING entry_id;`, [ data.author, data.date, data.entry ]);
        const newId = response.rows[0].entry_id;
        const newPost = await DiaryService.show(newId)

        return newPost
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


module.exports = DiaryService;

