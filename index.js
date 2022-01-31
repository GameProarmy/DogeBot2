const {
    WAConnection: _WAConnection,
    MessageType,
    Presence,
    Mimetype,
    GroupSettingChange
} = require('@adiwajshing/baileys')
const { color, bgcolor } = require('./lib/color')
const fs = require("fs-extra")
const simple = require('./lib/simple.js')
const WAConnection = simple.WAConnection(_WAConnection)
const figlet = require('figlet')
const { getBuffer, info, start, success} = require('./lib/functions')
const moment = require("moment-timezone")
const gcdetect = JSON.parse(fs.readFileSync('./database/gcdetect.json'))
const brightcolor  = require('colors');
const encodeUrl = require('encodeurl')
const chalk = require('chalk')
const welkom = JSON.parse(fs.readFileSync('./database/welkom.json'))
const {  location } = MessageType
const settings = JSON.parse(fs.readFileSync('./settings.json'))
baterai = 'unknown'
charging = 'unknown'

const time = moment.tz('Asia/Jakarta').format('HH:mm:ss')			
const wita = moment.tz('Asia/Makassar').format('HH:mm:ss')			
const wit = moment.tz('Asia/Jayapura').format('HH:mm:ss')	

var date = new Date();

var tahun = date.getFullYear();
var bulan1 = date.getMonth();
var tanggal = date.getDate();
var hari = date.getDay();
var jams = date.getHours();
var menit = date.getMinutes(); 
var detik = date.getSeconds();
var waktoo = date.getHours();

switch(hari) {
case 0: hari = 'Minggu'; break;
case 1: hari = 'Senin'; break;
case 2: hari = 'Selasa'; break;
case 3: hari = 'Rabu'; break;
case 4: hari = 'Kamis'; break;
case 5: hari = 'Jum`at'; break;
case 6: hari = 'Sabtu'; break;
}

switch(bulan1) { 
case 0: bulan1 = 'kurruari'; break;
case 1: bulan1 = 'Februari'; break; 
case 2: bulan1 = 'Maret'; break;
case 3: bulan1 = 'April'; break;
case 4: bulan1 = 'Mei'; break;
case 5: bulan1 = 'Juni'; break;
case 6: bulan1 = 'Juli'; break;
case 7: bulan1 = 'Agustus'; break;
case 8: bulan1 = 'September'; break;
case 9: bulan1 = 'Oktober'; break; 
case 10: bulan1 = 'November'; break;
case 11: bulan1 = 'Desember'; break; 
}

switch(jams){
case 0: pada = "Malem"; break;
case 1: pada = "Malem"; break;
case 2: pada = "Malem"; break;
case 3: pada = "Pagi"; break;
case 4: pada = "Pagi"; break;
case 5: pada = "Pagi"; break;
case 6: pada = "Pagi"; break;
case 7: pada = "Pagi"; break;
case 8: pada = "Pagi"; break;
case 9: pada = "Pagi"; break;
case 10: pada = "Pagi"; break;
case 11: pada = "Siang"; break;
case 12: pada = "Siang"; break;
case 13: pada = "Siang"; break;
case 14: pada = "Siang"; break;
case 15: pada = "Sore"; break;
case 16: pada = "Sore"; break;
case 17: pada = "Sore"; break;
case 18: pada = "Malem"; break;
case 19: pada = "Malem"; break;
case 20: pada = "Malem"; break;
case 21: pada = "Malem"; break;
case 22: pada = "Malem"; break;
case 23: pada = "Malem"; break;
}

var tampilHari = '' + hari + ', ' + tanggal + ' ' + bulan1 + ' ' + tahun; 
var tampilJam = '' + 'Jams : ' + jams + ':' + menit + ':' + detik + ' Wib';
tampilTanggal = hari + " "+ tanggal + " " + bulan1 + " " + tahun; 
tampilWaktu =jams + ":" + menit + ":" + detik;



var ase = new Date();
var waktoonyabro = ase.getHours(); 
switch(waktoonyabro){
case 0: waktoonyabro = `Good Evening Owner..🌃`; break;
case 1: waktoonyabro = `Good Evening Owner..🌃`; break;
case 2: waktoonyabro = `Good Evening Owner..🌃`; break;
case 3: waktoonyabro = `Good Morning Owner..✨`; break;
case 4: waktoonyabro = `Good Morning Owner..✨`; break; 
case 5: waktoonyabro = `Good Morning Owner..✨`; break;
case 6: waktoonyabro = `Good Morning Owner..✨`; break;
case 7: waktoonyabro = `Good Morning Owner..✨`; break;
case 8: waktoonyabro = `Good Morning Owner..✨`; break;
case 9: waktoonyabro = `Good Morning Owner..✨`; break;
case 10: waktoonyabro = `Good Morning Owner..✨`; break;
case 11: waktoonyabro = `Good Afternoon Owner..🔥`; break; 
case 12: waktoonyabro = `Good Afternoon Owner..🔥`; break;
case 13: waktoonyabro = `Good Afternoon Owner..🔥`; break;
case 14: waktoonyabro = `Good Afternoon Owner..🔥`; break;
case 15: waktoonyabro = `Good Afternoon Owner..🌇`; break;
case 16: waktoonyabro = `Good Afternoon Owner..🌇`; break;
case 17: waktoonyabro = `Good Afternoon Owner..🌇`; break;
case 18: waktoonyabro = `Good Evening Owner..🌃`; break; 
case 19: waktoonyabro = `Good Evening Owner..🌃`; break;
case 20: waktoonyabro = `Good Evening Owner..🌃`; break;
case 21: waktoonyabro = `Good Evening Owner..🌃`; break;
case 22: waktoonyabro = `Good Evening Owner..🌃`; break; 
case 23: waktoonyabro = `Good Evening Owner..🌃`; break;
}

var tampilUcapan = '' + waktoonyabro;

//nocache
require('./XeonDoge.js')

const starts = async (dogexeon = new WAConnection()) => {
	dogexeon.logger.level = 'warn'
	dogexeon.version = [2, 2149, 4]
	console.log(color(`\x1b[1;37m> ${tampilUcapan}\n`,'cyan'))
	console.log(color(figlet.textSync('Doge Bot', {
		font: 'Standard',
		horizontalLayout: 'default',
		vertivalLayout: 'default',
		width: 80,
		whitespaceBreak: false
	}), 'cyan'))
	console.log(color('\n> YT CHANNEL: Xeon ','silver'))
console.log(color('> GITHUB: DGXeon ','silver'))
console.log(color('> WA NUMBER: ++4915905890216 ','silver'))
console.log(color('  Trust Bot Inc. 2021','mediumseagreen'))
	dogexeon.browserDescription = [ 'Subscribe Xeon', 'ubuntu', '3.0' ]

	dogexeon.on('qr', () => {
	console.log(color('[','white'), color('!','red'), color(']','white'), color('SCAN THE QR'))
})
	dogexeon.on('credentials-updated', () => {
		fs.writeFileSync('./session.json', JSON.stringify(dogexeon.base64EncodedAuthInfo(), null, '\t'))
		info('2', 'Doge Bot Loading...')
	})
	fs.existsSync('./session.json') && dogexeon.loadAuthInfo('./session.json')
	dogexeon.on('connecting', () => {
		start('2', 'CONNECT')
	})
	dogexeon.on('open', () => {
		success('2', 'Connected')
	})
    
	// session
	await dogexeon.connect({
		timeoutMs: 30 * 1000
	})
	fs.writeFileSync(`./session.json`, JSON.stringify(dogexeon.base64EncodedAuthInfo(), null, '\t'))

	// Baterai
	dogexeon.on('CB:action,,battery', json => {
		global.batteryLevelStr = json[2][0][1].value
		global.batterylevel = parseInt(batteryLevelStr)
		baterai = batterylevel
		if (json[2][0][1].live == 'true') charging = true
		if (json[2][0][1].live == 'false') charging = false
		console.log(json[2][0][1])
		console.log('Baterai : ' + batterylevel + '%')
	})
	global.batrei = global.batrei ? global.batrei : []
	dogexeon.on('CB:action,,battery', json => {
		const batteryLevelStr = json[2][0][1].value
		const batterylevel = parseInt(batteryLevelStr)
		global.batrei.push(batterylevel)
	})

	// Send Message
const sendButImage = async (id, text1, desc1, gam1, but = [], options = {}) => {
      kma = gam1;
      mhan = await dogexeon.prepareMessage(id, kma, MessageType.image);
       buttonMessages = {
        imageMessage: mhan.message.imageMessage,
        contentText: text1,
        footerText: desc1,
        buttons: but,
        headerType: 4,
      }
      dogexeon.sendMessage(id, buttonMessages, MessageType.buttonsMessage, options)
    }
const sendButLocation = async (id, text1, desc1, gam1, but = [], options = {}) => {
kma = gam1
mhan = await dogexeon.prepareMessage(id, kma, location)
const buttonMessages = {
locationMessage: mhan.message.locationMessage,
contentText: text1,
footerText: desc1,
buttons: but,
headerType: 6
}
dogexeon.sendMessage(id, buttonMessages, MessageType.buttonsMessage, options)
}
   // owner


    const htod = "+4915905890216@s.whatsapp.net"

    

dogexeon.on("group-update", async (anu) => {

    metdata = await dogexeon.groupMetadata(anu.jid);

    if (anu.announce == "false") {
