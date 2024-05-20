استيراد js من "javascript-obfuscator"؛

دع المعالج = غير متزامن ( m, { conn, text } ) => {
إذا (!m.quoted.text) قم بإلقاء "قم بالرد على الكود الذي تريد ترجمته!"؛

دع الدقة = js.obfuscate( m.quoted.text, {
    المدمجة: صحيح،
    التحكم في التدفق: خطأ،
    التحكم في التدفق والتسطيح: 0.75،
    حقن الكود الميت: خطأ،
    deadCodeInjectionThreshold: 0.4,
    حماية التصحيح: خطأ،
    تصحيح الأخطاء: 0،
    DisableConsoleOutput: خطأ،
    قفل المجال: []،
    domainLockRedirectUrl: 'حول: فارغ'،
    سلاسل تحويل القوة: []،
    معرف أسماء ذاكرة التخزين المؤقت: فارغة،
    معرف أسماء المولدات: 'سداسي عشري'،
    معرفات القاموس: []،
    بادئة المعرفات: ''،
    تجاهلRequireImports: خطأ،
    اسم ملف الإدخال: ''،
    سجل: كاذبة،
    أرقام إلى التعبيرات: خطأ،
    الخيارات المسبقة: "افتراضي"،
    إعادة تسمية Globals: خطأ،
    إعادة تسمية الخصائص: خطأ،
    إعادة تسمية خصائص الوضع: "آمن"،
    الأسماء المحجوزة: []،
    سلاسل محجوزة: []،
    البذور: 0،
    الدفاع عن النفس: كاذب،
    تبسيط: صحيح،
    خريطة المصدر: خطأ،
    SourceMapBaseUrl: ''،
    اسم ملف المصدر: ''،
    sourceMapMode: "منفصل"،
    sourceMapSourcesMode: "مصادر المحتوى"،
    سلاسل الانقسام: كاذبة،
    SplitStringsChunkLength: 10،
    سلسلة الصفيف: صحيح،
    سلسلة ArrayCallsTransform: صحيح،
    stringArrayCallsTransformThreshold: 0.5،
    ترميز الصفيف: []،
    نوع سلسلة الصفيف: [
        "رقم سداسي عشري"
    ]،
    stringArrayIndexShift: صحيح،
    سلسلة ArrayRotate: صحيح،
    stringArrayShuffle: صحيح،
    stringArrayWrappersCount: 1،
    stringArrayWrappersChainedCalls: صحيح،
    stringArrayWrappersParametersMaxCount: 2,
    stringArrayWrappersType: "متغير"،
    stringArrayThreshold: 0.75،
    الهدف: "المتصفح"،
    تحويل مفاتيح الكائن: خطأ،
    unicodeEscapeSequence: خطأ
}).getObfuscatedCode()
  
 إذا (!res) رمي "خطأ :("
إرجاع m.reply(res);
}

Handler.help = ['enc']
Handler.tags = ['أدوات']
Handler.alias = ['enc']
Handler.command = /^(enc|تشفير)$/i

معالج التصدير الافتراضي؛
