var leftList = document.querySelector('#friends__list-left');
var rightList = document.querySelector('#friends__list-right');

function dnd(zones) {
    var currentDrag;

    zones.forEach (zone => {
        zone.addEventListener('dragstart', e => {
            currentDrag = { source: zone, node: e.target };
        });

        zone.addEventListener('dragover', e => {
            e.preventDefault();
        });

        zone.addEventListener('drop', e => {
            if (currentDrag) {
                e.preventDefault();
                if (currentDrag.source !== zone) {
                    if (e.target.classList.contains('friend')) {
                        zone.insertBefore(currentDrag.node, e.target.nextElementSibling);
                    } else {
                        zone.appendChild(currentDrag.node);
                    }
                }
                if (currentDrag.source == leftList) {
                    currentDrag.node.lastElementChild.classList.remove('friend__button-left');
                    currentDrag.node.lastElementChild.classList.add('friend__button-right');
                } else {
                    currentDrag.node.lastElementChild.classList.remove('friend__button-right');
                    currentDrag.node.lastElementChild.classList.add('friend__button-left');
                }
                currentDrag = null;
            }
        });
    });
}

function dndButton() {
    var currentDrag;

    leftList.addEventListener('click', e => {
        if (e.target.classList.contains('friend__button')) {
            currentDrag = { source: leftList, node: e.target.parentNode };
            leftList.removeChild(currentDrag.node);
            rightList.appendChild(currentDrag.node);
            currentDrag.node.lastElementChild.classList.remove('friend__button-left');
            currentDrag.node.lastElementChild.classList.add('friend__button-right');
        }
    })

    rightList.addEventListener('click', e => {
        if (e.target.classList.contains('friend__button')) {
            currentDrag = { source: rightList, node: e.target.parentNode };
            rightList.removeChild(currentDrag.node);
            leftList.appendChild(currentDrag.node);
            currentDrag.node.lastElementChild.classList.remove('friend__button-right');
            currentDrag.node.lastElementChild.classList.add('friend__button-left');
        }
    })
}

export {
    dnd,
    dndButton
}