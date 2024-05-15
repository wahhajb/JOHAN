import { generateWAMessageFromContent } from '@adiwajshing/baileys'

let handler = async (m, { conn, text, participants, isOwner, isAdmin }) => {
    let users = participants.map(u => conn.decodeJid(u.id))
    let q = m.quoted ? m.quoted : m || m.text || m.sender
    let c = m.quoted ? await m.getQuotedObj() : m.msg || m.text || m.sender

    let messageText = text || "هذه هي الرسالة الافتراضية"

    let msg = conn.cMod(m.chat, generateWAMessageFromContent(m.chat, { [m.quoted ? q.mtype : 'extendedTextMessage']: m.quoted ? c.message[q.mtype] : { text: messageText }}, { quoted: m, userJid: conn.user.id }), messageText, conn.user.jid, { mentions: users })

    await conn.relayMessage(m.chat, msg.message, { messageId: msg.key.id })
}

handler.help = ['hidetag']
handler.tags = ['group']
handler.command = /^(مخفي)$/i
handler.group = true
handler.owner = true

export default handler
