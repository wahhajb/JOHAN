import fetch from 'node-fetch';

const handler = async (m, { conn, text }) => {
  if (!text) {
    throw `قم بكتابة سؤالك\n\nمثال: .شادو كيف حالك؟`;
  }

  try {
    conn.sendPresenceUpdate('composing', m.chat);
    const BK9api = `https://api.bk9.site/ai/chatgpt?q=${encodeURIComponent(text)}`;
    const response = await fetch(BK9api);
    const data = await response.json();

    if (data.status && data.BK9) {
      const answer = data.BK9;
      conn.reply(m.chat, answer, m);
    } else {
      throw "حدث خطأ أثناء معالجة الطلب.";
    }
  } catch (error) {
    throw "حدث خطأ أثناء معالجة الطلب.";
  }
};

handler.command = /^(شادو)$/i;
handler.tags = ['ai'];

export default handler;
