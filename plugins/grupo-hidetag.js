import { generateWAMessageFromContent } from '@adiwajshing/baileys/lib/WAMessage/Message'

let handler = async (m, { conn, text, participants }) => {
    let users = participants.map(u => conn.decodeJid(u.id))
    let q = m.quoted || m
    let msg = conn.cMod(m.chat, generateWAMessageFromContent(m.chat, { [q.mtype]: q.mtype == 'conversation' ? { extendedTextMessage: { text: text || '' } } : q[q.mtype] }, { quoted: q, userJid: conn.user.jid }), text || q.text, conn.user.jid, { mentions: users })
    await conn.relayWAMessage(msg.message, { waitForAck: true, mentionedJid: users })
}

handler.help = ['مخفي']
handler.tags = ['group']
handler.command = /^(مخفي)$/i
handler.group = true
handler.admin = true

export default handler
