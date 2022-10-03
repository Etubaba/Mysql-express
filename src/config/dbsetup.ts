import mysql2 from "mysql2";


const connectDB = mysql2.createPool(
    {
        host: 'localhost',
        user: 'root',
        database: 'etubabadb',
        waitForConnections: true,
        connectionLimit: 10,
        queueLimit: 0
    }
)

export default connectDB