import axios from "axios"

let handler = async (m, {text, usedPrefix, command}) => {
if (!text) return m.reply('تحتاج رابط الفيديو لتنزيله \n\n مثـال \n ${usedPrefix}${command} https://www.instagram.com/reel/C6LaJGLqADy/?igsh=YzRuM2k2dGoxM2Y3')
try {
await m.reply('> جاري تحميل الفيديو ياصديقي. ...')
let { data } = await axios.post(`https://v3.igdownloader.app/api/ajaxSearch?recaptchaToken=null&q=${text}&t=media&lang=en`)
let $ = cheerio.load(data.data)
let result = $('div >  div > a').attr('href')
await conn.sendFile(m.chat, result, '', 'Instagram: 'قم بوضع هنا أي شئ تريده أن يضهر نع الفيديو, m)
await m.react('✔️')
} catch (e) {
throw eror
}
}
handler.help = ['instagram2']
handler.tags = ['downloader']
handler.limit = false
handler.command = /^(ig2|insta2|انستا3)$/i

export default handler
