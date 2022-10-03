import connectDB from '../config/dbsetup'
import { Response, Request } from 'express'
import { PoolConnection  } from 'mysql2'


//all users 

const userList = (req: Request, res: Response) => {
    connectDB.getConnection((err:any, connection: PoolConnection) => {
        if (err) throw err
        console.log('connected to database')
        connection.query('SELECT * FROM users', (err, rows) => {
            if (!err) res.json({ status: true, data: rows })
        })
        connection.release()
    })
}



// single user 

const singleUser = (req: Request, res: Response) => {
    const { id } = req.params
    connectDB.getConnection((err:any, connection: PoolConnection) => {
        if (err) throw err
        console.log('connected to database')


        connection.query('SELECT * FROM users WHERE id = ?', [id], (err, rows) => {
            connection.release()
            if (!err) {
                res.json({ status: true, data: rows })
            } else {
                console.log(err)
            }

        })
    })
}


//create user 
const createUser= (req: Request, res: Response) => {



    interface IUser {
        id: string,
      name: string,
      email: string,
      password: string,
      age: string,
      username: string
    }
const {name,id, email, password,age,username}:IUser=req.body

connectDB.getConnection((err:any, connection: PoolConnection)=>{
if(err)throw err;
connection.query("INSERT INTO users SET ?",req.body,(err, rows)=>{
    if(!err){
        res.status(200).json({status:true, data:rows});
    }



})
})
}





//delete a user

const deleteUser = (req: Request, res: Response) => {
    const id = req.params.id;
    connectDB.getConnection((err, connection) => {
        if (err) throw err
        connection.query("DELETE FROM users WHERE=?", [id], ((err, result) => {
            connection.release()
            if (!err) {
                res.status(200).json({ status: true, data: result })
            } else {
                console.log(err)
            }

        }))
    })
}








export { userList, singleUser, deleteUser,createUser }