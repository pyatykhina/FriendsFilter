import './style/style.scss';
import render from './templates/friends-api.hbs';
import { dnd, dndButton } from './js/dnd';
import { authorization, callAPI } from './js/vk';
import { searchLeft, searchRight } from './js/search';
import { saveInLocalStorage, loadFromLocalStorage } from './js/localStorage';

var leftList = document.querySelector('#friends__list-left');
var rightList = document.querySelector('#friends__list-right');
var button = document.querySelector('.footer__button');

authorization()
    .then(function () {
        return callAPI('friends.get', { fields: 'photo_100' });
    }) 
    .then(friends => {
        if ((localStorage.getItem('leftList') == null) || (localStorage.getItem('rightList') == null)) { 
            leftList.innerHTML = render(friends);
        } else {
            loadFromLocalStorage();
        }
    })

dnd([leftList, rightList]);
dndButton();

searchLeft();
searchRight();

button.addEventListener('click', function() {
    saveInLocalStorage();
})