const TelegramBot = require('node-telegram-bot-api'); 
var fs = require("fs");


//BY @HAIDER_PR

const token = ''; // التوكن 
const bot = new TelegramBot(token, {polling: true}); 

bot.on('message', (msg) => {
	
	        //Methods
const Userdev = "t.me/haider_pr"; //يوزر حسابك
const sudo =  431226062;//ايدي المطور
const chatid = msg.chat.id; 
const id = msg.from.id;
const user = msg.from.username;
const first = msg.from.first_name;
const last = msg.from.last_name;
const message_id = msg.message_id;
const type = msg.chat.type; 

 
if(msg.text == "/start" && type == "private") {
bot.sendMessage(chatid, "°|• مرحبا"  + first  +  "   °|• للتواصل مع المطور ولتفعيل البوت في مجموعتك مجانا راسل المطور ",{
reply_markup: {
inline_keyboard: [[{
text: "المطور",
url: Userdev,
}]],
},
})
}
var red = fs.readFileSync(__dirname + "/gps.json");
var dataid = JSON.parse(red);
var i = dataid.gps.length;
if(msg.text == "/add"  || "تفعيل" &&  dataid.gps.indexOf(chatid) != -1){
bot.sendMessage(chatid,"⚠️┇المجموعه مفعله سابقا");
}

if(msg.text == "/add" || "تفعيل" && id == sudo && dataid.gps.indexOf(chatid) == -1){
dataid.gps[i] = chatid;
fs.writeFileSync(__dirname + "/gps.json",JSON.stringify(dataid));
bot.sendMessage(chatid,"🎫┇ايديك ~⪼" + "("+ id + ")\n☑┇تم تفعيل المجموعه");
}
//un add
if(msg.text == "تعطيل" && id == sudo && dataid.gps.indexOf(chatid) == -1){
bot.sendMessage(chatid,"⚠️┇المجموعه معطله سابقا");

}
if(msg.text == "تعطيل" && id == sudo ){
var opengps = dataid.gps.indexOf(chatid);
//var se = dataid.ids.indexOf(chatid);

    
if(opengps != -1){
    
bot.sendMessage(chatid,"🎫┇ايديك ~⪼" + " (" + id + ")\n☑┇تم تعطيل المجموعه");
    
dataid.gps[opengps] = 0;
    
fs.writeFileSync(__dirname + "/gps.json",JSON.stringify(dataid));
    
}
}
//kick 
var optadmin = msg.reply_to_message.from.id;
if(msg.text == "/kick " || "طرد" and id == sudo){

bot.kickChatMember(chatid, optadmin);
bot.sendMessage(chatid,"تم طرد العضو بسبب المخالفة 📃");


}
var redasti = fs.readFileSync(__dirname + "/sti.json");
var datasti = JSON.parse(redasti);
var stie = datasti.sti.length;
if(msg.text == "قفل الملصقات" && id == sudo && datasti.sti.indexOf(chatid) != -1){
bot.sendMessage(chatid,"⚠️┇الملصقات تم قفلها سابقا");
}
if(msg.text == "قفل الملصقات" && id == sudo && datasti.sti.indexOf(chatid) == -1 && datasti.sti.indexOf(chatid) != chatid ){
datasti.sti[stie] = chatid;
fs.writeFileSync(__dirname + "/sti.json",JSON.stringify(datasti)); 
bot.sendMessage(chatid,"❕┇الملصقات تم قفلها ممنوع ارسالها");   
}

if(msg.text == "فتح الملصقات" && id == sudo){
var opensti = datasti.sti.indexOf(chatid);
//var se = dataid.ids.indexOf(chatid);

    
if(opensti != -1){
    
bot.sendMessage(chatid,"🔰┇تم فتح الملصقات 🔓");
    
datasti.sti[opensti] = 0;
    
fs.writeFileSync(__dirname + "/sti.json",JSON.stringify(datasti));
    
}
}
// photo
var redaphot = fs.readFileSync(__dirname + "/phot.json");
var dataphot = JSON.parse(redaphot);
var phots = dataphot.phot.length;
if(msg.text == "قفل الصور" && id == sudo && dataphot.phot.indexOf(chatid) != -1){
bot.sendMessage(chatid,"⚠️┇الصور تم قفلها سابقا ");
}
if(msg.text == "قفل الصور" && id == sudo && dataphot.phot.indexOf(chatid) == -1 && dataphot.phot.indexOf(chatid) != chatid){
dataphot.phot[phots] = chatid;
fs.writeFileSync(__dirname + "/phot.json",JSON.stringify(dataphot)); 
bot.sendMessage(chatid,"⚠️┇الصور تم قفلها ممنوع ارسالها");   
}
if(msg.text == "فتح الصور" && id == sudo){
var openphot = dataphot.phot.indexOf(chatid);
//var se = dataid.ids.indexOf(chatid);
    
        
if(openphot != -1){
        
bot.sendMessage(chatid,"🔰┇تم فتح الصور 🔓");
        
dataphot.phot[openphot] = 0;
        
fs.writeFileSync(__dirname + "/phot.json",JSON.stringify(dataphot));
        
}
}


// video
var redavideo = fs.readFileSync(__dirname + "/video.json");
var datavideo = JSON.parse(redavideo);
var videos = datavideo.video.length;
if(msg.text == "قفل الفيديو" && id == sudo && datavideo.video.indexOf(chatid) != -1){
bot.sendMessage(chatid,"⚠️┇الفيديوات تم قفلها سابقا");
}
if(msg.text == "قفل الفيديو" && id == sudo && datavideo.video.indexOf(chatid) == -1 && datavideo.video.indexOf(chatid) != chatid ){
datavideo.video[videos] = chatid;
fs.writeFileSync(__dirname + "/video.json",JSON.stringify(datavideo)); 
bot.sendMessage(chatid,"⚠️┇الفيديو تم قفله ممنوع ارساله ");   
}
if(msg.text == "فتح الفيديو" && id == sudo ){
    var openvid = datavideo.video.indexOf(chatid);
    //var se = dataid.ids.indexOf(chatid);
    
        
    if(openvid != -1){
        
    bot.sendMessage(chatid,"🔰┇تم فتح الفيديوات 🔓 ");
        
    datavideo.video[openvid] = 0;
        
    fs.writeFileSync(__dirname + "/video.json",JSON.stringify(datavideo));
        
    }
    }

// gif 
var redagif = fs.readFileSync(__dirname + "/gif.json");
var datagif = JSON.parse(redagif);
var gifs = datagif.gif.length;
if(msg.text == "قفل الصور المتحركة" && id == sudo && datagif.gif.indexOf(chatid) != -1){
    bot.sendMessage(chatid,"⚠️┇المتحركة تم قفلها سابقا");
    }
if(msg.text == "قفل الصور المتحركة" && id == sudo && datagif.gif.indexOf(chatid) == -1 && datagif.gif.indexOf(chatid) != chatid ){
datagif.gif[gifs] = chatid;
fs.writeFileSync(__dirname + "/gif.json",JSON.stringify(datagif)); 
bot.sendMessage(chatid,"⚠️┇المتحركة تم قفلها ممنوع ارسالها");   
}
    if(msg.text == "فتح الصور المتحركة" && id == sudo){
        var opengif = datagif.gif.indexOf(chatid);
        //var se = dataid.ids.indexOf(chatid);
        
            
        if(opengif != -1){
            
        bot.sendMessage(chatid,"🔰┇تم فتح المتحركة 🔓 ");
            
        datagif.gif[opengif] = 0;
            
        fs.writeFileSync(__dirname + "/gif.json",JSON.stringify(datagif));
            
        }
        }

// audio
var redadio = fs.readFileSync(__dirname + "/audio.json");
var datadio = JSON.parse(redadio);
var audios = datadio.audio.length;
if(msg.text == "قفل الصوتيات" && id == sudo && datadio.audio.indexOf(chatid) != -1){
bot.sendMessage(chatid,"⚠️┇الاغاني تم قفلها سابقا");
}
if(msg.text == "قفل الصوتيات" && id == sudo && datadio.audio.indexOf(chatid) == -1 && datadio.audio.indexOf(chatid) != chatid){
datadio.audio[audios] = chatid;
fs.writeFileSync(__dirname + "/audio.json",JSON.stringify(datadio)); 
bot.sendMessage(chatid,"⚠️┇الاغاني تم قفلها ممنوع ارسالها");   
}

if(msg.text == "فتح الصوتيات" && id == sudo ){
var opendio = datadio.audio.indexOf(chatid);
//var se = dataid.ids.indexOf(chatid);

    
if(opendio != -1){
    
bot.sendMessage(chatid,"🔰┇تم فتح الاغاني 🔓 ");
    
datadio.audio[opendio] = 0;
    
fs.writeFileSync(__dirname + "/audio.json",JSON.stringify(datadio));
    
}
}

// voice
var redavoic = fs.readFileSync(__dirname + "/voic.json");
var datavoic = JSON.parse(redavoic);
var voics = datavoic.voic.length;
if(msg.text == "قفل البصمات" && id == sudo && datavoic.voic.indexOf(chatid) != -1){
bot.sendMessage(chatid,"⚠️┇البصمات تم قفلها سابقا");
}
if(msg.text == "قفل البصمات" && id == sudo && datavoic.voic.indexOf(chatid) == -1 && datavoic.voic.indexOf(chatid) != chatid){
datavoic.voic[voics] = chatid;
fs.writeFileSync(__dirname + "/voic.json",JSON.stringify(datavoic)); 
bot.sendMessage(chatid,"⚠️┇البصمات تم قفلها ممنوع ارسالها");   
}

if(msg.text == "فتح البصمات" && id == sudo ){
var openvic = datavoic.voic.indexOf(chatid);
//var se = dataid.ids.indexOf(chatid);

    
if(openvic != -1){
    
bot.sendMessage(chatid,"🔰┇تم فتح البصمات 🔓 ");
    
datavoic.voic[openvic] = 0;
    
fs.writeFileSync(__dirname + "/voic.json",JSON.stringify(datavoic));
    
}
}

//Link 
var redalink = fs.readFileSync(__dirname + "/link.json");
var datalink = JSON.parse(redalink);
var links = datalink.link.length;
if(msg.text == "قفل الروابط" && id == sudo && datalink.link.indexOf(chatid) != -1){
bot.sendMessage(chatid,"⚠️┇الروابط تم قفلها سابقا");
}
if(msg.text == "قفل الروابط" && id == sudo && datalink.link.indexOf(chatid) == -1 && datalink.link.indexOf(chatid) != chatid){
datalink.link[links] = chatid;
fs.writeFileSync(__dirname + "/link.json",JSON.stringify(datalink)); 
bot.sendMessage(chatid,"⚠️┇الروابط تم قفلها ممنوع ارسالها");   
}

if(msg.text == "فتح الروابط" && id == sudo){
var openlink = datalink.link.indexOf(chatid);
//var se = dataid.ids.indexOf(chatid);

    
if(openlink != -1){
    
bot.sendMessage(chatid,"🔰┇تم فتح الروابط 🔓 ");
    
datalink.link[openlink] = 0;;
    
fs.writeFileSync(__dirname + "/link.json",JSON.stringify(datalink));
    
}
}

//forward 
var redafwd = fs.readFileSync(__dirname + "/fwd.json");
var datafwd = JSON.parse(redafwd);
var fwds= datafwd.fwd.length;
if(msg.text == "قفل التوجيه" && id == sudo && datafwd.fwd.indexOf(chatid) != -1){
bot.sendMessage(chatid,"⚠️┇التوجيه تم قفله سابقا");
}
if(msg.text == "قفل التوجيه" && id == sudo && datafwd.fwd.indexOf(chatid) == -1 && datafwd.fwd.indexOf(chatid) != chatid){
datafwd.fwd[fwds] = chatid;
fs.writeFileSync(__dirname + "/fwd.json",JSON.stringify(datafwd)); 
bot.sendMessage(chatid,"⚠️┇التوجيه تم قفله ممنوع ارساله");   
}

if(msg.text == "فتح التوجيه" && id == sudo){
var openfwd = datafwd.fwd.indexOf(chatid);
//var se = dataid.ids.indexOf(chatid);

    
if(openfwd != -1){
    
bot.sendMessage(chatid,"🔰┇تم فتح التوجيه 🔓 ");
    
datafwd.fwd[openfwd] = 0;
    
fs.writeFileSync(__dirname + "/fwd.json",JSON.stringify(datafwd));
    
}
}
// wering 
var redawern = fs.readFileSync(__dirname + "/wern.json");
var datawern = JSON.parse(redawern);
var werns = datawern.wern.length;
if(msg.text == "قفل التحذير" && id == sudo && datawern.wern.indexOf(chatid) != -1){
bot.sendMessage(chatid,"⚠️┇التحذير تم قفله سابقا ");
}
if(msg.text == "قفل التحذير" && id == sudo && datawern.wern.indexOf(chatid) == -1 && datawern.wern.indexOf(chatid) != chatid){
datawern.wern[werns] = chatid;
fs.writeFileSync(__dirname + "/wern.json",JSON.stringify(datawern)); 
bot.sendMessage(chatid,"⚠️┇تم قفل التحذير");   
}

if(msg.text == "فتح التحذير" && id == sudo){
var openwern = datawern.wern.indexOf(chatid);
//var se = dataid.ids.indexOf(chatid);

    
if(openwern != -1){
    
bot.sendMessage(chatid,"🔰┇تم فتح التحذير 🔓 ");
    
datawern.wern[openwern] = 0;
    
fs.writeFileSync(__dirname + "/wern.json",JSON.stringify(datawern));
    
}
}
// add admin
var reply = msg.reply_to_message; 
var redaadmin = fs.readFileSync(__dirname + "/admin.json");
var dataadmin = JSON.parse(redaadmin);
var admins = dataadmin.admin.length;
if(msg.text == "رفع ادمن" && id == sudo && dataadmin.admin.indexOf(optadmin) != -1 && reply){
bot.sendMessage(chatid,"📤┇ العضو ادمن في البوت سابقا");
}
if(msg.text == "رفع ادمن" && id == sudo && dataadmin.admin.indexOf(optadmin) == -1 && reply){

dataadmin.admin[admins] = optadmin;
fs.writeFileSync(__dirname + "/admin.json",JSON.stringify(dataadmin)); 
bot.sendMessage(chatid,"📤┇تم رفع العضو ادمن في البوت "); 
}

if(msg.text == "تنزيل ادمن" && id == sudo ){
var openadmin = dataadmin.admin.indexOf(optadmin);
//var se = dataid.ids.indexOf(chatid);

    
if(openadmin != -1){
    
bot.sendMessage(chatid,"📥┇ تم تنزيل العضو من ادمنية البوت");
    
dataadmin.admins[openadmin] = 0;
    
fs.writeFileSync(__dirname + "/admin.json",JSON.stringify(dataadmin));
    
}
}


//ds on wern
if(msg.sticker && datasti.sti.indexOf(chatid) != -1 && id != sudo && datawern.wern.indexOf(chatid) == -1){
bot.deleteMessage(chatid,message_id);
bot.sendMessage(chatid,"🎫┇الايدي ~⪼ ("+ id +  ") \n⚠️┇الملصقات تم قفلها ممنوع ارسالها\n☑┇المستخدم ~⪼("+ "@"+ user + ")");
}
//ds of warning 
if(msg.sticker && datasti.sti.indexOf(chatid) != -1 && id != sudo && datawern.wern.indexOf(chatid) != -1){
bot.deleteMessage(chatid,message_id);
}
// dph
if(msg.photo && dataphot.phot.indexOf(chatid) != -1 && id != sudo && datawern.wern.indexOf(chatid) == -1){
    bot.deleteMessage(chatid,message_id);
    bot.sendMessage(chatid,"🎫┇الايدي ~⪼ ("+ id +  ") \n⚠️┇الصور تم قفلها ممنوع ارسالها\n☑┇المستخدم ~⪼("+ "@"+ user + ")");
    }
// of dph warning 
if(msg.photo && dataphot.phot.indexOf(chatid) != -1 && id != sudo && datawern.wern.indexOf(chatid) != -1){
bot.deleteMessage(chatid,message_id);
}
// dv on wering
if(msg.video && datavideo.video.indexOf(chatid) != -1 && id != sudo && datawern.wern.indexOf(chatid) == -1){
    bot.deleteMessage(chatid,message_id);
    bot.sendMessage(chatid,"🎫┇الايدي ~⪼ ("+ id +  ") \n⚠️┇الفيديوات تم قفلها ممنوع ارسالها\n☑┇المستخدم ~⪼("+ "@"+ user + ")");
    }
//dv of warning
if(msg.video && datavideo.video.indexOf(chatid) != -1 && id != sudo && datawern.wern.indexOf(chatid) != -1){
bot.deleteMessage(chatid,message_id);
}
// dg on wering
if(msg.document && datagif.gif.indexOf(chatid) != -1 && id != sudo && datawern.wern.indexOf(chatid) == -1){
    bot.deleteMessage(chatid,message_id);
    bot.sendMessage(chatid,"🎫┇الايدي ~⪼ ("+ id +  ") \n⚠️┇المتحركة تم قفلها ممنوع ارسالها\n☑┇المستخدم ~⪼("+ "@"+ user + ")");
    }
// dg of wering 
if(msg.document && datagif.gif.indexOf(chatid) != -1 && id != sudo && datawern.wern.indexOf(chatid) != -1){
bot.deleteMessage(chatid,message_id);
}
// dio on wering
if(msg.audio && datadio.audio.indexOf(chatid) != -1 && id != sudo && datawern.wern.indexOf(chatid) == -1){
    bot.deleteMessage(chatid,message_id);
    bot.sendMessage(chatid,"🎫┇الايدي ~⪼ ("+ id +  ") \n⚠️┇الصوتيات تم قفلها ممنوع ارسالها\n☑┇المستخدم ~⪼("+ "@"+ user + ")");
    }
// dio of wering 
if(msg.audio && datadio.audio.indexOf(chatid) != -1 && id != sudo && datawern.wern.indexOf(chatid) != -1){
bot.deleteMessage(chatid,message_id);
}
// dvoc on wering 
if(msg.voice && datavoic.voic.indexOf(chatid) != -1 && id != sudo && datawern.wern.indexOf(chatid) == -1){
    bot.deleteMessage(chatid,message_id);
    bot.sendMessage(chatid,"🎫┇الايدي ~⪼ ("+ id +  ") \n⚠️┇البصمات تم قفلها ممنوع ارسالها\n☑┇المستخدم ~⪼("+ "@"+ user + ")");
    }
// dvoc of wering 
if(msg.voice && datavoic.voic.indexOf(chatid) != -1 && id != sudo && datawern.wern.indexOf(chatid) != -1){
bot.deleteMessage(chatid,message_id);
}
// dlink on wering 
    var text = msg.text;
if(text.indexOf("https") != -1 || text.indexOf("t.me") != -1 || text.indexOf("http") != -1 || text.indexOf("www") != -1 || text.indexOf("telegram.me") != -1 || text.indexOf(".net") != -1 || text.indexOf("//") != -1&& datalink.link.indexOf(chatid) != -1 && id != sudo && datawern.wern.indexOf(chatid) == -1){
    bot.deleteMessage(chatid,message_id);
    bot.sendMessage(chatid,"🎫┇الايدي ~⪼ ("+ id +  ") \n⚠️┇الروابط تم قفلها ممنوع ارسالها\n☑┇المستخدم ~⪼("+ "@"+ user + ")");
}
// dlink of wering 
if(text.indexOf("https") != -1 || text.indexOf("t.me") != -1 || text.indexOf("http") != -1 || text.indexOf("www") != -1 || text.indexOf("telegram.me") != -1 || text.indexOf(".net") != -1 || text.indexOf("//") != -1&& datalink.link.indexOf(chatid) != -1 && id != sudo && datawern.wern.indexOf(chatid) != -1){
    bot.deleteMessage(chatid,message_id);
}

//forward  on wering 
if(msg.forward_from_chat.id && datafwd.fwd.indexOf(chatid) != -1 && id != sudo && datawern.wern.indexOf(chatid) == -1){
	console.log(msg);
	
bot.deleteMessage(chatid,message_id);
bot.sendMessage(chatid,"🎫┇الايدي ~⪼ ("+ id +  ") \n⚠️┇التوجيه تم قفله ممنوع ارسالها\n☑┇المستخدم ~⪼("+ "@"+ user + ")");
}
// forward of wering 
if(msg.forward_from_chat.id && datafwd.fwd.indexOf(chatid) != -1 && id != sudo && datawern.wern.indexOf(chatid) != -1){
	console.log(msg);
	
bot.deleteMessage(chatid,message_id);
}

/*
msg.forward_from_chat.id; use for delete msg from all chats

*/
//forward all gps 
 var str = text.toString().replace("/bc","");
   var ex = text.toString().split(" ");

    if(ex[0] == "/bc" && id == sudo){
    for(var e = 0; e < i;e++){
        
     bot.sendMessage(dataid.gps[e],str)
        
       }
  }
    if(msg.text == "ايدي" || "/id" ){
     bot.sendMessage(chatid,"id" + id + "\nuser@" + user +  "\nid Groupe" + chatid );

     }
     if(msg.text == "الاوامر" || "/help"){
     bot.sendMessage(chatid,"\n📮┇ اوامر حمايه المجموعه \n ┉ ┉ ┉ ┉ ┉ ┉ ┉ ┉ ┉ \n\n🔒┇قفل ~⪼ لقفل امر 🔓┇فتح ~⪼ لفتح امر\n ┉ ┉ ┉ ┉ ┉ ┉ ┉ ┉ ┉ \n🔐┇الروابط\n🔐┇التاك\n🔐┇الروابط \n🔐┇المتحركة\n🔐┇الصور \n🔐┇الملصقات \n🔐┇الفيديو \n🔐┇التوجيه \n🔐┇الصوتيات\n🔐┇البصمات\n\n  ┉ ┉ ┉ ┉ ┉ ┉ ┉ ┉ ┉\n\n📥|رفع ادمن ~⪼ لرفع ادمن في البوت\n📤|تنزيل ادمن ~⪼ لتزيل ادمن \n💳| ايدي ~⪼ لعرض الايدي \n📚| الاوامر ~⪼ لعرض اوامر المجوعة\n💡|`/bc` ~⪼ للتوجيه لكل المجموعات");


   }
});