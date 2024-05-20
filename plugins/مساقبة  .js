// داخل المعالج الرئيسي handler
let handler = async (m, { conn, command }) => {
    let id = m.chat;
    conn.mikey = conn.mikey ? conn.mikey : {};

    if (command === "مسابقه-صور") {
        // كود البداية
    } else if (command === "انضم-صور") {
        // كود الانضمام
    } else if (command === "حذف-صور") {
        // كود حذف اللعبة
    }
};

// داخل المعالج القبلي handler.before
handler.before = async function (m, { conn }) {
    let id = m.chat;
    this.mikey = this.mikey ? this.mikey : {};

    if (!(id in this.mikey)) return;

    let json = this.mikey[id][1];
    let players = this.mikey[id][2];
    let questionCount = this.mikey[id][3];

    if (json && json.name && m.text.toLowerCase() === json.name.toLowerCase()) {
        clearTimeout(this.mikey[id][5]); // مسح المهلة
        let playerIndex = players.findIndex(player => player.id === m.sender);
        players[playerIndex].points += points;
        players[playerIndex].correctAnswers++;
        questionCount++;

        if (questionCount >= maxQuestions) {
            // كود الانتهاء من المسابقة
        } else {
            // كود اختيار السؤال الجديد
        }

        // رد فوري على الإجابة الصحيحة
        this.reply(m.chat, 'إجابة صحيحة! +50 نقطة', m);
    } else {
        // رد فوري على الإجابة الخاطئة
        this.reply(m.chat, 'إجابة خاطئة! حاول مرة أخرى', m);
    }
};

// داخل المعالج البعدي handler.after
handler.after = async function (m, { conn }) {
    let id = m.chat;
    this.mikey = this.mikey ? this.mikey : {};

    if (!(id in this.mikey)) return;

    let json = this.mikey[id][1];
    let players = this.mikey[id][2];
    let questionCount = this.mikey[id][3];

    if (json && json.name && m.text.toLowerCase() === json.name.toLowerCase()) {
        // تعديل النقاط للمشتركين الذين يجيبون بشكل صحيح
        clearTimeout(this.mikey[id][5]); // مسح المهلة
        let playerIndex = players.findIndex(player => player.id === m.sender);
        players[playerIndex].points += points;
        players[playerIndex].correctAnswers++;
        questionCount++;

        if (questionCount >= maxQuestions) {
            // كود الانتهاء من المسابقة
        } else {
            // كود اختيار السؤال الجديد
        }

        // رد فوري على الإجابة الصحيحة
        this.reply(m.chat, 'إجابة صحيحة! +50 نقطة', m);
    } else {
        // رد فوري على الإجابة الخاطئة
        this.reply(m.chat, 'إجابة خاطئة! حاول مرة أخرى', m);
    }
};

handler.command = /^(مسابقه-صور|انضم-صور|حذف-صور)$/i;

// تم تعديل الكود بواسطة MIKEY
export default handler;
