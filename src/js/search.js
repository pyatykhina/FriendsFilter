var leftList = document.querySelector('#friends__list-left');
var rightList = document.querySelector('#friends__list-right');

function isMatching(full, chunk) {
    if (full.toLowerCase().indexOf(chunk.toLowerCase()) >= 0) {
        return true;
    }

    return false;
}

function searchLeft() {
    var inputLeft = document.querySelector('.search__input-left');

    inputLeft.addEventListener('keyup', function () {
        var elementsLeft = leftList.getElementsByClassName('friend');

        if (inputLeft.value !== '') {
            for (var friend of elementsLeft) {
                friend.style.display = 'none';

                if (isMatching(friend.firstElementChild.lastElementChild.innerHTML, inputLeft.value)) {
                    friend.style.display = 'flex';
                }
            }
        } else {
            for (var friend of elementsLeft) {
                friend.style.display = 'flex';
            }
        }
    })
}

function searchRight() {
    var inputRight = document.querySelector('.search__input-right');

    inputRight.addEventListener('keyup', function () {
        var elementsRight = rightList.getElementsByClassName('friend');

        if (inputRight.value !== '') {
            for (var friend of elementsRight) {
                friend.style.display = 'none';

                if (isMatching(friend.firstElementChild.lastElementChild.innerHTML, inputRight.value)) {
                    friend.style.display = 'flex';
                }
            }
        } else {
            for (var friend of elementsRight) {
                friend.style.display = 'flex';
            }
        }
    })
}

function restoreLeft(friend) {

    var inputLeft = document.querySelector('.search__input-left');

    if (inputLeft.value !== '') {
        friend.style.display = 'none';

        if (isMatching(friend.firstElementChild.lastElementChild.innerHTML, inputLeft.value)) {
            friend.style.display = 'flex';
        }
    } 
}

function restoreRight(friend) {

    var inputRight = document.querySelector('.search__input-right');

    if (inputRight.value !== '') {
        friend.style.display = 'none';

        if (isMatching(friend.firstElementChild.lastElementChild.innerHTML, inputRight.value)) {
            friend.style.display = 'flex';
        }
    } 
}

export {
    searchLeft,
    searchRight,

    restoreLeft,
    restoreRight
}