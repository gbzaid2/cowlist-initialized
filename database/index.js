const sql = require('mysql');
const Promise = require('bluebird');
const db = sql.createConnection({
    host: 'localhost',
    user: "root",
    database: "cows"
});

db.connect();

db.query = Promise.promisify(db.query);
const getAllCows = () => {
    return db.query("Select * from allcows")
};


const insertCow = ({name, description}) => {
    // Refactor to prevent sql injection attacks
    var values = [name, description];
    return db.query("INSERT INTO allcows (cow_name, cow_description) VALUES (?, ?)", values);
};

const updateCow = (cow) => {
    var values = [cow.name, cow.description, cow.id];
    return db.query("UPDATE allcows SET cow_name = ?, cow_description = ? WHERE id = ? ", values);
}

const deleteCow = (cowId) => {
    
    return db.query("DELETE FROM allcows WHERE id = ?", cowId);
}

module.exports.deleteCow = deleteCow;
module.exports.getAllCows = getAllCows;
module.exports.insertCow = insertCow;
module.exports.updateCow = updateCow;




