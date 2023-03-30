import './main.scss';

function component(text) {
    const element = document.createElement('h2');

    // Lodash, now imported by this script
    element.innerHTML = text;

    return element;
}

document.body.prepend(component('Проект собран на Webpack 5'));