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

function replaceTag(name, newElement) {
    const elements = document.getElementsByTagName(name);
    if (elements.length == 1) {
        elements[0].replaceWith(newElement)
    } else {
        console.error(`Expected to find one ${name} element, found ${elements.length}`)
    }
}

const SEMANTIC = {
  'header':
     elem('header', {}, [
       elem('hgroup', {}, [
         elem('h1', {innerText: 'CEWL App'}),
         elem('nav', {}, [
           elem('a', {href: './index.html', innerText: 'Home'}),
           elem('a', {href: './about.html', innerText: 'About'})
     ]) ]) ]),
  'footer':
    elem('footer', {}, [
      elem('hgroup', {}, ['Footer, copyright'])
    ])
}

const ROUTES = {
  'index.html':
    elem('article', {id: 'content'}, [
      elem('h1', {innerText: 'CEWL Application'}),
      elem('p', {innerText: 'Loaded!'}),
        elem('p', {}, [ 'And here is a ',
        elem('a', {href: './page.html', innerText: 'web page'}), '.'
      ])
    ])
}

window.onload = function appOnLoad() {
    Object.entries(SEMANTIC).forEach(([tag, element]) => replaceTag(tag, element));
    Object.entries(ROUTES).forEach(([suffix, element]) => {
        if (window.location.href.endsWith(suffix)) {
            replaceTag('article', element);
        }
    })
}
