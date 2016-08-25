(function () {
  var IMAGES = {
    'on' : 'images/pic_bulbon.gif',
    'off': 'images/pic_bulboff.gif'
  };

  function Light() {
    var element = document.createElement('img');

    element.triggerClickEvent = function () {
      var status = this.getAttribute('data-status');

      if(status === 'off') {
        return loadDefaults(this, 'on');
      }

      return loadDefaults(this);
    }

    function loadDefaults (el, status) {
      status = status || 'off';
      el.setAttribute('src', IMAGES[status]);
      el.setAttribute('data-status', status);
    }

    function setListener(el) {
      el.addEventListener('click', element.triggerClickEvent.bind(element));
    }

    loadDefaults(element);
    setListener(element);

    return element;
  }

  document.body.appendChild(new Light());
})();