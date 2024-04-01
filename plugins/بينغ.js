import fetch from 'node-fetch';

var handler = async (m, { text, usedPrefix, command }) => {
  if (!text) throw `*هذا هو ذكاء اصطناعي يسمي بينغ* \n *يمكن ان يساعدك في اي شئ تريده* \n *.بينغ اريد قصه قصيره* \n *(للعلم مازال تحت الصنع قد يحدث الكثير من الأخطاء)*`;

  try {
    m.react('⚡');
    var apii = await fetch(`https://aemt.me/bingai?text=${text}`);
    var res = await apii.json();

    await conn.sendFile(m.chat, 'https://telegra.ph/file/abafb0983183373f95cf4.png', 'image.png', res.result, m);

  } catch (error) {
    console.error(error);
    throw '*خطأ بنحاول نصلحه في اقرب وقت*';
  }
};

handler.command = ['بينغ'];
handler.help = ['Z O R O'];
handler.tags = ['Z O R O'];
handler.premium = false;

export default handler;
