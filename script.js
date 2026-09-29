
const header=document.querySelector('.site-header');
window.addEventListener('scroll',()=>header?.classList.toggle('scrolled',scrollY>20));
const current=location.pathname.split('/').pop()||'index.html';
document.querySelectorAll('.nav a').forEach(a=>{
  if(a.getAttribute('href')===current) a.classList.add('active');
  a.addEventListener('click',()=>document.body.classList.remove('mobile-open'));
});
document.querySelector('.menu-btn')?.addEventListener('click',()=>document.body.classList.toggle('mobile-open'));
const themeBtn=document.querySelector('[data-theme-toggle]');
themeBtn?.addEventListener('click',()=>{
  const next=document.documentElement.getAttribute('data-theme')==='light'?'dark':'light';
  document.documentElement.setAttribute('data-theme',next);
  localStorage.setItem('asenflu-theme',next);
});
const saved=localStorage.getItem('asenflu-theme'); if(saved) document.documentElement.setAttribute('data-theme',saved);
const lang=document.querySelector('[data-lang]');
lang?.addEventListener('click',()=>{lang.textContent=lang.textContent==='EN'?'FR':'EN'});
const obs=new IntersectionObserver(es=>es.forEach(e=>{if(e.isIntersecting)e.target.classList.add('visible')}),{threshold:.12});
document.querySelectorAll('.reveal').forEach(e=>obs.observe(e));
const play=document.querySelector('.play');
let playing=false;
play?.addEventListener('click',()=>{playing=!playing;play.textContent=playing?'Ⅱ':'▶';});
document.querySelectorAll('form').forEach(f=>f.addEventListener('submit',e=>{e.preventDefault();const b=f.querySelector('.submit');if(b){b.textContent='MESSAGE READY';setTimeout(()=>b.textContent='SEND MESSAGE',1800)}}));
