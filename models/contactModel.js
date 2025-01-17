const connectionPool = require('./db')

// Data Create
const addContact = (contact, callback) => {
    const insertQuery = `INSERT INTO contact(name, phone, email, memo, create_at, modify_at)
                      VALUES (?, ?, ?, ?, NOW(), NOW())`
    connectionPool.query(insertQuery, [contact.name, contact.phone, contact.email, contact.memo], (err, result) => {
        callback(err, result);
    })
}

// Data Read
const getContacts = (callback) => {
    const selectQuery = `SELECT * FROM contact ORDER BY id ASC`;
    connectionPool.query(selectQuery, (err, results) => {
        callback(err, results);
    })
}

// Data Update
const updateContactStatus = (id, callback) => {
    const updateQuery = `UPDATE contact SET status = 'done' WHERE id = ?`;
    connectionPool.query(updateQuery, [id], (err, result) => {
        callback(err, result);
    })
}

// Data Delete
const deleteContact = (id, callback) => {
    const deleteQuery = `DELETE FROM contact WHERE id= ?`
    connectionPool.query(deleteQuery, [id], (err, result) => {
        callback(err, result);
    })
}

module.exports = {
    getContacts,
    addContact,
    updateContactStatus,
    deleteContact,
}