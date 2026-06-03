(function(){
var c=document.querySelector("#card-newest-comments .aside-list");
if(!c)return;
c.innerHTML='<div class="aside-list-item"><a href="https://xuyiming1216-cpu.github.io/guestbook/index.html" class="thumbnail"><img src="https://avatars.githubusercontent.com/u/284277771?v=4" alt="xuyiming1216-cpu"></a><div class="content"><a class="comment" href="https://xuyiming1216-cpu.github.io/guestbook/index.html" title="#Test\ntest">#Test\ntest</a><div class="name"><span>xuyiming1216-cpu / </span><time datetime="2026-06-03T07:10:18Z">2026-06-03T07:10:18Z</time></div></div></div>'||'';
var d=[{"avatar":"https://avatars.githubusercontent.com/u/284277771?v=4","content":"#Test\ntest","nick":"xuyiming1216-cpu","url":"https://xuyiming1216-cpu.github.io/guestbook/index.html","date":"2026-06-03T07:10:18Z"}];
if(!d.length)return;
var e=Date.now()+0.006944444444444444*86400000;
localStorage.setItem('github-newest-comments',JSON.stringify({value:d,expiry:e}));
})();