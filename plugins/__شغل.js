import ytdl from 'ytdl-core';
import yts from 'yt-search';
import fs from 'fs';
import { pipeline } from 'stream';
import { promisify } from 'util';
import os from 'os';

const streamPipeline = promisify(pipeline);

async function handler(m, { conn, command, text, usedPrefix }) {
  if (!text) throw `*${usedPrefix}${command} اية الكرسي*`;

  try {
    // Send "" reaction initially
    await conn.sendMessage(m.chat, { react: { text: '', key: m.key } });

    // Search for video using yt-search
    const search = await yts(text);
    const vid = search.videos[Math.floor(Math.random() * search.videos.length)];

    if (!search) {
      throw new Error('Video Not Found, Try Another Title');
    }

    const { title, thumbnail, timestamp, views, ago, url } = vid;
    const wm = 'Downloading audio, please wait...';

    // Send video details and "Downloading" reaction
    const captvid = `*❖───┊ ♪ يــوتـــيــوب ♪ ┊───❖*
  ❏ الـعـنوان: ${title}

  ❐ الـمده: ${timestamp}

  ❑ الــمـشهـدات: ${views}

  ❒ مـنذ: ${ago}

  ❒ الـرابــط: ${url}`;

    await conn.sendMessage(m.chat, { image: { url: thumbnail }, caption: captvid, footer: author }, { quoted: m });
    await conn.sendMessage(m.chat, { react: { text: "⏳", key: m.key } });

    // Download audio using ytdl-core with error handling
    const audioStream = ytdl(url, { filter: 'audioonly', quality: 'highestaudio' });

    // Get temporary directory path and create writable stream
    const tmpDir = os.tmpdir();
    const writableStream = fs.createWriteStream(`${tmpDir}/${title}.mp3`);

    // Download the audio and handle errors
    try {
      await streamPipeline(audioStream, writableStream);
    } catch (err) {
      console.error('Download error:', err);
      // Inform the user about the download failure
      await conn.sendMessage(m.chat, '❌ Failed to download audio. Please try again later.', { quoted: m });
      return; // Exit the function if download fails
    }

    // Prepare and send the audio file
    const doc = {
      audio: { url: `${tmpDir}/${title}.mp3` },
      mimetype: 'audio/mp4',
      fileName: `${title}`,
      contextInfo: {
        externalAdReply: {
          showAdAttribution: true,
          mediaType: 2,
          mediaUrl: url,
          title: title,
          body: wm,
          sourceUrl: url,
          thumbnail: await (await conn.getFile(thumbnail)).data,
        },
      },
    };

    // Replace "" with "✅" reaction after sending the audio
    await conn.sendMessage(m.chat, { react: { text: '✅', key: m.key } });
    await conn.sendMessage(m.chat, doc, { quoted: m });

    // Delete the temporary audio file (optional)
    fs.unlink(`${tmpDir}/${title}.mp3`, (err) => {
      if (err) {
        console.error(`Failed to delete audio file: ${err}`);
      } else {
        console.log(`Deleted audio file: ${tmpDir}/${title}.mp3`);
      }
    });
  } catch (error) {
    console.error('Error:', error);
    // Send an error message to the chat
    await conn.sendMessage(m.chat, 'An error occurred. Please try again later.', { quoted: m });
  }
}

handler.help = [play].map((v) => v + ' <query>'); // Proper usage example with query placeholder
handler.tags = ['downloader'];
handler.command = /^شغل$/i;

handler.exp = 0;
handler.diamond = false;

export default handler;
