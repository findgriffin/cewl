body = document.getElementsByTagName('body')[0];
spinner = document.getElementById('loading-spinner');
content = document.createElement('div');
content.classList = 'centered';
content.id = 'content';
content.innerHTML = '<h1>CEWL Application</h1><p>Loaded!</p><br>And here is a <a' +
    ' href="./page.html">Page</a>.'


body.removeChild(spinner);
body.appendChild(content)
