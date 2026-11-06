(function () {
  const D = window.PORTFOLIO;
  const $ = (s, r = document) => r.querySelector(s);
  const esc = s => String(s ?? '').replace(/[&<>"']/g, c => ({ '&': '&amp;', '<': '&lt;', '>': '&gt;', '"': '&quot;', "'": '&#39;' }[c]));
  const pad = i => String(i + 1).padStart(2, '0');
  const chips = list => list && list.length ? `<div class="chips">${list.map(t => `<span>${esc(t)}</span>`).join('')}</div>` : '';

  const img = (src, alt, label) =>
    src ? `<img src="${esc(src)}" alt="${esc(alt)}" loading="lazy" data-placeholder="${esc(label)}">`
        : `<div class="ph">${esc(label)}</div>`;

  // Swap any image that fails to load for a labelled placeholder.
  function wirePlaceholders(root) {
    root.querySelectorAll('img[data-placeholder]').forEach(el => {
      const swap = () => {
        const ph = document.createElement('div');
        ph.className = 'ph';
        ph.textContent = el.dataset.placeholder;
        el.replaceWith(ph);
      };
      if (el.complete && el.naturalWidth === 0) swap();
      else el.addEventListener('error', swap, { once: true });
    });
  }

  const phone = (src, alt, label) =>
    `<div class="phone"><div class="phone-screen">${img(src, alt, label)}</div></div>`;

  if (!D.showAvailability) $('#availability').remove();

  $('#facts').innerHTML = D.facts.map(f =>
    `<div class="fact"><dt>${esc(f.label)}</dt><dd>${esc(f.value)}</dd></div>`).join('');

  $('#skills').innerHTML = D.skills.map(s =>
    `<div class="skill"><div class="skill-group">${esc(s.group)}</div><div class="skill-items">${esc(s.items)}</div></div>`).join('');

  const featured = D.projects.filter(p => p.shots && p.shots.length);
  const more = D.projects.filter(p => !(p.shots && p.shots.length));

  $('#track').innerHTML = featured.map((p, i) => {
    const s = p.shots;
    const visual = p.device === 'phone'
      ? `<div class="phones">${phone(s[0], `${p.name} screen 1`, 'Phone · 9:19.5')}${phone(s[1], `${p.name} screen 2`, 'Phone · 9:19.5')}</div>`
      : `<div class="browser">
           <div class="browser-bar"><span></span><span></span><span></span><em>${esc(p.url || p.name)}</em></div>
           <div class="browser-screen">${img(s[0], `${p.name} screenshot`, 'Web · 16:9')}</div>
         </div>`;
    return `<article class="card" data-i="${i}">
      <button type="button" class="card-frame" aria-label="Open ${esc(p.name)} case study">
        <div class="fit">${visual}</div>
        <span class="card-overlay"><span class="btn btn-primary">View case study →</span></span>
      </button>
      <div class="card-meta">
        <span class="num">${pad(i)}</span>
        <div>
          <h3>${esc(p.name)}</h3>
          <p>${esc(p.summary)}</p>
          ${chips(p.stack)}
        </div>
        <span class="card-link">Case study →</span>
      </div>
    </article>`;
  }).join('');

  if (more.length) {
    $('#more-list').innerHTML = more.map(p => `<div class="row">
        <span class="row-meta">${esc(p.year || '')}</span>
        <div><div class="row-title">${esc(p.name)}</div><div class="row-sub">${esc(p.role)}${p.platform ? ' · ' + esc(p.platform) : ''}</div></div>
        <div><p>${esc(p.summary)}${p.detail ? ' ' + esc(p.detail) : ''}</p>${chips(p.stack)}</div>
      </div>`).join('');
  } else {
    $('#more').remove();
  }

  $('#jobs').innerHTML = D.jobs.map(j => `<div class="row">
      <span class="row-meta">${esc(j.years)}</span>
      <div><div class="row-title">${esc(j.role)}</div><div class="row-sub">${esc(j.company)}</div></div>
      <p>${esc(j.note)}</p>
    </div>`).join('');

  wirePlaceholders(document);

  // Carousel arrows
  const track = $('#track');
  $('#prev').addEventListener('click', () => track.scrollBy({ left: -track.clientWidth * 0.8 }));
  $('#next').addEventListener('click', () => track.scrollBy({ left: track.clientWidth * 0.8 }));

  // Case study modal
  const modal = $('#modal');
  const panel = $('.modal-panel', modal);
  let lastFocus = null;

  function open(i) {
    const p = featured[i];
    const s = p.shots;
    const n = Math.max(3, s.length);
    const media = p.device === 'phone'
      ? `<div class="modal-phones">${Array.from({ length: n }, (_, k) => phone(s[k], `${p.name} screen ${k + 1}`, 'Phone · 9:19.5')).join('')}</div>`
      : `<div class="modal-web">
           <div class="shot shot-main">${img(s[0], `${p.name} main screenshot`, 'Web · 16:9')}</div>
           <div class="shot-row">
             ${Array.from({ length: Math.max(2, s.length - 1) }, (_, k) =>
               `<div class="shot">${img(s[k + 1], `${p.name} screenshot ${k + 2}`, 'Web · 16:9')}</div>`).join('')}
           </div>
         </div>`;
    const fact = (label, value) => value ? `<div><div class="label">${label}</div><div>${esc(value)}</div></div>` : '';
    const links = (p.links || []).filter(l => l.url);
    panel.innerHTML = `
      <div class="modal-head">
        <div>
          <div class="modal-kicker">${pad(i)}${p.year ? ' — ' + esc(p.year) : ''}</div>
          <h3 id="modal-title">${esc(p.name)}</h3>
        </div>
        <button type="button" class="round-btn" data-close aria-label="Close">✕</button>
      </div>
      ${media}
      <div class="modal-info">
        <div class="modal-facts">
          ${fact('Role', p.role)}
          ${fact('Platform', p.platform)}
          ${fact('Stack', (p.stack || []).join(', '))}
          ${links.length ? `<div class="modal-links">${links.map(l => `<a href="${esc(l.url)}" target="_blank" rel="noopener">${esc(l.label)} ↗</a>`).join('')}</div>` : ''}
        </div>
        <div class="modal-text">
          <p>${esc(p.summary)}</p>
          ${p.detail ? `<p class="muted">${esc(p.detail)}</p>` : ''}
        </div>
      </div>`;
    wirePlaceholders(panel);
    lastFocus = document.activeElement;
    modal.hidden = false;
    document.body.classList.add('no-scroll');
    modal.scrollTop = 0;
    panel.focus();
  }

  // Resume viewer: in-page on large screens with a built-in PDF viewer;
  // otherwise the link's default (open the PDF in a new tab) is used.
  function openResume(href) {
    panel.innerHTML = `
      <div class="modal-head">
        <div>
          <div class="modal-kicker">Resume — PDF</div>
          <h3 id="modal-title">Nakhul Krishna</h3>
        </div>
        <div class="resume-actions">
          <a href="${esc(href)}" download="Nakhul_Krishna_Resume.pdf" class="btn btn-primary">Download ↓</a>
          <button type="button" class="round-btn" data-close aria-label="Close">✕</button>
        </div>
      </div>
      <iframe class="resume-frame" src="${esc(href)}#view=FitH" title="Nakhul Krishna resume"></iframe>
      <a href="${esc(href)}" target="_blank" rel="noopener" class="resume-newtab">Open in new tab ↗</a>`;
    lastFocus = document.activeElement;
    modal.hidden = false;
    document.body.classList.add('no-scroll');
    modal.scrollTop = 0;
    panel.focus();
  }

  document.addEventListener('click', e => {
    const a = e.target.closest('a[data-resume]');
    if (!a || e.metaKey || e.ctrlKey || e.shiftKey || e.button !== 0) return;
    const inPage = window.matchMedia('(min-width: 861px)').matches && navigator.pdfViewerEnabled !== false;
    if (!inPage) return;
    e.preventDefault();
    openResume(a.getAttribute('href'));
  });

  function close() {
    modal.hidden = true;
    document.body.classList.remove('no-scroll');
    lastFocus && lastFocus.focus();
  }

  track.addEventListener('click', e => {
    const card = e.target.closest('.card');
    if (card) open(+card.dataset.i);
  });
  modal.addEventListener('click', e => {
    if (e.target === modal || e.target.closest('[data-close]')) close();
  });
  window.addEventListener('keydown', e => {
    if (e.key === 'Escape' && !modal.hidden) close();
  });
})();
