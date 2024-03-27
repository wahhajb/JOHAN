function handler(m) {
  let data = global.owner.filter(([id, isCreator]) => id && isCreator)
  this.sendContact(m.chat, data.map(([id, name]) => [id, name]), m)
}
handler.alias = ['https://wa.me/+967773289295']
handler.command = /^(المالك|المطور)$/i

export default handler
