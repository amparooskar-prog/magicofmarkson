const contactWidget=document.querySelector('[data-contact-widget]');
const contactToggle=contactWidget?.querySelector('[data-contact-toggle]');
const contactPanel=contactWidget?.querySelector('.quick-contact-panel');
if(contactWidget&&contactToggle&&contactPanel){
  contactWidget.querySelector('[data-contact-fallback]').hidden=true;
  contactToggle.hidden=false;
  const setContactOpen=(open,restoreFocus=false)=>{
    contactPanel.hidden=!open;
    contactToggle.setAttribute('aria-expanded',String(open));
    if(restoreFocus)contactToggle.focus({preventScroll:true});
  };
  contactToggle.addEventListener('click',()=>setContactOpen(contactPanel.hidden));
  contactWidget.querySelector('[data-contact-close]').addEventListener('click',()=>setContactOpen(false,true));
  document.addEventListener('keydown',event=>{
    if(event.key==='Escape'&&!contactPanel.hidden)setContactOpen(false,true);
  });
  document.addEventListener('click',event=>{
    if(!contactWidget.contains(event.target))setContactOpen(false);
  });
  contactWidget.addEventListener('focusout',event=>{
    if(event.relatedTarget&&!contactWidget.contains(event.relatedTarget))setContactOpen(false);
  });
}

const menuButton=document.querySelector('.menu-toggle');
const nav=document.querySelector('.main-nav');
function closeMenu(){nav?.classList.remove('is-open');menuButton?.setAttribute('aria-expanded','false');}
menuButton?.addEventListener('click',()=>{const open=nav.classList.toggle('is-open');menuButton.setAttribute('aria-expanded',String(open));});
document.addEventListener('keydown',e=>{if(e.key==='Escape')closeMenu();});
nav?.addEventListener('click',e=>{if(e.target.closest('a'))closeMenu();});
document.addEventListener('click',e=>{if(!e.target.closest('.site-header'))closeMenu();});
const bubble=document.querySelector('[data-bubble]');
const motionButton=document.querySelector('[data-motion]');
const reducedMotion=window.matchMedia('(prefers-reduced-motion: reduce)');
let paused=reducedMotion.matches;
function setMotion(){if(!bubble||!motionButton)return;bubble.src=paused?bubble.dataset.poster:bubble.dataset.animation;motionButton.textContent=paused?'▷ Play magic':'Ⅱ Pause magic';motionButton.setAttribute('aria-pressed',String(paused));}
setMotion();motionButton?.addEventListener('click',()=>{paused=!paused;setMotion();});
reducedMotion.addEventListener('change',e=>{paused=e.matches;setMotion();});
const dialog=document.querySelector('.lightbox');
document.querySelectorAll('[data-gallery]').forEach(button=>button.addEventListener('click',()=>{const img=button.querySelector('img');dialog.querySelector('img').src=img.src;dialog.querySelector('img').alt=img.alt;dialog.querySelector('p').textContent=img.alt;dialog.showModal();}));
dialog?.querySelector('button').addEventListener('click',()=>dialog.close());
dialog?.addEventListener('click',e=>{if(e.target===dialog){const r=dialog.getBoundingClientRect();if(e.clientX<r.left||e.clientX>r.right||e.clientY<r.top||e.clientY>r.bottom)dialog.close();}});
const form=document.querySelector('[data-enquiry]');
const dateInput=form?.querySelector('[name="date"]');
if(dateInput){const d=new Date();dateInput.min=`${d.getFullYear()}-${String(d.getMonth()+1).padStart(2,'0')}-${String(d.getDate()).padStart(2,'0')}`;}
form?.addEventListener('submit',event=>{event.preventDefault();if(!form.reportValidity())return;const data=new FormData(form);const lines=[`Hi Markson! I'd like to check availability for a party.`,`Name: ${data.get('name')}`,`Date: ${data.get('date')}`,`Time: ${data.get('time')||'To be confirmed'}`,`Venue / area: ${data.get('venue')}`,`Child's age: ${data.get('age')||'Not specified'}`,`Guests: ${data.get('guests')||'To be confirmed'}`,`Interested in: ${data.get('interest')}`,data.get('notes')?`Notes: ${data.get('notes')}`:''].filter(Boolean);const text=lines.join('\n');const preview=document.querySelector('[data-enquiry-preview]');preview.hidden=false;preview.querySelector('p').textContent=text;preview.querySelector('a').href=`https://wa.me/6593694164?text=${encodeURIComponent(text)}`;preview.focus();});
