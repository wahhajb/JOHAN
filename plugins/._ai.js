let handler = async (m, { conn, usedPrefix, command, args, isOwner, isAdmin, isROwner }) => {
  let isEnable = /true|enable|(turn)?on|1/i.test(command)
  let chat =global.DATABASE.data.chats[m.chat]
  let user = global.DATABASE.data.users[m.sender]
  let bot = global.DATABASE.data.settings[conn.user.jid] || {}
  let type = (args[0] || '').toLowerCase()
  let isAll = false, isUser = false
  switch (type) {
    case 'ترحيب':
      if (!m.isGroup) {
        if (!isOwner) {
          global.dfail('group', m, conn)
          throw false
        }
      } else if (!isAdmin) {
        global.dfail('admin', m, conn)
        throw false
      }
      chat.welcome = isEnable
      break
    case 'حذف':
      if (m.isGroup) {
        if (!(isAdmin || isOwner)) {
          global.dfail('admin', m, conn)
          throw false
        }
      }
      chat.delete = isEnable
      break
    case 'محتوى_خاص_بالكبار':
      if (m.isGroup) {
        if (!(isAdmin || isOwner)) {
          global.dfail('admin', m, conn)
          throw false
        }
      }
      chat.nsfw = isEnable
      break
    case 'المحادثة_الكبيرة':
      if (m.isGroup) {
        if (!isROwner) {
          global.dfail('rowner', m, conn)
          throw false
        }
      }
      chat.premnsfw = isEnable
      break
    case 'ملصق_تلقائي':
      if (m.isGroup) {
        if (!(isAdmin || isOwner)) {
          global.dfail('admin', m, conn)
          throw false
        }
      }
      chat.autoSticker = isEnable
      break
    case 'بايو_تلقائي':
      isAll = true
      if (!isROwner) {
        global.dfail('rowner', m, conn)
        throw false
      }
      bot.autoBio = isEnable
      break
    case 'مكافحة_السبام':
      if (m.isGroup) {
        if (!(isAdmin || isOwner)) {
          global.dfail('admin', m, conn)
          throw false
        }
      }
      chat.antiSpam = isEnable
      break
    case 'مكافحة_الاتصال':
      isAll = true
      if (!isOwner) {
        global.dfail('rowner', m, conn)
        throw false
      }
      chat.anticall = isEnable
      break
    case 'منع_الحذف':
      if (m.isGroup) {
        if (!(isAdmin || isOwner)) {
          global.dfail('admin', m, conn)
          throw false
        }
      }
      chat.delete = !isEnable
      break
    case 'عام':
      isAll = true
      if (!isROwner) {
        global.dfail('rowner', m, conn)
        throw false
      }
      global.opts['self'] = !isEnable
      break
    case 'منع_الروابط':
      if (m.isGroup) {
        if (!(isAdmin || isOwner)) {
          global.dfail('admin', m, conn)
          throw false
        }
      }
      chat.antiLink = isEnable
      break
    case 'تقييد':
      isAll = true
      if (!isOwner) {
        global.dfail('owner', m, conn)
        throw false
      }
      bot.restrict = isEnable
      break
    case 'نيماك':
      isAll = true
      if (!isROwner) {
        global.dfail('rowner', m, conn)
        throw false
      }
      global.opts['nyimak'] = isEnable
      break
    case 'تلقائي_القراءة':
      isAll = true
      if (!isROwner) {
        global.dfail('rowner', m, conn)
        throw false
      }
      global.opts['autoread'] = isEnable
      break
    case 'فقط_الخاص':
      isAll = true
      if (!isROwner) {
        global.dfail('rowner', m, conn)
        throw false
      }
      global.opts['pconly'] = isEnable
      break
    case 'فقط_المجموعة':
      isAll = true
      if (!isROwner) {
        global.dfail('rowner', m, conn)
        throw false
      }
      global.opts['gconly'] = isEnable
      break
    case 'فقط_الحالة':
      isAll = true
      if (!isROwner) {
        global.dfail('rowner', m, conn)
        throw false
      }
      global.opts['swonly'] = isEnable
      break
    default:
      if (!/[01]/.test(command)) return m.reply(`
قائمة الخيارات: ترحيب | حذف | عام | منع_الروابط | منع_الحذف | مكافحة_السم | تلقائي_تطور | كشف | مستند | قائمة الاتصال بالطلبات | تقييد | نيماك | تلقائي_القراءة | فقط_الخاص | فقط_المجموعة | فقط_الحالة
مثال:
${usedPrefix}enable welcome
${usedPrefix}disable welcome
`.trim())
      throw false
  }
  m.reply(`
*${type}* تم بنجاح في *${isEnable ? 'تفعيل' : 'تعطيل'}* ${isAll ? 'لهذه الروبوتات' : isUser ? '' : 'لهذه الدردشة'}
`.trim())
}
handler.help = ['تفعيل', 'تعطيل <خيار>']
handler.tags = ['مجموعة', 'مالك']

handler.command = /^((تفعيل2|تعطيل)|(صح|خطأ)|((تشغيل)?(تشغيل|إيقاف)|[01]))$/i

export default handler
