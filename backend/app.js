var express = require("express");
var app = express();
var {PythonShell} = require('python-shell');
var cors = require('cors');
var bodyParser = require('body-parser');


app.use(express.static('public'));
app.use(bodyParser.urlencoded({ extended: true }))
app.use(cors());

app.get('/',(req,res)=>{
    var options = {
        mode: 'text',
        pythonPath: 'C:\\Users\\user\\Anaconda3\\python',
        // pythonOptions: ['-u'],
        scriptPath: './public/',
        args: ["2015","ASSAULT ON WOMEN WITH INTENT TO OUTRAGE HER MODESTY","Maharashtra","women"]
    }
    var output={
        accuracy: null,
        msg: null,
        state: null,
        year: null,
        C_type: null,
        years: [],
        pred_data: []
    }
    PythonShell.run('my_script.py',options,(err,results)=>{
        if(err) throw err;
        console.log('Python script finished');
        // results=JSON.parse(results);
        // console.log(results);
        output.accuracy=parseFloat(results[0]);
        output.msg=results[1];
        output.state=results[2];
        output.year=parseInt(results[3]);
        output.C_type=results[4];
        let s="";
        for(let i=0;i<results[5].length;i++){
            if(results[5][i]==' ')continue;
            let c=results[5][i]-'0';
            if(c>=0&&c<=9){
                s+=c;
            }
            if(results[5][i]==','||results[5][i]===']'){
                output.years.push(s);
                s="";
            }
        }
        s="";
        for(let i=0;i<results[6].length;i++){
            if(results[6][i]==' ')continue;
            let c=results[6][i]-'0';
            if(c>=0&&c<=9){
                s+=c;
            }
            if(results[6][i]==','||results[6][i]===']'){
                output.pred_data.push(parseInt(s));
                s="";
            }
        }
        // console.log(output)
        var data=JSON.stringify(output);
        console.log(data);
        res.send(data);
        // res.send(JSON.stringify(output));
    });
    
})



























app.listen(5000,()=> {
    console.log("app has started");
});





// var options = {
//     mode: 'binary',
//     pythonPath: 'C:\\Users\\user\\Anaconda3\\python',
//     // pythonOptions: ['-u'],
//     scriptPath: './public/'
//     // args: ["2015","ASSAULT ON WOMEN WITH INTENT TO OUTRAGE HER MODESTY","Maharashtra"]
// }
// var pyshell = new PythonShell('my_script.py',options);
// var data = "2015+ASSAULT ON WOMEN WITH INTENT TO OUTRAGE HER MODESTY+Maharashtra";
// var output=[];
// pyshell.send(data);

// pyshell.stdout.on('data',(data)=>{
//     var d=data.toString();
//     output.push(d);
// })

// pyshell.end(err=>{
//     if(err) throw err;
//     var res=output.split('\r\n');
//     console.log(res);
// })
