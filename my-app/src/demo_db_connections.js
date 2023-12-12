function sql (inp) {
    const mysql = require('mysql');

    const db = mysql.createConnection({
        host: "db.redhawks.us",
        user: "nchs_se",
        password: "temp2023!",
        database: "video4ever"

    })

    db.connect((err) => {
        if(err){
            console.log(err)
        } else {
            console.log('Connected!')
            db.query("SELECT Title, Price, DirectorFirst, DirectorLast, OnHand FROM `Inventory`, `Branch`, `Movie`, `Director`, `Directed` WHERE Branch.BranchNum = inp AND Branch.BranchNum = Inventory.BranchNum AND Inventory.MovieCode = Movie.MovieCode AND Movie.MovieCode = Directed.MovieCode AND Directed.DirectorNum = Director.DirectorNum;", function (err, result, fields) {
                if (err) throw err;
                else console.log(result);
            });
        }
    })
}