const event = require("events")

const eventEmitter = new event.EventEmitter();

eventEmitter.on("call me",(data)=>{
    console.log(data)

})

eventEmitter.emit("call me","Khushi")

eventEmitter.on("Session_started",( data)=>{
    console.log("Session started 30 students joined")
})

eventEmitter.emit("Session_started","30")