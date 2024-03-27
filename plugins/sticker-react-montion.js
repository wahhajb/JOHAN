import { sticker } from '../lib/sticker.js'
let handler = async(m, { conn }) => {
//if (!db.data.chats[m.chat].stickers && m.isGroup) throw `true`
if (!db.data.chats[m.chat].stickers && m.isGroup) throw 0
 
let nombre = '22231507309'
let nombre2 = '22247072475'
 
const s = [
'https://telegra.ph/file/7287ef0b4746312619007.jpg',
'https://telegra.ph/file/b1d458b89078f41f7db7c.jpg',
'https://telegra.ph/file/b7f2f570941997e252797.jpg',
'https://telegra.ph/file/f13ca4b9e6a8c4e26d870.jpg',
'https://telegra.ph/file/6f427ea6c283c60db8093.jpg',
'https://telegra.ph/file/3975c0a2dc1719ef81055.jpg',
'https://telegra.ph/file/c4b192332d82802cba587.jpg'
];  
 
let stiker = await sticker(null, s[Math.floor(Math.random() * s.length)], nombre, nombre2)
await delay(5 * 5000)
if (stiker) conn.sendFile(m.chat, stiker, 'sticker.webp', '',m, true, { contextInfo: { 'forwardingScore': 200, 'isForwarded': false, externalAdReply:{ showAdAttribution: false, title: wm, body: `h`, mediaType: 2, sourceUrl: nn, thumbnail: imagen1}}}, { quoted: m })
}
handler.customPrefix = /نسيان|نسيان|نسيان|نسيان/i 
handler.command = new RegExp
handler.exp = 50
export default handler
const delay = (ms) => new Promise((resolve) => setTimeout(resolve, ms))
