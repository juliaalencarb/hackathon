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
}