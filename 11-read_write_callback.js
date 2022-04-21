//with callback

const {readFile, writeFile} = require('fs')

readFile('./content/new/first.txt', 'utf8', (err,result) => {
    if(err){
        console.log(err);
        return
    }
    const first = result
    readFile('./content/new/second.txt','utf8', (err, result) => {
        if(err){
            console.log(err);
            return
        }
        const second = result
        writeFile('./content/new/four.txt', `The result : ${first}, ${second}`,{flag:'a'}
        ,(err, result) => {
            if(err){
                console.log(err);
                return
            }
            console.log(result);
        })
    })
})

//in this it will not going row to row
//THIS NOT WAIT UNTIL TO GO NEXT 
//this is Async
