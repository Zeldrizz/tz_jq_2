function $(selector) {
    let element;
    if (typeof selector === 'string') {
        element = document.querySelectorAll(selector)
    } else if (selector instanceof HTMLElement){
        element = [selector];
    }
    return new JQ(element)
}

function JQ(params) {
    this.element = params;
    this.start = function (event, callBckFunc) {
        for (let i = 0; i < this.element.length; i++) {
            this.element[i].addEventListener(event, callBckFunc);
        }
    }
    this.html = function (html) {
        if (typeof html === 'string' || typeof html === 'number') {
            for (let i = 0; i < this.element.length; i++) {
                this.element[i].innerHTML = html;
            } 
        } else if(html === undefined){
            return this.element[0].innerHTML
        }
    }
    this.css = function (styleName, value){
        if (typeof styleName === 'string' && (typeof value === 'string' || typeof value === 'number')) {
            for (let i = 0; i < this.element.length; i++) {
                this.element[i].style = `${styleName} : ${value};`
            }
        } else if (typeof styleName === 'object'){
            for (let i = 0; i < this.element.length; i++) {
                for (const key in object) {
                    this.element[i].style[key] = styleName[key]; 
                }
            }
        }
    }
    this.hasClass = function (className) {
        if (typeof className === 'string') {
            for (let i = 0; i < this.element.length; i++) {
                if (this.element[i].classList.contains(className)) {
                    this.element[i].innerHTML = 'Я содержу класс ' + className;
                } else {
                    this.element[i].innerHTML = 'Во мне нет класса ' + className;
                }
            }
        }
    }
    this.mouseover = function(callBckFunc){
        if (typeof callBckFunc === 'function') {
            this.start('mouseover',callBckFunc)
        }
    }
    this.hasChildren = function () {
            for (let i = 0; i < this.element.length; i++) {
                if (this.element[i].hasChildNodes()) {
                    this.element[i].innerHTML = 'Здесь есть дочерний элемент';
                } else{
                    this.element[i].innerHTML = 'Здесь нет дочернего элемента';
                }
            }
        }
}

// if (typeof child === 'string') {
//     var parent = document.querySelectorAll('.div');
//     var childr = parent.querySelector('.p');
//         if (childr.classList.contains(child)) {
//             for (let i = 0; i < this.element.length; i++) {
//             this.element[i].innerHTML = 'Здесь есть дочерний элемент';
//             }
//         } else{
//             for (let i = 0; i < this.element.length; i++) {
//             this.element[i].innerHTML = 'Здесь нет дочернего элемента';
//             }
//         }
// }