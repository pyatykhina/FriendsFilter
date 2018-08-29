var leftList = document.querySelector('#friends__list-left');
var filteredFriendsLeft = document.querySelector('#filteredFriendsLeft');
var rightList = document.querySelector('#friends__list-right');
var filteredFriendsRight = document.querySelector('#filteredFriendsRight');

function isMatching(full, chunk) {
    if (full.toLowerCase().indexOf(chunk.toLowerCase()) >= 0) {
        return true;
    }

    return false;
}

function searchLeft() {
    var inputLeft = document.querySelector('.search__input-left');

    inputLeft.addEventListener('keyup', function() {
        var elementsLeft = leftList.getElementsByClassName('friend');

        filteredFriendsLeft.innerHTML = '';
        
        if (inputLeft.value !== '') {
            leftList.style.display = 'none';
            filteredFriendsLeft.style.display = 'block';
        }
        
        for (var element of elementsLeft) {
            if (isMatching(element.firstElementChild.lastElementChild.innerHTML, inputLeft.value)) {
                var filteredFriend = document.createElement('li');

                filteredFriend = element.cloneNode(true);
                filteredFriendsLeft.appendChild(filteredFriend);
            }
        }
        if (filteredFriendsLeft.firstChild == null) {
            var notFriends = document.createElement('div');
    
            notFriends.innerHTML= 'Друзей не найдено';
            notFriends.style.color = '#5b5b5b';
            filteredFriendsLeft.appendChild(notFriends);
        }
        if (inputLeft.value == '') {
            filteredFriendsLeft.innerHTML = '';
            leftList.style.display = 'block';
            filteredFriendsLeft.style.display = 'none';  
        }
    })
}

function searchRight() {
    var inputRight = document.querySelector('.search__input-right');

    inputRight.addEventListener('keyup', function() {
        var elementsRight = rightList.getElementsByClassName('friend');

        filteredFriendsRight.innerHTML = '';
        
        if (inputRight.value !== '') {
            rightList.style.display = 'none';
            filteredFriendsRight.style.display = 'block';
        }
        
        for (var element of elementsRight) {
            if (isMatching(element.firstElementChild.lastElementChild.innerHTML, inputRight.value)) {
                var filteredFriend = document.createElement('li');

                filteredFriend = element.cloneNode(true);
                filteredFriendsRight.appendChild(filteredFriend);
            }
        }
        if (filteredFriendsRight.firstChild == null) {
            var notFriends = document.createElement('div');
    
            notFriends.innerHTML= 'Друзей не найдено';
            notFriends.style.color = '#5b5b5b';
            filteredFriendsRight.appendChild(notFriends);
        }
        if (inputRight.value == '') {
            filteredFriendsRight.innerHTML = '';
            rightList.style.display = 'block';
            filteredFriendsRight.style.display = 'none';  
        }
    })
}

export {
    searchLeft,
    searchRight
}