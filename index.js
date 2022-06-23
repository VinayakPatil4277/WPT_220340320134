let dbparams=
{
    host: 'localhost',
    user: 'root',
    password: 'cdac',
    database: 'kolhapur1',
	port:3306
}; // change port to 3306 that may be the port mostly.


//fate means other person design
let input={bookid:190,bookname:'abc',price:200};
const mysql = require('mysql2'); //fate
const con=mysql.createConnection(dbparams);//fate  
con.query('update book set bookname = ?,price =? where bookid=?',
[input.bookname,input.price,input.bookid],
(error,whathappenedtoinsert)=>{
        if(error)
        {
            //when you dont have data why problem is there collect data first.
                console.log("only for insert , insert failed" + error);
        }

        else if(whathappenedtoinsert.affectedRows>0)
           console.log("update successful");
        else
          console.log("update failed");
        
}
);
