let handler = m => m; 
  
 handler.all = async function (m) { 
   let chat = global.db.data.chats[m.chat]; 
   let responses; 
   if (/^بوت احبك|بوت بتزوجك|احبك|بموت فيك|نتجوز|بوت هنتجوز امتي|بوت انت ليا|بوت بموت فيك$/i.test(m.text)) { 
     responses = [ 
       'شكرا  ',  
       'بفكر في الموضوع',  
             'و انا',  
                   'استحيت',  
                         'حبك برص',  
                               'اسكتتتتت عشان ما اجلدك  ',  
                                     'طيب و بعدين '  
     ]; 
} else if (/^السلام عليكم|سلام عليكم ورحمه الله وبركاته|سلام عليكم|السلام عليكم ورحمه الله وبركاته$/i.test(m.text)) { 
     responses = [ 
       'وعليكم السلام',  
          'وعليكم السلام منور',  
              ' وعليكم السلام كيفك',  
                   'وعليكم السلام ورحمة الله وبركاته' 
     ]; 
   }else if (/^ كيفكم |كيفك| كيف الحال | اخباركم $/i.test(m.text)) { 
     responses = [ 
       'كل شيء بخير الحمد لله ',  
          ' مش عارف  ',  
              ' الحمد لله ماشي الحال ',  
                  ' الحمد الله ',  
                      ' لو انت بخير انا كويس' 
     ]; 
   }else if (/^كل خرا عرص|دز|كلزق|دزمها ق$/i.test(m.text)) { 
     responses = [ 
       'عيب ',  
          ' ليه معصب ',  
              ' كلزق انت ',  
                  'الله يهديك ',  
                   ' عيب يا طفل' 
     ]; 
 }else if (/^تم تعريب هذا الامر|جون|تمت اضافه|تمت اضافة|تم التعريب|هذا الامر انتهي$/i.test(m.text)) { 
     responses = [ 
      'عيوني ✨💜',  
           'شتبي ازعجتنا🤨',  
                'سم',  
                  'هلا ✨💜',  
                   'ها' 
     ]; 
   }else if (/^لول|هههه|ههههه|هههههه|ههههههه|هههههههه|😂😂😂$/i.test(m.text)) { 
     responses = [ 
       'دوم الضحكه',  
            ' ضحكني معاك',  
                   'دوم يا رب  ',  
                         'ههه ',  
                         '😂😂😂',  
                         'وش الي يضحك',  
                         'اضحك معاك؟',  
                             'دوم ' 
    
   
     
         
          
                
                    
                  
]; 
   }else if (/^بوت|يا بوت|البوت|بوووت|بووووت|بوووووت|بووووووووت $/i.test(m.text)) { 
     responses = [ 
       '*اسمي نسيان ياحب✨♥*',  
          '*اسمي نسيان يا كبتن ✨♥*',  
              '*اسمي نسيان يحلو✨♥*',  
                  '*عندي اسم والله😒*',  
                   '*اسمي نسيان يا غبي🙂*' 
  ]; 
   }else if (/^صباح النور|صباح النعناع الاخصر|صباح الفل|صباح الخير $/i.test(m.text)) { 
     responses = [ 
       'صباح الفل ✨💜',  
          'صباح النور ✨💜 ',  
              ' صباح الكاريزما ✨💜',  
                  'انت صحيت وانا رايح انام 🐦👋🏻 ',  
                   'نام مره ثانيه' 
     ]; 
   }else if (/^شكرا|تسلم|تسلمي$/i.test(m.text)) { 
     responses = [ 
       'العفو✨🥺♥',  
          ' ابد ولا يهمك ✨💫 ',  
              ' الشكر لله ✨💜',  
                  
]; 
   }else if (/^🧡|💚|💞|💖|💜|💛|🤍 $/i.test(m.text)) { 
     responses = [ 
       'شكرا✨♥',  
          'تسلم✨♥',  
              '✨♥',  
                  'حبيب✨💜',  
                   '✨💜' 
  ]; 
     }else if (/^كل ذا النور|الجروب منور كذا ليه|ايش النور ذا|منورين الجدد|منورين|منور $/i.test(m.text)) { 
     responses = [ 
       'بنوري✨♥',  
          'الجروب مشعشع✨♥',  
              '✨♥',  
                  'الجروب منور✨💜',  
                   '✨💜' 
  ]; 
   }else if (/^اسكت|انطم| هتسكت امتي|يا ابني اسكت$/i.test(m.text)) { 
     responses = [ 
             ' شدخلك ', 
              ' مالك خص ',  
                 ' مو بكيفي ',  
                 'تخسي تسكتني',  
  
       'اسكت انت' 
     ]; 
    }  
   if (responses) { 
     let randomIndex = Math.floor(Math.random() * responses.length); 
     conn.reply(m.chat, responses[randomIndex], m); 
   } 
   return !0 
 }; 
  
 export default handler;
