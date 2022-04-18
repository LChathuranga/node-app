const {readFile, writeFile} = require('fs').promises


//using require_promises
const utilStart = async () => {
    try {
        const first = await readFile('./content/new/first.txt', 'utf8')
        const second = await readFile('./content/new/second.txt', 'utf8')

        await writeFile('./content/new/utilStart.txt', `THIS IS AWASOME ${first} ${second}`, {flag: 'a'})
        console.log('using UTIL');
        console.log(first, second);
    } catch (error) {
        console.log(error);
    }
}
utilStart()
