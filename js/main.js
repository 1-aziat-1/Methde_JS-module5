'use strict';
const list = document.querySelector('.list');

const addItem = (requestStr) => {
  const li = document.createElement('li');
  li.innerHTML = requestStr;
  list.append(li);
};

const delItem = (list) => {
  const item = list.lastElementChild;
  if (item === null) return alert('Список пуст!');
  item.remove();
};

const clearList = (list) => {
  list.innerHTML = '';
};

const fillList = () => {
  const requestStr = prompt(`Вы хотети что-то доавить в это список, удалить или очистить\n${list.outerHTML}\n?`);

  if (requestStr === 'exit' || requestStr === null) {
    alert('Досвидание');
    return;
  }

  if (requestStr.trim().length === 0) {
    alert('Вы ничего не ввели');
    return fillList();
  }

  if (requestStr === 'del') {
    delItem(list);
    return fillList();
  }

  if (requestStr === 'clear') {
    clearList(list);
    return fillList();
  }

  addItem(requestStr);
  return fillList();
};

fillList();
