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
            db.query("SELECT Title, Price, DirectorFirst, DirectorLast, OnHand FROM `Inventory`, `Branch`, `Movie`, `Director`, `Directed` WHERE Branch.BranchNum = 1 AND Branch.BranchNum = Inventory.BranchNum AND Inventory.MovieCode = Movie.MovieCode AND Movie.MovieCode = Directed.MovieCode AND Directed.DirectorNum = Director.DirectorNum;", function (err, result, fields) {
                if (err) throw err;
                else
                strresult = JSON.stringify(result),
                console.log(strresult),
                db.end();
            });
        }
    })

    app.listen(5000, () => {
        console.log('Server is running on port 5000');
      });