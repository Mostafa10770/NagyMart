const express = require('express');
var app = express();
//-------------
var students = require('./data.js');
var Admins = require('./admin_data');
//-----------
const bodyParser = require('body-parser');
app.use(bodyParser.urlencoded({extended: false}));
//--------------
const cookieParser = require('cookie-parser');
app.use(cookieParser());
//--------------
app.use(express.static(__dirname+'/public'));
//--------------
const jwt = require('jsonwebtoken');

// app.get('/', (req, res)=>{
//     res.render('./home.html');
// });

app.get('/', (req, res) => {
    res.sendFile('public/home.html' , { root : __dirname});
});

app.post("/LoginAction", (req,res)=>{
    var regnum = req.body.regnum;
    var pass = req.body.password;
    var colege = req.body.colege;
    var TOKEN = jwt.sign(regnum, '$webMOStafa!@');

    //res.cookie('regnum',regnum, {maxAge: 10*1000});
    console.log(regnum,pass,colege);
    //-------
    if(regnum === "" || pass === ""){
        console.log("not a value");
        res.redirect('./login.html');
    }

    var user = students.find((x)=> x.regnum == regnum && x.pass == pass && x.colege == colege);
    var admin = Admins.find((y)=> y.regnum == regnum && y.pass == pass);
    // var data = jwt.verify(TOKEN, '$webMOStafa!@');

    if(!user && !admin){
        // handle un_sign_up case
        return res.redirect('/login.html?error=invalid_credentials');
        // return res.status(400).json({ error: 'Invalid login credentials' });
        //res.redirect('./signup.html');
    }else if(user){

        res.cookie("regnum", user.regnum, {maxAge: 60*1000});
        res.cookie("colege", user.colege, {maxAge: 60*1000});
        res.cookie("TOKEN", TOKEN, {maxAge: 60*1000});
        res.redirect('/profile2');
    }else if(admin){
        res.cookie("regnum", admin.regnum, {maxAge: 60*1000});
        res.cookie("TOKEN", TOKEN, {maxAge: 60*1000});
        res.redirect('/profile');
    }else{
        res.redirect('./404.html');
    }
    //-------
    
});
app.get('/profile2',(req,res)=>{
    var regnum = req.cookies.regnum;
    var colege = req.cookies.colege;
    // validation
    var student = students.find((x)=> x.regnum == regnum && x.colege == colege);
    if(!student){
        res.end("invalide student");
    }
    else if(colege == 'AI'){
        res.redirect('./ai.html');
        // res.end("AI");
    }
    else if(colege == 'Dentistry'){
        res.redirect('./dental.html');
        // res.end("dental");
    }
    else if(colege == 'Engineering'){
        res.redirect('./eng.html');
        // res.end("Eng");
    }
    else if(colege == 'Pharmacy'){
        res.redirect('./pharma.html');
        // res.end("pharma");
    }
    else{
        res.redirect('./404.html');
    }
});

//---------get request
// localhost:9090/profile?regnum=20200420
app.get('/profile',(req,res)=>{
    var regnum = req.cookies.regnum;
    // validation
    //--------
    console.log(regnum);
    var admin = Admins.find((x)=> x.regnum == regnum);
    if(admin){
        res.redirect('./Dashboard.html');
        
    }
    else{
        res.redirect('./404.html');
    }
});

app.listen(9090, ()=>console.log("listening"));