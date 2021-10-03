const xmpp = require('simple-xmpp')
xmpp.on("online",data=>{
    console.log(`connected as ${data.jid.user} `)
})

function send(){
    setTimeout(send,5000);
    xmpp.send("hussain@localhost",`Hi time is ${Date.now()}`)
}

xmpp.on("error", error =>console.log(`something went wrong! ${error}`))
xmpp.on("chat",(from,message)=>{console.log(`${message}-${from}`)})
xmpp.connect({
    "jid":"admin@localhost",
    "password":"password",
    "host":"localhost",
    "port":5222
}) 

send();