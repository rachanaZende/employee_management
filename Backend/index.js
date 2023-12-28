const express = require('express')
const app = express()
const mysql = require('mysql')
const cors = require('cors')

app.use(express.json())
app.use(cors())

const pool = mysql.createPool({
    host:"127.0.0.1",
    user:"root",
    password:"root",
    database:"employee"
})

app.post('/empolyee',(req,res)=>{


pool.getConnection((error,connection)=>{
    if(error){
        console.log(error)
    }else{
       // var sql = "create database employee"
        //var sql = "create table employeedetails(empId INT AUTO_INCREMENT PRIMARY KEY, empName varchar(255),address varchar (255),contact varchar(255),gender varchar(255),emprole varchar(255),email varchar(255))"
        var sql = "insert into employeedetails(empName,address,contact,gender,emprole,email) values (?,?,?,?,?,?)"
        const values = [
            req.body.empName,
            req.body.address,
            req.body.contact,
            req.body.gender,
            req.body.emprole,
            req.body.email,
        ]
        connection.query(sql, values,(error,data)=>{
            if(error){
                console.log(error)
                return res.status(500).send(error)
            }else{
                //console.log("database is created...")
                //console.log("table is created...")
                console.log("data inserted...")
                return res.json(data)
            }
        })
    }
})
})
app.get('/empolyee',(req,res)=>{
    pool.getConnection((error,connection)=>{
        if(error){
            console.log(error)
        }else{
            var sql ="select * from employeedetails"
            connection.query(sql,(error,data)=>{
                if(error){
                    console.log(error)
                   return res.status(500).send(error)
                }else{
                    console.log("data get ..")
                   return res.json(data)
                }
            })
        }
    })
})
app.get('/empolyee/get/:empId',(req,res)=>{
     const empolyeeId = req.params.empId
     pool.getConnection((error,connection)=>{
        if(error){
            console.log(error)
            return res.status(500).send(error)
        }else{
            var sql = "select * from  employeedetails where empId = ?"
            connection.query(sql,[empolyeeId],(error,result)=>{
                if(error){
                    console.log(error)
                    return res.status(500).send(error)
                }else{
                    if(result.length > 0 ){
                        console.log(`data retrived for id ${empolyeeId}`)
                        return res.status(200).json(result[0])
                    }else{
                        console.log(`no data found for id ${empolyeeId}`)
                        res.status(404).send("No data found for inserted id"+empolyeeId)
                    }

                }
            })
        }
     })
})

app.put('/empolyee/update/:empId',(req,res)=>{
    const empolyeeId = req.params.empId
    pool.getConnection((error,connection)=>{
        if(error){
            console.log(error)
            return res.status(500).send(error)
        }else{
            var sql = " UPDATE  employeedetails SET empName = ?,address = ?,contact = ?,gender = ?,emprole = ?,email = ? WHERE empId = ?"
            const values = [
                req.body.empName,
                req.body.address,
                req.body.contact,
                req.body.gender,
                req.body.emprole,
                req.body.email,
                empolyeeId
            ]
            connection.query(sql,values,(error,data)=>{
                if(error){
                    console.log(error)
                    return res.status(500).send(error)
                }else{
                    console.log("data updated.." +empolyeeId)
                    return res.json(data)
                }
            })
        }
    })
})

app.delete('/empolyee/delete/:empId',(req,res)=>{
    const empolyeeId = req.params.empId
    pool.getConnection((error,connection)=>{
        if(error){
            console.log(error)
            return res.status(500).send(error)
        }else{
            var sql = "Delete from employeedetails where empId = ?"
            connection.query(sql,[empolyeeId],(error,data)=>{
                if(error){
                    console.log(error)
                    return res.status(500).send(error)
                }else{
                    console.log("data deleted..."+ empolyeeId)
                   return res.json(data)
                }
            })
        }
    })
})
app.listen(8080,()=>{
    console.log("port 8080 is running...")
})