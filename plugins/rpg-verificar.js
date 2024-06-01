import {createHash} from 'crypto';
const Reg = /\|?(.*)([.|] *?)([0-9]*)$/i;
const handler = async function(m, {conn, text, usedPrefix, command}) {
  const user = global.db.data.users[m.sender];
  const name2 = conn.getName(m.sender);
  const pp = imagen4;
  if (user.registered === true) throw `┣ *𝑯𝒀𝑷𝑬𝑹𝑿* ┫\n\n𝙔𝙖 𝙚𝙨𝙩𝙖𝙨 𝙧𝙚𝙜𝙞𝙨𝙩𝙧𝙖𝙙𝙤\n\n¿𝙌𝙪𝙞𝙚𝙧𝙚𝙨 𝙫𝙤𝙡𝙫𝙚𝙧 𝙖 𝙧𝙚𝙜𝙞𝙨𝙩𝙧𝙖𝙧𝙩𝙚?\n\n 𝙐𝙨𝙚 𝙚𝙨𝙩𝙚 𝙘𝙤𝙢𝙖𝙣𝙙𝙤 𝙥𝙖𝙧𝙖 𝙚𝙡𝙞𝙢𝙞𝙣𝙖𝙧 𝙨𝙪 𝙧𝙚𝙜𝙞𝙨𝙩𝙧𝙤\n*${usedPrefix}unreg* <Número de serie>`;
  if (!Reg.test(text)) throw `┣ *𝑯𝒀𝑷𝑬𝑹𝑿* ┫\n\n𝙁𝙤𝙧𝙢𝙖𝙩𝙤 𝙞𝙣𝙘𝙤𝙧𝙧𝙚𝙘𝙩𝙤\n\n» 𝙐𝙨𝙚 𝙚𝙡 𝙘𝙤𝙢𝙖𝙣𝙙𝙤: 𝘌𝘫𝘦𝘮𝘱𝘭𝘰: .𝘳𝘦𝘨 𝘯𝘰𝘮𝘣𝘳𝘦.𝘦𝘥𝘢𝘥\n𝘌𝘫𝘦𝘮𝘱𝘭𝘰: .𝘳𝘦𝘨 Benja.18`;
  let [_, name, splitter, age] = text.match(Reg);
  if (!name) throw '┣ *𝑯𝒀𝑷𝑬𝑹𝑿* ┫\n\n» 𝘿𝙀𝘽𝙀𝙎 𝙋𝙊𝙉𝙀𝙍 𝙀𝙇 𝙉𝙊𝙈𝘽𝙍𝙀\n𝘌𝘫𝘦𝘮𝘱𝘭𝘰: .𝘳𝘦𝘨 Benja.18';
  if (!age) throw '┣ *𝑯𝒀𝑷𝑬𝑹𝑿* ┫\n\n» 𝘿𝙀𝘽𝙀𝙎 𝙋𝙊𝙉𝙀𝙍 𝙇𝘼 𝙀𝘿𝘼𝘿\n𝘌𝘫𝘦𝘮𝘱𝘭𝘰: .𝘳𝘦𝘨 Benja.18';
  if (name.length >= 30) throw '[❗𝐈𝐍𝐅𝐎❗] 𝙴𝙻 𝙽𝙾𝙼𝙱𝚁𝙴 𝙴𝚂 𝙳𝙴𝙼𝙰𝚂𝙸𝙰𝙳𝙾 𝙻𝙰𝚁𝙶𝙾';
  age = parseInt(age);
  if (age > 100) throw '𝙆𝙝𝙚 𝙘𝙤𝙢𝙤 𝙨𝙞𝙜𝙪𝙚𝙨 𝙫𝙞𝙫𝙤 𝙘𝙤𝙣 𝙚𝙨𝙖 𝙚𝙙𝙖𝙙? 👴🏻';
  if (age < 5) throw '𝙆𝙝𝙚 𝙪𝙣 𝙗𝙚𝙗𝙚 𝙦𝙪𝙚 𝙨𝙖𝙗𝙚 𝙪𝙨𝙖𝙧 𝙒𝙝𝙖𝙩𝙨𝘼𝙥𝙥 👶🏼';
  user.name = name.trim();
  user.age = age;
  user.regTime = + new Date;
  user.registered = true;
  const sn = createHash('md5').update(m.sender).digest('hex');
  const caption = `┣ *𝑹𝑬𝑮𝑰𝑺𝑻𝑹𝑶 𝑯𝒀𝑷𝑬𝑹𝑿* ┫
┏━━━━━━━━━━━┓
┣ *🧸❤️‍🩹𝑯𝒚𝒑𝒆𝒓𝑿 𝒕𝒆 𝒔𝒂𝒍𝒖𝒅𝒂* @${m.sender.split`@`[0]}
┣ 
┣ 🚀𝑰𝒏𝒇𝒐𝒓𝒎𝒂𝒄𝒊𝒐𝒏 𝒅𝒆𝒍 𝒓𝒆𝒈𝒊𝒔𝒕𝒓𝒐 𝑯𝒚𝒑𝒆𝒓𝑿:
┣ ✅𝑵𝒐𝒎𝒃𝒓𝒆:
┣ ${name}X
┣ ✅𝑬𝒅𝒂𝒅:
┣ ${age}
┣ ✅𝑭𝒆𝒄𝒉𝒂:
┣ ${fecha}
┗━━━━━━━━━━━┛

✅𝑵° 𝒅𝒆 𝒔𝒆𝒓𝒊𝒆:
 ${sn}`;
  // let author = global.author
  await conn.sendFile(m.chat, pp, 'mystic.jpg', caption);
  // conn.sendButton(m.chat, caption, `¡𝚃𝚄 𝙽𝚄𝙼𝙴𝚁𝙾 𝙳𝙴 𝚂𝙴𝚁𝙸𝙴 𝚃𝙴 𝚂𝙴𝚁𝚅𝙸𝚁𝙰 𝙿𝙾𝚁 𝚂𝙸 𝙳𝙴𝚂𝙴𝙰𝚂 𝙱𝙾𝚁𝚁𝙰𝚁 𝚃𝚄 𝚁𝙴𝙶𝙸𝚂𝚃𝚁𝙾 𝙴𝙽 𝙴𝙻 𝙱𝙾𝚃!\n${author}`, [['¡¡𝙰𝙷𝙾𝚁𝙰 𝚂𝙾𝚈 𝚄𝙽 𝚅𝙴𝚁𝙸𝙵𝙸𝙲𝙰𝙳𝙾/𝙰!!', '/profile']], m)
  global.db.data.users[m.sender].money += 10000;
  global.db.data.users[m.sender].exp += 10000;
};
handler.help = ['verificar'];
handler.tags = ['xp'];
handler.command = /^(verify|register|verificar|reg|registrar)$/i;
export default handler;
