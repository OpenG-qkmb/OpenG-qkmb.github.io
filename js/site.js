/*!
 * site.js — small, dependency-free behaviours for the blog theme.
 * Navigation state, mobile menu, search, table of contents, archive filter,
 * language switch, code copy buttons and back-to-top.
 */
(function () {
  'use strict';

  var doc = document;
  var body = doc.body;

  function ready(fn) {
    if (doc.readyState === 'loading') {
      doc.addEventListener('DOMContentLoaded', fn, { once: true });
    } else {
      fn();
    }
  }

  // ---------------------------------------------------------------- navigation
  function initNav() {
    var nav = doc.getElementById('site-nav');
    if (!nav) return;
    var hero = doc.querySelector('.intro-header');
    var toggle = nav.querySelector('.nav-toggle');
    var links = nav.querySelector('.nav-links');

    function updateSolid() {
      var threshold = hero ? Math.max(0, hero.offsetHeight - nav.offsetHeight - 48) : 0;
      nav.classList.toggle('is-solid', !hero || window.scrollY > threshold);
    }

    var ticking = false;
    function onScroll() {
      if (ticking) return;
      ticking = true;
      window.requestAnimationFrame(function () {
        updateSolid();
        ticking = false;
      });
    }

    updateSolid();
    window.addEventListener('scroll', onScroll, { passive: true });
    window.addEventListener('resize', onScroll);

    if (toggle && links) {
      function setOpen(open) {
        nav.classList.toggle('menu-open', open);
        toggle.setAttribute('aria-expanded', open ? 'true' : 'false');
        links.classList.toggle('is-open', open);
        body.classList.toggle('no-scroll', open);
      }
      toggle.addEventListener('click', function () {
        setOpen(!nav.classList.contains('menu-open'));
      });
      links.addEventListener('click', function (event) {
        if (event.target.closest('a')) setOpen(false);
      });
      doc.addEventListener('keydown', function (event) {
        if (event.key === 'Escape') setOpen(false);
      });
      doc.addEventListener('click', function (event) {
        if (!nav.contains(event.target)) setOpen(false);
      });
    }
  }

  // -------------------------------------------------------------------- search
  function initSearch() {
    var overlay = doc.getElementById('search-overlay');
    if (!overlay) return;
    var input = overlay.querySelector('#search-input');
    var results = overlay.querySelector('#search-results');
    var openers = doc.querySelectorAll('[data-search-open]');
    var closeButton = overlay.querySelector('.search-close');
    var dataUrl = overlay.getAttribute('data-search-json') || '/search.json';
    var index = null;
    var loading = false;

    function open() {
      overlay.classList.add('is-open');
      overlay.setAttribute('aria-hidden', 'false');
      body.classList.add('no-scroll');
      load();
      window.setTimeout(function () { input.focus(); }, 60);
    }

    function close() {
      overlay.classList.remove('is-open');
      overlay.setAttribute('aria-hidden', 'true');
      body.classList.remove('no-scroll');
    }

    function load() {
      if (index || loading) return;
      loading = true;
      window.fetch(dataUrl, { credentials: 'same-origin' })
        .then(function (response) {
          if (!response.ok) throw new Error('search json unavailable');
          return response.json();
        })
        .then(function (data) {
          index = Array.isArray(data) ? data : [];
          render(input.value);
        })
        .catch(function () {
          index = [];
          results.innerHTML = '<p class="search-empty">搜索索引加载失败，请稍后再试。</p>';
        })
        .then(function () { loading = false; });
    }

    function normalize(value) {
      return String(value || '').toLowerCase().normalize('NFKC');
    }

    function render(query) {
      var q = normalize(query).trim();
      results.textContent = '';
      if (!q) {
        results.innerHTML = '<p class="search-hint">输入关键词，搜索标题、副标题或标签。</p>';
        return;
      }
      if (!index) {
        results.innerHTML = '<p class="search-hint">正在加载…</p>';
        return;
      }
      var hits = [];
      index.forEach(function (post) {
        var title = normalize(post.title);
        var subtitle = normalize(post.subtitle);
        var tags = normalize(post.tags);
        var score = 0;
        if (title.indexOf(q) !== -1) score += title === q ? 6 : 4;
        if (subtitle.indexOf(q) !== -1) score += 2;
        if (tags.indexOf(q) !== -1) score += 1;
        if (score > 0) hits.push({ post: post, score: score });
      });
      hits.sort(function (a, b) {
        return b.score - a.score || String(b.post.date).localeCompare(String(a.post.date));
      });
      if (!hits.length) {
        results.innerHTML = '<p class="search-empty">没有找到匹配的文章。</p>';
        return;
      }
      hits.slice(0, 20).forEach(function (hit) {
        var post = hit.post;
        var link = doc.createElement('a');
        link.className = 'search-result';
        link.href = post.url;
        var title = doc.createElement('span');
        title.className = 'search-result-title';
        title.textContent = post.title || '(无标题)';
        var meta = doc.createElement('span');
        meta.className = 'search-result-meta';
        meta.textContent = [post.date || '', post.tags || '']
          .filter(Boolean).join(' · ');
        link.appendChild(title);
        link.appendChild(meta);
        results.appendChild(link);
      });
    }

    openers.forEach(function (button) {
      button.addEventListener('click', open);
    });
    if (closeButton) closeButton.addEventListener('click', close);
    overlay.addEventListener('mousedown', function (event) {
      if (event.target === overlay) close();
    });
    input.addEventListener('input', function () { render(input.value); });
    doc.addEventListener('keydown', function (event) {
      var typing = /^(INPUT|TEXTAREA|SELECT)$/.test(doc.activeElement && doc.activeElement.tagName);
      if (event.key === 'Escape' && overlay.classList.contains('is-open')) {
        close();
      } else if ((event.key === 'k' || event.key === 'K') && (event.metaKey || event.ctrlKey)) {
        event.preventDefault();
        open();
      } else if (event.key === '/' && !typing) {
        event.preventDefault();
        open();
      }
    });
  }

  // ----------------------------------------------------------------- contents
  function slugifyHeading(text, index) {
    var slug = String(text || '').trim()
      .replace(/[^\p{L}\p{N}]+/gu, '-')
      .replace(/^-+|-+$/g, '')
      .toLowerCase();
    return 'sec-' + index + (slug ? '-' + slug : '');
  }

  function initHeadingAnchors() {
    var article = doc.getElementById('post-content');
    if (!article) return;
    Array.prototype.forEach.call(article.querySelectorAll('h2, h3, h4'), function (heading, index) {
      if (!heading.id) heading.id = slugifyHeading(heading.textContent, index);
      var anchor = doc.createElement('a');
      anchor.className = 'heading-anchor';
      anchor.href = '#' + heading.id;
      anchor.textContent = '#';
      anchor.setAttribute('aria-label', '本节链接');
      heading.appendChild(anchor);
    });
  }

  function initToc() {
    var list = doc.getElementById('toc-list');
    var toc = doc.getElementById('toc');
    if (!list || !toc) return;
    var container = doc.querySelector('.post-body');
    if (!container) return;
    var headings = Array.prototype.filter.call(
      container.querySelectorAll('h2, h3'),
      function (heading) { return heading.textContent.trim(); }
    );
    if (headings.length < 2) {
      toc.classList.add('is-empty');
      return;
    }

    var links = [];
    headings.forEach(function (heading, index) {
      if (!heading.id) heading.id = slugifyHeading(heading.textContent, index);
      var link = doc.createElement('a');
      link.href = '#' + heading.id;
      link.textContent = heading.textContent.trim();
      if (heading.tagName === 'H3') link.className = 'toc-h3';
      list.appendChild(link);
      links.push({ link: link, heading: heading });
    });

    if (!('IntersectionObserver' in window)) return;
    var visible = new Set();
    var observer = new IntersectionObserver(function (entries) {
      entries.forEach(function (entry) {
        if (entry.isIntersecting) visible.add(entry.target);
        else visible.delete(entry.target);
      });
      var current = links.find(function (item) { return visible.has(item.heading); });
      if (!current && links.length) {
        var offset = window.scrollY + 120;
        for (var i = 0; i < links.length; i += 1) {
          if (links[i].heading.offsetTop <= offset) current = links[i];
        }
      }
      links.forEach(function (item) {
        item.link.classList.toggle('is-active', current === item);
      });
    }, { rootMargin: '-15% 0px -70% 0px', threshold: 0 });
    headings.forEach(function (heading) { observer.observe(heading); });
  }

  // ------------------------------------------------------------------ archive
  function initArchive() {
    var cloud = doc.getElementById('tag-cloud');
    if (!cloud) return;
    var chips = Array.prototype.slice.call(cloud.querySelectorAll('.tag-chip'));
    var items = Array.prototype.slice.call(doc.querySelectorAll('.archive-item'));
    var sections = Array.prototype.slice.call(doc.querySelectorAll('.archive-year'));

    function apply(tag, updateUrl) {
      tag = tag || '';
      items.forEach(function (item) {
        var tags = (item.getAttribute('data-tags') || '').split(',').filter(Boolean);
        var show = !tag || tags.indexOf(tag) !== -1;
        item.hidden = !show;
      });
      sections.forEach(function (section) {
        section.hidden = !section.querySelector('.archive-item:not([hidden])');
      });
      chips.forEach(function (chip) {
        chip.classList.toggle('is-active', (chip.getAttribute('data-tag') || '') === tag);
      });
      if (updateUrl) {
        var url = new URL(window.location.href);
        if (tag) url.searchParams.set('tag', decodeURIComponent(tag));
        else url.searchParams.delete('tag');
        window.history.replaceState(null, '', url);
      }
    }

    chips.forEach(function (chip) {
      chip.addEventListener('click', function () {
        apply(chip.getAttribute('data-tag') || '', true);
      });
    });

    var params = new URLSearchParams(window.location.search);
    var initial = params.get('tag');
    apply(initial ? encodeURIComponent(initial) : '', false);
  }

  // ----------------------------------------------------------------- language
  function initLanguage() {
    var select = doc.querySelector('.sel-lang');
    if (!select) return;

    function setLang(lang) {
      var isEn = lang === 'en';
      body.classList.toggle('lang-en', isEn);
      select.value = isEn ? 'en' : 'zh';
      var url = new URL(window.location.href);
      if (isEn) url.searchParams.set('lang', 'en');
      else url.searchParams.delete('lang');
      window.history.replaceState(null, '', url);
    }

    select.addEventListener('change', function () { setLang(select.value); });
    var initial = new URLSearchParams(window.location.search).get('lang');
    setLang(initial === 'en' ? 'en' : 'zh');
  }

  // ------------------------------------------------------------ copy & to top
  function initCopyButtons() {
    Array.prototype.forEach.call(doc.querySelectorAll('.prose pre'), function (pre) {
      if (pre.querySelector('code') === null && !pre.textContent.trim()) return;
      var button = doc.createElement('button');
      button.type = 'button';
      button.className = 'copy-code';
      button.textContent = '复制';
      button.addEventListener('click', function () {
        var code = pre.querySelector('code');
        var text = (code || pre).innerText;
        var done = function () {
          button.textContent = '已复制';
          window.setTimeout(function () { button.textContent = '复制'; }, 1600);
        };
        if (navigator.clipboard && navigator.clipboard.writeText) {
          navigator.clipboard.writeText(text).then(done, function () {});
        } else {
          var area = doc.createElement('textarea');
          area.value = text;
          area.style.position = 'fixed';
          area.style.opacity = '0';
          doc.body.appendChild(area);
          area.select();
          try { doc.execCommand('copy'); done(); } catch (error) { /* ignore */ }
          doc.body.removeChild(area);
        }
      });
      pre.appendChild(button);
    });
  }

  function initToTop() {
    var button = doc.getElementById('to-top');
    if (!button) return;
    function update() {
      button.classList.toggle('is-visible', window.scrollY > 640);
    }
    update();
    window.addEventListener('scroll', update, { passive: true });
    button.addEventListener('click', function () {
      window.scrollTo({ top: 0, behavior: 'smooth' });
    });
  }

  ready(function () {
    initNav();
    initSearch();
    initToc();
    initHeadingAnchors();
    initArchive();
    initLanguage();
    initCopyButtons();
    initToTop();
  });
})();
