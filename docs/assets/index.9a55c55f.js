import{S as e,i as s,s as l,e as n,a as t,b as i,n as a,d as r,c,f as o,m as u,g as f,t as d,h as m,j as p}from"./vendor.f2ec2659.js";!function(){const e=document.createElement("link").relList;if(!(e&&e.supports&&e.supports("modulepreload"))){for(const e of document.querySelectorAll('link[rel="modulepreload"]'))s(e);new MutationObserver((e=>{for(const l of e)if("childList"===l.type)for(const e of l.addedNodes)"LINK"===e.tagName&&"modulepreload"===e.rel&&s(e)})).observe(document,{childList:!0,subtree:!0})}function s(e){if(e.ep)return;e.ep=!0;const s=function(e){const s={};return e.integrity&&(s.integrity=e.integrity),e.referrerpolicy&&(s.referrerPolicy=e.referrerpolicy),"use-credentials"===e.crossorigin?s.credentials="include":"anonymous"===e.crossorigin?s.credentials="omit":s.credentials="same-origin",s}(e);fetch(e.href,s)}}();function g(e){let s;return{c(){s=n("nav"),s.innerHTML='<div class="logo svelte-n7acil">T<span class="svelte-n7acil">@</span>J</div> \n\n    <ul class="nav-items svelte-n7acil"><li class="svelte-n7acil">About</li> \n        <li class="svelte-n7acil">Blog</li> \n        <li class="svelte-n7acil">Projects</li></ul>',t(s,"class","navbar svelte-n7acil")},m(e,l){i(e,s,l)},p:a,i:a,o:a,d(e){e&&r(s)}}}class v extends e{constructor(e){super(),s(this,e,null,g,l,{})}}function $(e){let s;return{c(){s=n("div"),s.innerHTML='<i class="fa fa-warning svelte-zzlri3"></i> \n    <span class="heading svelte-zzlri3">Work In Progress</span> \n    <i class="fa fa-warning svelte-zzlri3"></i>',t(s,"class","card svelte-zzlri3")},m(e,l){i(e,s,l)},p:a,i:a,o:a,d(e){e&&r(s)}}}class h extends e{constructor(e){super(),s(this,e,null,$,l,{})}}function y(e){let s;return{c(){s=n("footer"),s.innerHTML='<ul class="social-ul svelte-1q8on0p"><li class="social-li"><i class="fa fa-github"></i></li> \n\n        <li class="social-li"><i class="fab fa-discord"></i></li> \n\n        <li class="social-li"><i class="fa fa-twitter"></i></li></ul>',t(s,"class","svelte-1q8on0p")},m(e,l){i(e,s,l)},p:a,i:a,o:a,d(e){e&&r(s)}}}class b extends e{constructor(e){super(),s(this,e,null,y,l,{})}}function w(e){let s,l,g,$,y,w,z;return l=new v({}),$=new h({}),w=new b({}),{c(){s=n("main"),c(l.$$.fragment),g=o(),c($.$$.fragment),y=o(),c(w.$$.fragment),t(s,"class","svelte-c2qlg5")},m(e,n){i(e,s,n),u(l,s,null),f(s,g),u($,s,null),f(s,y),u(w,s,null),z=!0},p:a,i(e){z||(d(l.$$.fragment,e),d($.$$.fragment,e),d(w.$$.fragment,e),z=!0)},o(e){m(l.$$.fragment,e),m($.$$.fragment,e),m(w.$$.fragment,e),z=!1},d(e){e&&r(s),p(l),p($),p(w)}}}new class extends e{constructor(e){super(),s(this,e,null,w,l,{})}}({target:document.getElementById("app")});
