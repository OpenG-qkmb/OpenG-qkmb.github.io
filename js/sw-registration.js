/*!
 * sw-registration.js — service worker registration + update notice.
 *
 * A single content update must not nag the reader on every navigation, so the
 * last notified build version is remembered for the browser session. The
 * service worker also suppresses repeat messages while it stays alive.
 */
(function () {
  'use strict';

  var UPDATE_KEY = 'blog-sw-update-version';

  function readSession(key) {
    try { return window.sessionStorage.getItem(key) || ''; } catch (error) { return ''; }
  }

  function writeSession(key, value) {
    try { window.sessionStorage.setItem(key, value); } catch (error) { /* private mode */ }
  }

  function showUpdate(version) {
    var key = version || 'unknown';
    if (readSession(UPDATE_KEY) === key) return;
    writeSession(UPDATE_KEY, key);

    if (typeof window.createSnackbar !== 'function') return;
    window.createSnackbar({
      message: '内容已更新',
      actionText: '刷新',
      action: function () { window.location.reload(); }
    });
  }

  if (!('serviceWorker' in navigator)) return;

  navigator.serviceWorker.register('/sw.js').catch(function (error) {
    if (window.console && window.console.warn) {
      window.console.warn('ServiceWorker registration failed:', error);
    }
  });

  navigator.serviceWorker.addEventListener('message', function (event) {
    var data = event.data || {};
    if (data.command !== 'UPDATE_FOUND') return;
    var version = data.version || String(data.url || '').split('?')[0];
    showUpdate(version);
  });
})();
