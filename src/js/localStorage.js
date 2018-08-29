var leftList = document.querySelector('#friends__list-left');
var rightList = document.querySelector('#friends__list-right');

var leftArray = [];
var rightArray = [];

function saveInLocalStorage() {
    leftArray = [];
    rightArray = [];
    
    for (var elementLeft of leftList.children) {
        leftArray.push({
            name: elementLeft.querySelector('.friend__name').innerHTML,
            photo: elementLeft.querySelector('.friend__photo').src,
            button: elementLeft.querySelector('.friend__button-left')
        });
    }
    for (var elementRight of rightList.children) {
        rightArray.push({
            name: elementRight.querySelector('.friend__name').innerHTML,
            photo: elementRight.querySelector('.friend__photo').src,
            button: elementRight.querySelector('.friend__button-right')
        });
    }

    localStorage.leftList = '';
    localStorage.leftList = JSON.stringify(leftArray);

    localStorage.rightList = '';
    localStorage.rightList = JSON.stringify(rightArray);

    alert('Сохранено!');
}

function loadFromLocalStorage() {
    leftArray = JSON.parse(localStorage.leftList);
    rightArray = JSON.parse(localStorage.rightList);

    leftList.innerHTML = ' ';
    rightList.innerHTML = ' ';
    var leftArrayLength = leftArray.length;
    var rightArrayLength = rightArray.length;

    for (var i = 0; i < leftArrayLength; i++) {
        var elementLeft = document.createElement('li');

        elementLeft.setAttribute('draggable', 'true');

        var friendInfoLeft = document.createElement('div');
        var friendPhotoLeft = document.createElement('img');
        var friendNameLeft = document.createElement('div');
        var friendButtonLeft = document.createElement('div');

        elementLeft.classList.add('friend');
        friendInfoLeft.classList.add('friend__info');
        friendPhotoLeft.classList.add('friend__photo');
        friendNameLeft.classList.add('friend__name');
        friendButtonLeft.classList.add('friend__button');
        friendButtonLeft.classList.add('friend__button-left');

        friendNameLeft.innerHTML = leftArray[i].name;
        friendPhotoLeft.src = leftArray[i].photo;

        friendInfoLeft.appendChild(friendPhotoLeft);
        friendInfoLeft.appendChild(friendNameLeft);

        elementLeft.appendChild(friendInfoLeft);
        elementLeft.appendChild(friendButtonLeft);

        leftList.append(elementLeft);
    }

    for (var j = 0; j < rightArrayLength; j++) {
        var elementRight = document.createElement('li');

        elementRight.setAttribute('draggable', 'true');

        var friendInfoRight = document.createElement('div');
        var friendPhotoRight = document.createElement('img');
        var friendNameRight = document.createElement('div');
        var friendButtonRight = document.createElement('div');

        elementRight.classList.add('friend');
        friendInfoRight.classList.add('friend__info');
        friendPhotoRight.classList.add('friend__photo');
        friendNameRight.classList.add('friend__name');
        friendButtonRight.classList.add('friend__button');
        friendButtonRight.classList.add('friend__button-right');

        friendNameRight.innerHTML = rightArray[j].name;
        friendPhotoRight.src = rightArray[j].photo;

        friendInfoRight.appendChild(friendPhotoRight);
        friendInfoRight.appendChild(friendNameRight);

        elementRight.appendChild(friendInfoRight);
        elementRight.appendChild(friendButtonRight);

        rightList.append(elementRight);
    }
}

export {
    saveInLocalStorage,
    loadFromLocalStorage
}
