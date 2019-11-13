const express=require('express');
const chalk=require('chalk');
const path=require("path")

////create object 

// app.all('/',function(req,res){
//   ////send just sending a data use send() for sending file use sendFile()
//   res.sendFile(__dirname+"/src/views/index.html");

  
// });
/////linking css with out a view engine
// app.use(express.static(path.join(__dirname,"/public")));
// app.get('/',function(req,res){
//   res.sendFile(path.join(__dirname,"src/views/index.html"));
// });


////to add ejs change file extention of html  to .ejs
var app=new express();

var nav=[
  {
    link:"/",
    tittle:"HOME"
  },
  {
    link:"/books",
    tittle:"BOOKS"
   },
  {
    link:"/authers",
    tittle:"AUTHORS"
  },
  {
    link:"/aboutus"
    ,tittle:"ABOUT US"
  },
  {
    link:"/signup",
    tittle:"SIGN UP"
  },
  {
    link:"/login",
    tittle:"LOGIN"
  }
 ];
 var books=[
          {
            tittle:"book1",
            genere:"history",
            author:"victor hugo",
            img:"user-icon1.png"
          }, 
          {
            tittle:"book1",
            genere:"history",
            author:"victor hugo",
            img:"user-icon1.png"
          }, 
          {
            tittle:"book1",
            genere:"history",
            author:"victor hugo",
            img:"user-icon1.png"
          }, 
          {
            tittle:"book1",
            genere:"history",
            author:"victor hugo",
            img:"user-icon1.png"
          }, 
        ];
const booksrouter=express.Router();
app.use('/books',booksrouter);


app.use(express.static(path.join(__dirname,"/public")));
app.set('views','./src/views');
app.set('view engine','ejs');
booksrouter.route('/').get(
  (req,res)=>{
     res.render(
       'books',
       {
        nav,tittle:"Books",books
       }
     )
  });
app.get('/',function(res,res){
  res.render('index',
   {
     nav:nav,tittle:"Library App"
  });
});

////set port 
app.listen(3000,function(){
  console.log(chalk.yellowBright(`port ${chalk.redBright("3000")} is active`));
});






