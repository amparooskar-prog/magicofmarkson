const chatIcon='<svg viewBox="0 0 24 24" aria-hidden="true" fill="none" stroke="currentColor" stroke-width="1.7" stroke-linecap="round" stroke-linejoin="round"><path d="M21 11.5a8.5 8.5 0 0 1-8.5 8.5 9 9 0 0 1-4-.9L3 21l1.9-5.5a9 9 0 0 1-.9-4A8.5 8.5 0 0 1 12.5 3H13a8.5 8.5 0 0 1 8 8v.5Z"/><path d="M8 10h8M8 14h5"/></svg>';
const whatsappIcon='<svg viewBox="0 0 24 24" aria-hidden="true" fill="currentColor"><path d="M20.5 3.5A11.8 11.8 0 0 0 12.1 0C5.5 0 .2 5.3.2 11.9c0 2.1.5 4.1 1.6 5.9L.1 24l6.4-1.7a11.9 11.9 0 0 0 5.6 1.4H12c6.6 0 11.9-5.3 11.9-11.9 0-3.1-1.2-6.1-3.4-8.3ZM12 21.7a9.9 9.9 0 0 1-5-1.4l-.4-.2-3.8 1 1-3.7-.3-.4a9.9 9.9 0 1 1 8.5 4.7Zm5.4-7.4c-.3-.1-1.8-.9-2-1-.3-.1-.5-.1-.7.2l-.9 1c-.2.2-.3.2-.6.1-.3-.2-1.2-.5-2.3-1.4-.8-.8-1.4-1.7-1.6-2-.1-.3 0-.4.1-.6l.5-.6.3-.5c.1-.2 0-.4 0-.5l-.9-2.1c-.2-.6-.5-.5-.7-.5H8c-.2 0-.5.1-.8.4-.3.3-1 1-1 2.4s1 2.8 1.2 3c.1.2 2 3.1 5 4.4.7.3 1.3.5 1.7.6.7.2 1.4.2 1.9.1.6-.1 1.8-.7 2-1.4.2-.7.2-1.3.2-1.4-.1-.1-.3-.2-.6-.3Z"/></svg>';
const whatsappUrl=`https://wa.me/6593694164?text=${encodeURIComponent("Hi Markson! I'd like to check availability for a party.")}`;

export const contactWidget=`
<aside class="floating-contact" data-contact-widget aria-label="Quick contact">
  <a class="contact-launcher" data-contact-fallback href="contact.html">${chatIcon}<span>Contact Markson</span></a>
  <button class="contact-launcher" data-contact-toggle type="button" aria-expanded="false" aria-controls="quick-contact-panel" hidden>${chatIcon}<span>Contact Markson</span><span class="contact-chevron" aria-hidden="true">⌃</span></button>
  <section class="quick-contact-panel" id="quick-contact-panel" aria-labelledby="quick-contact-title" hidden>
    <button class="quick-contact-close" data-contact-close type="button" aria-label="Close contact options">×</button>
    <span class="quick-contact-eyebrow">A little magic starts here</span>
    <h2 id="quick-contact-title">Let’s plan<br><em>your party.</em></h2>
    <p>Have a date in mind? Say hello to Markson and ask about availability.</p>
    <a class="quick-contact-action whatsapp-action" href="${whatsappUrl}" target="_blank" rel="noopener noreferrer">${whatsappIcon}<span><strong>Chat on WhatsApp</strong><small>+65 9369 4164 · Opens WhatsApp</small></span><span aria-hidden="true">↗</span></a>
    <a class="quick-contact-action enquiry-action" href="contact.html">${chatIcon}<span><strong>Plan your celebration</strong><small>Share your party details</small></span><span aria-hidden="true">↗</span></a>
    <p class="quick-contact-note">You choose when to send. No automatic messages.</p>
  </section>
</aside>`;
