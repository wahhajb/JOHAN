let handler = async (m, { conn, args, command }) => {
await m.reply('* انا اسف ان كنت ازعجتكم , وداعا للجميع *  😗❤️‘') 
await  conn.groupLeave(m.chat)}
handler.command = /^(out|leavegc|اخرج|برا)$/i
handler.group = true
handler.rowner = true
export default handler
