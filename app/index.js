body = document.getElementsByTagName('body')[0];
spinner = document.getElementById('loading-spinner');
content = document.createElement('div');
content.classList = 'centered';
content.id = 'content';
content.innerText = 'Loaded!'


body.removeChild(spinner);
body.appendChild(content)
