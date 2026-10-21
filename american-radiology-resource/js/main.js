document.addEventListener('DOMContentLoaded',()=>{
  const t=document.querySelector('.menu-toggle'),n=document.querySelector('nav.main');
  if(t)t.addEventListener('click',()=>{n.classList.toggle('open');t.setAttribute('aria-expanded',n.classList.contains('open'))});
  document.querySelectorAll('.filters button').forEach(b=>b.addEventListener('click',()=>{
    document.querySelectorAll('.filters button').forEach(x=>x.classList.remove('on'));b.classList.add('on');
    const f=b.dataset.f;document.querySelectorAll('.inv .item').forEach(i=>{i.style.display=(f==='all'||i.dataset.cat.split(' ').includes(f))?'':'none'});
  }));
  const p=new URLSearchParams(location.search).get('cat');
  if(p){const b=document.querySelector(`.filters button[data-f="${p}"]`);if(b)b.click();}
  document.querySelectorAll('form.quote-form').forEach(f=>f.addEventListener('submit',e=>{
    e.preventDefault();f.querySelector('.form-ok').style.display='block';f.querySelector('.form-ok').scrollIntoView({behavior:'smooth',block:'center'});
  }));
  const y=document.getElementById('yr');if(y)y.textContent=new Date().getFullYear();
});
