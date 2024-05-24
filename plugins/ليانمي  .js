import uploadImage from '../lib/uploadImage.js';

const handler = async (m, { conn }) => {
  const q = m.quoted ? m.quoted : m;
  const mime = (q.msg || q).mimetype || q.mediaType || '';
  if (!/image/g.test(mime)) throw 'من فضلك، قم بإرسال صورة لأقوم بتحويلها إلى صورة أنمي.';

  m.reply('جاري تحويل الصورة إلى صورة أنمي...');

  try {
    const data = await q.download?.();
    const image = await uploadImage(data);
    if (!image) throw 'حدث خطأ أثناء تحميل الصورة.';

    const animeAPI = `https://api.deepai.org/api/toonify`;
    const apiKey = 'quickstart-QUdJIGlzIGNvbWluZy4uLi4K';

    const response = await fetch(animeAPI, {
      method: 'POST',
      headers: {
        'Api-Key': apiKey
      },
      body: JSON.stringify({
        image: image
      })
    });

    const result = await response.json();

    if (!result || !result.output_url) throw 'حدث خطأ أثناء تحويل الصورة.';

    await conn.sendFile(m.chat, result.output_url, 'anime.jpg', 'تمت عملية التحويل بنجاح!', m);
  } catch (error) {
    throw 'حدث خطأ أثناء تحويل الصورة. يرجى المحاولة مرة أخرى.';
  }
};

handler.help = ['لانمي'];
handler.tags = ['تعليمية'];
handler.command = /^(لانمي)$/i;

export default handler;
