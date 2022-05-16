
function elem(tag, props = {}, children = []) {
    const element = document.createElement(tag);
    Object.entries(props).forEach( ([k, v]) => {element[k] = v});
    children.forEach(c => {
        if (typeof (c) == 'string') {
            element.appendChild(document.createTextNode(c));
        } else {
            element.appendChild(c);
        }
    });
    return element;
}

function createIndexContent() {
    return elem('div', {id: 'content', classList: ['centered']},
        [
            elem('h1', {innerText: 'CEWL Application'}),
            elem('p', {innerText: 'Loaded!'}),
            elem('p', {}, [
                'And here is a ',
                elem('a', {href: './page.html', innerText: 'web page'}), '.'
            ])
        ]);
}

function addHeader() {
    const headers = document.getElementsByTagName('header');
    if (headers) {
        headers[0].replaceWith(
            elem('header', {}, [
            elem('hgroup', {}, [
                elem('h1', {innerText: 'CEWL Application'}),
                elem('nav', {}, [
                    elem('a', {href: './index.html', innerText: 'Home'}),
                    elem('a', {href: './about.html', innerText: 'About'})
                ])
            ])
        ]));
    }
}

function addFooter() {
    const footers = document.getElementsByTagName('footer');
    if (footers) {
        footers[0].replaceWith(
            elem('footer', {}, [
                elem('hgroup', {}, ['Footer, copyright'])
            ]));
    }
}

function appOnLoad() {
    addHeader();
    addFooter();
}

function loadIndexContent() {
    body = document.getElementsByTagName('body')[0];
    body.removeChild(document.getElementById('loading-spinner'));
    body.appendChild(createIndexContent())
}



