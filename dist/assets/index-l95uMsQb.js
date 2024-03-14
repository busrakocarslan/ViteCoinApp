(function(){const n=document.createElement("link").relList;if(n&&n.supports&&n.supports("modulepreload"))return;for(const e of document.querySelectorAll('link[rel="modulepreload"]'))s(e);new MutationObserver(e=>{for(const t of e)if(t.type==="childList")for(const c of t.addedNodes)c.tagName==="LINK"&&c.rel==="modulepreload"&&s(c)}).observe(document,{childList:!0,subtree:!0});function r(e){const t={};return e.integrity&&(t.integrity=e.integrity),e.referrerPolicy&&(t.referrerPolicy=e.referrerPolicy),e.crossOrigin==="use-credentials"?t.credentials="include":e.crossOrigin==="anonymous"?t.credentials="omit":t.credentials="same-origin",t}function s(e){if(e.ep)return;e.ep=!0;const t=r(e);fetch(e.href,t)}})();const l=o=>{console.log(o);const{price:n,change:r,iconUrl:s,name:e,symbol:t,rank:c}=o,a=document.querySelector("main .coins"),i=document.createElement("li");i.className="coin",i.innerHTML=`

    <div class="remove-icon">
      <i class="fas fa-window-close"></i>
    </div>
    <h2 class="coin-name">
    <span>${e}</span>
    <sup>${t}</sup>    
    </h2>
    <div class="coin-temp">${Number(n).toFixed(6)}</div>
    <figure>
    <img class=coin-icon" src=${s} alt="">
    <figcaption style="color:${r<0?"red":"green"}">
    <i class="fa-solid fa-chart-line"></i>
    <span>${r||"0.00"}</span>
    </figcaption> 
    <div>RANK:${c}</div>    
    </figure>  
    
    `,a.append(i),i.querySelector(".remove-icon").addEventListener("click",()=>{i.remove()})},d=async o=>{const n="coinrankingf019063f82499819b2ba816e64977993afc1e5200791b5c7",r=`https://api.coinranking.com/v2/coins?search=${o}`,s={headers:{"x-access-token":n}};try{const e=await fetch(r,s);if(!e.ok)throw new Error(`${e.status}`);const t=await e.json();t.data.coins[0]?l(t.data.coins[0]):alert("coin can not be found")}catch{console.log("error")}},u=document.querySelector("header form");u.addEventListener("submit",o=>{o.preventDefault(),f(),o.target.reset()});const f=()=>{const o=document.querySelector("header form input").value;o.trim()?d(o):alert("İnput must be entered")};
