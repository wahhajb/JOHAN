if (chat.welcome) {
              let groupMetadata = await this.groupMetadata(id)  (conn.chats[id]  {}).metadata;
              for (let user of participants) {
                let pp, ppgp;
                try {
                  pp = await this.profilePictureUrl(user, 'image');
                  ppgp = await this.profilePictureUrl(id, 'image');
                } catch (error) {
                  console.error(حدث خطأ أثناء استرداد الصورة الشخصية: ${error});
                  pp = 'https://telegra.ph/file/a61c19df9a8edbc51a87f.jpg'; // Assign default image URL
                  ppgp = 'https://telegra.ph/file/a61c19df9a8edbc51a87f.jpg'; // Assign default image URL
                } finally {
                  let text = (chat.sWelcome  this.welcome  conn.welcome || 'Welcome, @user')
                    .replace('@group', await this.getName(id))
                    .replace('@desc', groupMetadata.desc?.toString() || 'لايوجد وصف')
                    .replace('@user', '@' + user.split('@')[0]);
          
                  let nthMember = groupMetadata.participants.length;
                  let secondText = اهلا ياحب, ${await this.getName(user)}, رقم ${nthMember}العضو;
          
                  let welcomeApiUrl = https://api.popcat.xyz/welcomecard?background=${encodeURIComponent(
                    'https://telegra.ph/file/b5d869b2554cf1dc42463.jpg'
                  )}&text1=${encodeURIComponent(
                    await this.getName(user)
                  )}&text2=نورت+الجروب+يجميل&text3=عددنا+حالياً:${encodeURIComponent(
                    nthMember.toString()
                  )}&avatar=${encodeURIComponent(pp)};
          
                  try {
                    let welcomeResponse = await fetch(welcomeApiUrl);
                    let welcomeBuffer = await welcomeResponse.buffer();
          
                    this.sendFile(id, welcomeBuffer, 'welcome.png', text, null, false, { mentions: [user] });
                  } catch (error) {
                    console.error(حدث خطأ أثناء إنشاء صورة الترحيب: ${error});
                  }
                }
}
            }
      break;
