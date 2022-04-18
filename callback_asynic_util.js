const {readFile, writeFile} = require('fs')
const util = require('util')
const readFilepromise = util.promisify(readFile)
const writeFilePromise = util.promisify(writeFile)


//using util
const utilStart = async () => {
    try {
        const first = await readFilepromise('./content/new/first.txt', 'utf8')
        const second = await readFilepromise('./content/new/second.txt', 'utf8')

        await writeFilePromise('./content/new/utilStart.txt', `THIS IS AWASOME ${first} ${second}`)
        console.log('using UTIL');
        console.log(first, second);
    } catch (error) {
        console.log(error);
    }
}
utilStart()


const getText = (path) => {
    return new Promise((resolve, reject) => {
        readFile(path, 'utf8', (err, data) => {
            if(err){
                reject(err)
            }else{
                resolve(data)
            }
        })
    })
}

//using async and wait
const start = async () => {
    try {
        const first = await getText('./content/new/first.txt')
        console.log('asyc method');
        console.log(first);
    } catch (error) {
        console.log(error);
    }
}

start()


//using callback function
console.log('Callback');
getText('./content/new/first.txt')
    .then((result) => console.log(result))
    .catch((err) => console.log(err))