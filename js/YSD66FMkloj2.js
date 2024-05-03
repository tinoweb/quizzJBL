"use strict";

/* eslint-disable @typescript-eslint/consistent-type-definitions */

console.log('utms script loaded! 2.3.8');
window.paramsList = ['utm_source', 'utm_campaign', 'utm_medium', 'utm_content', 'utm_term', 'xcod', 'src'];
window.itemExpInDays = 7;
function getExpKey(key) {
  return `${key}_exp`;
}
function saveParams() {
  const params = new URLSearchParams(window.location.search);
  const saveItem = (key, value) => {
    localStorage.setItem(key, value);
    const expDate = new Date(new Date().getTime() + window.itemExpInDays * 24 * 60 * 60 * 1000);
    localStorage.setItem(getExpKey(key), expDate.toISOString());
  };
  window.paramsList.forEach(param => {
    const value = params.get(param);
    if (value) {
      saveItem(param, value);
    }
  });
}
function work() {
  saveParams();
  function rebuildLinks() {
    const completeParams = getCompleteParams();
    document.querySelectorAll('a').forEach(e => {
      if (e.href.startsWith('mailto:')) return;
      if (e.href.startsWith('tel:')) return;
      if (e.href.startsWith('whatsapp:')) return;
      if (e.href.includes('#')) return;
      // if (e.href.startsWith('#') || e.href.includes(`${e.host}#`) || e.href.includes(`${e.host}/#`)) return;

      const char = e.href.indexOf('?') === -1 ? '?' : '&';
      e.href += char + (completeParams?.toString() ?? '');
    });
  }
  function rebuildForms() {
    const completeParamsStr = encodeURIComponent(getCompleteParams()?.toString() ?? '');
    const forms = document.querySelectorAll('form');
    console.log('forms', forms);
    forms.forEach(form => {
      function getCharForAction(action) {
        if (action.indexOf('redirect_url')) {
          return '?';
        }
        return action.indexOf('?') === -1 ? '?' : '&';
      }
      const char = getCharForAction(form.action);
      form.action += `${char}${completeParamsStr}`;
      console.log('new action', form.action);
    });
  }
  function configWindowOpen() {
    const saveOpen = window.open;
    window.open = function (url, windowName, parms) {
      const char = url?.toString().indexOf('?') === -1 ? '?' : '&';
      url += char + (getCompleteParams()?.toString() ?? '');
      return saveOpen(url, windowName || '', parms || '');
    };
  }
  rebuildLinks();
  rebuildForms();
  configWindowOpen();
}
if (document.readyState === 'complete') {
  work();
} else {
  window.addEventListener('load', work);
}