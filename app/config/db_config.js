const util = require('util');
const mysql = require('mysql');

makeDB=()=>
{
    const connection = mysql.createConnection({
        host:'localhost', //host name
        user:'root', // user name
        password:'', // database password
        database:'student_data' // database name
    });
    return{
        query(sql, arg){
            return util.promisify(connection.query).call(connection, sql, arg);
        },
        close()
        {
            return util.promisify(connection.end).call(connection);
        },
        beginTransaction(){
            return util.promisify(connection.beginTransaction).call(connection);
        },
        commit(){
            return util.promisify(connection.commit).call(connection);
        },
        rollback(){
            return util.promisify(connection.rollback).call(connection);
        }
    };
}

exports.makeDB=makeDB;