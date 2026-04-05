(function () {
  var cache = {};

  function loadPartial(path) {
    if (Object.prototype.hasOwnProperty.call(cache, path)) {
      return cache[path];
    }

    var xhr = new XMLHttpRequest();
    try {
      xhr.open('GET', path, false);
      xhr.send(null);
    } catch (error) {
      console.error('[layout] failed to load partial:', path, error);
      cache[path] = '';
      return '';
    }

    if ((xhr.status >= 200 && xhr.status < 300) || xhr.status === 0) {
      cache[path] = xhr.responseText;
      return cache[path];
    }

    console.error('[layout] partial not found:', path, 'status=', xhr.status);
    cache[path] = '';
    return '';
  }

  window.__renderPartial = function (name) {
    var path = 'partials/' + name + '.html';
    var html = loadPartial(path);

    if (!html) {
      document.write('<!-- missing partial: ' + path + ' -->');
      return;
    }

    document.write(html);
  };
})();
