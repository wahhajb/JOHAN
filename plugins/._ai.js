import fetch from 'node-fetch';

let handler = async (m, {
    conn,
    args,
    usedPrefix,
    text,
    command
}) => {
    if (!text) return m.reply("ميزة الذكاء الاصطناعي \nExample:\n .dx ما هي عاصمة المغرب")
    await m.reply("يرجى الانتظار...")
    try {
        let result = await getChatGPTResponse(text)
        await conn.sendMessage(m.chat, result, m)
    } catch (e) {
        console.error(e);
        await m.reply('حدثت مشكلة :(')
    }
}

handler.help = ["dx"]
handler.tags = ["ai"]
handler.command = /^(ai)$/i

export default handler

/* New Line */
async function getChatGPTResponse(question) {
    try {
        let response = await fetch("https://api.openai.com/v1/completions", {
            method: "POST",
            headers: {
                "Content-Type": "application/json",
                "Authorization": "Bearer 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" // استبدل بالمفتاح السري الخاص بك
            },
            body: JSON.stringify({
                "model": "text-arabic-gpt-3.5",
                "prompt": question,
                "max_tokens": 150
            })
        });
        if (!response.ok) {
            throw new Error("HTTP status " + response.status);
        }
        const data = await response.json();
        return data.choices[0].text.trim();
    } catch (error) {
        throw new Error("Failed to fetch from API: " + error.message);
    }
}
