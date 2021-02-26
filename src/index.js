import _ from 'lodash';
import './style.css';
import './common.less';
import mainImage from '../images/app-construct.jpg';
import Data from '../images/data.xml';
import Notes from '../images/data.csv';

function component() {
    const element = document.createElement('div');

    // lodash（目前通过一个 script 引入）对于执行这一行是必需的
    // lodash，现在通过一个 script 引入
    element.innerHTML = _.join(['Hello', 'webpack'], ' ');
    element.classList.add('hello');

    return element;
}

function component2() {
    const element = document.createElement('div');

    // lodash（目前通过一个 script 引入）对于执行这一行是必需的
    // lodash，现在通过一个 script 引入
    element.innerHTML = _.join(['Hello', 'main'], ' ');
    element.classList.add('main');
    const child_el = document.createElement('p');
    child_el.innerHTML = "黑凤梨";
    child_el.classList.add('header');
    element.appendChild(child_el);
    const img_el = document.createElement('img');
    img_el.src = mainImage;
    element.appendChild(img_el);

    setTimeout(() => {
        console.log(Data);
        console.log(Notes);
    }, 6000);

    return element;
}

document.body.appendChild(component());
document.body.appendChild(component2());