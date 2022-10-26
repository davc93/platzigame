(function(){const i=document.createElement("link").relList;if(i&&i.supports&&i.supports("modulepreload"))return;for(const o of document.querySelectorAll('link[rel="modulepreload"]'))c(o);new MutationObserver(o=>{for(const X of o)if(X.type==="childList")for(const u of X.addedNodes)u.tagName==="LINK"&&u.rel==="modulepreload"&&c(u)}).observe(document,{childList:!0,subtree:!0});function a(o){const X={};return o.integrity&&(X.integrity=o.integrity),o.referrerpolicy&&(X.referrerPolicy=o.referrerpolicy),o.crossorigin==="use-credentials"?X.credentials="include":o.crossorigin==="anonymous"?X.credentials="omit":X.credentials="same-origin",X}function c(o){if(o.ep)return;o.ep=!0;const X=a(o);fetch(o.href,X)}})();const h=[];h.push(`
    IXXXXXXXXX
    -XXXXXXXXX
    -XXXXXXXXX
    -XXXXXXXXX
    -XXXXXXXXX
    -XXXXXXXXX
    -XXXXXXXXX
    -XXXXXXXXX
    -XXXXXXXXX
    OXXXXXXXXX
  `);h.push(`
    O--XXXXXXX
    X--XXXXXXX
    XX----XXXX
    X--XX-XXXX
    X-XXX--XXX
    X-XXXX-XXX
    XX--XX--XX
    XX--XXX-XX
    XXXX---IXX
    XXXXXXXXXX
    `);h.push(`
    I-----XXXX
    XXXXX-XXXX
    XX----XXXX
    XX-XXXXXXX
    XX-----XXX
    XXXXXX-XXX
    XX-----XXX
    XX-XXXXXXX
    XX-----OXX
    XXXXXXXXXX
  `);const v={"-":" ",O:"\u{1F6AA}",X:"\u{1F4A3}",I:"\u{1F381}",PLAYER:"\u{1F480}",BOMB_COLLISION:"\u{1F525}",GAME_OVER:"\u{1F44E}",WIN:"\u{1F3C6}",HEART:"\u2764\uFE0F"};const s=document.querySelector("canvas"),r=s==null?void 0:s.getContext("2d"),A=document.querySelector("#lives"),E=document.querySelector("#time"),O=document.querySelector("#record"),x=document.querySelector("#result");window.addEventListener("load",S);window.addEventListener("resize",S);window.addEventListener("keydown",I);let l,n,L=0,y=3,g,F;const e={x:void 0,y:void 0};let w=[];const p={x:void 0,y:void 0};function I(t){t.key=="ArrowUp"?N():t.key=="ArrowLeft"?U():t.key=="ArrowRight"?z():t.key=="ArrowDown"&&D()}function R(){O.innerHTML=localStorage.getItem("record_time")}function S(){window.innerHeight>window.innerWidth?l=window.innerWidth*.7:l=window.innerHeight*.7,l=Number(l.toFixed(0)),s==null||s.setAttribute("width",l+10),s==null||s.setAttribute("height",l+20),n=l/10,d()}function C(){console.log("Chocaste contra un enemigo :("),y--,console.log(y),y<=0&&(L=0,y=3,g=void 0),e.x=void 0,e.y=void 0,d()}function M(){E.innerHTML=Date.now()-g}function d(){b(),r.font=n+"px Verdana",r.textAlign="end";const t=h[L];g||(g=Date.now(),F=setInterval(M,100),R()),t||H();const i=t.trim().split(`
`),a=i.map(c=>c.trim().split(""));w=[],r==null||r.clearRect(0,0,l,l),console.log({map:t,mapRows:i,mapRowsCols:a}),a.forEach((c,o)=>{c.forEach((X,u)=>{const T=v[X],f=n*(u+1),m=n*(o+1);X=="O"?!e.x&&!e.y&&(e.x=f,e.y=m,console.log({playerPosition:e})):X=="I"?(p.x=f,p.y=m):X=="X"&&(w.push({x:f,y:m}),r==null||r.fillText(T,f,m)),r==null||r.fillText(T,f,m)})}),P()}function b(){const t=Array(y).fill(v.HEART);A.innerHTML="",t.forEach(i=>A.append(i))}function q(){console.log("Subiste de nivel"),L++,d()}function H(){clearInterval(F),console.log("\xA1Terminaste el juego!");const t=localStorage.getItem("record_time"),i=Date.now()-g;t?Number(t)>=i?(localStorage.setItem("record_time",String(i)),x.innerHTML="SUPERASTE EL RECORD :)"):x.innerHTML="lo siento, no superaste el records :(":(localStorage.setItem("record_time",String(i)),x.innerHTML="Primera vez? Muy bien, pero ahora trata de superar tu tiempo :)")}function P(){const t=e.x.toFixed(3)==p.x.toFixed(3),i=e.y.toFixed(3)==p.y.toFixed(3);t&&i&&q(),w.find(o=>{const X=o.x.toFixed(3)==e.x.toFixed(3),u=o.y.toFixed(3)==e.y.toFixed(3);return X&&u})&&C(),r.fillText(v.PLAYER,e.x,e.y)}function N(){console.log("Me quiero mover hacia arriba"),e.y-n<n?console.log("OUT"):(e.y-=n,d())}function U(){console.log("Me quiero mover hacia izquierda"),e.x-n<n?console.log("OUT"):(e.x-=n,d())}function z(){console.log("Me quiero mover hacia derecha"),e.x+n>l?console.log("OUT"):(e.x+=n,d())}function D(){console.log("Me quiero mover hacia abajo"),e.y+n>l?console.log("OUT"):(e.y+=n,d())}
