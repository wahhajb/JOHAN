import { igdl } from "instagram-downloader";

let limit = 80000;

export async function before(m) {
    const regex = /^https?:\/\/(www\.)?instagram\.com\/p\/[a-zA-Z0-9_-]+/;
    const matches = m.text.trim().match(regex);
    const wait = "يرجى الانتظار...";
    
    if (!matches) return false;
    
    await m.reply(wait);
    
    try {
        const url = matches[0];
        const videoInfo = await igdl(url);
        const videoUrl = videoInfo.video_url;
        const videoTitle = videoInfo.title;
        const videoSize = videoInfo.size;

        if (videoSize.split("MB")[0] >= limit) {
            return m.reply(`الملف يتجاوز الحد المسموح به للتنزيل (${limit} MB)`);
        }

        const caption = `تم تنزيل المقطع بنجاح\n\n${videoTitle}\n\n${videoSize}`;

        const doc = {
            video: {
                url: videoUrl
            },
            mimetype: "video/mp4",
            caption: caption
        };

        await this.sendMessage(m.chat, doc, { quoted: m });
    } catch (error) {
        await m.reply("حدث خطأ أثناء تحميل الفيديو");
    }
}

export const disabled = false;
