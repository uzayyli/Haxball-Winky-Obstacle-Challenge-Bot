(()=>{const room=HBInit({roomName:"Winky's Challenge",public:!0,maxPlayers:20,noPlayer:!0}),po=(room.setTeamsLock(!0),room.setScoreLimit(0),room.setTimeLimit(0),room.setDefaultStadium("Hockey"),room.startGame(),{}),pa=[],data={t:{l:["atmin1","atmin2","atmin3","atmin4"],i:{url:"https://api.npoint.io/47eea1ce9aca8be2bb0c",data:{}},o:[],u:[],bl_name:[],bl_namepart:[],bl_auth:[],bl_conn:[],p:!1,password:null,h:!1},k:{v:"Winky1",g:{Winky1:[{name:"uzaysız",auth:"abc",duration:113491e3}],JakjusCake:[{name:"uzaysız",auth:"abc",duration:113553e3}]},$:[],_:1},P:{T:{url:"https://raw.githubusercontent.com/uzayyli/Haxball-Winky-Obstacle-Challenge-Bot/main/maps.json",data:{}},N:{f:()=>{var e=util.say,a=data.P.N.M;e(a[0]),e(a[1])},M:["Bitirince !finish komutuyla adınızı lider tablosuna kaydedebilirsiniz!","Walkthrough: https://youtu.be/NjZxMWfUWQA"]},A:null,O:null,B:"",j:{komutlar:"help","yardım":"help",sec:"security",sal:"setadminlevel",reset:"restart",res:"restart",lider:"top"}}},util={H:()=>{try{var e=data.k,a=e.v;localStorage.setItem("leaderBoard_"+a,JSON.stringify(e.g[a]))}catch(e){}},I:()=>{try{var e=data.k,a=e.v,t=JSON.parse(localStorage.getItem("leaderBoard_"+a));e.g[a]=e.g[a].concat(t).sort((e,a)=>e.duration-a.duration).filter((a,e,t)=>e===t.findIndex(e=>e.auth===a.auth)).slice(0,20)}catch(e){}},S:e=>{parseInt(e%1e3/100);var a=parseInt(e/1e3%60),t=parseInt(e/6e4%60);return((e=parseInt(e/36e5))<10?"0"+e:e)+"h "+(t<10?"0"+t:t)+"m "+(a<10?"0"+a:a)+"s"},D:(e,a=9999,t=0)=>{let l=parseFloat(e);return isNaN(l)||l<t?l=t:l>a&&(l=a),l},say:e=>{room.sendAnnouncement(e+"",null,9633550)},pm:(e,a,t)=>{room.sendAnnouncement("💬 "+(t?"(PM from "+t.name+") ":"")+e,a,10151397),t&&room.sendAnnouncement("💬 (PM to "+po[a].name+") "+e,t.id,10151397)},W:(e,a=1)=>{e="(⭐"+a+") "+e;var t=pa,l=room.sendAnnouncement;let i,r;for(i=t.length-1;0<=i;i--)(r=t[i]).F>=a&&l(e,r.id,16768768)},J:(e=null,a)=>{if(null===e||e.length<1)return null;if("#"===e[0])return po[parseInt(e.substring(1))];a=a||pa,e=e.toLocaleLowerCase();let t,l,i,r=null;for(t=a.length-1;0<=t;t--){if(l=a[t],(i=l.name.toLocaleLowerCase())===e)return l;i.includes(e)&&(r=l)}return r},mute:(e,a,t,l=null,i=!0)=>{e.log.C=0<t?a+6e4*t:0,i&&util.say(`🔕 ${e.name} `+(0<t?t+" dakika susturuldu":"artık konuşabilir")+(l?` (${l})`:""))},U:(e,a)=>{e=e.help;if(e){const t=util.pm;e.forEach(e=>t(e,a))}}},commands={eval:{f:(p,args)=>{eval(args.join(" "))},q:4,cd:5,G:!0,help:null},version:{f:(e,a)=>{util.pm("v1.2.621b",e.id)},q:0,cd:5,G:!1,help:null},help:{f:(a,e)=>{const t=commands,l=util;e.length?(e=e[0],(e=t[e]||t[data.P.j[e]]).q>a.F?l.pm("Bu komutu kullanma yetkiniz yok",a.id):l.U(e,a.id)):(l.pm("Komutlar: "+Object.keys(t).filter(e=>{e=t[e];return e.q<=a.F&&!e.G}).join(", "),a.id),l.pm("Detaylı bilgi için: .help [komutAdı] ya da https://github.com/uzayyli/Haxball-Winky-Obstacle-Challenge-Bot",a.id))},q:0,cd:10,G:!1,help:null},say:{f:(e,a)=>{util.say("💬 "+e.name+": "+a.join(" "))},q:1,cd:5,G:!1,help:null},pm:{f:(e,a)=>{var t=util.J(a[0]);if(!t)return"noPlayer";util.pm(a.slice(1).join(" "),t.id,e)},q:5,cd:5,G:!1,help:null},admin:{f:(a,t)=>{const l=data.t.l,i=t[0],r=util.pm;if("list"===i)return a.F<1?"notAllowed":(r("admin listesi :",a.id),void pa.filter(e=>0<e.F&&e.F<=a.F).map(e=>`(#${e.id}) ${e.name} (L${e.F})`).forEach(e=>{r(e,a.id)}));if("trusted"===i){const s=data.t.i;if(a.F<3)return"notAllowed";var e=t[1];if("list"===e){var n,o,u=s.data;r("trusted admins list:",a.id);for([n,o]of Object.entries(u))o.L<=a.F&&r(n.substr(0,6)+"...: "+o.d+" (L"+o.L+")",a.id)}else if("fetch"===e){if(a.F<4)return"notAllowed";let e=s.url;t[2]&&(s.url=e=t[2]),fetch(e).then(function(e){return e.ok?e.json():Promise.reject({status:e.status,statusText:e.statusText})}).then(function(e){s.data=e,util.W("admin list updated",4)}).catch(e=>{console.log("no trusted admin list: "+e)})}}else{var d=!!t[1];let e;for(e=0;e<l.length;e++)if(i===l[e])return a.F=e+1,room.setPlayerAdmin(a.id,!d),a.log.Z=0,util.W(a.name+` ${d?"-gizli- ":""}admin level `+(e+1),e+1);r("Hatalı şifre",a.id)}},q:0,cd:10,G:!1,help:[".admin [password] [hidden = false]",".admin list",".admin trusted list",".admin trusted refetch"]},setadminlevel:{f:(e,a)=>{if(a.length<1)return"wrong";var t=util,l=t.J(a[0]);if(!l)return"noPlayer";var i=!!a[2];let r=a.length<2?Math.max(l.F,1):t.D(a[1]);if(l.F<4&&4<=r&&(r=3),!(e.id===l.id&&4<=l.F)&&(r>e.F||r<l.F&&l.F>e.F))return"notAllowed";l.F=r,room.setPlayerAdmin(l.id,0<r&&!i),util.W(`${l.name} ${i?"-gizli- ":""}admin level ${r} (${e.name})`,r)},q:2,cd:10,G:!1,help:[".sal [player] [level = 1] [hidden = false]"]},mute:{f:(a,e)=>{if(e.length<2)return"wrong";var t,l,i=e[0];if("all"!==i)return(i=util.J(i))?i.F>=a.F?"notAllowed":(l=(t=util).D(e[1],10),void t.mute(i,Date.now(),l,a.name,!0)):"noPlayer";{const r=util,n=Date.now(),o=r.mute,u=a.name,d=r.D(e[1],10);pa.filter(e=>e.F<a.F).forEach(e=>{o(e,n,d,u,!1)}),r.say(`🔕 herkes ${0<d?d+" dakika susturuldu":"konuşabilir"} (${a.name})`)}},q:3,cd:5,G:!1,help:[".mute [player / all] [minutes]"]},maps:{f:(a,t)=>{const l=data.P.T;let e=l.url;if(3<a.F&&t.length){if("fetch"===t[0]){if(t[1]&&t[1].length)l.url=e=t[1];else if(!e||!e.length)return util.pm("no JSON URL",a.id);fetch(l.url).then(function(e){return e.ok?e.json():Promise.reject({status:e.status,statusText:e.statusText})}).then(function(e){l.data=e,"first"===t[2]&&commands.load.f(a,["Winky1"])}).catch(e=>{console.log("no custom stadiums: "+e)}),util.W(a.name+" mapları fetchledi",4)}}else util.pm(Object.keys(l.data).join(", "),a.id)},q:1,cd:10,G:!1,help:[".maps: lists stadiums",".maps fetch or maps fetch [newUrl]: fetches map from JSON file (admin lvl. 3 only)"]},load:{f:(e,a)=>{if(!a.length)return"wrong";var t=data.P.T.data,l=a[0].toLowerCase(),i=Object.keys(t);let r,n,o=null;for(r=i.length-1;0<=r;r--){if((n=i[r].toLowerCase())===l){o=i[r];break}n.includes(l)&&(o=i[r])}if(!o)return util.pm("Böyle bir map yok",e.id);a=t[o];let u=a.hbs;"string"!=typeof u&&(u=a.hbs=JSON.stringify(u)),room.stopGame(),room.setCustomStadium(u),util.say(`🏑 ${e.name} loaded `+o),data.k.$=a.tp,data.k._=a.f,data.k.v=o,util.I(),room.startGame()},q:1,cd:10,G:!1,help:[".load [stadiumName]"]},motd:{f:(e,a)=>{var t,l=data.P;!!a.length?(t=a[0]).length&&"null"!==t&&"clear"!==t?(util.W(e.name+" set welcome message",2),util.say("ℹ️ "+(l.B=a.join(" ")))):(util.W(e.name+" cleared welcome message",2),l.B=null):!l.B||l.B.length<1?util.pm("welcome message is null",e.id):util.say("ℹ️ "+l.B)},q:2,cd:5,help:[".motd: prints welcome message",".motd [msg]: sets new welcome message"]},avatar:{f:(e,a)=>{if(a.length<2)return"wrong";let t=a[0];if("all"===t)t=pa;else{var l=util.J(t);if(!l)return"noPlayer";t=[l]}let i=a[1];"clear"===i?i=null:"default"===i&&(i="🎃");let r;for(r=t.length-1;0<=r;r--)room.setPlayerAvatar(t[r].id,i);1===t.length?util.W(i?`${e.name} set ${t[0].name}'s avatar to `+i:`${e.name} cleared ${t[0].name}'s avatar`,2):util.W(i?e.name+" set all avatars to "+i:e.name+" cleared all avatars",2)},q:2,cd:10,G:!1,help:[".avatar [player]/all default/clear/[newAvatar]"]},bb:{f:(e,a)=>{room.kickPlayer(e.id,"Yine bekleriz!",!1)},q:0,cd:5,G:!1,help:null},kick:{f:(e,a)=>{var t;return a.length?(t=util.J(a[0]))?t.F>e.F||t.id===e.id?"notAllowed":void room.kickPlayer(t.id,""+e.name+(1<a.length?": "+a.slice(1,a.length).join(" "):""),!1):"noPlayer":"wrong"},q:2,cd:5,G:!1,help:[".kick [player] [reason]"]},ban:{f:(e,a)=>{var t;return a.length?(t=util.J(a[0]))?t.F>e.F||t.id===e.id?"notAllowed":void room.kickPlayer(t.id,""+e.name+(1<a.length?": "+a.slice(1,a.length).join(" "):""),!0):"noPlayer":"wrong"},q:2,cd:5,G:!1,help:[".ban [player] [reason]"]},clearban:{f:(e,a)=>{if(a.length<1)return"wrong";var t=data.t.u,l=room.clearBan;let i,r=0;if("all"===a[0])for(i=t.length-1;0<=i;i--)l(t[i].id),t.splice(i,1),r++;else{var n=a[0],o=a[1];if(-1===["id","name"].indexOf(n))return"wrong";for(i=t.length-1;0<=i;i--)t[i][n].toString()===o&&(l(t[i].id),t.splice(i,1),r++)}r&&util.W(`${r} ban temizlendi (${e.name})`,3)},q:3,cd:10,G:!1,help:[".clearban all",".clearban id 123",".clearban name abc"]},security:{f:(a,e)=>{if(!e.length)return"wrong";var t,l=data.t,i=util.W,r=e[0];let n,o;switch(r){case"recentbans":n=l.u;break;case"recentplayers":if(a.F<4)return"notAllowed";n=l.o;break;case"captcha":return e.length<2?"wrong":(o=-1!==["on","1","true"].indexOf(e[1]),room.setRequireRecaptcha(o),i(`Captcha is ${o?"on":"off"} (${a.name})`,3));case"multilogin":return e.length<2?"wrong":a.F<4?"notAllowed":(o=-1!==["on","1","true"].indexOf(e[1]),i(`allowMultiLogin (from new tabs) is ${(l.h=o)?"on":"off"} (${a.name})`,3));case"password":return e.length<2?"wrong":(t=e[1],t=-1!==["off","null","clear",""].indexOf(t)?null:"random"===t?Math.floor(1e11*Math.random()).toString(16):t,room.setPassword(t),i(a.name+" "+(t?"set room password: "+t:"cleared room password"),3));default:return"wrong"}let u,d;1<e.length&&(u=e[1]),2<e.length&&(d=e[2]),o=u&&d?n.filter(e=>e[u]===d):n.slice(-(u||5)),"recentplayers"===r?o=o.map(e=>`(#${e.id}) ${e.name} @${e.conn} | `+e.auth):"recentbans"===r&&(o=o.map(e=>`(#${e.id}) ${e.name} | by: ${e.R} | reason: `+(e.reason||"null"))),d=util.pm,o.forEach(e=>{d(e,a.id)})},q:3,cd:10,G:!1,help:[".sec [recentbans/recentplayers] [maxNum / key] [value]",".sec captcha/password/multilogin [on/off/value]"]},blacklist:{f:(e,a)=>{var t=a[0],l=data.t;if(-1===["name","namepart","auth","conn"].indexOf(t))return"wrong";let i=a[1];if(!i)return util.pm("bl_"+t+": "+JSON.stringify(l["bl_"+t]),e.id);"clear"===i?(l["bl_"+t]=[],util.W(`cleared ${"bl_"+t} (${e.name})`,3)):("namepart"===t&&(i=i.toLocaleLowerCase()),l["bl_"+t].push(i),util.W(`added '${i}' to ${"bl_"+t} (${e.name})`))},q:3,cd:5,G:!1,help:[".blacklist name/namepart/auth/conn [query]/clear"]},pos:{f:(e,a)=>{let t;switch(a.length){case 0:t=e;break;case 1:if(t=util.J(a[0]))break;return"noPlayer";default:return"wrong"}var l=room.getPlayerDiscProperties(t.id),i=l.x,l=l.y,i=Math.round(1e3*i)/1e3,l=Math.round(1e3*l)/1e3;util.pm(t.name+`'s position: [${i}, ${l}]`,e.id)},q:2,cd:5,G:!1,help:[".pos: tells your position",".pos player: tells another player's position"]},tp:{f:(e,a)=>{let t,l;switch(a.length){case 0:return"wrong";case 1:var i=a[0].toLowerCase(),r=parseInt(i);if(i.length<3&&!isNaN(r)){i=data.k.$[r-1];if(!i)return util.pm(`TP noktası #${r} bulunamadı`,e.id);[t,l]=i}else{r=util.J(a[0]);if(!r)return"noPlayer";i=room.getPlayerDiscProperties(r.id);t=i.x,l=i.y}break;case 2:if(isNaN(t=parseFloat(a[0])))return"wrong";if(isNaN(l=parseFloat(a[1])))return"wrong"}room.setPlayerDiscProperties(e.id,{x:t,y:l}),e.k.Y||util.pm("TP hilesi kaydedildi. !restart komutuyla tekrar başlayarak hile durumunu sıfırlayabilirsiniz",e.id),e.k.Y=!0},q:2,cd:5,G:!1,help:[".tp player",".tp pointId",".tp x y"]},tpplayer:{f:(e,a)=>{let t,l;var i=util.J(a[0]);if(!i)return"noPlayer";if(i.F>e.F)return"notAllowed";switch(a.length){case 0:case 1:return"wrong";case 2:var r=a[1].toLowerCase(),n=parseInt(r);if(r.length<3&&!isNaN(n)){r=data.k.$[n-1];if(!r)return util.pm(`TP noktası #${n} bulunamadı`,e.id);[t,l]=r}else{n=util.J(a[1]);if(!n)return"noPlayer";r=room.getPlayerDiscProperties(n.id);t=r.x,l=r.y}break;case 3:if(isNaN(t=parseFloat(a[1])))return"wrong";if(isNaN(l=parseFloat(a[2])))return"wrong"}i.k.K?room.setPlayerDiscProperties(i.id,{x:t,y:l}):(i.k.V=[t,l],util.pm(e.name+' size bir TP isteği gönderdi, kabul etmek için "!tpallow" yazın, tüm istekleri kabul etmek için "!tpallow all" yazabilirsiniz',i.id),util.pm(i.name+" TP isteği gönderildi",e.id))},q:3,cd:5,G:!1,help:[".tpplayer [player] [targetPlayer]",".tpplayer [player] [pointId]",".tpplayer [player] [x] [y]"]},tpallow:{f:(e,a)=>{var a=a[0],t=e.k,l=t.K,i=t.V;if("all"===a?!(t.K=!0)===l&&util.pm("TP istekleri otomatik kabul edilecek",e.id):(t.K=!1)===l&&util.pm("TP istekleri otomatik kabul edilmeyecek.",e.id),-1===i[0]&&-1===i[0])return util.pm("TP noktası bulunamadı",e.id);room.setPlayerDiscProperties(e.id,{x:i[0],y:i[1]}),t.Y=!0,t.V=[-1,-1],util.pm("TP hilesi kaydedildi. !restart komutuyla tekrar başlayarak hile durumunu sıfırlayabilirsiniz",e.id)},q:0,cd:10,G:!0,help:[".tpallow: TP isteğini kabul eder",".tpallow all: tüm TP isteklerini otomatik kabul eder"]},restart:{f:(e,a)=>{var t=data.k.$;t.length?(t=t[0],room.setPlayerDiscProperties(e.id,{x:t[0],y:t[1]})):(room.setPlayerTeam(e.id,0),setTimeout(()=>{room.setPlayerTeam(e.id,1)},500)),util.say(e.name+" oyuna baştan başladı"),e.k.Y&&util.pm("Hile durumu sıfırlandı. Oyunu bitirdiğinizde !finish komutuyla adınızı lider tablosuna kaydedebilirsiniz",e.id),Object.assign(e.k,{X:Date.now(),Y:!1})},q:0,cd:20,G:!0,help:[".restart: oyuna yeniden başlar ve TP hilesi varsa siler"]},finish:{f:(a,e)=>{if(a.k.Y)return util.pm("Hile yaptığınız tespit edildi. Lütfen !restart komutuyla tekrar başlayın",a.id);var t=data.k,l=t.$;if(!l.length)return util.pm("Bu haritada !finish komutu kullanılamaz",a.id);let i=t.g[t.v];i=i||(t.g[t.v]=[]);var l=l.slice(-1)[0],r=room.getPlayerDiscProperties(a.id),n=Math.abs;if(n(r.x-l[0])+n(r.y-l[1])>t._)return util.pm("Henüz bitirme noktasında değilsiniz",a.id);if(.5<n(r.xspeed)+n(r.yspeed))return util.pm("Hareket halindeyken bu komutu kullanamazsınız",a.id);a.k.Y=!0;l=Date.now()-a.k.X,t=i.findIndex(e=>e.auth===a.log.auth);-1!==t?l>(n=i[t]).duration?(util.pm("Önceki süreniz daha iyiydi",a.id),Object.assign(n,{name:a.name})):(util.pm("Sürenizi geliştirdiniz!",a.id),Object.assign(n,{name:a.name,duration:l})):(util.pm("Haritayı bitirdiniz! Tebrikler!",a.id),i.push({name:a.name,duration:l,auth:a.log.auth})),util.say(`🏆 ${a.name} haritayı bitirdi, tebrikler! Süre: `+util.S(l)),util.pm("!restart komutuyla tekrar başlayabilirsiniz, !top komutuyla lider tablosunu görebilirsiniz",a.id),i.sort((e,a)=>e.duration-a.duration),20<i.length&&i.splice(0,1),util.H()},q:0,cd:20,G:!0,help:[".finish: haritayı bitirdiğinizde adınızı lider tablosuna kaydeder"]},top:{f:(e,a)=>{var t=data.k,t=t.g[t.v];if(!t)return util.pm("Bu harita için lider tablosu bulunamadı");const l=util.say,i=util.S;l(e.name+", bu harita için lider tablosu:"),t.slice(0,10).forEach((e,a)=>{var t=0===a?"🥇":1===a?"🥈":2===a?"🥉":"";l(t+` ${a+1}. ${e.name}: `+i(e.duration))})},q:0,cd:30,G:!1,help:[".top: bu harita için lider tablosunu gösterir"]},tmpremovecheat:{f:(e,a)=>{a=a.length?util.J(a[0]):e;if(!a)return"noPlayer";Object.assign(a.k,{Y:!1}),util.pm(`${a.name} hile durumu silindi (${e.name})`,e.id),util.W(`${a.name} hile durumu silindi (${e.name})`,4)},q:4,cd:5,G:!0,help:[]}};room.onGamePause=e=>{e&&(data.P.O=setTimeout(()=>{room.pauseGame(!1)},3e4))},room.onGameUnpause=e=>{e&&clearTimeout(data.P.O)},room.onGameStart=()=>{clearTimeout(data.P.A),clearTimeout(data.P.O);const e=pa;e.forEach(e=>room.setPlayerTeam(e.id,0)),setTimeout(()=>{e.forEach(e=>room.setPlayerTeam(e.id,1))},1e3)},room.onGameStop=e=>{e&&(clearTimeout(data.P.A),clearTimeout(data.P.O))},room.onPlayerTeamChange=e=>{0<e.team&&(room.setPlayerDiscProperties(e.id,{cGroup:536870912}),e=po[e.id])&&Object.assign(e.k,{X:Date.now(),Y:!1})},room.onPlayerAdminChange=(e,a)=>{if(a){var t=po[e.id],l=po[a.id];if(!e.admin&&t.F>l.F)return util.W(a.name+" is not authorized to demote "+e.name,l.F),room.setPlayerAdmin(e.id,!0);t.F=e.admin?Math.max(1,t.F):0,util.W(`${e.name} ${t.F<1?"adminliği alındı":"admin level "+t.F} (${a.name})`,l.F)}},room.onPlayerKicked=(a,e,t,l)=>{l=l||{id:0,name:"bot"},t&&((i=data.t.u).push({id:a.id,name:a.name,reason:e,ee:l.id,R:l.name}),30<i.length)&&i.splice(0,1);var i,e=po[l.id];e&&e.F<2&&(t&&(room.clearBan(a.id),data.t.u=data.t.u.filter(e=>e.id!==a.id),util.say(a.name+" ban kaldırıldı")),room.kickPlayer(e.id,"Oyuncu kickleme yetkiniz yok",!1))},room.onPlayerJoin=e=>{const i=e.id,r=e.name,n=e.auth,o=e.conn;{var u,d=r.toLocaleLowerCase();let e,a=pa;for(e=a.length-1;0<=e;e--)if(a[e].name.toLocaleLowerCase()===d)return room.kickPlayer(i,"Odada aynı adlı bir oyuncu var.",!1);let t=!1,l=data.t;if(!l.h)for(e=a.length-1;0<=e;e--)if((u=a[e].log).auth===n||u.conn===o)return room.kickPlayer(i,"Çoklu giriş ("+a[e].name+")",!1);for(a=l.bl_name,e=a.length-1;0<=e;e--)if(a[e]===r){t=!0;break}if(!t)for(a=l.bl_namepart,e=a.length-1;0<=e;e--)if(d.includes(a[e])){t=!0;break}if(!t)for(a=l.bl_auth,e=a.length-1;0<=e;e--)if(a[e]===n){t=!0;break}if(!t)for(a=l.bl_conn,e=a.length-1;0<=e;e--)if(a[e]===o){t=!0;break}if(t)return room.kickPlayer(i,"blacklist",!0)}var e=Date.now(),e={id:i,name:r,team:0,F:0,log:{C:-(e+1e4),ae:0,te:0,Z:e+5e3,auth:n,conn:o},k:{X:0,Y:!1,K:!1,V:[-1,-1]}},a=(po[i]=e,pa.push(e),data.t.o),t=a.find(e=>e.conn===o||e.auth===n),t=(t&&(0<t.C&&(e.log.C=t.C),t.Z>e.log.Z&&(e.log.Z=t.Z),t.name!==r)&&util.W(r+" önceki adı: "+t.name,1),a.push({id:i,name:r,auth:n,conn:o,C:e.log.C,Z:e.log.Z}),30<a.length&&a.splice(0,1),data.P.B),a=(t&&t.length&&util.pm("ℹ️ "+t,i),room.setPlayerTeam(i,1),util.say(`Hoş geldin ${r}!`),util.pm("Bitirince !finish komutuyla adınızı kaydedebilir, !top komutuyla lider tablosunu görebilirsiniz!",i),data.t.i.data[n]);if(a)return t=a.L,e.F=t,e.log.Z=0,e.log.C=0,util.W(e.name+" kayıtlı admin level "+t,t)},room.onPlayerLeave=e=>{const t=e.id,a=po[t];if(a){delete po[t];{let e,a=pa;for(e=a.length-1;0<=e;e--)if(a[e].id===t){a.splice(e,1);break}}var e=data.t.o,l=e.find(e=>e.id===t),i=a.log;l?(l.C=i.C,l.Z=i.Z):(e.push({id:t,name:a.name,auth:i.auth,conn:i.conn,C:i.C,Z:i.Z}),30<e.length&&e.splice(0,1))}},room.onPlayerChat=(t,l)=>{var i=(t=po[t.id]).log,r=Date.now();if(t.F<1){let e,a=i.C;if(a<0&&(-a<r?i.C=0:15<l.length&&(a=i.C=-a)),a>r)return util.pm("Şu anda yazı yazamazsınız.",t.id),!1;if(5e3<(e=r-i.ae))i.te=0;else if(e<1100&&1<++i.te)return i.te=0,util.mute(t,r,1,"spam"),!1;i.ae=r}var e,a,n,o,u,d,s=l[0];if(("."===s||"!"===s)&&2<l.length&&"."!==l[1])try{return util.W(t.name+": "+l,5),i.Z>=r?util.pm("Lütfen komutları tekrar kullanmak için biraz bekleyin",t.id):(a=(e=l.substring(1).split(" "))[0].toLowerCase(),(n=commands[a]||commands[data.P.j[a]])?n.q>t.F?util.pm("Bu komutu kullanmak için yetkiniz yok",t.id):(t.F<4&&(i.Z=r+1e3*(n.cd||5)),(o=n.f(t,e.slice(1)))&&(u=util.pm,d=t.id,"wrong"===o?(u("Yanlış argüman sayısı. Doğru kullanım:",d),util.U(n,d)):"noPlayer"===o?u("Böyle bir oyuncu yok. Lütfen oyuncu adının bir kısmını ya da ID'sini #123 şeklinde girin",d):"notAllowed"===o&&u("Bu eylem için yetkiniz yok",d))):util.pm("Böyle bir komut yok: "+a,t.id)),!1}catch(e){return util.W(t.name+", ["+e.name+"] "+e.message+" @"+e.lineNumber+": "+l,t.F),!1}},commands.maps.f({name:"bot",F:4},["fetch",null,"first"]),commands.admin.f({name:"bot",F:4},["trusted","fetch"]),setInterval(data.P.N.f,6e5)})();