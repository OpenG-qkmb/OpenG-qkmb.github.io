/*!
 * header-color.js — deterministic title-bar colors for the blog.
 *
 * Every post gets a 64-bit credential derived from its title and publish time
 * (same idea as using an MD5 digest to tell files apart). The credential selects
 * one entry from a fixed palette of solid and gradient backgrounds; every entry
 * is engineered for WCAG-AA contrast against the white title text, and a final
 * contrast guard darkens a stop if it is ever edited to be too light.
 *
 * Palette rules: warm earth tones and deep greens only — no blue or violet hues.
 */
(function (root, factory) {
  if (typeof module === 'object' && module.exports) {
    module.exports = factory();
  } else {
    root.HeaderColor = factory();
  }
})(typeof globalThis !== 'undefined' ? globalThis : this, function () {
  'use strict';

  // 18 entries: 13 solids + 5 low-key gradients. Hue range 0-165, no blue/violet.
  var PALETTE = [
    { name: 'brick', stops: ['#8A3B2C'] },
    { name: 'clay', stops: ['#9C4A2F'] },
    { name: 'rust', stops: ['#7E3A22'] },
    { name: 'maroon', stops: ['#6E2F2F'] },
    { name: 'ochre', stops: ['#8C5A1E'] },
    { name: 'amber', stops: ['#7A4A12'] },
    { name: 'olive', stops: ['#5D5A1E'] },
    { name: 'moss', stops: ['#4C5A24'] },
    { name: 'forest', stops: ['#2F5138'] },
    { name: 'pine', stops: ['#24473A'] },
    { name: 'coffee', stops: ['#4A3527'] },
    { name: 'graphite', stops: ['#3A3733'] },
    { name: 'umber', stops: ['#5A3A2E'] },
    { name: 'brick-amber', gradient: true, stops: ['#8A3B2C', '#9A5A1C'] },
    { name: 'maroon-clay', gradient: true, stops: ['#6E2F2F', '#9C4A2F'] },
    { name: 'moss-forest', gradient: true, stops: ['#4C5A24', '#2F5138'] },
    { name: 'ochre-olive', gradient: true, stops: ['#8C5A1E', '#5D5A1E'] },
    { name: 'pine-forest', gradient: true, stops: ['#24473A', '#2F5138'] }
  ];

  var MIN_CONTRAST = 5.2; // white text against the background

  function utf8Bytes(str) {
    var bytes = [];
    for (var i = 0; i < str.length; i += 1) {
      var code = str.codePointAt(i);
      if (code > 0xffff) i += 1;
      if (code < 0x80) {
        bytes.push(code);
      } else if (code < 0x800) {
        bytes.push(0xc0 | (code >> 6), 0x80 | (code & 0x3f));
      } else if (code < 0x10000) {
        bytes.push(0xe0 | (code >> 12), 0x80 | ((code >> 6) & 0x3f), 0x80 | (code & 0x3f));
      } else {
        bytes.push(0xf0 | (code >> 18), 0x80 | ((code >> 12) & 0x3f),
          0x80 | ((code >> 6) & 0x3f), 0x80 | (code & 0x3f));
      }
    }
    return bytes;
  }

  function fnv1a(bytes, seed) {
    var hash = seed >>> 0;
    for (var i = 0; i < bytes.length; i += 1) {
      hash ^= bytes[i];
      hash = Math.imul(hash, 0x01000193) >>> 0;
    }
    return hash >>> 0;
  }

  function djb2(bytes) {
    var hash = 5381;
    for (var i = 0; i < bytes.length; i += 1) {
      hash = (Math.imul(hash, 33) + bytes[i]) >>> 0;
    }
    return hash >>> 0;
  }

  function mix32(value) {
    var x = value >>> 0;
    x ^= x >>> 16;
    x = Math.imul(x, 0x7feb352d);
    x ^= x >>> 15;
    x = Math.imul(x, 0x846ca68b);
    x ^= x >>> 16;
    return x >>> 0;
  }

  function hex8(value) {
    return ('00000000' + (value >>> 0).toString(16)).slice(-8);
  }

  /** 16 hex chars, derived only from the seed string (title + publish time). */
  function credential(seed) {
    var bytes = utf8Bytes(String(seed));
    return hex8(djb2(bytes)) + hex8(fnv1a(bytes, 0x811c9dc5));
  }

  /** Uniform-ish palette index in [0, PALETTE.length). */
  function paletteIndex(seed) {
    var bytes = utf8Bytes(String(seed));
    var low = fnv1a(bytes, 0x811c9dc5);
    var high = djb2(bytes);
    var mixed = mix32((low ^ Math.imul(high, 0x9e3779b1)) >>> 0);
    return Math.floor((mixed / 4294967296) * PALETTE.length);
  }

  function hexToRgb(hex) {
    var clean = String(hex).replace('#', '');
    if (clean.length === 3) {
      clean = clean.split('').map(function (ch) { return ch + ch; }).join('');
    }
    return {
      r: parseInt(clean.slice(0, 2), 16),
      g: parseInt(clean.slice(2, 4), 16),
      b: parseInt(clean.slice(4, 6), 16)
    };
  }

  function rgbToHex(rgb) {
    function part(value) {
      return ('0' + Math.max(0, Math.min(255, Math.round(value))).toString(16)).slice(-2);
    }
    return '#' + part(rgb.r) + part(rgb.g) + part(rgb.b);
  }

  function relativeLuminance(rgb) {
    function channel(value) {
      var c = value / 255;
      return c <= 0.03928 ? c / 12.92 : Math.pow((c + 0.055) / 1.055, 2.4);
    }
    return 0.2126 * channel(rgb.r) + 0.7152 * channel(rgb.g) + 0.0722 * channel(rgb.b);
  }

  function contrastWithWhite(hex) {
    return 1.05 / (relativeLuminance(hexToRgb(hex)) + 0.05);
  }

  /** Darken (fixed step) until the white-text contrast target is met. */
  function ensureContrast(hex, minimum) {
    var target = minimum || MIN_CONTRAST;
    var rgb = hexToRgb(hex);
    var current = contrastWithWhite(hex);
    var guard = 0;
    while (current < target && guard < 40) {
      rgb.r *= 0.94;
      rgb.g *= 0.94;
      rgb.b *= 0.94;
      current = contrastWithWhite(rgbToHex(rgb));
      guard += 1;
    }
    return rgbToHex(rgb);
  }

  function seedFromElement(el) {
    return (el.getAttribute('data-title') || '') + '|' + (el.getAttribute('data-date') || '');
  }

  function apply(el) {
    if (!el || el.getAttribute('data-header-colored') === '1') return null;
    var seed = seedFromElement(el);
    var index = paletteIndex(seed);
    var entry = PALETTE[index];
    var stops = entry.stops.map(function (stop) { return ensureContrast(stop); });
    var background = entry.gradient
      ? 'linear-gradient(135deg, ' + stops[0] + ' 0%, ' + stops[1] + ' 100%)'
      : stops[0];

    el.style.backgroundImage = entry.gradient ? background : 'none';
    el.style.backgroundColor = stops[0];
    el.setAttribute('data-header-colored', '1');
    el.setAttribute('data-credential', credential(seed));
    el.setAttribute('data-palette', entry.name);

    return { index: index, entry: entry, stops: stops, background: background, credential: credential(seed) };
  }

  function autoApply() {
    var nodes = document.querySelectorAll('[data-header-color]');
    for (var i = 0; i < nodes.length; i += 1) {
      apply(nodes[i]);
    }
  }

  if (typeof document !== 'undefined') {
    if (document.readyState === 'loading') {
      document.addEventListener('DOMContentLoaded', autoApply);
    } else {
      autoApply();
    }
  }

  return {
    PALETTE: PALETTE,
    MIN_CONTRAST: MIN_CONTRAST,
    credential: credential,
    paletteIndex: paletteIndex,
    contrastWithWhite: contrastWithWhite,
    ensureContrast: ensureContrast,
    apply: apply,
    autoApply: autoApply,
    seedFromElement: seedFromElement
  };
});
