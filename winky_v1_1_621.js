(()=>{const room=HBInit({roomName:"Winky's Challenge",public:!0,maxPlayers:20,noPlayer:!0}),po=(room.setTeamsLock(!0),room.setScoreLimit(0),room.setTimeLimit(0),room.setDefaultStadium("Hockey"),room.startGame(),{}),pa=[],data={t:{l:["atmin1","atmin2","atmin3","atmin4"],i:{url:"https://api.npoint.io/47eea1ce9aca8be2bb0c",data:{}},o:[],u:[],bl_name:[],bl_namepart:[],bl_auth:[],bl_conn:[],m:!1,password:null,p:!1},h:{k:"Winky1",v:{Winky1:[{name:"uzaysız",auth:"abc",duration:113491e3}],JakjusCake:[{name:"uzaysız",auth:"abc",duration:113553e3}]},g:[],$:1},_:{P:{url:"https://raw.githubusercontent.com/uzayyli/Haxball-Winky-Obstacle-Challenge-Bot/main/maps.json",data:{}},T:{f:()=>{var a=util.say,e=data._.T.N;a(e[0]),a(e[1])},N:["Bitirince !finish komutuyla adınızı lider tablosuna kaydedebilirsiniz! https://discord.gg/7ydFUmZNtr","Walkthrough: https://youtu.be/NjZxMWfUWQA"]},M:null,A:null,O:"",B:{komutlar:"help","yardım":"help",sec:"security",sal:"setadminlevel",reset:"restart",res:"restart",lider:"top"}}},util={j:()=>{try{var a=data.h,e=a.k;localStorage.setItem("leaderBoard_"+e,JSON.stringify(a.v[e]))}catch(a){}},H:()=>{try{var a=data.h,e=a.k,t=JSON.parse(localStorage.getItem("leaderBoard_"+e));a.v[e]=a.v[e].concat(t).sort((a,e)=>a.duration-e.duration).filter((e,a,t)=>a===t.findIndex(a=>a.auth===e.auth)).slice(0,20)}catch(a){}},I:a=>{parseInt(a%1e3/100);var e=parseInt(a/1e3%60),t=parseInt(a/6e4%60);return((a=parseInt(a/36e5))<10?"0"+a:a)+"h "+(t<10?"0"+t:t)+"m "+(e<10?"0"+e:e)+"s"},S:(a,e=9999,t=0)=>{let l=parseFloat(a);return isNaN(l)||l<t?l=t:l>e&&(l=e),l},say:a=>{room.sendAnnouncement(a+"",null,9633550)},pm:(a,e,t)=>{room.sendAnnouncement("💬 "+(t?"(PM from "+t.name+") ":"")+a,e,10151397),t&&room.sendAnnouncement("💬 (PM to "+po[e].name+") "+a,t.id,10151397)},D:(a,e=1)=>{a="(⭐"+e+") "+a;var t=pa,l=room.sendAnnouncement;let i,r;for(i=t.length-1;0<=i;i--)(r=t[i]).W>=e&&l(a,r.id,16768768)},F:(a=null,e)=>{if(null===a||a.length<1)return null;if("#"===a[0])return po[parseInt(a.substring(1))];e=e||pa,a=a.toLocaleLowerCase();let t,l,i,r=null;for(t=e.length-1;0<=t;t--){if(l=e[t],(i=l.name.toLocaleLowerCase())===a)return l;i.includes(a)&&(r=l)}return r},mute:(a,e,t,l=null,i=!0)=>{a.log.J=0<t?e+6e4*t:0,i&&util.say(`🔕 ${a.name} `+(0<t?t+" dakika susturuldu":"artık konuşabilir")+(l?` (${l})`:""))},C:(a,e)=>{a=a.help;if(a){const t=util.pm;a.forEach(a=>t(a,e))}}},commands={eval:{f:(p,args)=>{eval(args.join(" "))},U:4,cd:5,q:!0,help:null},version:{f:(a,e)=>{util.pm("v1.1.621",a.id)},U:0,cd:5,q:!1,help:null},help:{f:(e,a)=>{const t=commands,l=util;a.length?(a=a[0],(a=t[a]||t[data._.B[a]]).U>e.W?l.pm("Bu komutu kullanma yetkiniz yok",e.id):l.C(a,e.id)):(l.pm("Komutlar: "+Object.keys(t).filter(a=>{a=t[a];return a.U<=e.W&&!a.q}).join(", "),e.id),l.pm("Detaylı bilgi için: .help [komutAdı] ya da https://github.com/uzayyli/Haxball-Winky-Obstacle-Challenge-Bot",e.id))},U:0,cd:10,q:!1,help:null},say:{f:(a,e)=>{util.say("💬 "+a.name+": "+e.join(" "))},U:1,cd:5,q:!1,help:null},pm:{f:(a,e)=>{var t=util.F(e[0]);if(!t)return"noPlayer";util.pm(e.slice(1).join(" "),t.id,a)},U:5,cd:5,q:!1,help:null},admin:{f:(e,t)=>{const l=data.t.l,i=t[0],r=util.pm;if("list"===i)return e.W<1?"notAllowed":(r("admin listesi :",e.id),void pa.filter(a=>0<a.W&&a.W<=e.W).map(a=>`(#${a.id}) ${a.name} (L${a.W})`).forEach(a=>{r(a,e.id)}));if("trusted"===i){const s=data.t.i;if(e.W<3)return"notAllowed";var a=t[1];if("list"===a){var n,o,u=s.data;r("trusted admins list:",e.id);for([n,o]of Object.entries(u))o.L<=e.W&&r(n.substr(0,6)+"...: "+o.d+" (L"+o.L+")",e.id)}else if("fetch"===a){if(e.W<4)return"notAllowed";let a=s.url;t[2]&&(s.url=a=t[2]),fetch(a).then(function(a){return a.ok?a.json():Promise.reject({status:a.status,statusText:a.statusText})}).then(function(a){s.data=a,util.D("admin list updated",4)}).catch(a=>{console.log("no trusted admin list: "+a)})}}else{var d=!!t[1];let a;for(a=0;a<l.length;a++)if(i===l[a])return e.W=a+1,room.setPlayerAdmin(e.id,!d),e.log.G=0,util.D(e.name+` ${d?"-gizli- ":""}admin level `+(a+1),a+1);r("Hatalı şifre",e.id)}},U:0,cd:10,q:!1,help:[".admin [password] [hidden = false]",".admin list",".admin trusted list",".admin trusted refetch"]},setadminlevel:{f:(a,e)=>{if(e.length<1)return"wrong";var t=util,l=t.F(e[0]);if(!l)return"noPlayer";var i=!!e[2];let r=e.length<2?Math.max(l.W,1):t.S(e[1]);if(l.W<4&&4<=r&&(r=3),!(a.id===l.id&&4<=l.W)&&(r>a.W||r<l.W&&l.W>a.W))return"notAllowed";l.W=r,room.setPlayerAdmin(l.id,0<r&&!i),util.D(`${l.name} ${i?"-gizli- ":""}admin level ${r} (${a.name})`,r)},U:2,cd:10,q:!1,help:[".sal [player] [level = 1] [hidden = false]"]},mute:{f:(e,a)=>{if(a.length<2)return"wrong";var t,l,i=a[0];if("all"!==i)return(i=util.F(i))?i.W>=e.W?"notAllowed":(l=(t=util).S(a[1],10),void t.mute(i,Date.now(),l,e.name,!0)):"noPlayer";{const r=util,n=Date.now(),o=r.mute,u=e.name,d=r.S(a[1],10);pa.filter(a=>a.W<e.W).forEach(a=>{o(a,n,d,u,!1)}),r.say(`🔕 herkes ${0<d?d+" dakika susturuldu":"konuşabilir"} (${e.name})`)}},U:3,cd:5,q:!1,help:[".mute [player / all] [minutes]"]},maps:{f:(e,t)=>{const l=data._.P;let a=l.url;if(3<e.W&&t.length){if("fetch"===t[0]){if(t[1]&&t[1].length)l.url=a=t[1];else if(!a||!a.length)return util.pm("no JSON URL",e.id);fetch(l.url).then(function(a){return a.ok?a.json():Promise.reject({status:a.status,statusText:a.statusText})}).then(function(a){l.data=a,"first"===t[2]&&commands.load.f(e,["Winky1"])}).catch(a=>{console.log("no custom stadiums: "+a)}),util.D(e.name+" mapları fetchledi",4)}}else util.pm(Object.keys(l.data).join(", "),e.id)},U:1,cd:10,q:!1,help:[".maps: lists stadiums",".maps fetch or maps fetch [newUrl]: fetches map from JSON file (admin lvl. 3 only)"]},load:{f:(a,e)=>{if(!e.length)return"wrong";var t=data._.P.data,l=e[0].toLowerCase(),i=Object.keys(t);let r,n,o=null;for(r=i.length-1;0<=r;r--){if((n=i[r].toLowerCase())===l){o=i[r];break}n.includes(l)&&(o=i[r])}if(!o)return util.pm("Böyle bir map yok",a.id);e=t[o];let u=e.hbs;"string"!=typeof u&&(u=e.hbs=JSON.stringify(u)),room.stopGame(),room.setCustomStadium(u),util.say(`🏑 ${a.name} loaded `+o),data.h.g=e.tp,data.h.$=e.f,data.h.k=o,util.H(),room.startGame()},U:1,cd:10,q:!1,help:[".load [stadiumName]"]},motd:{f:(a,e)=>{var t,l=data._;!!e.length?(t=e[0]).length&&"null"!==t&&"clear"!==t?(util.D(a.name+" set welcome message",2),util.say("ℹ️ "+(l.O=e.join(" ")))):(util.D(a.name+" cleared welcome message",2),l.O=null):!l.O||l.O.length<1?util.pm("welcome message is null",a.id):util.say("ℹ️ "+l.O)},U:2,cd:5,help:[".motd: prints welcome message",".motd [msg]: sets new welcome message"]},avatar:{f:(a,e)=>{if(e.length<2)return"wrong";let t=e[0];if("all"===t)t=pa;else{var l=util.F(t);if(!l)return"noPlayer";t=[l]}let i=e[1];"clear"===i?i=null:"default"===i&&(i="🎃");let r;for(r=t.length-1;0<=r;r--)room.setPlayerAvatar(t[r].id,i);1===t.length?util.D(i?`${a.name} set ${t[0].name}'s avatar to `+i:`${a.name} cleared ${t[0].name}'s avatar`,2):util.D(i?a.name+" set all avatars to "+i:a.name+" cleared all avatars",2)},U:2,cd:10,q:!1,help:[".avatar [player]/all default/clear/[newAvatar]"]},bb:{f:(a,e)=>{room.kickPlayer(a.id,"Yine bekleriz!",!1)},U:0,cd:5,q:!1,help:null},kick:{f:(a,e)=>{var t;return e.length?(t=util.F(e[0]))?t.W>a.W||t.id===a.id?"notAllowed":void room.kickPlayer(t.id,""+a.name+(1<e.length?": "+e.slice(1,e.length).join(" "):""),!1):"noPlayer":"wrong"},U:2,cd:5,q:!1,help:[".kick [player] [reason]"]},ban:{f:(a,e)=>{var t;return e.length?(t=util.F(e[0]))?t.W>a.W||t.id===a.id?"notAllowed":void room.kickPlayer(t.id,""+a.name+(1<e.length?": "+e.slice(1,e.length).join(" "):""),!0):"noPlayer":"wrong"},U:2,cd:5,q:!1,help:[".ban [player] [reason]"]},clearban:{f:(a,e)=>{if(e.length<1)return"wrong";var t=data.t.u,l=room.clearBan;let i,r=0;if("all"===e[0])for(i=t.length-1;0<=i;i--)l(t[i].id),t.splice(i,1),r++;else{var n=e[0],o=e[1];if(-1===["id","name"].indexOf(n))return"wrong";for(i=t.length-1;0<=i;i--)t[i][n].toString()===o&&(l(t[i].id),t.splice(i,1),r++)}r&&util.D(`${r} ban temizlendi (${a.name})`,3)},U:3,cd:10,q:!1,help:[".clearban all",".clearban id 123",".clearban name abc"]},security:{f:(e,a)=>{if(!a.length)return"wrong";var t,l=data.t,i=util.D,r=a[0];let n,o;switch(r){case"recentbans":n=l.u;break;case"recentplayers":if(e.W<4)return"notAllowed";n=l.o;break;case"captcha":return a.length<2?"wrong":(o=-1!==["on","1","true"].indexOf(a[1]),room.setRequireRecaptcha(o),i(`Captcha is ${o?"on":"off"} (${e.name})`,3));case"multilogin":return a.length<2?"wrong":e.W<4?"notAllowed":(o=-1!==["on","1","true"].indexOf(a[1]),i(`allowMultiLogin (from new tabs) is ${(l.p=o)?"on":"off"} (${e.name})`,3));case"password":return a.length<2?"wrong":(t=a[1],t=-1!==["off","null","clear",""].indexOf(t)?null:"random"===t?Math.floor(1e11*Math.random()).toString(16):t,room.setPassword(t),i(e.name+" "+(t?"set room password: "+t:"cleared room password"),3));default:return"wrong"}let u,d;1<a.length&&(u=a[1]),2<a.length&&(d=a[2]),o=u&&d?n.filter(a=>a[u]===d):n.slice(-(u||5)),"recentplayers"===r&&(o=o.map(a=>`(#${a.id}) ${a.name} @${a.conn} | `+a.auth)),d=util.pm,o.forEach(a=>{d(a,e.id)})},U:3,cd:10,q:!1,help:[".sec [recentbans/recentplayers] [maxNum / key] [value]",".sec captcha/password/multilogin [on/off/value]"]},blacklist:{f:(a,e)=>{var t=e[0],l=data.t;if(-1===["name","namepart","auth","conn"].indexOf(t))return"wrong";let i=e[1];if(!i)return util.pm("bl_"+t+": "+JSON.stringify(l["bl_"+t]),a.id);"clear"===i?(l["bl_"+t]=[],util.D(`cleared ${"bl_"+t} (${a.name})`,3)):("namepart"===t&&(i=i.toLocaleLowerCase()),l["bl_"+t].push(i),util.D(`added '${i}' to ${"bl_"+t} (${a.name})`))},U:3,cd:5,q:!1,help:[".blacklist name/namepart/auth/conn [query]/clear"]},pos:{f:(a,e)=>{let t;switch(e.length){case 0:t=a;break;case 1:if(t=util.F(e[0]))break;return"noPlayer";default:return"wrong"}var l=room.getPlayerDiscProperties(t.id),i=l.x,l=l.y,i=Math.round(1e3*i)/1e3,l=Math.round(1e3*l)/1e3;util.pm(t.name+`'s position: [${i}, ${l}]`,a.id)},U:2,cd:5,q:!1,help:[".pos: tells your position",".pos player: tells another player's position"]},tp:{f:(a,e)=>{let t,l;switch(e.length){case 0:return"wrong";case 1:var i=e[0].toLowerCase(),r=parseInt(i);if(i.length<3&&!isNaN(r)){i=data.h.g[r-1];if(!i)return util.pm(`TP noktası #${r} bulunamadı`,a.id);[t,l]=i}else{r=util.F(e[0]);if(!r)return"noPlayer";i=room.getPlayerDiscProperties(r.id);t=i.x,l=i.y}break;case 2:if(isNaN(t=parseFloat(e[0])))return"wrong";if(isNaN(l=parseFloat(e[1])))return"wrong"}room.setPlayerDiscProperties(a.id,{x:t,y:l}),a.h.Z||util.pm("TP hilesi kaydedildi. !restart komutuyla tekrar başlayarak hile durumunu sıfırlayabilirsiniz",a.id),a.h.Z=!0},U:2,cd:5,q:!1,help:[".tp player",".tp pointId",".tp x y"]},tpplayer:{f:(a,e)=>{let t,l;var i=util.F(e[0]);if(!i)return"noPlayer";if(i.W>a.W)return"notAllowed";switch(e.length){case 0:case 1:return"wrong";case 2:var r=e[1].toLowerCase(),n=parseInt(r);if(r.length<3&&!isNaN(n)){r=data.h.g[n-1];if(!r)return util.pm(`TP noktası #${n} bulunamadı`,a.id);[t,l]=r}else{n=util.F(e[1]);if(!n)return"noPlayer";r=room.getPlayerDiscProperties(n.id);t=r.x,l=r.y}break;case 3:if(isNaN(t=parseFloat(e[1])))return"wrong";if(isNaN(l=parseFloat(e[2])))return"wrong"}i.h.R?room.setPlayerDiscProperties(i.id,{x:t,y:l}):(i.h.Y=[t,l],util.pm(a.name+' size bir TP isteği gönderdi, kabul etmek için "!tpallow" yazın, tüm istekleri kabul etmek için "!tpallow all" yazabilirsiniz',i.id),util.pm(i.name+" TP isteği gönderildi",a.id))},U:3,cd:5,q:!1,help:[".tpplayer [player] [targetPlayer]",".tpplayer [player] [pointId]",".tpplayer [player] [x] [y]"]},tpallow:{f:(a,e)=>{var e=e[0],t=a.h,l=t.R,i=t.Y;if("all"===e?!(t.R=!0)===l&&util.pm("TP istekleri otomatik kabul edilecek",a.id):(t.R=!1)===l&&util.pm("TP istekleri otomatik kabul edilmeyecek.",a.id),-1===i[0]&&-1===i[0])return util.pm("TP noktası bulunamadı",a.id);room.setPlayerDiscProperties(a.id,{x:i[0],y:i[1]}),t.Z=!0,t.Y=[-1,-1],util.pm("TP hilesi kaydedildi. !restart komutuyla tekrar başlayarak hile durumunu sıfırlayabilirsiniz",a.id)},U:0,cd:10,q:!0,help:[".tpallow: TP isteğini kabul eder",".tpallow all: tüm TP isteklerini otomatik kabul eder"]},restart:{f:(a,e)=>{var t=data.h.g;t.length?(t=t[0],room.setPlayerDiscProperties(a.id,{x:t[0],y:t[1]})):(room.setPlayerTeam(a.id,0),setTimeout(()=>{room.setPlayerTeam(a.id,1)},500)),util.say(a.name+" oyuna baştan başladı"),a.h.Z&&util.pm("Hile durumu sıfırlandı. Oyunu bitirdiğinizde !finish komutuyla adınızı lider tablosuna kaydedebilirsiniz",a.id),Object.assign(a.h,{K:Date.now(),Z:!1})},U:0,cd:20,q:!0,help:[".restart: oyuna yeniden başlar ve TP hilesi varsa siler"]},finish:{f:(e,a)=>{if(e.h.Z)return util.pm("Hile yaptığınız tespit edildi. Lütfen !restart komutuyla tekrar başlayın",e.id);var t=data.h,l=t.g;if(!l.length)return util.pm("Bu haritada !finish komutu kullanılamaz",e.id);let i=t.v[t.k];i=i||(t.v[t.k]=[]);var l=l.slice(-1)[0],r=room.getPlayerDiscProperties(e.id),n=Math.abs;if(n(r.x-l[0])+n(r.y-l[1])>t.$)return util.pm("Henüz bitirme noktasında değilsiniz",e.id);if(.5<n(r.xspeed)+n(r.yspeed))return util.pm("Hareket halindeyken bu komutu kullanamazsınız",e.id);e.h.Z=!0;l=Date.now()-e.h.K,t=i.findIndex(a=>a.auth===e.log.auth);-1!==t?l>(n=i[t]).duration?(util.pm("Önceki süreniz daha iyiydi",e.id),Object.assign(n,{name:e.name})):(util.pm("Sürenizi geliştirdiniz!",e.id),Object.assign(n,{name:e.name,duration:l})):(util.pm("Haritayı bitirdiniz! Tebrikler!",e.id),i.push({name:e.name,duration:l,auth:e.log.auth})),util.say(`🏆 ${e.name} haritayı bitirdi, tebrikler! Süre: `+util.I(l)),util.pm("!restart komutuyla tekrar başlayabilirsiniz, !top komutuyla lider tablosunu görebilirsiniz",e.id),i.sort((a,e)=>a.duration-e.duration),20<i.length&&i.splice(0,1),util.j()},U:0,cd:20,q:!0,help:[".finish: haritayı bitirdiğinizde adınızı lider tablosuna kaydeder"]},top:{f:(a,e)=>{var t=data.h,t=t.v[t.k];if(!t)return util.pm("Bu harita için lider tablosu bulunamadı");const l=util.say,i=util.I;l(a.name+", bu harita için lider tablosu:"),t.slice(0,10).forEach((a,e)=>{var t=0===e?"🥇":1===e?"🥈":2===e?"🥉":"";l(t+` ${e+1}. ${a.name}: `+i(a.duration))})},U:0,cd:30,q:!1,help:[".top: bu harita için lider tablosunu gösterir"]},tmpremovecheat:{f:(a,e)=>{e=e.length?util.F(e[0]):a;if(!e)return"noPlayer";Object.assign(e.h,{Z:!1}),util.pm(`${e.name} hile durumu silindi (${a.name})`,a.id),util.D(`${e.name} hile durumu silindi (${a.name})`,4)},U:4,cd:5,q:!0,help:[]}};room.onGamePause=a=>{a&&(data._.A=setTimeout(()=>{room.pauseGame(!1)},3e4))},room.onGameUnpause=a=>{a&&clearTimeout(data._.A)},room.onGameStart=()=>{clearTimeout(data._.M),clearTimeout(data._.A);const a=pa;a.forEach(a=>room.setPlayerTeam(a.id,0)),setTimeout(()=>{a.forEach(a=>room.setPlayerTeam(a.id,1))},1e3)},room.onGameStop=a=>{a&&(clearTimeout(data._.M),clearTimeout(data._.A))},room.onPlayerTeamChange=a=>{0<a.team&&(room.setPlayerDiscProperties(a.id,{cGroup:536870912}),a=po[a.id])&&Object.assign(a.h,{K:Date.now(),Z:!1})},room.onPlayerAdminChange=(a,e)=>{if(e){var t=po[a.id],l=po[e.id];if(!a.admin&&t.W>l.W)return util.D(e.name+" is not authorized to demote "+a.name,l.W),room.setPlayerAdmin(a.id,!0);t.W=a.admin?Math.max(1,t.W):0,util.D(`${a.name} ${t.W<1?"adminliği alındı":"admin level "+t.W} (${e.name})`,l.W)}},room.onPlayerKicked=(e,a,t,l)=>{l=l||{id:0,name:"bot"},t&&((i=data.t.u).push({id:e.id,name:e.name,reason:a,V:l.id,X:l.name}),30<i.length)&&i.splice(0,1);var i,a=po[l.id];a&&a.W<2&&(t&&(room.clearBan(e.id),data.t.u=data.t.u.filter(a=>a.id!==e.id),util.say(e.name+" ban kaldırıldı")),room.kickPlayer(a.id,"Oyuncu kickleme yetkiniz yok",!1))},room.onPlayerJoin=a=>{const i=a.id,r=a.name,n=a.auth,o=a.conn;{var u,d=r.toLocaleLowerCase();let a,e=pa;for(a=e.length-1;0<=a;a--)if(e[a].name.toLocaleLowerCase()===d)return room.kickPlayer(i,"Odada aynı adlı bir oyuncu var.",!1);let t=!1,l=data.t;if(!l.p)for(a=e.length-1;0<=a;a--)if((u=e[a].log).auth===n||u.conn===o)return room.kickPlayer(i,"Çoklu giriş ("+e[a].name+")",!1);for(e=l.bl_name,a=e.length-1;0<=a;a--)if(e[a]===r){t=!0;break}if(!t)for(e=l.bl_namepart,a=e.length-1;0<=a;a--)if(d.includes(e[a])){t=!0;break}if(!t)for(e=l.bl_auth,a=e.length-1;0<=a;a--)if(e[a]===n){t=!0;break}if(!t)for(e=l.bl_conn,a=e.length-1;0<=a;a--)if(e[a]===o){t=!0;break}if(t)return room.kickPlayer(i,"blacklist",!0)}var a=Date.now(),a={id:i,name:r,team:0,W:0,log:{J:-(a+1e4),aa:0,ea:0,G:a+5e3,auth:n,conn:o},h:{K:0,Z:!1,R:!1,Y:[-1,-1]}},e=(po[i]=a,pa.push(a),data.t.o),t=e.find(a=>a.conn===o||a.auth===n),t=(t&&(0<t.J&&(a.log.J=t.J),t.G>a.log.G&&(a.log.G=t.G),t.name!==r)&&util.D(r+" önceki adı: "+t.name,1),e.push({id:i,name:r,auth:n,conn:o,J:a.log.J,G:a.log.G}),30<e.length&&e.splice(0,1),data._.O),e=(t&&t.length&&util.pm("ℹ️ "+t,i),room.setPlayerTeam(i,1),util.say(`Hoş geldin ${r}! https://discord.gg/7ydFUmZNtr`),util.pm("Bitirince !finish komutuyla adınızı kaydedebilir, !top komutuyla lider tablosunu görebilirsiniz!",i),data.t.i.data[n]);if(e)return t=e.L,a.W=t,a.log.G=0,a.log.J=0,util.D(a.name+" kayıtlı admin level "+t,t)},room.onPlayerLeave=a=>{const t=a.id,e=po[t];if(e){delete po[t];{let a,e=pa;for(a=e.length-1;0<=a;a--)if(e[a].id===t){e.splice(a,1);break}}var a=data.t.o,l=a.find(a=>a.id===t),i=e.log;l?(l.J=i.J,l.G=i.G):(a.push({id:t,name:e.name,auth:i.auth,conn:i.conn,J:i.J,G:i.G}),30<a.length&&a.splice(0,1))}},room.onPlayerChat=(t,l)=>{var i=(t=po[t.id]).log,r=Date.now();if(t.W<1){let a,e=i.J;if(e<0&&(-e<r?i.J=0:15<l.length&&(e=i.J=-e)),e>r)return util.pm("Şu anda yazı yazamazsınız.",t.id),!1;if(5e3<(a=r-i.aa))i.ea=0;else if(a<1100&&1<++i.ea)return i.ea=0,util.mute(t,r,1,"spam"),!1;i.aa=r}var a,e,n,o,u,d,s=l[0];if(("."===s||"!"===s)&&2<l.length&&"."!==l[1])try{return util.D(t.name+": "+l,5),i.G>=r?util.pm("Lütfen komutları tekrar kullanmak için biraz bekleyin",t.id):(e=(a=l.substring(1).split(" "))[0].toLowerCase(),(n=commands[e]||commands[data._.B[e]])?n.U>t.W?util.pm("Bu komutu kullanmak için yetkiniz yok",t.id):(t.W<4&&(i.G=r+1e3*(n.cd||5)),(o=n.f(t,a.slice(1)))&&(u=util.pm,d=t.id,"wrong"===o?(u("Yanlış argüman sayısı. Doğru kullanım:",d),util.C(n,d)):"noPlayer"===o?u("Böyle bir oyuncu yok. Lütfen oyuncu adının bir kısmını ya da ID'sini #123 şeklinde girin",d):"notAllowed"===o&&u("Bu eylem için yetkiniz yok",d))):util.pm("Böyle bir komut yok: "+e,t.id)),!1}catch(a){return util.D(t.name+", ["+a.name+"] "+a.message+" @"+a.lineNumber+": "+l,t.W),!1}},commands.maps.f({name:"bot",W:4},["fetch",null,"first"]),commands.admin.f({name:"bot",W:4},["trusted","fetch"]),setInterval(data._.T.f,6e5)})();