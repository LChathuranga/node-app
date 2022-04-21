const EventEmitter = require('events')

const customEmitter = new EventEmitter()

customEmitter.on('res', (name, id) => {
    console.log(`data recieved user name ${name} with id ${id}`);
})
customEmitter.on('res', () => {
    console.log(`This is another logic`);
})

customEmitter.emit('res', 'Lahiru', 24)