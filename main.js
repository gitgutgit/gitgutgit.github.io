// Places career events on the trace. The axis has a break between mid-2022 and 2024
// so the empty stretch does not eat the width.
(function () {
  var A = [2020 * 12 + 6, 2022 * 12 + 6];  // Jul 2020 – Jul 2022
  var B = [2024 * 12, 2027 * 12];          // Jan 2024 – Jan 2027
  var A_W = 22, GAP = 6, B_W = 100 - A_W - GAP;

  function m(s) { var p = s.split('-'); return +p[0] * 12 + (+p[1] - 1); }
  function pos(s) {
    var v = m(s);
    if (v <= A[1]) return ((v - A[0]) / (A[1] - A[0])) * A_W;
    return A_W + GAP + ((v - B[0]) / (B[1] - B[0])) * B_W;
  }

  var track = document.querySelector('.trace-track');
  if (track) {
    track.style.setProperty('--break-at', A_W + '%');
    track.style.setProperty('--break-w', GAP + '%');
    track.querySelectorAll('.ev').forEach(function (el, i) {
      el.style.setProperty('--x', pos(el.dataset.at) + '%');
      if (el.dataset.to) {
        var bar = document.createElement('li');
        bar.className = 'bar';
        bar.setAttribute('aria-hidden', 'true');
        bar.style.setProperty('--x', pos(el.dataset.at) + '%');
        bar.style.setProperty('--w', (pos(el.dataset.to) - pos(el.dataset.at)) + '%');
        track.insertBefore(bar, el);
      }
      el.style.setProperty('--i', i);
    });
    requestAnimationFrame(function () { track.classList.add('drawn'); });
  }

  var y = document.getElementById('year');
  if (y) y.textContent = new Date().getFullYear();
})();
