let handler = async (m, { conn, usedPrefix, command }) => {
  await conn.sendMessage(m.chat, {
   react: {
 text: "🫡",
 key: m.key,
   }
  })

  await conn.sendMessage(m.chat, { video: { url: dir[Math.floor(Math.random() * dir.length)] }, caption: global.veeeee }, { quoted: m })
}

handler.help = ['ايديت_زو-رو']
handler.tags = ['anime']
handler.command = /^(ايديت)$/i
handler.limit = false

export default handler

const dir = [
'https://telegra.ph/file/f015e8e7f76a969278d5f.mp4',
'https://telegra.ph/file/64cf021ea90839f535ed2.mp4',
'https://telegra.ph/file/1f996fcd11ab027ede56b.mp4',
'https://telegra.ph/file/e8ae7d17a4a38ad0231e9.mp4',
'https://telegra.ph/file/7ec18d3dca628584287a5.mp4',
'https://telegra.ph/file/9dbf1b35e009865e6ca84.mp4',
'https://telegra.ph/file/2d3a1ba47874f44893bac.mp4',
'https://telegra.ph/file/eb82f221e0e3e5ce3e95b.mp4',
'https://telegra.ph/file/58876f1f0d735a53988f8.mp4',
'https://telegra.ph/file/f6ebc21573600a3ed934e.mp4',
'https://telegra.ph/file/f015e8e7f76a969278d5f.mp4',



'',
]
