let handler = async(m, { isOwner, isAdmin, conn, text, participants, args, command }) => {
if (!(isAdmin || isOwner)) {
global.dfail('admin', m, conn)
throw false
}//غير ڤينوم و حط اسم بوتك
let pesan = args.join` `
let oi = `*♚~الرساله:* ${pesan}`
let teks = `*  * \n\n ${oi}\n\n*🗡┇الجروب :⇣*\n`
for (let mem of participants) {
teks += `*بحبك🫣❤ ↫* @${mem.id.split('@')[0]}\n`}
teks += `*𝐴𝑌𝐴𝑁𝛩𝐾𝛩𝑈𝐽𝐼-BOT*\n\n*𝑀𝐼𝐾𝐸𝑌*`
conn.sendMessage(m.chat, { text: teks, mentions: participants.map(a => a.id) }, )
}
handler.help = ['tagall <mesaje>','invocar <mesaje>']
handler.tags = ['group']
handler.command = /^(منشن|invocar|invocacion|todos|invocación)$/i
handler.admin = true
handler.group = true
export default handler
