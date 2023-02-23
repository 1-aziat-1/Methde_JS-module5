'use strict';

const item = document.querySelectorAll('.item');
const list = document.querySelector('.items');
const itemTitle = document.querySelectorAll('.item__title');
const textItem = document.querySelectorAll('.props__list');
const propsItemFour = document.querySelectorAll('.props__item_four');
const propsItemTwo = document.querySelectorAll('.props__item_two');

const titleThree = document.createElement('h2');
const textThree = document.createTextNode('This и прототипы объектов');
titleThree.classList.add('item__title');
titleThree.append(textThree);

list.prepend(item[1]);
item[4].before(item[0]);
textItem[2].before(itemTitle[3]);
textItem[5].before(itemTitle[1]);
textItem[4].before(itemTitle[4]);
textItem[4].replaceWith(textItem[3]);
itemTitle[2].after(textItem[4]);
itemTitle[2].replaceWith(titleThree);
propsItemFour[2].append(propsItemFour[5]);
propsItemTwo[7].append(propsItemTwo[8]);
propsItemTwo[8].append(propsItemTwo[9]);


