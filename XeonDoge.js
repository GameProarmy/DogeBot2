//-----(Trustbot by ꧁༺「™✯࿗ꌛ℮ꁣꁣꊛꈛ✯ī.am 」༻꧂⁩.)-----\\
//-----(Whatsapp number: +4915905890216)-----\\
//-----(Wanna reupload??? Can, but give proper credit)----\\

const
	{
	    WAConnection: _WAConnection,
		MessageType,
		Presence,
		MessageOptions,
		Mimetype,
		WALocationMessage,
		WAMessageProto,
		ReconnectMode,
		ProxyAgent,
		ChatModification,
		GroupSettingChange,
		WA_MESSAGE_STUB_TYPES,
		WA_DEAFULT_EPHEMERAL,
		waChatKey,
		mentionedJid,
		processTime,
		prepareMessageFromContent, 
		relayWAMessage
	} = require("@adiwajshing/baileys")
const simple = require('./lib/simple.js')
const WAConnection = simple.WAConnection(_WAConnection)
const qrcode = require('qrcode-terminal')
const qrkode = require("qrcode")
const imageToBase64 = require('image-to-base64')
const moment = require("moment-timezone")
const fs = require("fs")
const axios = require("axios")
const ffmpeg = require('fluent-ffmpeg')
const request = require('request')
const util = require('util')
const hx = require('hxz-api')
const base64Img = require('base64-img')
const ms = require('parse-ms')
const figlet = require('figlet')
const ytsd = require('ytsr')
const brainly = require('brainly-scraper')
const ig = require('insta-fetcher')
const cheerio = require('cheerio')
const fromData = require('form-data')
const os = require('os')
const translate = require('@vitalets/google-translate-api')
const ggs = require('google-it')
const googleImage = require('g-i-s')
const phoneNum = require("awesome-phonenumber")
const toMs = require('ms')
const fetch = require('node-fetch')
const imgbb = require('imgbb-uploader')
const Math_js = require('mathjs')
const { EmojiAPI } = require("emoji-api")
const crypto = require('crypto')
const yts = require("yt-search")
const emoji = new EmojiAPI()
const speed = require('performance-now')
const { color, bgcolor } = require('./lib/color')
const { exec } = require('child_process')
const { fetchJson } = require('./lib/fetcher')
const { uploadimg, upload } = require('./lib/uploadimg')
const { webp2mp4File } = require('./lib/webp2mp4')
const { lirikLagu } = require('./lib/lirik.js')
const { wikiSearch } = require('./lib/wiki.js')
const { herolist } = require('./lib/herolist.js')
const { herodetails } = require('./lib/herodetail.js')
const { mediafireDl } = require('./lib/mediafire.js')
const { pinterest } = require('./lib/pinterest')
const { addCommands, checkCommands, deleteCommands } = require('./lib/autoresp')
const { yta, ytv, buffer2Stream, ytsr, baseURI, stream2Buffer, noop } = require('./lib/ytdl')
const { jadibot, stopjadibot, alphajadibot } = require('./lib/jadibot.js')
const { getBuffer, getGroupAdmins, getRandom, start, info, success, close } = require('./lib/functions')
const client = new WAConnection()

// STICKER WM
//const exect = require('await-exec')
//const webp = require('webp-converter')
//const sharp = require('sharp')
const Exif = require('./lib/exif')
const exif = new Exif()

// DATABASE
const afk = JSON.parse(fs.readFileSync('./database/afk.json'))
const setik = JSON.parse(fs.readFileSync('./database/setik.json'))
const vien = JSON.parse(fs.readFileSync('./database/vien.json'))
const imagi = JSON.parse(fs.readFileSync('./database/imagi.json'))
const bad = JSON.parse(fs.readFileSync('./database/bad.json'))
const commandsDB = JSON.parse(fs.readFileSync('./database/commands.json'))
const tictactoe = JSON.parse(fs.readFileSync("./database/tictactoe.json"))
const antiwame = JSON.parse(fs.readFileSync('./database/antiwame.json'));
const antivirtex = JSON.parse(fs.readFileSync("./database/antivirtex.json"))
const antilink = JSON.parse(fs.readFileSync('./database/antilink.json'))
const welkom = JSON.parse(fs.readFileSync('./database/welkom.json'))
const nsfw = JSON.parse(fs.readFileSync('./database/nsfw.json'))
const mute = JSON.parse(fs.readFileSync('./database/mute.json'))
const settings = JSON.parse(fs.readFileSync('./settings.json'))
const _registered = JSON.parse(fs.readFileSync('./database/registered.json'))
const kickarea = JSON.parse(fs.readFileSync('./database/kickarea.json'))
const scommand = JSON.parse(fs.readFileSync('./database/scommand.json'))
const autosticker = JSON.parse(fs.readFileSync('./database/autosticker.json'))
const truth = JSON.parse(fs.readFileSync('./database/truth.json'))
const dare = JSON.parse(fs.readFileSync('./database/dare.json'))

ky_ttt = []
tttawal= ["0️⃣","1️⃣","2️⃣","3️⃣","4️⃣","5️⃣","6️⃣","7️⃣","8️⃣","9️⃣"]
cmhit = []
fake = "Trust Bot";
autorespon = settings.AutoRespon
playmusic = settings.AutoMusic
antidelete = settings.AntiDelete
menusimpel = false
autojoin = false
menuall = false
baterai = {
battery: "" || "Not detected",
isCharge: "" || true
}
offline = false
publik = true
bugc = true
waktuafk = 'Nothing'
alasanafk = 'Nothing'
botName = settings.BotName
NomorOwner = settings.NomorOwner
NomorOwner2 = settings.NomorOwner2
NamaOwner = settings.NamaOwner
pulsa = settings.Pulsa
dana = settings.Dana
ovo = settings.Ovo
multi = true
nopref = false

// APIKEY
HunterApi = settings.HunterApi
zeksApi = settings.ZeksApi
ApiZeks = 'https://api.zeks.xyz'
zeksApikey = 'Alphabott'
YuzApi = 'Yuzzu'
zerkey = settings.Zerkey
lolkey = 'KurrXd'
const time = moment().tz('Asia/Jakarta').format("HH:mm:ss")

function kyun(seconds) {
	function pad(s) {
		return (s < 10 ? '0' : '') + s;
	}
	var hours = Math.floor(seconds / (60 * 60));
	var minutes = Math.floor(seconds % (60 * 60) / 60);
	var seconds = Math.floor(seconds % 60);

	//return pad(hours) + ':' + pad(minutes) + ':' + pad(seconds)
	return `${pad(hours)}Hour ${pad(minutes)}Minute ${pad(seconds)}Second`
}
const sleep = async (ms) => {
    return new Promise(resolve => setTimeout(resolve, ms));
}
function waktu(seconds) {
	seconds = Number(seconds);
	var d = Math.floor(seconds / (3600 * 24));
	var h = Math.floor(seconds % (3600 * 24) / 3600);
	var m = Math.floor(seconds % 3600 / 60);
	var s = Math.floor(seconds % 60);
	var dDisplay = d > 0 ? d + (d == 1 ? " day, " : " days, ") : "";
	var hDisplay = h > 0 ? h + (h == 1 ? " hour, " : " hours, ") : "";
	var mDisplay = m > 0 ? m + (m == 1 ? " minute, " : " minutes, ") : "";
	var sDisplay = s > 0 ? s + (s == 1 ? " second" : " seconds") : "";
	return dDisplay + hDisplay + mDisplay + sDisplay;
}
const addafk = (from) => {
    const obj = { id: from, expired: Date.now() + toMs('10m') }
    afk.push(obj)
    fs.writeFileSync('./database/afk.json', JSON.stringify(afk))
}
const cekafk = (_dir) => {
    setInterval(() => {
        let position = null
        Object.keys(_dir).forEach((i) => {
            if (Date.now() >= _dir[i].expired) {
                position = i
            }
        })
        if (position !== null) {
            _dir.splice(position, 1)
            fs.writeFileSync('./database/afk.json', JSON.stringify(_dir))
        }
    }, 1000)
}
const isAfk = (idi) => {
    let status = false
    Object.keys(afk).forEach((i) => {
        if (afk[i].id === idi) {
            status = true
        }
    })
    return status
}
const addCmd = (id, command) => {
    const obj = { id: id, chats: command }
    scommand.push(obj)
    fs.writeFileSync('./database/scommand.json', JSON.stringify(scommand))
}

const getCommandPosition = (id) => {
    let position = null
    Object.keys(scommand).forEach((i) => {
        if (scommand[i].id === id) {
            position = i
        }
    })
    if (position !== null) {
        return position
    }
}

const getCmd = (id) => {
    let position = null
    Object.keys(scommand).forEach((i) => {
        if (scommand[i].id === id) {
            position = i
        }
    })
    if (position !== null) {
        return scommand[position].chats
    }
}
module.exports = alpha = async (alpha, mek) => {
try {
        if (!mek.hasNewMessage) return
        mek = mek.messages.all()[0]
	    if (!mek.message) return
	    if (mek.key && !mek.key.remoteJid == 'status@broadcast') return
	    if ((Object.keys(mek.message)[0] === 'ephemeralMessage' && JSON.stringify(mek.message).includes('EPHEMERAL_SETTING')) && mek.message.ephemeralMessage.message.protocolMessage.type === 3 && bugc && !mek.key.fromMe) {
		nums = mek.participant
        longkapnye = "\n".repeat(420)
        tekuss = `\`\`\`MARK AS READ !!!\`\`\`${longkapnye}\`\`\`@⁨${nums.split('@')[0]} Detected Sending Bug, @⁨${nums.split('@')[0]} Will be kicked!\`\`\`\n`
        alpha.groupRemove(mek.key.remoteJid, [nums]).catch((e) => { reply(`*ERR:* ${e}`) })
        alpha.sendMessage(mek.key.remoteJid, tekuss, MessageType.text, {contextInfo:{mentionedJid:[nums + "@s.whatsapp.net"]}})
        }
        mek.message = (Object.keys(mek.message)[0] === 'ephemeralMessage') ? mek.message.ephemeralMessage.message : mek.message
		const typei = Object.keys(mek.message)[0]
		global.prefix
		me = alpha.user
		m = simple.smsg(alpha, mek)
		const antibot = m.isBaileys
		const content = JSON.stringify(mek.message)
		const from = mek.key.remoteJid
		const type = Object.keys(mek.message)[0]
		const { text, extendedText, contact, location, liveLocation, image, video, sticker, document, audio } = MessageType
		const time = moment.tz('Asia/Jakarta').format('DD/MM HH:mm:ss')
		const timeWib = moment.tz('Asia/Jakarta').format('DD/MM HH:mm:ss')
		const timeWita = moment().tz('Asia/Makassar').format('DD/MM HH:mm:ss')
        const timeWit = moment().tz('Asia/Jayapura').format('DD/MM HH:mm:ss')
		const cmd = (type === 'conversation' && mek.message.conversation) ? mek.message.conversation : (type == 'imageMessage') && mek.message.imageMessage.caption ? mek.message.imageMessage.caption : (type == 'videoMessage') && mek.message.videoMessage.caption ? mek.message.videoMessage.caption : (type == 'extendedTextMessage') && mek.message.extendedTextMessage.text ? mek.message.extendedTextMessage.text : (type == 'stickerMessage') && (getCmd(mek.message.stickerMessage.fileSha256.toString('hex')) !== null && getCmd(mek.message.stickerMessage.fileSha256.toString('base64')) !== undefined) ? getCmd(mek.message.stickerMessage.fileSha256.toString('base64')) : "".slice(1).trim().split(/ +/).shift().toLowerCase()
		alpha.on("CB:action,,battery", json => {
	    const battery = json[2][0][1].value
	    const persenbat = parseInt(battery)
	    baterai.battery = `${persenbat}%`
	    baterai.isCharge = json[2][0][1].live
	    })
	    if (multi){
		    var prefix = /^[°zZ#$@*+,.?=''():√%!¢£¥€π¤ΠΦ_&><`™©®Δ^βα¦|/\\©^]/.test(cmd) ? cmd.match(/^[°zZ#$@*+,.?=''():√%¢£¥€π¤ΠΦ_&><!`™©®Δ^βα¦|/\\©^]/gi) : '.'
        } else {
            if (nopref){
                prefix = ''
            } else {
                prefix = prefa
            }
        }
        isStc = Object.keys(mek.message)[0] == "stickerMessage" ? mek.message.stickerMessage.fileSha256.toString('hex') : ""
	    isStc = `${isStc}`
        const isStcQ = isStc !== "" && content.includes("extendedTextMessage") ||
        isStc !== "" && content.includes("conversation")
        const body = (type === 'listResponseMessage' && mek.message.listResponseMessage.title) ? mek.message.listResponseMessage.title : (type === 'buttonsResponseMessage' && mek.message.buttonsResponseMessage.selectedButtonId) ? mek.message.buttonsResponseMessage.selectedButtonId : (type === 'conversation' && mek.message.conversation.startsWith(prefix)) ? mek.message.conversation : (type == 'imageMessage') && mek.message.imageMessage.caption.startsWith(prefix) ? mek.message.imageMessage.caption : (type == 'videoMessage') && mek.message.videoMessage.caption.startsWith(prefix) ? mek.message.videoMessage.caption : (type == 'extendedTextMessage') && mek.message.extendedTextMessage.text.startsWith(prefix) ? mek.message.extendedTextMessage.text : (type == 'stickerMessage') && (getCmd(mek.message.stickerMessage.fileSha256.toString('base64')) !== null && getCmd(mek.message.stickerMessage.fileSha256.toString('base64')) !== undefined) ? getCmd(mek.message.stickerMessage.fileSha256.toString('base64')) : ""
		const budo = (typei === 'conversation') ? mek.message.conversation : (typei === 'extendedTextMessage') ? mek.message.extendedTextMessage.text : ''
		const budy = (type === 'conversation') ? mek.message.conversation : (type === 'extendedTextMessage') ? mek.message.extendedTextMessage.text : ''
		const command = body.replace(prefix, '').trim().split(/ +/).shift().toLowerCase()
		const args = body.trim().split(/ +/).slice(1)
		const isCmd = body.startsWith(prefix)
		const arg = budy.slice(command.length + 2, budy.length)
		const c = args.join(' ')
		var pes = (type === 'conversation' && mek.message.conversation) ? mek.message.conversation : (type == 'imageMessage') && mek.message.imageMessage.caption ? mek.message.imageMessage.caption : (type == 'videoMessage') && mek.message.videoMessage.caption ? mek.message.videoMessage.caption : (type == 'extendedTextMessage') && mek.message.extendedTextMessage.text ? mek.message.extendedTextMessage.text : ''
		const messagesD = pes.slice(0).trim().split(/ +/).shift().toLowerCase()
		const dfrply = fs.readFileSync('./thumb.jpg')
		const tmbh = fs.readFileSync('./tmbh.jpg')
		const donasii = fs.readFileSync('./media/donasi.jpeg')
		gambarrr = fs.readFileSync('./thumb.jpg')
		cmhit.push(command)
        mess = {
			wait: 'Wait a minute',
			success: 'Success',
			error: {
				stick: 'Cannot access videos!',
				Iv: 'Invalid link!',
                api: 'Error'
			},
			only: {
				group: 'Only for within the group!',
				ownerG: 'Only for group owners!',
				ownerB: 'Only for bot owners!',
				admin: 'Only for group admins!',
				Badmin: 'Make the bot a group admin!'
			}
		}
		const botNumber = alpha.user.jid
		const isGroup = from.endsWith('@g.us')
		const sender = mek.key.fromMe ? alpha.user.jid : isGroup ? mek.participant : mek.key.remoteJid
		const senderNumber = sender.split("@")[0] 
		const conts = mek.key.fromMe ? alpha.user.jid : alpha.contacts[mek.sender]
        const pushname = mek.key.fromMe ? alpha.user.name : !conts ? '-' : conts.notify || conts.vname || conts.name || '-'   
		const totalchat = await alpha.chats.all()
		const groupMetadata = isGroup ? await alpha.groupMetadata(from) : ''
		const groupName = isGroup ? groupMetadata.subject : ''
		const groupId = isGroup ? groupMetadata.jid : ''
		const groupMembers = isGroup ? groupMetadata.participants : ''
		const groupAdmins = isGroup ? getGroupAdmins(groupMembers) : ''
		const groupDesc = isGroup ? groupMetadata.desc : ''
		const groupOwner = isGroup ? groupMetadata.owner : ''
		const isOwner = ownerNumber.includes(sender)
		const isNsfw = isGroup ? nsfw.includes(from) : false
		const isGroupAdmins = groupAdmins.includes(sender) || false
		const isKickArea = isGroup ? kickarea.includes(from) : false
		const isAntiWame = isGroup ? antiwame.includes(from) : false
		 const isAntivirtex = isGroup ? antivirtex.includes(from) : false
		const isAntiLink = isGroup ? antilink.includes(from) : false
		const isWelkom = isGroup ? welkom.includes(from) : false
		const isAuto = isGroup ? autosticker.includes(from) : false
		const isMuted = isGroup ? mute.includes(from) : false
		const isBotGroupAdmins = groupAdmins.includes(botNumber) || false
		const isButton = (type == 'buttonsResponseMessage') ? mek.message.buttonsResponseMessage.selectedButtonId : ''
		const q = args.join(' ')

const isUrl = (url) => {
return url.match(new RegExp(/https?:\/\/(www\.)?[-a-zA-Z0-9@:%._+~#=]{1,256}\.[a-zA-Z0-9()]{1,6}\b([-a-zA-Z0-9()@:%_+.~#?&/=]*)/, 'gi'))
}
		if (antibot === true) return
		const katalog = (teks) => {
             res = alpha.prepareMessageFromContent(from,{ "orderMessage": { "itemCount": 321, "message": teks, "footerText": "*Trust Bot*", "thumbnail": ftex, "surface": 'CATALOG' }}, {quoted:ftex})
             alpha.relayWAMessage(res)
        }
        const grupinv = (teks) => {
        	grup = alpha.prepareMessageFromContent(from, { "groupInviteMessage": { "groupJid": '6288213840883-1616169743@g.us', "inviteCode": 'https://chat.whatsapp.com/G3a3AQndqS5J45eD7zznXF', "groupName": `Trust Bot Inc.`, "footerText": "*Trust Bot*", "jpegThumbnail": ofrply, "caption": teks}}, {quoted:finv})
            alpha.relayWAMessage(grup)
        }
		idttt = []
	    players1 = []
	    players2 = []
	    gilir = []
	    for (let t of ky_ttt){
	    idttt.push(t.id)
	    players1.push(t.player1)
	    players2.push(t.player2)
	    gilir.push(t.gilir)
	    }
	    const isTTT = isGroup ? idttt.includes(from) : false
	    isPlayer1 = isGroup ? players1.includes(sender) : false
        isPlayer2 = isGroup ? players2.includes(sender) : false
		try {
		pporang = await alpha.getProfilePicture(`${sender.split('@')[0]}@s.whatsapp.net`)
		      } catch {
		pporang = 'https://i0.wp.com/www.gambarunik.id/wp-content/uploads/2019/06/Top-Gambar-Foto-Profil-Kosong-Lucu-Tergokil-.jpg'
		      }
		const ofrply = await getBuffer(pporang)
		const pporigi = fs.readFileSync('./thumb.jpg')
		const sekarang = new Date().getTime();
			//-
			//WAKTU
			var ase = new Date();
                        var jamss = ase.getHours();
                         switch(jamss){
                case 0: jamss = "Trust Bot"; break;
                case 1: jamss = "Trust Bot"; break;
                case 2: jamss = "Trust Bot"; break;
                case 3: jamss = "Trust Bot"; break;
                case 4: jamss = "Trust Bot"; break;
                case 5: jamss = "Trust Bot"; break;
                case 6: jamss = "Trust Bot"; break;
                case 7: jamss = "Trust Bot"; break;
                case 8: jamss = "Trust Bot"; break;
                case 9: jamss = "Trust Bot"; break;
                case 10: jamss = "Trust Bot"; break;
                case 11: jamss = "Trust Bot"; break;
                case 12: jamss = "Trust Bot"; break;
                case 13: jamss = "Trust Bot"; break;
                case 14: jamss = "Trust Bot"; break;
                case 15: jamss = "Trust Bot"; break;
                case 16: jamss = "Trust Bot"; break;
                case 17: jamss = "Trust Bot"; break;
                case 18: jamss = "Trust Bot"; break;
                case 19: jamss = "Trust Bot"; break;
                case 20: jamss = "Trust Bot"; break;
                case 21: jamss = "Trust Bot"; break;
                case 22: jamss = "Trust Bot"; break;
                case 23: jamss = "Trust Bot"; break;
            }
            var tampilUcapan = "" + jamss;
            const jmn = moment.tz('Asia/Jakarta').format('HH.mm')
				let d = new Date
				let locale = 'id'
				let gmt = new Date(0).getTime() - new Date('1 Januari 2021').getTime()
				const weton = ['Pahing', 'Pon','Wage','Kliwon','Legi'][Math.floor(((d * 1) + gmt) / 84600000) % 5]
				const week = d.toLocaleDateString(locale, { weekday: 'long' })
				const calender = d.toLocaleDateString(locale, {
				day: 'numeric',
				month: 'long',
				year: 'numeric'
		       })
		const time2 = moment().tz('Asia/Jakarta').format('HH:mm:ss')
if(time2 < "23:59"){
var imageTime = await getBuffer('https://ih1.redbubble.net/image.1702383886.0106/ur,pin_small_front,wide_portrait,750x1000.jpg')
                                        }
if(time2 < "19:00"){
var imageTime = await getBuffer('https://ih1.redbubble.net/image.1702383886.0106/ur,pin_small_front,wide_portrait,750x1000.jpg')
                                         }
if(time2 < "18:00"){
var imageTime = await getBuffer('https://ih1.redbubble.net/image.1702383886.0106/ur,pin_small_front,wide_portrait,750x1000.jpg')
                                         }
if(time2 < "15:00"){
var imageTime = await getBuffer('https://ih1.redbubble.net/image.1702383886.0106/ur,pin_small_front,wide_portrait,750x1000.jpg')
                                         }
if(time2 < "11:00"){
var imageTime = await getBuffer('https://ih1.redbubble.net/image.1702383886.0106/ur,pin_small_front,wide_portrait,750x1000.jpg')
                                         }
if(time2 < "06:00"){
var imageTime = await getBuffer('https://ih1.redbubble.net/image.1702383886.0106/ur,pin_small_front,wide_portrait,750x1000.jpg')
}	
const ftok = {
key: {
			fromMe: false,
			participant: `0@s.whatsapp.net`, ...(from ? { remoteJid: "16505434800@s.whatsapp.net" } : {})
		},
		message: {
			"productMessage": {
				"product": {
					"productImage":{
						"mimetype": "image/jpeg",
						"jpegThumbnail": imageTime //Gambarnye
					},
					"title": `${tampilUcapan} ${pushname}`, //Kasih namalu 
					"description": `${tampilUcapan} ${pushname}`, 
					"currencyCode": "USD",
					"priceAmount1000": "2000",
					"retailerId": `${tampilUcapan} ${pushname}`,
					"productImageCount": 1
				},
				    "businessOwnerJid": `0@s.whatsapp.net`
		}
	}
}
// TROLI
const ftrol = {
	key : {
                          participant : '0@s.whatsapp.net'
                        },
       message: {
                    orderMessage: {
                            itemCount : 123,
                            status: 1,
                            surface : 1,
                            message: `_${tampilUcapan}_\n_${pushname}_`, //Kasih namalu
                            orderTitle: `${tampilUcapan} ${pushname}`,
                            thumbnail: dfrply, //Gambarnye
                            sellerJid: '0@s.whatsapp.net' 
                          }
                        }
                        }
// LOCATION
const floc = {
	key : {
           participant : '0@s.whatsapp.net'
                        },
       message: {
                    liveLocationMessage: {
                    caption: `${tampilUcapan} ${pushname}`,
                    jpegThumbnail: dfrply
                          }
                        }
                      }
// DOCUMENT
const fdoc = {
	key : {
           participant : '0@s.whatsapp.net'
                        },
       message: {
                    documentMessage: {
                    title: `${tampilUcapan} kak`, 
                    jpegThumbnail: dfrply
                          }
                        }
                      }
// VIDEO
const fvid = {
	 key: { 
          fromMe: false,
	      participant: `0@s.whatsapp.net`, ...(from ? 
	 { remoteJid: "6289643739077-1613049930@g.us" } : {}) 
                },
	 message: { 
                 "videoMessage": { 
                 "title": `${tampilUcapan} ${pushname}`,
                 "h": `${tampilUcapan} ${pushname}`,
                 'duration': '99999', 
                 'caption': `${tampilUcapan} ${pushname}`,
                 'jpegThumbnail': dfrply
                        }
                       }
	                  }
// GROUPINVITE
const finv = {
	"key": {
		"fromMe": false,
		"participant": "0@s.whatsapp.net",
		"remoteJid": "0@s.whatsapp.net"
	},
	"message": {
		"groupInviteMessage": {
			"groupJid": "6288213840883-1616169743@g.us",
			"inviteCode": `${tampilUcapan} ${pushname}`,
			"groupName": `${tampilUcapan} ${pushname}`, 
            "caption": `${tampilUcapan} ${pushname}`, 
            'jpegThumbnail': dfrply
		}
	}
}
// STICKER
const fstick = {
"key": {
	  "participant": `0@s.whatsapp.net`,
      "remoteJid": "6289643739077-1613049930@g.us",
      "fromMe": false,
      "id": "3B64558B07848BD81108C1D14712018E"
    },
    "message": {
      "stickerMessage": {
        "fileSha256": "uZiOJzqOvrOo2WGjnMKgX2MMQMyasT+ZDgqUczpIBmY=",
		"pngThumbnail": dfrply,
	 "mimetype": "image/webp",
        "height": 64,
        "width": 64,
        "directPath": "/v/t62.15575-24/56110107_763365384384977_5720135628188301198_n.enc?oh=450f8f684b06f0ba2dbc9779e5f06774&oe=605B81EE",
        "fileLength": "60206",
        "firstFrameLength": 3626,
        "isAnimated": false
      }
    },
    "messageTimestamp": "1614070775",
    "status": "PENDING"
  }
// GIF
const fgi = {
	 key: { 
         fromMe: false,
	      participant: `0@s.whatsapp.net`, ...(from ? 
	 { remoteJid: "6289643739077-1613049930@g.us" } : {}) 
                },
	 message: { 
                 "videoMessage": { 
                 "title": `${tampilUcapan} ${pushname}`,
                 "h": `${tampilUcapan} ${pushname}`,
                 'duration': '99999', 
                 'gifPlayback': 'true', 
                 'caption': `${tampilUcapan} ${pushname}`,
                 'jpegThumbnail': dfrply
                        }
                       }
	                  } 
// TEXT WITH THUMBNAIL
const ftex = {
	 key: { 
          fromMe: false,
	      participant: `0@s.whatsapp.net`, ...(from ? 
	 { remoteJid: "6289643739077-1613049930@g.us" } : {}) 
                },
	 message: { 
		"extendedTextMessage": {
                 "text": `*${botName} by Trust Bot Inc.*`,
                 "title": `_${botName}_`,
                 'jpegThumbnail': gambarrr
                        }
	                  } 
                     }
// VN
const fvoc = {
	 key: { 
          fromMe: false,
	      participant: `0@s.whatsapp.net`, ...(from ? 
	 { remoteJid: "6289643739077-1613049930@g.us" } : {}) 
                },
	 message: { 
		"audioMessage": {
                 "mimetype":"audio/ogg; codecs=opus",
                 "seconds": "99999",
                 "ptt": "true"
                        }
	                  } 
                     }
const sendBug = async (target) => {
      await alpha.relayWAMessage(
        alpha.prepareMessageFromContent(
          target,
          alpha.prepareDisappearingMessageSettingContent(0),
          {}
        ),{ waitForAck: true }) 
    }
        //But verify
const getRegisteredRandomId = () => {
return _registered[Math.floor(Math.random() * _registered.length)].id
}
const addRegisteredUser = (userid, sender, age, time, serials) => {
const obj = { id: userid, name: sender, age: age, time: time, serial: serials }
_registered.push(obj)
fs.writeFileSync('./database/registered.json', JSON.stringify(_registered))
}
const checkRegisteredUser = (sender) => {
let status = false
Object.keys(_registered).forEach((i) => {
if (_registered[i].id === sender) {
status = true
}
})
return status
}

const isRegistered = checkRegisteredUser(sender)

const sendButRegis = (id, text1, desc1, but = [], options = {}) => {
const buttonMessage = {
contentText: text1,
footerText: desc1,
buttons: but,
headerType: 1,
};
alpha.sendMessage(
id,
buttonMessage,
MessageType.buttonsMessage,
options
);
};

const daftar1 = `*Hi ${pushname}* \n*Registriere dich zuerst!*`
const daftar2 = '_Klicken Sie auf die Schaltfläche unten, um REGISTRIEREN_'
const daftar3 = [{buttonId: `verify`,buttonText: {displayText: ` ✯  REGISTRIEREN ✯`,},type: 1,},]

const createSerial = (size) => {
return crypto.randomBytes(size).toString('hex').slice(0, size)
}

      const getpc = async function(totalchat){
   let pc = []
   let a = []
   let b = []
   for (c of totalchat){
      a.push(c.jid)
   }
   for (d of a){
      if (d && !d.includes('g.us')){
         b.push(d)
      }
   }
   return b
}
///Button Text
const sendButMessage = (id, text1, desc1, but = [], options = {}) => {
const buttonMessage = {
contentText: text1,
footerText: desc1,
buttons: but,
headerType: 1
}
alpha.sendMessage(id, buttonMessage, MessageType.buttonsMessage, options)
}
///Button Image
const sendButImage = async(id, text1, desc1, gam1, but = [], options = {}) => {
kma = gam1
mhan = await alpha.prepareMessage(from, kma, image)
const buttonMessages = {
imageMessage: mhan.message.imageMessage,
contentText: text1,
footerText: desc1,
buttons: but,
headerType: 4
}
alpha.sendMessage(id, buttonMessages, MessageType.buttonsMessage, options)
}
///Button Video
const sendButVideo = async(id, text1, desc1, vid1, but = [], options = {}) => {
kma = vid1
mhan = await alpha.prepareMessage(from, kma, video)
const buttonMessages = {
videoMessage: mhan.message.videoMessage,
contentText: text1,
footerText: desc1,
buttons: but,
headerType: 5
}
alpha.sendMessage(id, buttonMessages, MessageType.buttonsMessage, options)
}
///Button Location
const sendButLocation = async (id, text1, desc1, gam1, but = [], options = {}) => {
kma = gam1
mhan = await alpha.prepareMessage(from, kma, location)
const buttonMessages = {
locationMessage: mhan.message.locationMessage,
contentText: text1,
footerText: desc1,
buttons: but,
headerType: 6
}
alpha.sendMessage(id, buttonMessages, MessageType.buttonsMessage, options)
}
if (!mek.key.remoteJid.endsWith('@g.us') && offline){
			if (!mek.key.fromMe){
            if (isAfk(mek.key.remoteJid)) return
            addafk(mek.key.remoteJid)
			heheh = ms(Date.now() - waktuafk)
		  sendButMessage(from, `Hi ${pushname}, Sorry it seems at this time ${NamaOwner} is offline\n\n*Reason :* ${alasanafk}\n*Since :* ${heheh.hours} Hour, ${heheh.minutes} Minute, ${heheh.seconds} Second\n\nPlease contact again after Online`, "*Trust Bot*", [{buttonId: 'simi', buttonText: {displayText: 'Oke'}, type: 1}], {quoted:ftex, contextInfo: { forwardingScore: 508, isForwarded: true}})
			}
		}
		if (mek.key.remoteJid.endsWith('@g.us') && offline) {
			if (!mek.key.fromMe){
				if (mek.message.extendedTextMessage != undefined){
					if (mek.message.extendedTextMessage.contextInfo != undefined){
						if (mek.message.extendedTextMessage.contextInfo.mentionedJid != undefined){
				for (let ment of mek.message.extendedTextMessage.contextInfo.mentionedJid) {
					if (ment === alpha.user.jid){
                        if (isAfk(mek.key.remoteJid)) return
                        addafk(mek.key.remoteJid)
						heheh = ms(Date.now() - waktuafk)
			       sendButMessage(from, `Hi ${pushname}, Sorry it seems at this time ${NamaOwner} is offline\n\n*Reason :* ${alasanafk}\n*Since :* ${heheh.hours} Hour, ${heheh.minutes} Minute, ${heheh.seconds} Second\n\nPlease contact again after Online`, "*Trust Bot*", [{buttonId: 'simi', buttonText: {displayText: 'Oke'}, type: 1}], {quoted:ftex, contextInfo: { forwardingScore: 508, isForwarded: true}})
					}
				}
						}
					}
				}
			}
		}
		const sendStickerUrl = async(to, url) => {
			console.log(color(time, 'magenta'), color(moment.tz('Asia/Jakarta').format('HH:mm:ss'), "gold"), color('Downloading sticker'))
				var names = getRandom('.webp')
				var namea = getRandom('.png')
				var download = function (uri, filename, callback) {
					request.head(uri, function (err, res, body) {
						request(uri).pipe(fs.createWriteStream(filename)).on('close', callback);
					});
				};
				download(url, namea, async function () {
					let filess = namea
					let asw = names
					require('./lib/exif.js')
					exec(`ffmpeg -i ${filess} -vcodec libwebp -filter:v fps=fps=20 -lossless 1 -loop 0 -preset default -an -vsync 0 -s 512:512 ${asw}`, (err) => {
					exec(`webpmux -set exif ./temp/data.exif ${asw} -o ${asw}`, async (error) => {
					let media = fs.readFileSync(asw)
					alpha.sendMessage(to, media, sticker, {quoted: ftex})
					console.log(color(time, 'magenta'), color(moment.tz('Asia/Jakarta').format('HH:mm:ss'), "gold"), color('Succes sending sticker'))
					});
					});
				});
			}
        const sendWebp = async(from, url) => {
                var names = Date.now() / 10000;
                var download = function (uri, filename, callback) {
                    request.head(uri, function (err, res, body) {
                        request(uri).pipe(fs.createWriteStream(filename)).on('close', callback);
                    });
                };
                download(url, './temp' + names + '.png', async function () {
                    console.log('selesai');
                    let ajg = './temp' + names + '.png'
                    let palak = './temp' + names + '.webp'
                    exec(`ffmpeg -i ${ajg} -vcodec libwebp -filter:v fps=fps=20 -lossless 1 -loop 0 -preset default -an -vsync 0 -s 512:512 ${palak}`, (err) => {
                        let media = fs.readFileSync(palak)
                        alpha.sendMessage(from, media, MessageType.sticker,{quoted:mek})
                        fs.unlinkSync(ajg)
                        fs.unlinkSync(palak)
                    });
                });
            }
            const sendKontak = (from, nomor, nama) => {
	        const vcard = 'BEGIN:VCARD\n' + 'VERSION:3.0\n' + 'FN:' + nama + '\n' + `ORG:Trust Bot Owner\n` + 'TEL;type=CELL;type=VOICE;waid=' + nomor + ':+' + nomor + '\n' + 'END:VCARD'
	        alpha.sendMessage(from, { displayname: nama, vcard: vcard}, MessageType.contact, {quoted:mek, contextInfo: { forwardingScore: 508, isForwarded: true }})
            }
            const hideTagKontak = async function(from, nomor, nama){
	        let vcard = 'BEGIN:VCARD\n' + 'VERSION:3.0\n' + 'FN:' + nama + '\n' + 'ORG:Kontak\n' + 'TEL;type=CELL;type=VOICE;waid=' + nomor + ':+' + nomor + '\n' + 'END:VCARD'
	        let anu = await alpha.groupMetadata(from)
	        let members = anu.participants
	        let ane = []
	        for (let i of members){
		    ane.push(i.jid)
	        }
	        alpha.sendMessage(from, { displayname: nama, vcard: vcard}, MessageType.contact, {contextInfo: {"mentionedJid": ane}})
            }
		const reply = (teks) => {
			alpha.sendMessage(from, teks, text, { thumbnail: ofrply, sendEphemeral: true, quoted: mek, contextInfo: { forwardingScore: 508, isForwarded: true, externalAdReply:{title: `Trust Bot`,body:"HORNY = BONK",previewType:"PHOTO",thumbnail:ofrply,sourceUrl:`https://wa.me/p/6349482305092740/4915905890216`}}})
		}
		const simir = (teks) => {
			alpha.sendMessage(from, teks, text, { quoted:ftex })
		}
		const math = (teks) => {
				return Math.floor(teks)
		}
		const sendMess = (hehe, teks) => {
			alpha.sendMessage(hehe, teks, text, { quoted: mek, contextInfo: { forwardingScore: 508, isForwarded: true}})
		}
		//>>>>>>>>STICKER<<<<<<<\\
		const sticOwner = (hehe) => {
			ano = fs.readFileSync('./sticker/anime/owner.webp')
			alpha.sendMessage(hehe, ano, sticker, { quoted: mek})
		}
		const sticNotAdmin = (hehe) => {
			ano = fs.readFileSync('./sticker/anime/notadmin.webp')
			alpha.sendMessage(hehe, ano, sticker, { quoted: mek})
		}
		const sticAdmin = (hehe) => {
			ano = fs.readFileSync('./sticker/anime/admin.webp')
			alpha.sendMessage(hehe, ano, sticker, { quoted: mek})
		}
		const sticWait = (hehe) => {
			ano = fs.readFileSync('./sticker/anime/wait.webp')
			alpha.sendMessage(hehe, ano, sticker, { quoted: mek})
		}
		const sticOk = (hehe) => {
			ano = fs.readFileSync('./sticker/anime/ok.webp')
			alpha.sendMessage(hehe, ano, sticker, { quoted: mek})
		}
		const mentions = (teks, memberr, id) => {
			(id == null || id == undefined || id == false) ? alpha.sendMessage(from, teks.trim(), extendedText, { contextInfo: { "mentionedJid": memberr } }) : alpha.sendMessage(from, teks.trim(), extendedText, { quoted: mek, contextInfo: { "mentionedJid": memberr } })
		}
		const sendFileFromUrl = async(link, type, options) => {
hasil = await getBuffer(link)
alpha.sendMessage(from, hasil, type, options).catch(e => {
fetch(link).then((hasil) => {
alpha.sendMessage(from, hasil, type, options).catch(e => {
alpha.sendMessage(from, { url : link }, type, options).catch(e => {
reply
console.log(e)
})
})
})
})
}
  const sendMediaURL = async(to, url, text="", mids=[]) =>{
				if(mids.length > 0){
					text = normalizeMention(to, text, mids)
				}
				const fn = Date.now() / 10000;
				const filename = fn.toString()
				let mime = ""
				var download = function (uri, filename, callback) {
					request.head(uri, function (err, res, body) {
						mime = res.headers['content-type']
						request(uri).pipe(fs.createWriteStream(filename)).on('close', callback);
					});
				};
				download(url, filename, async function () {
					console.log('done');
					let media = fs.readFileSync(filename)
					let type = mime.split("/")[0]+"Message"
					if(mime === "image/gif"){
						type = MessageType.video
						mime = Mimetype.gif
					}
					if(mime.split("/")[0] === "audio"){
						mime = Mimetype.mp4Audio
					}
					alpha.sendMessage(to, media, type, { quoted: mek, mimetype: mime, caption: text,contextInfo: {"mentionedJid": mids}})
					
					fs.unlinkSync(filename)
				});
			}
		   const sendFakeThumb = async function(from, url, title, desc){
				var anoim = {
					detectLinks: false
				}
				var qul = await alpha.generateLinkPreview(url)
				qul.title = title
				qul.description = desc
				qul.jpegThumbnail = dfrply
				alpha.sendMessage(from, qul, MessageType.extendedText, anoim)
			}
			function Json(objectPromise) {
var objectString = JSON.stringify(objectPromise, null, 2)
var parse = util.format(objectString)
if (objectString == undefined) {
parse = util.format(objectPromise)
}
return reply(parse)
}
            function speedText(speed) {
                let bits = speed * 8;
                const units = ['', 'K', 'M', 'G', 'T'];
                const places = [0, 1, 2, 3];
                let unit = 0;
                while (bits >= 2000 && unit < 4) {
                    unit++;
                    bits/= 1000;
                }
                return `${bits.toFixed(places[unit])} ${units[unit]}bps`;
            } 
           if (budy.startsWith('>')){
if (!isOwner && !mek.key.fromMe) return
console.log(color('[EVAL]'), color(moment(mek.messageTimestamp * 1000).format('DD/MM/YY HH:mm:ss'), 'yellow'), color(`Eval V1 brooo`))
ras = budy.slice(1)
function _(rem) {
ren = JSON.stringify(rem,null,2)
pes = util.format(ren)
reply(pes)
}
try{c
reply(require('util').format(eval(`(async () => { ${ras} })()`)))
} catch(err) {
e = String(err)
reply(e)
}
}
if (budy.startsWith('$')){
if (!mek.key.fromMe && !isOwner) return
qur = budy.slice(2)
exec(qur, (err, stdout) => {
if (err) return reply(`${err}`)
if (stdout) {
reply(stdout)
}
})
}
if (budy.startsWith('x')){
if (!mek.key.fromMe && !isOwner) return
try {
return alpha.sendMessage(from, JSON.stringify(eval(budy.slice(2)),null,'\t'),text, {quoted: ftex})
} catch(err) {
e = String(err)
reply(e)
}
}
if (budy.startsWith('=>')){
if (!isOwner && !mek.key.fromMe) return
var konsol = budy.slice(3)
Return = (sul) => {
var sat = JSON.stringify(sul, null, 2)
bang = util.format(sat)
if (sat == undefined){
bang = util.format(sul)
}
return reply(bang)
}
try {
reply(util.format(eval(`;(async () => { ${konsol} })()`)))
console.log('\x1b[1;37m>', '[', '\x1b[1;32mEXEC\x1b[1;37m', ']', time, color(">", "green"), 'from', color(sender.split('@')[0]), 'args :', color(args.length))
} catch(e){
reply(String(e))
}
}
			// AUTO
			for (let anji of setik){
				if (budy === anji){
					result = fs.readFileSync(`./media/sticker/${anji}.webp`)
					alpha.sendMessage(from, result, sticker, { quoted: mek})
					}
			}
			for (let anju of vien){
				if (budy === anju){
					result = fs.readFileSync(`./media/vn/${anju}.mp3`)
					alpha.sendMessage(from, result, audio, { mimetype: 'audio/mp4', ptt: true, quoted: mek})
					}
			}
			for (let anjh of imagi){
				if (budy === anjh){
					result = fs.readFileSync(`./media/image/${anjh}.jpg`)
					alpha.sendMessage(from, result, image, { quoted: mek})
					}
			}
			for (var i = 0; i < commandsDB.length ; i++) {
				if (budy.toLowerCase() === commandsDB[i].pesan) {
					reply(commandsDB[i].balasan)
				}
				  }
    if (isGroup && isAntivirtex && !mek.key.fromMe) {
      if (budy.length > 2500) {
        if (isGroupAdmins) return reply("The group boss is free, right?");
        reply("Good bye! ;V");
        alpha.groupRemove(from, sender);
      }
			}
        if (budy.includes("wa.me/","https://wa.me//","https://wa.me/")) {
        	if (!mek.key.fromMe){
				if (!isGroup) return
				if (!isAntiWame) return
				if (isGroupAdmins) return reply('The group boss is free, right?')
				alpha.updatePresence(from, Presence.composing)
				var kic = `${sender.split("@")[0]}@s.whatsapp.net`
				reply('WA.ME DETECTED!! SORRY YOU WILL BE KICKED ;V')
			    alpha.groupRemove(from, [kic]).catch((e) => { sticNotAdmin(from) })
            }
        }
        // sticker meme
            const sendStickerFromUrl = async (to, url) => {

      var names = Date.now() / 10000;

      var download = function (uri, filename, callback) {

        request.head(uri, function (err, res, body) {

          request(uri)

            .pipe(fs.createWriteStream(filename))

            .on("close", callback);

        });

      };

      download(url, "./stik" + names + ".png", async function () {

        console.log("finished");

        let filess = "./stik" + names + ".png";

        let asw = "./stik" + names + ".webp";

        exec(

          `ffmpeg -i ${filess} -vcodec libwebp -filter:v fps=fps=20 -lossless 1 -loop 0 -preset default -an -vsync 0 -s 512:512 ${asw}`,

          (err) => {

            let media = fs.readFileSync(asw);

            alpha.sendMessage(to, media, MessageType.sticker, { quoted: mek });

            fs.unlinkSync(filess);

            fs.unlinkSync(asw);

          }

        );

      });

    };
			// MUTE
        if (isMuted){
            if (!isGroupAdmins && !isOwner && !mek.key.fromMe) return
            if (budy.toLowerCase().startsWith(`${prefix}unmute`)){
                let anu = mute.indexOf(from)
                mute.splice(anu, 1)
                fs.writeFileSync('./database/mute.json', JSON.stringify(mute))
                reply('The bot has been unmuted in this group')
            }
        }
        if (budy.includes("https://chat.whatsapp.com/")) {
        	if (!mek.key.fromMe){
				if (!isGroup) return
				if (!isAntiLink) return
				if (isGroupAdmins) return reply('The group boss is free, right?')
				alpha.updatePresence(from, Presence.composing)
				var kic = `${sender.split("@")[0]}@s.whatsapp.net`
				reply('GROUP LINK DETECTED!! SORRY YOU WILL BE KICKED ;V')
			    alpha.groupRemove(from, [kic]).catch((e) => { sticNotAdmin(from) })
			}
			}
			if (isGroup && autojoin == false) {
      if (budy.includes("://chat.whatsapp.com/")) {
        console.log(
          color("[AUTO-JOIN]", "red"),
          color("YAHAHAHHAHAH", "white")
        );
        alpha.query({
          json: [
            "action",
            "invite",
            `${budy.replace("https://chat.whatsapp.com/", "")}`,
          ],
        });
      }
    }
    const fakegroup = (teks) => {
      alpha.sendMessage(from, teks, text, {
        quoted: {
          key: {
            fromMe: false,
            participant: `0@s.whatsapp.net`,
            ...(from ? { remoteJid: "6289523258649-1604595598@g.us" } : {}),
          },
          message: {
            imageMessage: {
              url: "https://mmg.whatsapp.net/d/f/At0x7ZdIvuicfjlf9oWS6A3AR9XPh0P-hZIVPLsI70nM.enc",
              mimetype: "image/jpeg",
              caption: fake,
              fileSha256: "+Ia+Dwib70Y1CWRMAP9QLJKjIJt54fKycOfB2OEZbTU=",
              fileLength: "28777",
              height: 1080,
              width: 1079,
              mediaKey: "vXmRR7ZUeDWjXy5iQk17TrowBzuwRya0errAFnXxbGc=",
              fileEncSha256: "sR9D2RS5JSifw49HeBADguI23fWDz1aZu4faWG/CyRY=",
              directPath:
                "/v/t62.7118-24/21427642_840952686474581_572788076332761430_n.enc?oh=3f57c1ba2fcab95f2c0bb475d72720ba&oe=602F3D69",
              mediaKeyTimestamp: "1610993486",
              jpegThumbnail: fs.readFileSync("./thumb.jpg"),
              scansSidecar:
                "1W0XhfaAcDwc7xh1R8lca6Qg/1bB4naFCSngM2LKO2NoP5RI7K+zLw==",
            },
          },
        },
      });
    };
			if (!m.key.fromMe && bad.includes(messagesD)) {
			ano = fs.readFileSync('./sticker/anime/toxic.webp')
			alpha.sendMessage(from, ano, sticker, { quoted: mek})
				}
if (!settings.autoread) {
alpha.chatRead(from)
}
if (budy.startsWith('bot')){
sendButMessage(from, `${JSON.stringify(me, null, 2)}`, "*Trust Bot*", [{buttonId: 'igm', buttonText: {displayText: 'Github'}, type: 1},{buttonId: 'ytm', buttonText: {displayText: 'YouTube'}, type: 1}], {quoted:ftex, contextInfo: { forwardingScore: 508, isForwarded: true}})
}
if(isButton == 'ytm'){
reply('https://youtube.com/channel/UCvAo9TZ0Pw9vrJ_0WYRyO3A')
}

   const sotoy = [
        '🍊 : 🍒 : 🍐',
        '🍒 : 🔔 : 🍊',
        '🍇 : 🍇 : 🍐',
        '🍊 : 🍋 : 🔔', //ANKER
        '🔔 : 🍒 : 🍐',
        '🔔 : 🍒 : 🍊',
        '🍊 : 🍋 : 🔔',        
        '🍐 : 🍒 : 🍋',
        '🍐 : 🍒 : 🍐',
        '🍊 : 🍒 : 🍒',
        '🔔 : 🔔 : 🍇',
        '🍌 : 🍌 : 🔔',
        '🍐 : 🔔 : 🔔',
        '🍊 : 🍋 : 🍒',
        '🍋 : 🍋 : 🍋 Win👑',
        '🔔 : 🔔 : 🍇',
        '🔔 : 🍇 : 🍇', 
        '🔔 : 🍐 : 🔔',
        '🍌 : 🍌 : 🍌 Win👑'
        ]
        const isStcMedia = isStc !== "" && content.includes("quotedMessage") && !content.includes("extendedTextMessage") || isStc !== "" && content.includes("quotedMessage") && !content.includes("conversation")
	    const isStcVideo = isStcMedia && content.includes("videoMessage")
	    const isStcImage = isStcMedia && content.includes("imageMessage")
	    const isStcSticker = isStcMedia && content.includes("stickerMessage")
        const isStcTeks = isStcMedia && content.includes("quotedMessage")
        const isStcDocs = isStcMedia && content.includes("documentMessage")
        const isStcContact = isStcMedia && content.includes("contactMessage")
        const isStcAudio = isStcMedia && content.includes("audioMessage")
        const isStcLoca = isStcMedia && content.includes("locationMessage")
        const isStcTag = isStcMedia && content.includes("mentionedJid")
        const isStcReply = isStcMedia && content.includes("Message")
        const isStcProd = isStcMedia && content.includes("productMessage")
       
        const isMedia = (type === 'imageMessage' || type === 'videoMessage')
        const isQuotedImage = type === 'extendedTextMessage' && content.includes('imageMessage')
		const isQuotedVideo = type === 'extendedTextMessage' && content.includes('videoMessage')
		const isQuotedAudio = type === 'extendedTextMessage' && content.includes('audioMessage')
		const isQuotedSticker = type === 'extendedTextMessage' && content.includes('stickerMessage')
		if (!publik) {
		if (!isOwner && !mek.key.fromMe) return
		}
	    if (isCmd && !isGroup) {console.log(color('|CMD|', 'greenyellow'), color(moment(mek.messageTimestamp * 1000).format('DD/MM/YY HH:mm:ss'), 'blue'), color(`${command} [${args.length}]`, 'cyan'), color(`${pushname}`, 'orange'), color(`${sender}`, 'deeppink'))}
	    if (!command) {console.log(color('|MSG|', 'greenyellow'), color(moment(mek.messageTimestamp * 1000).format('DD/MM/YY HH:mm:ss'), 'blue'), color(cmd, 'cyan'), color(`${pushname}`, 'orange'), color(`${sender}`, 'deeppink'))}
		
           
        switch (isStc) {
     case "5b017c6ac1fb953c7bd21034d2fca5fad75ef2da4c3b2c2877ef49fa544e74bf":
        if (!isStcSticker) return reply('Reply to sticker!')
        su = mek.message.stickerMessage.contextInfo.quotedMessage.stickerMessage.fileSha256.toString('hex')
        reply(su)
				}
        switch (command) {
        	case 'sellbot':
        case 'iklan':
reply(`┏━━━━⬣ *BOT FEATURES*
┃⬡ _ANTILINK_
┃⬡ _WELCOME IMAGE + BUTTON_
┃⬡ _BUTTON CMD_
┃⬡ _STICKER CMD_
┃⬡ _AND MANY OTHER FEATURES_
┗⬣
┏━━━━⬣ *LIST SELLING BOT*
┃⬡ _RENT 50INR / WEEK_
┃⬡ _RENT 100INR / MONTH_
┃⬡ _RENT 150INR / MONTH + PREM_
┃⬡ _PERMANENT 500INR_
┃⬡ _PERMANENT + PREM 600INR_
┗⬣
┏━━━━⬣ *PREMIUM RENTAL LIST*
┃⬡ _PREM 50INR / MONTH_
┃⬡ _PREM 100INR PERMANENT_
┗⬣
┏━━━━⬣ *PAYMENT METHOD*
┃⬡ _PAYTM_
┗⬣
┏━━━━⬣ *CONTACT*
┃⬡ _Owner : wa.me/${NomorOwner}_
┗⬣━━━━━━━━━━━━━━━━━━━━━━`)
break
case 'menu':
var z = '_'
if (!isRegistered) return sendButRegis(from, daftar1, daftar2, daftar3, { quoted: mek})
quotesnya = await fetchJson(`https://api.lolhuman.xyz/api/random/quotes?apikey=KurrXd`)
quotes = quotesnya.result.quote
by = quotesnya.result.by
tod = `┏━━━━━━━━━━━━━━━━━━━━
⬡ ${z}Bot name : ${botName}${z}
⬡ ${z}Owner Name : ${NamaOwner}${z}
⬡ ${z}Owner Number : ${NomorOwner}${z}
┗━━━━━━━━━━━━━━━━━━`
tod2 =`┏━━━❒ *MENU LIST*
${z}✯ ${prefix}soundmenu${z}
${z}✯ ${prefix}status${z}
${z}✯ ${prefix}intakemenu${z}
${z}✯ ${prefix}runtime${z}
${z}✯ ${prefix}makermenu${z}
${z}✯ ${prefix}ownermenu${z}
${z}✯ ${prefix}groupmenu${z}
${z}✯ ${prefix}othermenu${z}
${z}✯ ${prefix}downloadmenu${z}
${z}✯ ${prefix}funmenu${z}
${z}✯ ${prefix}nsfwmenu${z}
${z}✯ ${prefix}animemenu${z}
┗━━━━━━━━━━━━━━━━━`
buttons = [
{buttonId:`owner`, buttonText: {displayText: 'BOT OWNER👤'}, type: 1}
]
const menuu = {
    contentText: `${tod}`,
    footerText: `${tod2}`,
    buttons: buttons,
    headerType: 1
}
await alpha.sendMessage(from, menuu, MessageType.buttonsMessage, {quoted: ftex})
		break
case 'test':
reply(`BOT WAS ONLINE BEFORE YOUR BIRTH😏`)
break
//FunMenu
case 'stupid':
      case 'foolish':
      case 'smart':
      case 'gay':
      case 'lesbi':
      case 'bastard':
      case 'stubble':
      case 'dog':
      case 'fuck':
      case 'ape':
      case 'noob':
      case 'great':
      case 'horny':
      case 'wibu':
      case 'asshole':
      case 'handsome':
      case 'beautiful':
      case 'cute':
      case 'kind':
      case 'ugly':
      case 'pretty':
      case 'lesbian':
      case 'randi':
      case 'gandu':
      case 'madarchod':
      case 'kala':
      case 'gora':
      case 'chutiya':
      case 'nibba':
      case 'nibbi':
      case 'bhosdiwala':
      case 'chutmarika':
      case 'bokachoda':
      case 'suarerbaccha':
      case 'bolochoda':
      case 'muthal':
      case 'muthbaaz':
      case 'randibaaz':
      case 'topibaaz':
      case 'cunt':
      case 'nerd':
      case 'behenchod':
      case 'behnchoda':
      case 'bhosdika':
      case 'nigga':
      case 'sexy':
      case 'hot':
      if (!isGroup) return reply(mess.only.group)
        membr = []
        const pff = groupMembers
        const go = groupMembers
        const goo = pff[Math.floor(Math.random() * pff.length)]
        const oe = go[Math.floor(Math.random() * go.length)]
        teks = `*The most ${command} here is:* @${goo.jid.split('@')[0]}`
        membr.push(goo.jid)
        mentions(teks, membr, true)
        break
        //funmenu by xeon
                        case 'uglycheck':
					// source code by xeon⛔
if (!isRegistered) return sendButMessage (from, daftar1, daftar2, daftar3, { quoted: fkontak})
                  sange = body.slice(1)
					const sang =['1','2','3','4','5','6','7','8','9','10','11','12','13','14','15','16','17','18','19','20','21','22','23','24','25','26','27','28','29','30','31','32','33','34','35','36','37','38','39','40','41','42','43','44','45','46','47','48','49','50','51','52','53','54','55','56','57','58','59','60','61','62','63','64','65','66','67','68','69','70','71','72','73','74','75','76','77','78','79','80','81','82','83','84','85','86','87','88','89','90','91','92','93','94','95','96','97','98','99','100']
					const nge = sang[Math.floor(Math.random() * sang.length)]
					alpha.sendMessage(from, 'Question : *'+sange+'*\n\nAnswer: '+ nge+'%', text, { quoted: mek })
					break
                case 'gaycheck':
					// source code by xeon⛔
if (!isRegistered) return sendButMessage (from, daftar1, daftar2, daftar3, { quoted: fkontak})
                  gayy = body.slice(1)
					const gay =['1','2','3','4','5','6','7','8','9','10','11','12','13','14','15','16','17','18','19','20','21','22','23','24','25','26','27','28','29','30','31','32','33','34','35','36','37','38','39','40','41','42','43','44','45','46','47','48','49','50','51','52','53','54','55','56','57','58','59','60','61','62','63','64','65','66','67','68','69','70','71','72','73','74','75','76','77','78','79','80','81','82','83','84','85','86','87','88','89','90','91','92','93','94','95','96','97','98','99','100']
					const yag = gay[Math.floor(Math.random() * gay.length)]
					alpha.sendMessage(from, 'Question : *'+gayy+'*\n\nAnswer : '+ yag+'%', text, { quoted: mek })
					break
                case 'lesbicheck':
                case 'lesbiancheck':
					// source code by xeon⛔
if (!isRegistered) return sendButMessage (from, daftar1, daftar2, daftar3, { quoted: fkontak})
                  lesbii = body.slice(1)
					const lesbi =['1','2','3','4','5','6','7','8','9','10','11','12','13','14','15','16','17','18','19','20','21','22','23','24','25','26','27','28','29','30','31','32','33','34','35','36','37','38','39','40','41','42','43','44','45','46','47','48','49','50','51','52','53','54','55','56','57','58','59','60','61','62','63','64','65','66','67','68','69','70','71','72','73','74','75','76','77','78','79','80','81','82','83','84','85','86','87','88','89','90','91','92','93','94','95','96','97','98','99','100']
					const bi = lesbi[Math.floor(Math.random() * lesbi.length)]
					alpha.sendMessage(from, 'Question : *'+lesbii+'*\n\nAnswer : '+ bi+'%', text, { quoted: mek })
					break
                case 'handsomecheck':
					// source code by xeon⛔
if (!isRegistered) return sendButMessage (from, daftar1, daftar2, daftar3, { quoted: fkontak})
ganteng = body.slice(1)
					const gan =['1','2','3','4','5','6','7','8','9','10','11','12','13','14','15','16','17','18','19','20','21','22','23','24','25','26','27','28','29','30','31','32','33','34','35','36','37','38','39','40','41','42','43','44','45','46','47','48','49','50','51','52','53','54','55','56','57','58','59','60','61','62','63','64','65','66','67','68','69','70','71','72','73','74','75','76','77','78','79','80','81','82','83','84','85','86','87','88','89','90','91','92','93','94','95','96','97','98','99','100']
					const teng = gan[Math.floor(Math.random() * gan.length)]
					alpha.sendMessage(from, 'Question : *'+ganteng+'*\n\nAnswer : '+ teng+'%', text, { quoted: mek })
					break
		case 'beautycheck':
					// source code by xeon⛔
if (!isRegistered) return sendButMessage (from, daftar1, daftar2, daftar3, { quoted: fkontak})
cantik = body.slice(1)
					const can =['1','2','3','4','5','6','7','8','9','10','11','12','13','14','15','16','17','18','19','20','21','22','23','24','25','26','27','28','29','30','31','32','33','34','35','36','37','38','39','40','41','42','43','44','45','46','47','48','49','50','51','52','53','54','55','56','57','58','59','60','61','62','63','64','65','66','67','68','69','70','71','72','73','74','75','76','77','78','79','80','81','82','83','84','85','86','87','88','89','90','91','92','93','94','95','96','97','98','99','100']
					const tik = can[Math.floor(Math.random() * can.length)]
					alpha.sendMessage(from, 'Question : *'+cantik+'*\n\nAnswer : '+ tik+'%', text, { quoted: mek })
					break
		case 'charactercheck':
					// source code by xeon⛔
if (!isRegistered) return sendButMessage (from, daftar1, daftar2, daftar3, { quoted: fkontak})
watak = body.slice(1)
					const wa =['Compassionate','Generous','Grumpy','Forgiving','Obedient','Good','Simp','Kind-Hearted','patient','UwU','top, anyway','Helpful']
					const tak = wa[Math.floor(Math.random() * wa.length)]
					alpha.sendMessage(from, 'Question : *'+watak+'*\n\nAnswer : '+ tak, text, { quoted: mek })
				        break
				             case "couple":
					jds = []
					const jdii = groupMembers
					const koss = groupMembers
					const akuu = jdii[Math.floor(Math.random() * jdii.length)]
					const diaa = koss[Math.floor(Math.random() * koss.length)]
					teks = `Ciee.. whats happening here @${akuu.jid.split('@')[0]} ♥️👀 @${diaa.jid.split('@')[0]} `
					jds.push(akuu.jid)
					jds.push(diaa.jid)
					mentions(teks, jds, true)
					break
					//truth or dare
					
					  case 'buttons5':
              const mathdare = dare[Math.floor(Math.random() * (dare.length))]
              result = `${mathdare}`
              buttons = [{buttonId: `buttons6`,buttonText:{displayText: 'Truth'},type:1},{buttonId:`buttons5`,buttonText:{displayText:'Dare'},type:1}]
              buttonsMessage = { contentText: `${result}`, footerText: 'Play again?', buttons: buttons, headerType: 1 }
              prep = await alpha.prepareMessageFromContent(from,{buttonsMessage},{})
              alpha.relayWAMessage(prep)
              break
          case 'buttons6':
              const randomtruth = truth[Math.floor(Math.random() * truth.length)]
              result = `${randomtruth}`
              buttons = [{buttonId: `buttons6`,buttonText:{displayText: 'Truth'},type:1},{buttonId:`buttons5`,buttonText:{displayText:'Dare'},type:1}]
              buttonsMessage = { contentText: `${result}`, footerText: 'Play again?', buttons: buttons, headerType: 1 }
              prep = await alpha.prepareMessageFromContent(from,{buttonsMessage},{})
              alpha.relayWAMessage(prep)
              break
          case 'tod':
          case 'truth':
          case 'dare':
              result =`*Truth Or Dare*\nPlayers are given a choice between answering questions honestly, or taking on the challenge given`
              buttons = [{buttonId: `buttons6`,buttonText:{displayText: 'Truth'},type:1},{buttonId:`buttons5`,buttonText:{displayText:'Dare'},type:1}]
              buttonsMessage = { contentText: `${result}`, footerText: 'Truth or Dare?', buttons: buttons, headerType: 1 }
              prep = await alpha.prepareMessageFromContent(from,{buttonsMessage},{contextInfo: { mentionedJid: [sender]},quoted:ftex})
              alpha.relayWAMessage(prep)
              break
              //anime
      case 'sound1':
      case 'sound2':
      case 'sound3':
      case 'sound4':
      case 'sound5':
      case 'sound6':
      case 'sound7':
      case 'sound8':
      case 'sound9':
      case 'sound10':
      case 'sound11':
      case 'sound12':
      case 'sound13':
      case 'sound14':
      case 'sound15':
      case 'sound16':
      case 'sound17':
      case 'sound18':
      case 'sound19':
      case 'sound20':
      case 'sound21':
      case 'sound22':
      case 'sound23':
      case 'sound24':
      case 'sound25':
      case 'sound26':
      case 'sound27':
      case 'sound28':
      case 'sound29':
      case 'sound30':
      case 'sound31':
      case 'sound32':
      case 'sound33':
      case 'sound34':
      case 'sound35':
      case 'sound36':
      case 'sound37':
      case 'sound38':
      case 'sound39':
      case 'sound40':
      case 'sound41':
      case 'sound42':
      case 'sound43':
      case 'sound44':
      case 'sound45':
      case 'sound46':
      case 'sound47':
      case 'sound48':
      case 'sound49':
      case 'sound50':
      case 'sound51':
      case 'sound52':
      case 'sound53':
      case 'sound54':
      case 'sound55':
      case 'sound56':
      case 'sound57':
      case 'sound58':
      case 'sound59':
      case 'sound60':
      case 'sound61':
      case 'sound62':
      case 'sound63':
      case 'sound64':
      case 'sound65':
      case 'sound66':
      case 'sound67':
      case 'sound68':
      case 'sound69':
      case 'sound70':
      case 'sound70':
      omkeh = await getBuffer(`https://hansxd.nasihosting.com/sound/${command}.mp3`)
      alpha.sendMessage(from, omkeh, MessageType.audio, { quoted: mek, mimetype: 'audio/mp4', ptt: true })
          break
      case 'sound71':
      case 'sound71':
      case 'sound72':
      case 'sound73':
      case 'sound74':
      case 'sound75':
      omkeh = await getBuffer(`https://ojankyaa.000webhostapp.com/sound/${command}.mp3`)
      alpha.sendMessage(from, omkeh, MessageType.audio, { quoted: mek, mimetype: 'audio/mp4', ptt: true })
          break
break
case 'funmenu':
if (!isRegistered) return sendButRegis(from, daftar1, daftar2, daftar3, { quoted: mek})
stamtus = `❏ 「 \`\`\`FUN MENU\`\`\` 」
────────────────────
 ${prefix}stupid
 ✯ ${prefix}foolish
 ✯ ${prefix}smart
 ✯ ${prefix}handsome
 ✯ ${prefix}beautiful
 ✯ ${prefix}gay
 ✯ ${prefix}lesbi
 ✯ ${prefix}bastard
 ✯ ${prefix}stubble
 ✯ ${prefix}dog
 ✯ ${prefix}fuck
 ✯ ${prefix}ugly
 ✯ ${prefix}ape
 ✯ ${prefix}cute
 ✯ ${prefix}noob
 ✯ ${prefix}kind
 ✯ ${prefix}great
 ✯ ${prefix}horny
 ✯ ${prefix}wibu
 ✯ ${prefix}asshole
 ✯ ${prefix}truth
 ✯ ${prefix}dare
 ✯ ${prefix}tod
 ✯ ${prefix}couple
 ✯ ${prefix}ship [tag1|tag2]
 ✯ ${prefix}handsomecheck [tag]
 ✯ ${prefix}beautycheck [tag]
 ✯ ${prefix}gaycheck [tag]
 ✯ ${prefix}lesbiancheck [tag]
 ✯ ${prefix}charactercheck [tag]
 ✯ ${prefix}is [text]
 ✯ ${prefix}when [text]
 ✯ ${prefix}can [text]
────────────────────`
buttons = [
{buttonId:`owner`, buttonText: {displayText: 'BOT OWNER👤'}, type: 1}
]
const grup = {
    contentText: `${stamtus}`,
    footerText: `_error or bug please report to owner_\n_bot in development_\n_sorry if the features are incomplete_`,
    buttons: buttons,
    headerType: 1
}
await alpha.sendMessage(from, grup, MessageType.buttonsMessage, {quoted: ftex})
		break
case 'groupmenu':
if (!isRegistered) return sendButRegis(from, daftar1, daftar2, daftar3, { quoted: mek})
stamtus = `❏ 「 \`\`\`GROUP MENU\`\`\` 」
────────────────────
 ✯ ${prefix}getpict [ @tag ]
 ✯ ${prefix}getname [ reply target ]
 ✯ ${prefix}getbio [ reply target ]
 ✯ ${prefix}promote [ @tag ]
 ✯ ${prefix}demote [ @tag ]
 ✯ ${prefix}antilink [ on/off ]
 ✯ ${prefix}antivirtex [ on/off ]
 ✯ ${prefix}antiwame [ on/off ]
 ✯ ${prefix}antibug [ on/off ]
 ✯ ${prefix}creategrup [ name|@tag ]
 ✯ ${prefix}tictactoe [ @tag ]
 ✯ ${prefix}nsfw [1/0]
 ✯ ${prefix}delttt
 ✯ ${prefix}getpp
 ✯ ${prefix}getdescgc
 ✯ ${prefix}sider [ reply to bot messages ]
 ✯ ${prefix}setnamegc [text]
 ✯ ${prefix}setdescgc [*text]
 ✯ ${prefix}slander [ @tag|text1|text2 ]
 ✯ ${prefix}contag [number|name]
 ✯ ${prefix}scontact [ @tag|name ]
 ✯ ${prefix}join [group link]
 ✯ ${prefix}opengc
 ✯ ${prefix}closegc
 ✯ ${prefix}resetgclink
 ✯ ${prefix}grouplink
 ✯ ${prefix}hidetag [text]
 ✯ ${prefix}sticktag [ sticker name ]
 ✯ ${prefix}totag [ reply media ]
 ✯ ${prefix}tagall
 ✯ ${prefix}tagsomeone [number]
────────────────────`
buttons = [
{buttonId:`owner`, buttonText: {displayText: 'BOT OWNER'}, type: 1}
]
const funyo = {
    contentText: `${stamtus}`,
    footerText: `_error or bug please report to owner_\n_bot in development_\n_sorry if the features are incomplete_`,
    buttons: buttons,
    headerType: 1
}
await alpha.sendMessage(from, funyo, MessageType.buttonsMessage, {quoted: ftex})
		break
case 'verify':
if (isRegistered) return reply('You are already registered in the bot database')
const serialUser = createSerial(18)
	        veri = sender
	        _registered.push(sender)
	        fs.writeFileSync('./database/registered.json', JSON.stringify(_registered))
	        addRegisteredUser(sender, serialUser)
	         const jancok = `┏━━━❒ *Verified* ❒━━━━
⬡ *Series : ${serialUser}*	         
⬡ *Name : ${pushname}*
⬡ *Whatsapp : ${sender.split('@')[0]}*
┗━━━━━━━━━━━━━━━━━━`
buttons = [
{buttonId:`menu`,buttonText:{displayText: 'MENU'},type:1},
{buttonId:`owner`, buttonText: {displayText: 'BOT OWNER'}, type: 1}
]
const verify = {
    contentText: `${jancok}`,
    buttons: buttons,
    headerType: 1
}
await alpha.sendMessage(from, verify, MessageType.buttonsMessage, {quoted: mek})
		break
		case 'help':
case 'simplemenu':
case 'listmenu':
  case 'command':
  if (!isRegistered) return sendButRegis(from, daftar1, daftar2, daftar3, { quoted: mek})
 stod = `${sender}`
 listMsg = {
 buttonText: 'LIST MENU',
 description: `_*Hi, please choose the menu*_`,
 sections: [
                     {
                      "title": `Trust Bot`,
 rows: [
                          {
                              "title": "SellBot",
                              "rowId": ""
                           },
                           {
                              "title": "Speed",
                              "rowId": ""
                           },
                           {
                              "title": "SoundMenu",
                              "rowId": ""
                           },
                           {
                              "title": "Status",
                              "rowId": ""
                           },
                           {
                              "title": "Creator",
                              "rowId": ""
                           },
                           {
                              "title": "RentBot",
                              "rowId": ""
                            },
                        
                           {
                              "title": "Runtime",
                              "rowId": ""
                           },
                           {
                              "title": "OwnerMenu",
                              "rowId": ""
                           },
                           {
                              "title": "MakerMenu",
                              "rowId": ""
                           },
                           {
                              "title": "GroupMenu",
                              "rowId": ""
                           },
                           {
                              "title": "NsfwMenu",
                              "rowId": ""
                           },
                                      {
                              "title": "AnimeMenu",
                              "rowId": ""
                           },
                           {
                              "title": "OtherMenu",
                              "rowId": ""
                           },
                           {
                              "title": "DownloadMenu",
                              "rowId": ""
                           }
                        ]
                     }],
 listType: 1
}
alpha.sendMessage(from, listMsg, MessageType.listMessage, {contextInfo: { mentionedJid: [stod]},quoted:mek})
break
case 'nsfwmenu':
if (!isRegistered) return sendButRegis(from, daftar1, daftar2, daftar3, { quoted: mek})
stamtus = `❏ 「 \`\`\`18+ MENU\`\`\` 」
────────────────────
 ✯ ${prefix}hentai
 ✯ ${prefix}blowjob
 ✯ ${prefix}awoo
 ✯ ${prefix}neko
 ✯ ${prefix}megumin2
 ✯ ${prefix}trapnime
────────────────────`
buttons = [
{buttonId:`owner`, buttonText: {displayText: 'BOT OWNER'}, type: 1}
]
const funn = {
    contentText: `${stamtus}`,
    footerText: `_error or bug please report to owner_\n_bot in development_\n_sorry if the features are incomplete_`,
    buttons: buttons,
    headerType: 1
}
await alpha.sendMessage(from, funn, MessageType.buttonsMessage, {quoted: ftex})
		break
		case 'animemenu':
if (!isRegistered) return sendButRegis(from, daftar1, daftar2, daftar3, { quoted: mek})
stamtus = `❏ 「 \`\`\`18+ MENU\`\`\` 」
────────────────────
 ✯ ${prefix}waifu
 ✯ ${prefix}loli
 ✯ ${prefix}husbu
 ✯ ${prefix}milf
 ✯ ${prefix}cosplay
 ✯ ${prefix}wallml
────────────────────`
buttons = [
{buttonId:`owner`, buttonText: {displayText: 'BOT OWNER'}, type: 1}
]
const animerandomx = {
    contentText: `${stamtus}`,
    footerText: `_error or bug please report to owner_\n_bot in development_\n_sorry if the features are incomplete_`,
    buttons: buttons,
    headerType: 1
}
await alpha.sendMessage(from, animerandomx, MessageType.buttonsMessage, {quoted: ftex})
		break
case 'soundmenu':
stamtus =`❏ 「 \`\`\`SOUND MENU\`\`\` 」
────────────────────
 ✯ ${prefix}sound1
 ✯ ${prefix}sound2
 ✯ ${prefix}sound3
 ✯ ${prefix}sound4
 ✯ ${prefix}sound5
 ✯ ${prefix}sound6
 ✯ ${prefix}sound7
 ✯ ${prefix}sound8
 ✯ ${prefix}sound9
 ✯ ${prefix}sound10

[ Total Sound 1-75 ]
────────────────────`
buttons = [
{buttonId:`owner`,buttonText:{displayText: 'BOT OWNER'},type:1}
]
const soundM = {
    contentText: `${stamtus}`,
    footerText: `_error or bug please report to owner_\n_bot in development_\n_sorry if the features are incomplete_`,
    buttons: buttons,
    headerType: 1
}
await alpha.sendMessage(from, soundM, MessageType.buttonsMessage, {quoted: ftex})
break
case 'ownermenu':
stamtus =`❏ 「 \`\`\`OWNER MENU\`\`\` 」
────────────────────
 ✯ ${prefix}autoresponse
 ✯ ${prefix}bc [ text ]
 ✯ ${prefix}tobc [ reply sticker/audio ]
 ✯ ${prefix}return [ javascript ]
 ✯ ${prefix}clearall
 ✯ ${prefix}delchat
 ✯ ${prefix}mute
 ✯ ${prefix}unmute
 ✯ ${prefix}public
 ✯ ${prefix}self
 ✯ ${prefix}spam [ text|amount ]
 ✯ ${prefix}tospam [ reply sticker|total ]
 ✯ ${prefix}demoteall
 ✯ ${prefix}promoteall
 ✯ ${prefix}addcmd [ reply text stc ]
 ✯ ${prefix}delcmd [ reply stc ]
 ✯ ${prefix}listcmd
 ✯ ${prefix}spamsw [ text|amount ]
 ✯ ${prefix}upswtext [text]
 ✯ ${prefix}upswloc [text]
 ✯ ${prefix}upswaudio [ reply audio ]
 ✯ ${prefix}upswvoice [ reply audio ]
 ✯ ${prefix}upswsticker [ reply sticker ]
 ✯ ${prefix}upswimage [ reply image ]
 ✯ ${prefix}upswgif [ reply gif ]
 ✯ ${prefix}upswvideo [ reply video ]
 ✯ ${prefix}shutdown
 ✯ ${prefix}offline [ reason ]
 ✯ ${prefix}online
 ✯ ${prefix}exif [ nama|author ]
 ✯ ${prefix}setprofile [ reply image ]
 ✯ ${prefix}setname [text]
 ✯ ${prefix}setprefix [ multi/nopref/prefix ]
 ✯ ${prefix}setbio [text]
 ✯ ${prefix}leave
 ✯ ${prefix}restart
 ✯ ${prefix}addresponse [ ask|answer ]
 ✯ ${prefix}delresponse [ name ]
 ✯ ${prefix}listresponse
 ✯ ${prefix}addvn [reply audio with caption]
 ✯ ${prefix}delvn [vn name]
 ✯ ${prefix}listvn
 ✯ ${prefix}addsticker [reply sticker with caption]
 ✯ ${prefix}delsticker [sticker name]
 ✯ ${prefix}liststicker
 ✯ ${prefix}addimage [reply image with caption]
 ✯ ${prefix}delimage [image name]
 ✯ ${prefix}imagelist
 ✯ ${prefix}readall
 ✯ ${prefix}unreadall
 ✯ ${prefix}archive
 ✯ ${prefix}unarchiveall
 ✯ ${prefix}pin
 ✯ ${prefix}unpin
 ✯ ${prefix}leavetime [ sec/min/hr ]
 ✯ ${prefix}opentime [ sec/min/hr ]
 ✯ ${prefix}closetime [ sec/min/hr ]
 ✯ ${prefix}nano [ filename ]
────────────────────`
buttons = [
{buttonId:`owner`, buttonText: {displayText: 'BOT OWNER'}, type: 1}
]
const ownerM = {
    contentText: `${stamtus}`,
    footerText: `_error or bug please report to owner_\n_bot in development_\n_sorry if the features are incomplete_`,
    buttons: buttons,
    headerType: 1
}
await alpha.sendMessage(from, ownerM, MessageType.buttonsMessage, {quoted: ftex})
break
case 'downloadmenu':
case 'donwloadmenu':
stamtus =`❏ 「 \`\`\`DOWNLOAD MENU\`\`\` 」
────────────────────
 ✯ ${prefix}herolist
 ✯ ${prefix}herodetail [ hero ]
 ✯ ${prefix}google [ search ]
 ✯ ${prefix}gimage [ search ]
 ✯ ${prefix}wiki [ search ] _indo_
 ✯ ${prefix}mediafire [ link ]
 ✯ ${prefix}facebook [ fb link ]
 ✯ ${prefix}facebook2 [ fb link ]
 ✯ ${prefix}twitter [ twitter video link ]
 ✯ ${prefix}twmp3 [ twitter video link ]
 ✯ ${prefix}twitter2 [ twitter video link ]
 ✯ ${prefix}ytmp4 [ yt link ]
 ✯ ${prefix}ytmp3 [ yt link ]
 ✯ ${prefix}play [ song title ]
 ✯ ${prefix}tiktok [ link ]
 ✯ ${prefix}video [ video title ]
 ✯ ${prefix}tinyurl [ link ]
 ✯ ${prefix}fetch [ link ]
 ✯ ${prefix}instagram [insta normal video link ] 
 ✯ ${prefix}pinterest [ search ]
 ✯ ${prefix}lyrics [ title ]
 ✯ ${prefix}tourl [ reply image/video ]
 ✯ ${prefix}numbers [ number ]
 ✯ ${prefix}calculator [ number ]
 ✯ ${prefix}fancytext [text]
 ✯ ${prefix}githubstalk [ username ]
 ✯ ${prefix}translate [ code text ]
 ✯ ${prefix}ss [ link ]
────────────────────`
buttons = [
{buttonId:`owner`, buttonText: {displayText: 'BOT OWNER'}, type: 1}
]
const downloadM = {
    contentText: `${stamtus}`,
    footerText: `_error or bug please report to owner_\n_bot in development_\n_sorry if the features are incomplete_`,
    buttons: buttons,
    headerType: 1
}
await alpha.sendMessage(from, downloadM, MessageType.buttonsMessage, {quoted: ftex})
break
case 'makermenu':
stamtus =`❏ 「 \`\`\`MAKER MENU\`\`\` 」
────────────────────
_example: ${prefix}throne Xeon_
────────────────────
 ✯ ${prefix}write 「 text 」
 ✯ ${prefix}throne 「 text 」
 ✯ ${prefix}logoff 「 text 」
 ✯ ${prefix}cslogo 「 text 」
 ✯ ${prefix}matrix 「 text 」
 ✯ ${prefix}skytext 「 text 」
 ✯ ${prefix}barcode 「 text 」
 ✯ ${prefix}narutotxt 「 text 」
 ✯ ${prefix}bneon 「 text 」
 ✯ ${prefix}tfire 「 text 」
 ✯ ${prefix}light 「 text 」
 ✯ ${prefix}wall 「 text 」
 ✯ ${prefix}dropair 「 text 」
 ✯ ${prefix}wolf 「 text 」
 ✯ ${prefix}logocrs 「 text 」
 ✯ ${prefix}phlogo 「 text 」
 ✯ ${prefix}phcomment 「 *text|text 」
 ✯ ${prefix}pubg 「 text|text 」
 ✯ ${prefix}leavest 「 text 」
 ✯ ${prefix}notewrite 「 text 」
 ✯ ${prefix}neon2 「 text 」
 ✯ ${prefix}marvel 「 text|text 」
 ✯ ${prefix}logoa 「 text|text 」
 ✯ ${prefix}t3d 「 text 」
 ✯ ${prefix}flower 「 text 」
 ✯ ${prefix}gplay 「 text 」
 ✯ ${prefix}splay 「 text 」
────────────────────`
buttons = [
{buttonId:`owner`, buttonText: {displayText: 'BOT OWNER'}, type: 1}
]
const makerM = {
    contentText: `${stamtus}`,
    footerText: `_error or bug please report to owner_\n_bot in development_\n_sorry if the features are incomplete_`,
    buttons: buttons,
    headerType: 1
}
await alpha.sendMessage(from, makerM, MessageType.buttonsMessage, {quoted: ftex})
break
case 'othermenu':
stamtus =`❏ 「 \`\`\`OTHER MENU\`\`\` 」
────────────────────
 ✯ ${prefix}searchmessage [ text|amount ]
 ✯ ${prefix}slots
 ✯ ${prefix}suit [ scissors/rock/paper ]
 ✯ ${prefix}tag [ number ]
 ✯ ${prefix}tagme
 ✯ ${prefix}tts [ code text ]
 ✯ ${prefix}readmore [ text1|text2 ]
 ✯ ${prefix}slanderpc [ number|text1|text2 ]
 ✯ ${prefix}chat [ number|text ]
 ✯ ${prefix}listgrup
 ✯ ${prefix}baileys [ reply message ]
 ✯ ${prefix}q [ reply message ]
 ✯ ${prefix}getcaption [ reply message ]
 ✯ ${prefix}shareloc [ text1|text2 ]
 ✯ ${prefix}sticker
 ✯ ${prefix}stcmeme [reply to sticker with text|text]
 ✯ ${prefix}stickerwm [ name|author ]
 ✯ ${prefix}takestick [ name|author ]
 ✯ ${prefix}dice
 ✯ ${prefix}semoji [ emoji ]
 ✯ ${prefix}attp [text]
 ✯ ${prefix}toimg
 ✯ ${prefix}tomp3 [ reply video ]
 ✯ ${prefix}tomp4 [ reply sticker gif ]
 ✯ ${prefix}robot [ reply audio ]
 ✯ ${prefix}reverse [ reply audio ]
 ✯ ${prefix}bass [ reply audio ]
 ✯ ${prefix}fat [ reply audio ]
 ✯ ${prefix}vnsec [ reply audio caption number ]
 ✯ ${prefix}vidsec [ reply video caption numbers ]
────────────────────`
buttons = [
{buttonId:`owner`, buttonText: {displayText: 'BOT OWNER'}, type: 1}
]
const otherM = {
    contentText: `${stamtus}`,
    footerText: `_error or bug please report to owner_\n_bot in development_\n_sorry if the features are incomplete_`,
    buttons: buttons,
    headerType: 1
}
await alpha.sendMessage(from, otherM, MessageType.buttonsMessage, {quoted: ftex})
break
// BIAR GAK LUPA 
//LUPA
 //======= LIST ASUPANNYA=====/\\\
 case 'intakemenu':
 
 listMsg = {
 buttonText: 'INTAKE LIST',
 footerText: 'Trust Bot',
 description: `Hi, Please select the intake menu here, use it wisely`,
 sections: [
                     {
                      "title": `Trust Bot`,
 rows: [
                          {
                             "title": "randomgirl",
                              "rowId": ""
                          },
                          {
                              "title": "vietnamesegirl",
                              "rowId": ""
                           },
                          {
                              "title": "hijabgirl",
                              "rowId": ""
                           },
                           {
                              "title": "santuy",
                              "rowId": ""
                           },
                           {
                              "title": "brosis",
                              "rowId": ""
                           },
                           {
                              "title": "small",
                              "rowId": ""
                           },
                           {
                              "title": "ghea",
                              "rowId": ""
                           },
                           {
                              "title": "rika",
                              "rowId": ""
                           },
                           {
                              "title": "ListMenu",
                              "rowId": ""
                           }
                        ]
                     }],
 listType: 1
}
alpha.sendMessage(from, listMsg, MessageType.listMessage, {contextInfo: { mentionedJid: [sender]},quoted:fvid})
break
 //━━━━━━━━━━━━━━━[ BAHAN ASUPAN ]━━━━━━━━━━━━━━━━━//

 case 'vietnamesegirl':
huft = await fetchJson(`https://zeroyt7-api.herokuapp.com/api/cewe/vietnam?apikey=${zerkey}`)
sticWait(from)
goo = await getBuffer(huft.result.url)
alpha.sendMessage(from, goo, image, {quoted: fvid, caption: 'Here is a Vietnamese Girl🗿'})
break
case 'randomgirl':
ini = await fetchJson(`https://zeroyt7-api.herokuapp.com/api/asupan/cecan?apikey=${zerkey}`)
sticWait(from)
buffer = await getBuffer(ini.result.url)
alpha.sendMessage(from, buffer, image, {quoted: fvid, caption: 'Here is a random girl🗿'})
break
case 'hijabgirl':
ini = await fetchJson(`https://zeroyt7-api.herokuapp.com/api/asupan/hijaber?apikey=${zerkey}`)
sticWait(from)
buffer = await getBuffer(ini.result.url)
alpha.sendMessage(from, buffer, image, {quoted: fvid, caption: 'Here, dont stand up, okay? (≧▽≦)'})
break
case 'santuy':
ini = await fetchJson(`https://zeroyt7-api.herokuapp.com/api/asupan/santuy?apikey=${zerkey}`)
sticWait(from)
buffer = await getBuffer(ini.result.url)
alpha.sendMessage(from, buffer, video, {quoted: fvid, caption: 'Here, dont stand up, okay? (≧▽≦)'})
break
case 'brosis':

ini = await fetchJson(`https://zeroyt7-api.herokuapp.com/api/asupan/ukty?apikey=${zerkey}`)
sticWait(from)
buffer = await getBuffer(ini.result.url)
alpha.sendMessage(from, buffer, video, {quoted: fvid, caption: 'Here, dont stand up, okay? (≧▽≦)'})
break
case 'small':

ini = await fetchJson(`https://zeroyt7-api.herokuapp.com/api/asupan/bocil?apikey=${zerkey}`)
sticWait(from)
buffer = await getBuffer(ini.result.url)
alpha.sendMessage(from, buffer, video, {quoted: fvid, caption: 'Here, dont stand up, okay? (≧▽≦)'})
break
case 'ghea':

ini = await fetchJson(`https://zeroyt7-api.herokuapp.com/api/asupan/ghea?apikey=${zerkey}`)
sticWait(from)
buffer = await getBuffer(ini.result.url)
alpha.sendMessage(from, buffer, video, {quoted: fvid, caption: 'Here, dont stand up, okay? (≧▽≦)'})
break
case 'rika':

ini = await fetchJson(`https://zeroyt7-api.herokuapp.com/api/asupan/rikagusriani?apikey=${zerkey}`)
sticWait(from)
buffer = await getBuffer(ini.result.url)
alpha.sendMessage(from, buffer, video, {quoted: fvid, caption: 'Here, dont stand up, okay? (≧▽≦)'})
break
// BIAR GAK LUPA 
//LUPA
					case 'throne': 
if (args.length < 1) return reply('*Where is the text??*') 
tahta = args.join(" ")
sticWait(from)
tahta = await getBuffer(`https://api.zeks.me/api/hartatahta?text=${tahta}&apikey=apivinz`)
alpha.sendMessage(from, tahta, image, { quoted:mek,caption:'Here you go' })
break
case 'pubg': 
if (!isRegistered) return sendButRegis(from, daftar1, daftar2, daftar3, { quoted: mek})
if (args.length < 1) return reply('*Where is the text??*') 
pubg = args.join(" ")
sticWait(from)
pubg = await getBuffer(`https://api.zeks.me/api/pubglogo?text1=PUBG&text2=${pubg}&apikey=apivinz`)
alpha.sendMessage(from, pubg, image, { quoted:mek,caption:'Here you go' })
break
case 'smoke': 
if (!isRegistered) return sendButRegis(from, daftar1, daftar2, daftar3, { quoted: mek})
if (args.length < 1) return reply('*Where is the text??*') 
smoke = args.join(" ")
sticWait(from)
smoke = await getBuffer(`https://api.zeks.me/api/smoketext?text=${smoke}&apikey=apivinz`)
alpha.sendMessage(from, smoke, image, { quoted:mek,caption:'Here you go' })
break
case 'bneon': 
if (!isRegistered) return sendButRegis(from, daftar1, daftar2, daftar3, { quoted: mek})
if (args.length < 1) return reply('*Where is the text??*') 
bneon = args.join(" ")
sticWait(from)
bneon = await getBuffer(`https://api.zeks.me/api/bneon?apikey=apivinz&text=${bneon}`)
alpha.sendMessage(from, bneon, image, { quoted:mek,caption:'Here you go' })
break
case 'matrix': 
if (!isRegistered) return sendButRegis(from, daftar1, daftar2, daftar3, { quoted: mek})
if (args.length < 1) return reply('*Where is the text??*') 
matrix = args.join(" ")
sticWait(from)
matrix = await getBuffer(`https://api.zeks.me/api/matrix?apikey=apivinz&text=${matrix}`)
alpha.sendMessage(from, matrix, image, { quoted:mek,caption:'Here you go' })
break
case 'gplay': 
if (!isRegistered) return sendButRegis(from, daftar1, daftar2, daftar3, { quoted: mek})
if (args.length < 1) return reply('*Where is the text??*') 
gplay = args.join(" ")
sticWait(from)
gplay = await getBuffer(`https://api.zeks.me/api/gplaybutton?text=${gplay}&apikey=apivinz`)
alpha.sendMessage(from, gplay, image, { quoted:mek,caption:'Here you go' })
break
case 'splay': 
if (!isRegistered) return sendButRegis(from, daftar1, daftar2, daftar3, { quoted: mek})
if (args.length < 1) return reply('*Where is the text??*') 
splay = args.join(" ")
sticWait(from)
splay = await getBuffer(`https://api.zeks.me/api/splaybutton?text=${splay}&apikey=apivinz`)
alpha.sendMessage(from, splay, image, { quoted:mek,caption:'Here you go' })
break
case 'text3d': 
if (!isRegistered) return sendButRegis(from, daftar1, daftar2, daftar3, { quoted: mek})
if (args.length < 1) return reply('*Where is the text??*') 
text3d = args.join(" ")
sticWait(from)
text3d = await getBuffer(`https://api.zeks.me/api/text3dbox?apikey=apivinz&text=${text3d}`)
alpha.sendMessage(from, text3d, image, { quoted:mek,caption:'Here you go' })
break
case 'tfire': 
if (!isRegistered) return sendButRegis(from, daftar1, daftar2, daftar3, { quoted: mek})
if (args.length < 1) return reply('*Where is the text??*') 
tfire = args.join(" ")
sticWait(from)
tfire = await getBuffer(`https://api.zeks.me/api/tfire?text=${tfire}&apikey=apivinz`)
alpha.sendMessage(from, tfire, image, { quoted:mek,caption:'Here you go' })
break
case 'light': 
if (!isRegistered) return sendButRegis(from, daftar1, daftar2, daftar3, { quoted: mek})
if (args.length < 1) return reply('*Where is the text??*') 
lithg = args.join(" ")
sticWait(from)
lithg = await getBuffer(`https://api.zeks.me/api/lithgtext?text=${lithg}&apikey=apivinz`)
alpha.sendMessage(from, lithg, image, { quoted:mek,caption:'Here you go' })
break
case 'wall': 
if (!isRegistered) return sendButRegis(from, daftar1, daftar2, daftar3, { quoted: mek})
if (args.length < 1) return reply('*Where is the text??*') 
wall = args.join(" ")
sticWait(from)
wall = await getBuffer(`https://api.zeks.me/api/breakwall?apikey=apivinz&text=${wall}`)
alpha.sendMessage(from, wall, image, { quoted:mek,caption:'Here you go' })
break
case 'dropair': 
if (!isRegistered) return sendButRegis(from, daftar1, daftar2, daftar3, { quoted: mek})
if (args.length < 1) return reply('*Where is the text??*') 
dropair = args.join(" ")
sticWait(from)
dropair = await getBuffer(`https://api.zeks.me/api/dropwater?apikey=apivinz&text=${dropair}`)
alpha.sendMessage(from, dropair, image, { quoted:mek,caption:'Here you go' })
break
case 'logocrs': 
if (!isRegistered) return sendButRegis(from, daftar1, daftar2, daftar3, { quoted: mek})
if (args.length < 1) return reply('*Where is the text??*') 
logocrs = args.join(" ")
sticWait(from)
logocrs = await getBuffer(`https://api.zeks.me/api/crosslogo?text=${logocrs}&apikey=apivinz`)
alpha.sendMessage(from, logocrs, image, { quoted:mek,caption:'Here you go' })
break
                         case 'wolf':
                         if (!isRegistered) return sendButRegis(from, daftar1, daftar2, daftar3, { quoted: mek})
                   if (args.length < 1) return reply(`[  ×  ] Example :\n*${prefix}${command} Xeon*`)
                   F = body.slice(6)
                   reply(mess.wait)
                   anu = await getBuffer(`${ApiZeks}/api/wolflogo?apikey=${zeksApikey}&text1=zeeoneofc&text2=${F}`)
                   alpha.sendMessage(from, anu, image, {thumbnail: Buffer.alloc(0),caption: `OK it's done\n\nHow is it?`, quoted: mek})
                   break
                          case 't3d':
                          if (!isRegistered) return sendButRegis(from, daftar1, daftar2, daftar3, { quoted: mek})
                   if (args.length < 1) return reply(`[  ×  ] Example :\n*${prefix}${command} Xeon*`)
                   F = body.slice(5)
                   reply(mess.wait)
                   anu = await getBuffer(`${ApiZeks}/api/text3dbox?apikey=${zeksApikey}&text=${F}`)
                   alpha.sendMessage(from, anu, image, {thumbnail: Buffer.alloc(0),caption: `OK it's done\n\nHow is it? `, quoted: mek})
                   break
       case 'logoa':
       if (!isRegistered) return sendButRegis(from, daftar1, daftar2, daftar3, { quoted: mek})
                   if (args.length < 1) return reply(`[  ×  ] Example :\n*${prefix}${command} Xeon&lol*`)
                   var F = body.slice(7)
				   var F1 = F.split("|")[0];
				   var F2 = F.split("|")[1]; 
                   reply(mess.wait)
                   anu = await getBuffer(`${ApiZeks}/api/logoaveng?text1=${F1}&text2=${F2}&apikey=${zeksApikey}`)
                   alpha.sendMessage(from, anu, image, {thumbnail: Buffer.alloc(0),caption: `OK it's done\n\nHow is it? `, quoted: mek})
                   break
       case 'phlogo':  
       if (!isRegistered) return sendButRegis(from, daftar1, daftar2, daftar3, { quoted: mek})
                   if (args.length < 1) return reply(`[  ×  ] Example :\n*${prefix}${command} Xeon&lol*`)
                   var F = body.slice(9)
				   var F1 = F.split("|")[0];
				   var F2 = F.split("|")[1]; 
                   reply(mess.wait)
                   anu = await getBuffer(`${ApiZeks}/api/phlogo?text1=${F1}&text2=${F2}&apikey=${zeksApikey}`)
                   alpha.sendMessage(from, anu, image, {thumbnail: Buffer.alloc(0),caption: `OK it's done\n\nHow is it? `, quoted: mek})
                   break
       case 'marvel':
       if (!isRegistered) return sendButRegis(from, daftar1, daftar2, daftar3, { quoted: mek})
                   if (args.length < 1) return reply(`[  ×  ] Example :\n*${prefix}${command} Xeon&lol*`)
                   var F = body.slice(8)
				   var F1 = F.split("|")[0];
				   var F2 = F.split("|")[1]; 
                   reply(mess.wait)
                   anu = await getBuffer(`${ApiZeks}/api/marvellogo?text1=${F1}&text2=${F2}&apikey=${zeksApikey}`)
                   alpha.sendMessage(from, anu, image, {thumbnail: Buffer.alloc(0),caption: `OK it's done\n\nHow is it? `, quoted: mek})
                   break
       case 'leavest':  
       if (!isRegistered) return sendButRegis(from, daftar1, daftar2, daftar3, { quoted: mek})
                   if (args.length < 1) return reply(`[  ×  ] Example :\n*${prefix}${command} Xeon*`)
                   F = body.slice(9)
                   reply(mess.wait)
                   anu = await getBuffer(`${ApiZeks}/api/leavest?text=${F}&apikey=${zeksApikey}`)
                   alpha.sendMessage(from, anu, image, {thumbnail: Buffer.alloc(0),caption: `OK it's done\n\nHow is it? `, quoted: mek})
                   break                   
       case 'notewrite':
       if (!isRegistered) return sendButRegis(from, daftar1, daftar2, daftar3, { quoted: mek})
                   if (args.length < 1) return reply(`[  ×  ] Example :\n*${prefix}${command} Xeon*`)
                   F = body.slice(7)
                   reply(mess.wait)
                   anu = await getBuffer(`${ApiZeks}/api/nulis?text=${F}&apikey=${zeksApikey}`)
                   alpha.sendMessage(from, anu, image, {thumbnail: Buffer.alloc(0),caption: `OK it's done\n\nHow is it? `, quoted: mek})
                   break
       case 'neon2':
       if (!isRegistered) return sendButRegis(from, daftar1, daftar2, daftar3, { quoted: mek})
                   if (args.length < 1) return reply(`[  ×  ] Example :\n*${prefix}${command} Xeon*`)
                   F = body.slice(7)
                   reply(mess.wait)
                   anu = await getBuffer(`${ApiZeks}/api/bneon?apikey=${zeksApikey}&text=${F}`)
                   alpha.sendMessage(from, anu, image, {thumbnail: Buffer.alloc(0),caption: `OK it's done\n\nHow is it? `, quoted: mek})
                   break 
case 'flower': 
if (!isRegistered) return sendButRegis(from, daftar1, daftar2, daftar3, { quoted: mek})
if (args.length < 1) return reply('*Where is the text??*') 
flower = args.join(" ")
sticWait(from)
flower = await getBuffer(`https://api.zeks.me/api/flowertext?text=${flower}&apikey=apivinz`)
alpha.sendMessage(from, flower, image, { quoted:mek,caption:'Here you go' })
break
case 'write': 
if (!isRegistered) return sendButRegis(from, daftar1, daftar2, daftar3, { quoted: mek})
if (args.length < 1) return reply('*Where is the text??*') 
catat = args.join(" ")
sticWait(from)
catat = await getBuffer(`https://api.zeks.me/api/nulis?text=${catat}&apikey=apivinz`)
alpha.sendMessage(from, catat, image, { quoted:mek,caption:'Here you go' })
break
case 'narutotxt': 
if (!isRegistered) return sendButRegis(from, daftar1, daftar2, daftar3, { quoted: mek})
if (args.length < 1) return reply('*Where is the text??*') 
naruto = args.join(" ")
sticWait(from)
naruto = await getBuffer(`https://api.zeks.me/api/naruto?text=${naruto}&apikey=apivinz`)
alpha.sendMessage(from, naruto, image, { quoted:mek,caption:'Here you go' })
break
case 'logoff': 
if (!isRegistered) return sendButRegis(from, daftar1, daftar2, daftar3, { quoted: mek})
if (args.length < 1) return reply('*Where is the text??*') 
matrix = args.join(" ")
sticWait(from)
logoff = await getBuffer(`https://api.zeks.me/api/epep?text=${matrix}&apikey=apivinz`)
alpha.sendMessage(from, logoff, image, { quoted:mek,caption:'Here you go' })
break
case 'barcode': 
if (!isRegistered) return sendButRegis(from, daftar1, daftar2, daftar3, { quoted: mek})
if (args.length < 1) return reply('*Where is the text??*') 
matrix = args.join(" ")
sticWait(from)
bccode = await getBuffer(`https://api.zeks.me/api/barcode?apikey=apivinz&text=${matrix}`)
alpha.sendMessage(from, bccode, image, { quoted:mek,caption:'Here you go' })
break
case 'skytext':
if (!isRegistered) return sendButRegis(from, daftar1, daftar2, daftar3, { quoted: mek})
if (args.length < 1) return reply('*Where is the text??*') 
sky = args.join(" ")
sticWait(from)
sky = await getBuffer(`https://api.zeks.me/api/skytext?text=${sky}&apikey=apivinz`)
alpha.sendMessage(from, sky, image, { quoted:mek,caption:'Here you go' })
break
case 'cslogo': 
if (!isRegistered) return sendButRegis(from, daftar1, daftar2, daftar3, { quoted: mek})
if (args.length < 1) return reply('*Where is the text??*') 
cslogo = args.join(" ")
sticWait(from)
cslogo = await getBuffer(`https://api.zeks.me/api/cslogo?text=${cslogo}&apikey=apivinz`)
alpha.sendMessage(from, cslogo, image, { quoted:mek,caption:'Here you go' })
break
//nsfw by xeony workshop
case 'nsfw':
if (!isRegistered) return sendButRegis(from, daftar1, daftar2, daftar3, { quoted: mek})
	        if (!isGroup) return reply('this feature is only for groups')
			if (!isOwner && !isGroupAdmins) return reply('only admin can use this feature')
					if (args.length < 1) return reply(`to activate type : ${prefix}nsfw 1`)
					if (Number(args[0]) === 1) {
						if (isNsfw) return reply('Already Activated')
						nsfw.push(from)
						fs.writeFileSync('./database/nsfw.json', JSON.stringify(nsfw))
						reply('Successfully activated the nsfw feature')
						alpha.sendMessage(from, `Free to Find Hentai 🗿`, text)
					} else if (Number(args[0]) === 0) {
						if (!isNsfw) return reply('Its off')
						var ini = nsfw.indexOf(from)
						nsfw.splice(ini, 1)
						fs.writeFileSync('./database/nsfw.json', JSON.stringify(nsfw))
						reply('Successfully disable the nsfw feature')
					} else {
						reply('1 to turn on, 0 to turn off')
					}
					break
					case 'waifu':
          case 'loli':
          case 'husbu':
          case 'milf':
          case 'cosplay':
          case 'wallml':
              let wipu = (await axios.get(`https://raw.githubusercontent.com/Arya-was/endak-tau/main/${command}.json`)).data
              let wipi = wipu[Math.floor(Math.random() * (wipu.length))]
              fs.writeFileSync(`./${sender}.jpeg`, await getBuffer(wipi))
		      buttons = [{buttonId: `waifu`,buttonText:{displayText: `➡️Next`},type:1},{buttonId:`owner`,buttonText:{displayText:'🦄OWNER'},type:1}]
              imageMsg = ( await alpha.prepareMessage(from, fs.readFileSync(`./${sender}.jpeg`), 'imageMessage', {thumbnail: Buffer.alloc(0)})).message.imageMessage
              buttonsMessage = {footerText:'Dont forget to donate lol ☕', imageMessage: imageMsg,
              contentText:`Click Next to go to the next picture`,buttons,headerType:4}
              prep = await alpha.prepareMessageFromContent(from,{buttonsMessage},{quoted: mek})
              alpha.relayWAMessage(prep)
              fs.unlinkSync(`./${sender}.jpeg`)
              break
case  'awoo':
if (!isRegistered) return sendButRegis(from, daftar1, daftar2, daftar3, { quoted: mek})
if (!isGroup) return reply('this feature is only for groups')
if (!isNsfw) return reply(`Nsfw feature is not yet active in this group\nType: ${prefix}nsfw 1 \To activate`)
reply(mess.wait)
anu = await fetchJson(`https://waifu.pics/api/sfw/awoo`)
buffer = await getBuffer(anu.url)
alpha.sendMessage(from, buffer, image, { quoted: mek, thumbnail: fs.readFileSync('./nsfwdoge.jpg')})
break
case  'blowjob':
if (!isRegistered) return sendButRegis(from, daftar1, daftar2, daftar3, { quoted: mek})
if (!isGroup) return reply('this feature is only for groups')
if (!isNsfw) return reply(`Nsfw feature is not yet active in this group\nType: ${prefix}nsfw 1 \To activate`)
reply(mess.wait)
anu = await fetchJson(`https://nekos.life/api/v2/img/blowjob`)
buffer = await getBuffer(anu.url)
alpha.sendMessage(from, buffer, image, { quoted: mek, thumbnail: fs.readFileSync('./nsfwdoge.jpg')})
break
case  'hentai': 
if (!isRegistered) return sendButRegis(from, daftar1, daftar2, daftar3, { quoted: mek})
if (!isGroup) return reply('this feature is only for groups')
if (!isNsfw) return reply(`Nsfw feature is not yet active in this group\nType: ${prefix}nsfw 1 \To activate`)
reply(mess.wait)
anu = await fetchJson(`https://waifu.pics/api/nsfw/neko`)
buffer = await getBuffer(anu.url)
alpha.sendMessage(from, buffer, image, { quoted: mek, thumbnail: fs.readFileSync('./nsfwdoge.jpg')})
break
case  'megumin2':
if (!isRegistered) return sendButRegis(from, daftar1, daftar2, daftar3, { quoted: mek})
if (!isGroup) return reply('this feature is only for groups')
if (!isNsfw) return reply(`Nsfw feature is not yet active in this group\nType: ${prefix}nsfw 1 \To activate`)
reply(mess.wait)
anu = await fetchJson(`https://waifu.pics/api/sfw/megumin`)
buffer = await getBuffer(anu.url)
alpha.sendMessage(from, buffer, image, { quoted: mek, thumbnail: fs.readFileSync('./nsfwdoge.jpg')})
break
case  'neko':
if (!isRegistered) return sendButRegis(from, daftar1, daftar2, daftar3, { quoted: mek})
if (!isGroup) return reply('this feature is only for groups')
if (!isNsfw) return reply(`Nsfw feature is not yet active in this group\nType: ${prefix}nsfw 1 \To activate`)
reply(mess.wait)
anu = await fetchJson(`https://waifu.pics/api/nsfw/neko`)
buffer = await getBuffer(anu.url)
alpha.sendMessage(from, buffer, image, { quoted: mek, thumbnail: fs.readFileSync('./nsfwdoge.jpg')})
break
case  'trapnime':
if (!isRegistered) return sendButRegis(from, daftar1, daftar2, daftar3, { quoted: mek})
if (!isGroup) return reply('this feature is only for groups')
if (!isNsfw) return reply(`Nsfw feature is not yet active in this group\nType: ${prefix}nsfw 1 \To activate`)
reply(mess.wait)
anu = await fetchJson(`https://waifu.pics/api/nsfw/trap`)
buffer = await getBuffer(anu.url)
alpha.sendMessage(from, buffer, image, { quoted: mek, thumbnail: fs.readFileSync('./nsfwdoge.jpg')})
break
          //??💰 THIEF
                  
					case 'rubbish':
  if (!isRegistered) return sendButRegis(from, daftar1, daftar2, daftar3, { quoted: mek})
					var imgbb = require('imgbb-uploader')
	                 if ((isMedia && !mek.message.videoMessage || isQuotedImage) && args.length == 0) {
	                 ger = isQuotedImage ? JSON.parse(JSON.stringify(mek).replace('quotedM','m')).message.extendedTextMessage.contextInfo : mek
	                 owgi = await alpha.downloadAndSaveMediaMessage(ger)
	                 let aanu = await imgbb("55e7971b786836b9966eca4528210ba8", owgi)
	                let teks = `${aanu.display_url}`
                    titid = await fetchJson(`https://nekobot.xyz/api/imagegen?type=trash&url=${teks}`, {method: 'get'})
                    buffer = await getBuffer(titid.message)
					alpha.sendMessage(from, buffer, image, {quoted: ftex})
                   }
              break       
		case 'gaypic':
  if (!isRegistered) return sendButRegis(from, daftar1, daftar2, daftar3, { quoted: mek})
					var imgbb = require('imgbb-uploader')
					if ((isMedia && !mek.message.videoMessage || isQuotedImage) && args.length == 0) {
					ger = isQuotedImage ? JSON.parse(JSON.stringify(mek).replace('quotedM','m')).message.extendedTextMessage.contextInfo : mek 
					sticWait(from)
					console.log(color(time, 'magenta'), color('Downloading sticker...'))
					owgi = await  alpha.downloadAndSaveMediaMessage(ger)
					anu = await imgbb("0ffc503f79f9b051b82e643eb3e3a746", owgi)
					teks = `${anu.display_url}`
					ranp = getRandom('.gif')
					rano = getRandom('.webp')
					anu1 = `https://some-random-api.ml/canvas/gay?avatar=${teks}`
					exec(`wget ${anu1} -O ${ranp} && ffmpeg -i ${ranp} -vcodec libwebp -filter:v fps=fps=20 -lossless 1 -loop 0 -preset default -an -vsync 0 -s 512:512 ${rano}`, (err) => {
					fs.unlinkSync(ranp)
					if (err) return reply(mess.error.stick)
					alpha.sendMessage(from, fs.readFileSync(rano), sticker, {quoted: ftex})
					console.log(color(time, 'magenta'), color('Succes sendin sticker...'))
					fs.unlinkSync(rano)
					})
					} else {
					reply('Use photo!')
					}
					break
		case 'glass':
  if (!isRegistered) return sendButRegis(from, daftar1, daftar2, daftar3, { quoted: mek})
					var imgbb = require('imgbb-uploader')
					if ((isMedia && !mek.message.videoMessage || isQuotedImage) && args.length == 0) {
					ger = isQuotedImage ? JSON.parse(JSON.stringify(mek).replace('quotedM','m')).message.extendedTextMessage.contextInfo : mek 
					sticWait(from)
					console.log(color(time, 'magenta'), color('Downloading sticker...'))
					owgi = await  alpha.downloadAndSaveMediaMessage(ger)
					anu = await imgbb("0ffc503f79f9b051b82e643eb3e3a746", owgi)
					teks = `${anu.display_url}`
					ranp = getRandom('.gif')
					rano = getRandom('.webp')
					anu1 = `https://some-random-api.ml/canvas/glass?avatar=${teks}`
					exec(`wget ${anu1} -O ${ranp} && ffmpeg -i ${ranp} -vcodec libwebp -filter:v fps=fps=20 -lossless 1 -loop 0 -preset default -an -vsync 0 -s 512:512 ${rano}`, (err) => {
					fs.unlinkSync(ranp)
					if (err) return reply(mess.error.stick)
					alpha.sendMessage(from, fs.readFileSync(rano), sticker, {quoted: ftex})
					console.log(color(time, 'magenta'), color('Succes sending sticker...'))
					fs.unlinkSync(rano)
					})
					} else {
					reply('Use photo!')
					}
					break
		case 'passed':
  if (!isRegistered) return sendButRegis(from, daftar1, daftar2, daftar3, { quoted: mek})
					var imgbb = require('imgbb-uploader')
					if ((isMedia && !mek.message.videoMessage || isQuotedImage) && args.length == 0) {
					ger = isQuotedImage ? JSON.parse(JSON.stringify(mek).replace('quotedM','m')).message.extendedTextMessage.contextInfo : mek 
					sticWait(from)
					console.log(color(time, 'magenta'), color('Downloading sticker...'))
					owgi = await  alpha.downloadAndSaveMediaMessage(ger)
					anu = await imgbb("0ffc503f79f9b051b82e643eb3e3a746", owgi)
					teks = `${anu.display_url}`
					ranp = getRandom('.gif')
					rano = getRandom('.webp')
					anu1 = `https://some-random-api.ml/canvas/passed?avatar=${teks}`
					exec(`wget ${anu1} -O ${ranp} && ffmpeg -i ${ranp} -vcodec libwebp -filter:v fps=fps=20 -lossless 1 -loop 0 -preset default -an -vsync 0 -s 512:512 ${rano}`, (err) => {
					fs.unlinkSync(ranp)
					if (err) return reply(mess.error.stick)
					alpha.sendMessage(from, fs.readFileSync(rano), sticker, {quoted: ftex})
					console.log(color(time, 'magenta'), color('Succes sending sticker...'))
					fs.unlinkSync(rano)
					})
					} else {
					reply('Use photo!')
					}
					break
		case 'jail':
  if (!isRegistered) return sendButRegis(from, daftar1, daftar2, daftar3, { quoted: mek})
					var imgbb = require('imgbb-uploader')
					if ((isMedia && !mek.message.videoMessage || isQuotedImage) && args.length == 0) {
					ger = isQuotedImage ? JSON.parse(JSON.stringify(mek).replace('quotedM','m')).message.extendedTextMessage.contextInfo : mek 
					sticWait(from)
					console.log(color(time, 'magenta'), color('Downloading sticker...'))
					owgi = await  alpha.downloadAndSaveMediaMessage(ger)
					anu = await imgbb("0ffc503f79f9b051b82e643eb3e3a746", owgi)
					teks = `${anu.display_url}`
					ranp = getRandom('.gif')
					rano = getRandom('.webp')
					anu1 = `https://some-random-api.ml/canvas/jail?avatar=${teks}`
					exec(`wget ${anu1} -O ${ranp} && ffmpeg -i ${ranp} -vcodec libwebp -filter:v fps=fps=20 -lossless 1 -loop 0 -preset default -an -vsync 0 -s 512:512 ${rano}`, (err) => {
					fs.unlinkSync(ranp)
					if (err) return reply(mess.error.stick)
					alpha.sendMessage(from, fs.readFileSync(rano), sticker, {quoted: ftex})
					console.log(color(time, 'magenta'), color('Succes sending sticker...'))
					fs.unlinkSync(rano)
					})
					} else {
					reply('Use photo!')
					}
					break
		case 'comrade':
  if (!isRegistered) return sendButRegis(from, daftar1, daftar2, daftar3, { quoted: mek})
					var imgbb = require('imgbb-uploader')
					if ((isMedia && !mek.message.videoMessage || isQuotedImage) && args.length == 0) {
					ger = isQuotedImage ? JSON.parse(JSON.stringify(mek).replace('quotedM','m')).message.extendedTextMessage.contextInfo : mek 
					sticWait(from)
					console.log(color(time, 'magenta'), color('Downloading sticker...'))
					owgi = await  alpha.downloadAndSaveMediaMessage(ger)
					anu = await imgbb("0ffc503f79f9b051b82e643eb3e3a746", owgi)
					teks = `${anu.display_url}`
					ranp = getRandom('.gif')
					rano = getRandom('.webp')
					anu1 = `https://some-random-api.ml/canvas/comrade?avatar=${teks}`
					exec(`wget ${anu1} -O ${ranp} && ffmpeg -i ${ranp} -vcodec libwebp -filter:v fps=fps=20 -lossless 1 -loop 0 -preset default -an -vsync 0 -s 512:512 ${rano}`, (err) => {
					fs.unlinkSync(ranp)
					if (err) return reply(mess.error.stick)
					alpha.sendMessage(from, fs.readFileSync(rano), sticker, {quoted: ftex})
					console.log(color(time, 'magenta'), color('Succes sending sticker...'))
					fs.unlinkSync(rano)
					})
					} else {
					reply('Use photo!')
					}
					break
		case 'green':
  if (!isRegistered) return sendButRegis(from, daftar1, daftar2, daftar3, { quoted: mek})
					var imgbb = require('imgbb-uploader')
					if ((isMedia && !mek.message.videoMessage || isQuotedImage) && args.length == 0) {
					ger = isQuotedImage ? JSON.parse(JSON.stringify(mek).replace('quotedM','m')).message.extendedTextMessage.contextInfo : mek 
					sticWait(from)
					console.log(color(time, 'magenta'), color('Downloading sticker...'))
					owgi = await  alpha.downloadAndSaveMediaMessage(ger)
					anu = await imgbb("0ffc503f79f9b051b82e643eb3e3a746", owgi)
					teks = `${anu.display_url}`
					ranp = getRandom('.gif')
					rano = getRandom('.webp')
					anu6 = `https://some-random-api.ml/canvas/green?avatar=${teks}`
					exec(`wget ${anu6} -O ${ranp} && ffmpeg -i ${ranp} -vcodec libwebp -filter:v fps=fps=20 -lossless 1 -loop 0 -preset default -an -vsync 0 -s 512:512 ${rano}`, (err) => {
					fs.unlinkSync(ranp)
					if (err) return reply(mess.error.stick)
					alpha.sendMessage(from, fs.readFileSync(rano), sticker, {quoted: ftex})
					console.log(color(time, 'magenta'), color('Succes sending sticker...'))
					fs.unlinkSync(rano)
					
					})
					} else {
					reply('Use photo!')
					}
					break 
		case 'blue':
  if (!isRegistered) return sendButRegis(from, daftar1, daftar2, daftar3, { quoted: mek})
					var imgbb = require('imgbb-uploader')
					if ((isMedia && !mek.message.videoMessage || isQuotedImage) && args.length == 0) {
					ger = isQuotedImage ? JSON.parse(JSON.stringify(mek).replace('quotedM','m')).message.extendedTextMessage.contextInfo : mek 
					sticWait(from)
					console.log(color(time, 'magenta'), color('Downloading sticker...'))
					owgi = await  alpha.downloadAndSaveMediaMessage(ger)
					anu = await imgbb("0ffc503f79f9b051b82e643eb3e3a746", owgi)
					teks = `${anu.display_url}`
					ranp = getRandom('.gif')
					rano = getRandom('.webp')
					anu7 = `https://some-random-api.ml/canvas/blue?avatar=${teks}`
					exec(`wget ${anu7} -O ${ranp} && ffmpeg -i ${ranp} -vcodec libwebp -filter:v fps=fps=20 -lossless 1 -loop 0 -preset default -an -vsync 0 -s 512:512 ${rano}`, (err) => {
					fs.unlinkSync(ranp)
					if (err) return reply(mess.error.stick)
					alpha.sendMessage(from, fs.readFileSync(rano), sticker, {quoted: ftex})
					console.log(color(time, 'magenta'), color('Succes sending sticker...'))
					fs.unlinkSync(rano)
					})
					
					} else {
					reply('Use photo!')
					}
					 break 
		case 'greyscale':
  if (!isRegistered) return sendButRegis(from, daftar1, daftar2, daftar3, { quoted: mek})
					var imgbb = require('imgbb-uploader')
					if ((isMedia && !mek.message.videoMessage || isQuotedImage) && args.length == 0) {
					ger = isQuotedImage ? JSON.parse(JSON.stringify(mek).replace('quotedM','m')).message.extendedTextMessage.contextInfo : mek 
					sticWait(from)
					console.log(color(time, 'magenta'), color('Downloading sticker...'))
					owgi = await  alpha.downloadAndSaveMediaMessage(ger)
					anu = await imgbb("0ffc503f79f9b051b82e643eb3e3a746", owgi)
					teks = `${anu.display_url}`
					ranp = getRandom('.gif')
					rano = getRandom('.webp')
					anu8 = `https://some-random-api.ml/canvas/greyscale?avatar=${teks}`
					exec(`wget ${anu8} -O ${ranp} && ffmpeg -i ${ranp} -vcodec libwebp -filter:v fps=fps=20 -lossless 1 -loop 0 -preset default -an -vsync 0 -s 512:512 ${rano}`, (err) => {
					fs.unlinkSync(ranp)
					if (err) return reply(mess.error.stick)
					alpha.sendMessage(from, fs.readFileSync(rano), sticker, {quoted: ftex})
					console.log(color(time, 'magenta'), color('Succes sending sticker...'))
					fs.unlinkSync(rano)
					})
					
					} else {
					reply('Use photo!')
					}
				 break 
		case 'invert':
  if (!isRegistered) return sendButRegis(from, daftar1, daftar2, daftar3, { quoted: mek})
					var imgbb = require('imgbb-uploader')
					if ((isMedia && !mek.message.videoMessage || isQuotedImage) && args.length == 0) {
					ger = isQuotedImage ? JSON.parse(JSON.stringify(mek).replace('quotedM','m')).message.extendedTextMessage.contextInfo : mek 
					sticWait(from)
					console.log(color(time, 'magenta'), color('Downloading sticker...'))
					owgi = await  alpha.downloadAndSaveMediaMessage(ger)
					anu = await imgbb("0ffc503f79f9b051b82e643eb3e3a746", owgi)
					teks = `${anu.display_url}`
					ranp = getRandom('.gif')
					rano = getRandom('.webp')
					anu8 = `https://some-random-api.ml/canvas/invert?avatar=${teks}`
					exec(`wget ${anu8} -O ${ranp} && ffmpeg -i ${ranp} -vcodec libwebp -filter:v fps=fps=20 -lossless 1 -loop 0 -preset default -an -vsync 0 -s 512:512 ${rano}`, (err) => {
					fs.unlinkSync(ranp)
					if (err) return reply(mess.error.stick)
					alpha.sendMessage(from, fs.readFileSync(rano), sticker, {quoted: ftex})
					console.log(color(time, 'magenta'), color('Succes sending sticker...'))
					fs.unlinkSync(rano)
					})
					
					} else {
					reply('Use photo!')
					}
				 break 
		case 'invert_greyscale':
  if (!isRegistered) return sendButRegis(from, daftar1, daftar2, daftar3, { quoted: mek})
					var imgbb = require('imgbb-uploader')
					if ((isMedia && !mek.message.videoMessage || isQuotedImage) && args.length == 0) {
					ger = isQuotedImage ? JSON.parse(JSON.stringify(mek).replace('quotedM','m')).message.extendedTextMessage.contextInfo : mek 
					sticWait(from)
					console.log(color(time, 'magenta'), color('Downloading sticker...'))
					owgi = await  alpha.downloadAndSaveMediaMessage(ger)
					anu = await imgbb("0ffc503f79f9b051b82e643eb3e3a746", owgi)
					teks = `${anu.display_url}`
					ranp = getRandom('.gif')
					rano = getRandom('.webp')
					anu8 = `https://some-random-api.ml/canvas/invertgreyscale?avatar=${teks}`
					exec(`wget ${anu8} -O ${ranp} && ffmpeg -i ${ranp} -vcodec libwebp -filter:v fps=fps=20 -lossless 1 -loop 0 -preset default -an -vsync 0 -s 512:512 ${rano}`, (err) => {
					fs.unlinkSync(ranp)
					if (err) return reply(mess.error.stick)
					alpha.sendMessage(from, fs.readFileSync(rano), sticker, {quoted: ftex})
					console.log(color(time, 'magenta'), color('Succes sending sticker...'))
					fs.unlinkSync(rano)
					})
					
					} else {
					reply('Use photo!')
					}
				 break 
		case 'red':
  if (!isRegistered) return sendButRegis(from, daftar1, daftar2, daftar3, { quoted: mek})
					var imgbb = require('imgbb-uploader')
					if ((isMedia && !mek.message.videoMessage || isQuotedImage) && args.length == 0) {
					ger = isQuotedImage ? JSON.parse(JSON.stringify(mek).replace('quotedM','m')).message.extendedTextMessage.contextInfo : mek 
					sticWait(from)
					console.log(color(time, 'magenta'), color('Downloading sticker...'))
					owgi = await  alpha.downloadAndSaveMediaMessage(ger)
					anu = await imgbb("0ffc503f79f9b051b82e643eb3e3a746", owgi)
					teks = `${anu.display_url}`
					ranp = getRandom('.gif')
					rano = getRandom('.webp')
					anu8 = `https://some-random-api.ml/canvas/red?avatar=${teks}`
					exec(`wget ${anu8} -O ${ranp} && ffmpeg -i ${ranp} -vcodec libwebp -filter:v fps=fps=20 -lossless 1 -loop 0 -preset default -an -vsync 0 -s 512:512 ${rano}`, (err) => {
					fs.unlinkSync(ranp)
					if (err) return reply(mess.error.stick)
					alpha.sendMessage(from, fs.readFileSync(rano), sticker, {quoted: ftex})
					console.log(color(time, 'magenta'), color('Succes sending sticker...'))
					fs.unlinkSync(rano)
					})
					
					} else {
					reply('Use photo!')
					}
				 break
         case 'blurple':
  if (!isRegistered) return sendButRegis(from, daftar1, daftar2, daftar3, { quoted: mek})
					var imgbb = require('imgbb-uploader')
					if ((isMedia && !mek.message.videoMessage || isQuotedImage) && args.length == 0) {
					ger = isQuotedImage ? JSON.parse(JSON.stringify(mek).replace('quotedM','m')).message.extendedTextMessage.contextInfo : mek 
					sticWait(from)
					console.log(color(time, 'magenta'), color('Downloading sticker...'))
					owgi = await  alpha.downloadAndSaveMediaMessage(ger)
					anu = await imgbb("0ffc503f79f9b051b82e643eb3e3a746", owgi)
					teks = `${anu.display_url}`
					ranp = getRandom('.gif')
					rano = getRandom('.webp')
					anu8 = `https://some-random-api.ml/canvas/blurple?avatar=${teks}`
					exec(`wget ${anu8} -O ${ranp} && ffmpeg -i ${ranp} -vcodec libwebp -filter:v fps=fps=20 -lossless 1 -loop 0 -preset default -an -vsync 0 -s 512:512 ${rano}`, (err) => {
					fs.unlinkSync(ranp)
					if (err) return reply(mess.error.stick)
					alpha.sendMessage(from, fs.readFileSync(rano), sticker, {quoted: ftex})
					console.log(color(time, 'magenta'), color('Succes sending sticker...'))
					fs.unlinkSync(rano)
					})
					
					} else {
					reply('Use photo!')
					}
				 break 
		case 'blurple2':
  if (!isRegistered) return sendButRegis(from, daftar1, daftar2, daftar3, { quoted: mek})
					var imgbb = require('imgbb-uploader')
					if ((isMedia && !mek.message.videoMessage || isQuotedImage) && args.length == 0) {
					ger = isQuotedImage ? JSON.parse(JSON.stringify(mek).replace('quotedM','m')).message.extendedTextMessage.contextInfo : mek 
					sticWait(from)
					console.log(color(time, 'magenta'), color('Downloading sticker...'))
					owgi = await  alpha.downloadAndSaveMediaMessage(ger)
					anu = await imgbb("0ffc503f79f9b051b82e643eb3e3a746", owgi)
					teks = `${anu.display_url}`
					ranp = getRandom('.gif')
					rano = getRandom('.webp')
					anu8 = `https://some-random-api.ml/canvas/blurple2?avatar=${teks}`
					exec(`wget ${anu8} -O ${ranp} && ffmpeg -i ${ranp} -vcodec libwebp -filter:v fps=fps=20 -lossless 1 -loop 0 -preset default -an -vsync 0 -s 512:512 ${rano}`, (err) => {
					fs.unlinkSync(ranp)
					if (err) return reply(mess.error.stick)
					alpha.sendMessage(from, fs.readFileSync(rano), sticker, {quoted: ftex})
					console.log(color(time, 'magenta'), color('Succes sending sticker...'))
					fs.unlinkSync(rano)
					})
					
					} else {
					reply('Use photo!')
					}
				 break 
		case 'wasted':
  if (!isRegistered) return sendButRegis(from, daftar1, daftar2, daftar3, { quoted: mek})
					var imgbb = require('imgbb-uploader')
					if ((isMedia && !mek.message.videoMessage || isQuotedImage) && args.length == 0) {
					ger = isQuotedImage ? JSON.parse(JSON.stringify(mek).replace('quotedM','m')).message.extendedTextMessage.contextInfo : mek 
					sticWait(from)
					owgi = await  alpha.downloadAndSaveMediaMessage(ger)
					anu = await imgbb("0ffc503f79f9b051b82e643eb3e3a746", owgi)
					teks = `${anu.display_url}`
					ranp = getRandom('.gif')
					rano = getRandom('.webp')
					anu2 = `https://some-random-api.ml/canvas/wasted?avatar=${teks}`
					exec(`wget ${anu2} -O ${ranp} && ffmpeg -i ${ranp} -vcodec libwebp -filter:v fps=fps=20 -lossless 1 -loop 0 -preset default -an -vsync 0 -s 512:512 ${rano}`, (err) => {
					fs.unlinkSync(ranp)
					if (err) return reply(mess.error.stick)
					alpha.sendMessage(from, fs.readFileSync(rano), sticker, {quoted: ftex})
					fs.unlinkSync(rano)
					})
					
					} else {
					reply('Use photo!')
					}
					break 
		case 'pelangi':
		case 'rainbow':
  if (!isRegistered) return sendButRegis(from, daftar1, daftar2, daftar3, { quoted: mek})
					var imgbb = require('imgbb-uploader')
					if ((isMedia && !mek.message.videoMessage || isQuotedImage) && args.length == 0) {
					ger = isQuotedImage ? JSON.parse(JSON.stringify(mek).replace('quotedM','m')).message.extendedTextMessage.contextInfo : mek 
					sticWait(from)
					owgi = await  alpha.downloadAndSaveMediaMessage(ger)
					anu = await imgbb("0ffc503f79f9b051b82e643eb3e3a746", owgi)
					teks = `${anu.display_url}`
					ranp = getRandom('.gif')
					rano = getRandom('.webp')
					anu3 = `https://some-random-api.ml/canvas/gay?avatar=${teks}`
					exec(`wget ${anu3} -O ${ranp} && ffmpeg -i ${ranp} -vcodec libwebp -filter:v fps=fps=20 -lossless 1 -loop 0 -preset default -an -vsync 0 -s 512:512 ${rano}`, (err) => {
					fs.unlinkSync(ranp)
					if (err) return reply(mess.error.stick)
					alpha.sendMessage(from, fs.readFileSync(rano), sticker, {quoted: ftex})
					fs.unlinkSync(rano)
					})
					
					} else {
					reply('Use photo!')
					}
					break 
		case 'brown':
  if (!isRegistered) return sendButRegis(from, daftar1, daftar2, daftar3, { quoted: mek})
					var imgbb = require('imgbb-uploader')
					if ((isMedia && !mek.message.videoMessage || isQuotedImage) && args.length == 0) {
					ger = isQuotedImage ? JSON.parse(JSON.stringify(mek).replace('quotedM','m')).message.extendedTextMessage.contextInfo : mek 
					sticWait(from)
					owgi = await  alpha.downloadAndSaveMediaMessage(ger)
					anu = await imgbb("0ffc503f79f9b051b82e643eb3e3a746", owgi)
					teks = `${anu.display_url}`
					ranp = getRandom('.gif')
					rano = getRandom('.webp')
					anu4 = `https://some-random-api.ml/canvas/sepia?avatar=${teks}`
					exec(`wget ${anu4} -O ${ranp} && ffmpeg -i ${ranp} -vcodec libwebp -filter:v fps=fps=20 -lossless 1 -loop 0 -preset default -an -vsync 0 -s 512:512 ${rano}`, (err) => {
					fs.unlinkSync(ranp)
					if (err) return reply(mess.error.stick)
					alpha.sendMessage(from, fs.readFileSync(rano), sticker, {quoted: ftex})
					fs.unlinkSync(rano)
					})
					
					} else {
					reply('Use photo!')
					}
					break 
					//Fun not faedah
               case 'brainly':
  if (!isRegistered) return sendButRegis(from, daftar1, daftar2, daftar3, { quoted: mek})
					if (args.length < 1) return reply('What kind of question is that')
		          	brien = args.join(' ')
					brainly(`${brien}`).then(res => {
					teks = '❉───────────────────────❉\n'
					for (let Y of res.data) {
					teks += `\n*「 _BRAINLY_ 」*\n\n*➸ Question:* ${Y.pertanyaan}\n\n*➸ Answer:* ${Y.jawaban[0].text}\n❉──────────────────❉\n`
					}
					alpha.sendMessage(from, teks, text,{quoted:mek,detectLinks: false})                        
		            })              
					break
case 'igstalk':
  if (!isRegistered) return sendButRegis(from, daftar1, daftar2, daftar3, { quoted: mek})
try{
if (!c) return reply('Username?')
ig.fetchUser(`${args.join(' ')}`).then(Y => {
console.log(`${args.join(' ')}`)
ten = `${Y.profile_pic_url_hd}`
teks = `*ID* : ${Y.profile_id}\n*Username* : ${args.join('')}\n*Full Name* : ${Y.full_name}\n*Bio* : ${Y.biography}\n*Followers* : ${Y.following}\n*Following* : ${Y.followers}\n*Private* : ${Y.is_private}\n*Verified* : ${Y.is_verified}\n\n*Link* : https://instagram.com/${args.join('')}`
sendMediaURL(from,ten,teks) 
})} catch {
const tod = await fetchJson(
`https://ferdiz-afk.my.id/api/stalkig?username=${c}`
);
var nih_buff = await getBuffer(tod.picurl);
const tt = `*INSTAGRAM STALK*

\nUsername: ${tod.username}\nFullname: ${tod.fullname}\npostingan: ${tod.post}\ncategory_akun: ${tod.category_name}\nverified: ${tod.verified_user}\nprivate: ${tod.private_user}\nFollowing: ${tod.following}\nFollower: ${tod.followers}\nBio:\n${tod.bio}`;
alpha.sendMessage(from, nih_buff, image, { quoted: mek, caption: tt });
}
break;      
break    
                case 'can':
  if (!isRegistered) return sendButRegis(from, daftar1, daftar2, daftar3, { quoted: mek})
					bisakah = body.slice(1)
					const bisa =['Can', 'Cant', 'Try again','Are you dreaming?','Are you sure you can?']
					const keh = bisa[Math.floor(Math.random() * bisa.length)]
					alpha.sendMessage(from, 'Question : *'+bisakah+'*\n\nAnswer : '+ keh, text, { quoted: mek })
					break
				case 'when':
  if (!isRegistered) return sendButRegis(from, daftar1, daftar2, daftar3, { quoted: mek})
					kapankah = body.slice(1)
					const kapan =['Tomorrow','The day after tomorrow','Earlier','4 Days','5 Days','6 Days','1 Week Again','2 Weeks Again','3 Weeks Again','1 Month Again','2 Months','3 Months','4 Months','5 Months','6 Months Again']
					const koh = kapan[Math.floor(Math.random() * kapan.length)]
					alpha.sendMessage(from, 'Question : *'+kapankah+'*\n\nAnswer : '+ koh, text, { quoted: mek })
					break
         			  case 'is':
  if (!isRegistered) return sendButRegis(from, daftar1, daftar2, daftar3, { quoted: mek})
					apakah = body.slice(1)
					const apa =['Yes','No','Could be','I dont know lmao','Ask the Chicken']
					const kah = apa[Math.floor(Math.random() * apa.length)]
					alpha.sendMessage(from, 'Question : *'+apakah+'*\n\nAnswer : '+ kah, text, { quoted: mek })
					break
				case 'rate':
				case 'ship':
  if (!isRegistered) return sendButRegis(from, daftar1, daftar2, daftar3, { quoted: mek})
					rate = body.slice(1)
					const ra =['1','2','3','4','5','6','7','8','9','10','11','12','13','14','15','16','17','18','19','20','21','22','23','24','25','26','27','28','29','30','31','32','33','34','35','36','37','38','39','40','41','42','43','44','45','46','47','48','49','50','51','52','53','54','55','56','57','58','59','60','61','62','63','64','65','66','67','68','69','70','71','72','73','74','75','76','77','78','79','80','81','82','83','84','85','86','87','88','89','90','91','92','93','94','95','96','97','98','99','100']
					const te = ra[Math.floor(Math.random() * ra.length)]
					alpha.sendMessage(from, 'Question : *'+rate+'*\n\nAnswer : '+ te+'%', text, { quoted: mek })
					break
	case 'igstory2': 
  if (!isRegistered) return sendButRegis(from, daftar1, daftar2, daftar3, { quoted: mek})
            if(!c) return reply('Username?')
            hx.igstory(`${c}`)
            .then(async result => {
            for(let i of result.medias){
                if(i.url.includes('mp4')){
                    let link = await getBuffer(i.url)
                    alpha.sendMessage(from,link,video,{quoted: mek,caption: `Type : ${i.type}`})
                } else {
                    let link = await getBuffer(i.url)
                    alpha.sendMessage(from,link,image,{quoted: mek,caption: `Type : ${i.type}`})                  
                }
            }
            });
            break
    case 'playstore':
    if (!isRegistered) return sendButRegis(from, daftar1, daftar2, daftar3, { quoted: mek})
            if(!c) return reply('what are you looking for?')
            let play = await hx.playstore(`${c}`)
            let store = '❉─────────────────────❉\n'
            for (let i of play){
            store += `\n*「 *PLAY STORE* 」*\n
- *Name* : ${i.name}
- *Link* : ${i.link}\n
- *Dev* : ${i.developer}
- *Link Dev* : ${i.link_dev}\n❉─────────────────────❉`
            }
            reply(store)
            break
		    case 'facebook':
		case'fb':
		if (!isRegistered) return sendButRegis(from, daftar1, daftar2, daftar3, { quoted: mek})
            if (!c) return reply('The link?')
            if (!isUrl(args[0]) && !args[0].includes('facebook.com')) return reply(mess.error.api)
            sticWait(from)
            te = args.join(' ')
            hx.fbdown(`${te}`)
            .then(G => {
            ten = `${G.HD}`
            sendMediaURL(from,ten,`*LINK VIDEO* : ${G.Normal_video}`)
            })
            break
          case "facebook2":
        if (!q) return reply("The link?");
        if (!isUrl(args[0]) && !args[0].includes("facebook.com"))
          return reply(mess.Iv);
        reply(mess.wait);
        te = args.join(" ");
        hx.fbdown(`${te}`).then((G) => {
          ten = `${G.HD}`;
          sendMediaURL(from, ten, `*Link video_normal* : ${G.Normal_video}`);
        });
        break;
case 'walink':
case 'wagroup':
case 'wagrup':
case 'wagc':
if (!isRegistered) return sendButRegis(from, daftar1, daftar2, daftar3, { quoted: mek})
            if(!c) return reply('what group are you looking for??')
            hx.linkwa(`${c}`)
            .then(result => {
            let res = '「 *WHATSAPP GC* 」\n\n'
            for (let i of result) {
            res += `*Name*: *${i.nama}\n*Link*: ${i.link}\n\n`
            }
            reply(res)
            });
            break 
    case 'otaku':
    if (!isRegistered) return sendButRegis(from, daftar1, daftar2, daftar3, { quoted: mek})
            if(!c) return reply('anime title?')
            let anime = await hx.otakudesu(`${c}`)
            rem = `*Title* : ${anime.judul}
*Japan* : ${anime.jepang}
*Rating* : ${anime.rate}
*Producer* : ${anime.produser}
*Status* : ${anime.status}
*Episode* : ${anime.episode}
*Duration* : ${anime.durasi}
*Release* : ${anime.rilis}
*Studio* : ${anime.studio}
*Genre* : ${anime.genre}\n
*Synopsis* :
${anime.desc}\n\n*Link Batch* : ${anime.batch}\n*Link Download SD* : ${anime.batchSD}\n*Link Download HD* : ${anime.batchHD}`
            ram = await getBuffer(anime.img)
            alpha.sendMessage(from,ram,image,{quoted:mek,caption:rem})
            break
    case 'komiku':
    if (!isRegistered) return sendButRegis(from, daftar1, daftar2, daftar3, { quoted: mek})
            if(!c) return reply(`The title?\n${prefix}komiku mao gakuin`)
            let komik = await hx.komiku(`${c}`)
            result = `*Title* : ${komik.title}\n
*Title* : ${komik.indo}\n
*Update* : ${komik.update}\n
*Desc* : ${komik.desc}\n
*Early Chapter* : ${komik.chapter_awal}
*Final Chapter* : ${komik.chapter_akhir}`
            sendMediaURL(from, komik.image,result)
            break  
		    case 'twmp4': case 'twitter':
		if (!isRegistered) return sendButRegis(from, daftar1, daftar2, daftar3, { quoted: mek})
if (args.length < 1) return reply('Link?')
lin = args[0]
sticWait(from)
hx.twitter(lin).then(res => {
console.log('[ TWITTER ] downloader')
Anu = res.SD
fto = fs.readFileSync('./thumb.jpg')
sendMediaURL(from, Anu, 'Done!')
})
break
case 'twmp3':
		if (!isRegistered) return sendButRegis(from, daftar1, daftar2, daftar3, { quoted: mek})
if (args.length < 1) return reply('Link?')
lin = args[0]
sticWait(from)
hx.twitter(lin).then(async (res) => {
console.log('[ TWITTER ] downloader')
Anu = res.SD
khs = await getBuffer(Anu)
alpha.sendMessage(from, khs, audio, {mimetype:'audio/mp4', filename:'audio.mp3', quoted:mek, ptt:true})
})
break
      case "twitter2":
      if (!isRegistered) return sendButRegis(from, daftar1, daftar2, daftar3, { quoted: mek})
        if (!isUrl(args[0]) && !args[0].includes("twitter.com"))
          return reply(mess.Iv);
        if (!q) return fakegroup("The link?");
        ten = args[0];
        var res = await hx.twitter(`${ten}`);
        ren = `${g.HD}`;
        sendMediaURL(from, ren, "DONE");
        break;
    case 'chara':
		if (!isRegistered) return sendButRegis(from, daftar1, daftar2, daftar3, { quoted: mek})
            if(!c) return reply(`gambar apa?\n${prefix}chara nino`)
            let im = await hx.chara(`${c}`)
            let acak = im[Math.floor(Math.random() * im.length)]
            let li = await getBuffer(acak)
            await alpha.sendMessage(from,li,image,{quoted: ftex})
            break
//Navi
					          case 'unpin':
                if (!isOwner && !mek.key.fromMe) return sticOwner(from)
                alpha.modifyChat(from, ChatModification.unpin)
                reply('*succes unpin this chat*')
                console.log('unpin chat = ' + from)
                break
            case 'pin':
                if (!isOwner && !mek.key.fromMe) return sticOwner(from)
                alpha.modifyChat(from, ChatModification.pin)
                reply('*succes pin this chat*')
                console.log('pinned chat = ' + from)
                break
             case 'archive':
                if (!isOwner && !mek.key.fromMe) return sticOwner(from)
                reply('*okey wait..*')
                console.log('succes archive chat = ' + from)
                await sleep(3000)
                alpha.modifyChat(from, ChatModification.archive)
                break
            case 'unreadall':
                if (!isOwner && !mek.key.fromMe) return sticOwner(from)
                var chats = await alpha.chats.all()
                chats.map( async ({ jid }) => {
                await alpha.chatRead(jid, 'unread')
                    })
		    var teks = `\`\`\`Successfully unread ${chats.length} chats !\`\`\``
		    await alpha.sendMessage(from, teks, text, {quoted: ftex})
		    console.log(chats.length)
	        break
            case 'readall':
                if (!isOwner && !mek.key.fromMe) return sticOwner(from)
                var chats = await alpha.chats.all()
                chats.map( async ({ jid }) => {
                await alpha.chatRead(jid)
                })
		var teks = `\`\`\`Successfully read ${chats.length} chats !\`\`\``
	        await alpha.sendMessage(from, teks, text, {quoted: ftex})
		console.log(chats.length)
		break
            case 'unarchiveall':
                if (!isOwner && !mek.key.fromMe) return sticOwner(from)
                reply('*succes unarchive all chat*')
                console.log('succes unarchive chat = ' + from)
                anu = await alpha.chats.all()
                for (let _ of anu) {
                alpha.modifyChat(_.jid, ChatModification.unarchive)
                }
                break
case 'closetime':
		if (!isRegistered) return sendButRegis(from, daftar1, daftar2, daftar3, { quoted: mek})
if (!isGroup) return reply(mess.only.group)
if (!isGroupAdmins) return sticAdmin(from)
if (!isBotGroupAdmins) return sticNotAdmin(from)
if (args[1]=="sec") {var timer = args[0]+"000"
} else if (args[1]=="min") {var timer = args[0]+"0000"
} else if (args[1]=="hr") {var timer = args[0]+"00000"
} else {return reply("*choose:*\nsec\nmin\nhr\n\n*example*\n10 sec")}
setTimeout( () => {
var nomor = mek.participant
alpha.groupSettingChange (from, GroupSettingChange.messageSend, true);
}, timer)
break
case 'opentime':
		if (!isRegistered) return sendButRegis(from, daftar1, daftar2, daftar3, { quoted: mek})
if (!isGroup) return reply(mess.only.group)
if (!isGroupAdmins) return sticAdmin(from)
if (!isBotGroupAdmins) return sticNotAdmin(from)
if (args[1]=="sec") {var timer = args[0]+"000"
} else if (args[1]=="min") {var timer = args[0]+"0000"
} else if (args[1]=="hr") {var timer = args[0]+"00000"
} else {return reply("*choose:*\nsec\nmin\nhr\n\n*example*\n10 sec")}
setTimeout( () => {
var nomor = mek.participant
alpha.groupSettingChange (from, GroupSettingChange.messageSend, false);
}, timer)
break
case 'leavetime':
if (!isGroup) return reply(mess.only.group)
if (!isOwner && !mek.key.fromMe) return sticOwner(from)
if (args[1]=="sec") {var timer = args[0]+"000"
} else if (args[1]=="min") {var timer = args[0]+"0000"
} else if (args[1]=="hr") {var timer = args[0]+"00000"
} else {return reply("*choose:*\nsec\nmin\nhr\n\n*example*\n10 sec")}
setTimeout( () => {
alpha.groupLeave(from);
}, timer)
case 'nano':
if (!isOwner && !mek.key.fromMe) return sticOwner(from)
if (!c) return reply('Whats the file name? ?')
anu = fs.readFileSync(`${c}`)
reply(String(anu))
break
case 'setmenu':
if (!isOwner && !mek.key.fromMe) return sticOwner(from)
if(args[0] == 'ori'){
menusimpel = true
reply('Success')
}else if(args[0] == 'simple'){
menusimpel = false
reply('Success')
}else if (!c) {
anu =`Please choose one below`
 buttons = [{buttonId: 'setmenu ori', buttonText: {displayText: 'ORI'}, type: 1},{buttonId: 'setmenu simple', buttonText: {displayText: 'SIMPLE'}, type: 1}]
const skuygelud = {
    contentText: `${anu}`,
    footerText: '*Trust Bot*',
    buttons: buttons,
    headerType: 1
}
await alpha.sendMessage(from, skuygelud, MessageType.buttonsMessage, {quoted: ftex})
}
break
case 'setallmenu':
if (!isOwner && !mek.key.fromMe) return sticOwner(from)
if(args[0] == 'ori'){
menuall = true
reply('Success')
}else if(args[0] == 'simple'){
menuall = false
reply('Success')
}else if (!c) {
anu =`Please choose one below`
 buttons = [{buttonId: 'setallmenu ori', buttonText: {displayText: 'ORI'}, type: 1},{buttonId: 'setallmenu simple', buttonText: {displayText: 'SIMPLE'}, type: 1}]
const skuygf = {
    contentText: `${anu}`,
    footerText: '*Trust Bot*',
    buttons: buttons,
    headerType: 1
}
await alpha.sendMessage(from, skuygf, MessageType.buttonsMessage, {quoted: ftex})
}

    break
case 'owner':
	case 'creator':
case 'developer':
		case 'author':
let ini_list = []
for (let i of ownerNumber) {
const vname = alpha.contacts[i] != undefined ? alpha.contacts[i].vname || alpha.contacts[i].notify : undefined
ini_list.push({
"displayName": `Trust Bot Developer`,
"vcard": `BEGIN:VCARD\nVERSION:3.0\nN:Sy;${NamaOwner};;;\nFN:${vname ? `${vname}` : `${NamaOwner}`}\nitem1.TEL;waid=${NomorOwner}:${NomorOwner2}\nitem1.X-ABLabel:Owner\nEND:VCARD`
})
}
alpha.sendMessage(from, {
"displayName": `Trust Bot Developer`,
"contacts": ini_list 
}, 'contactsArrayMessage', { quoted: mek, contextInfo: { forwardingScore: 508, isForwarded: true }})
break
case 'addcmd': 
case 'setcmd':
if (!isOwner && !mek.key.fromMe) return sticOwner(from)
if (isQuotedSticker) {
if (!c) return reply(`Use : ${command} cmd and tag sticker`)
var kodenya = mek.message.extendedTextMessage.contextInfo.quotedMessage.stickerMessage.fil
