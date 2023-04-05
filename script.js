function CopyToClipboard(code, button)
{
  var r = document.createRange();
  r.selectNode(document.getElementById(code));
  window.getSelection().removeAllRanges();
  window.getSelection().addRange(r);
  document.execCommand('copy');
  window.getSelection().removeAllRanges();

  const div = document.getElementById(button)
  div.innerHTML = `<i class="fa-solid fa-copy"></i> Copied to Clipboard`;
}


let count = localStorage.getItem('counter') || 0;

count++;

localStorage.setItem('counter', count);

document.getElementById('counter').innerText = count;