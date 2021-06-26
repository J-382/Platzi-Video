var canScroll = true
var sections = document.getElementsByClassName('section');
var userPosition = 0;

window.location.href = '#' + sections[userPosition].id
sections[userPosition].classList.add('section_activate')

function scrollPage(event){
    beScrolled = false
    if (event.deltaY < 0 || event.key === 'ArrowUp') {
        if (userPosition >= sections.length) {
            userPosition = sections.length - 1;
            document.getElementsByClassName("footer")[0].classList.remove("footer_complete");
        } else if (userPosition-1 >= 0){
            sections[userPosition].classList.remove('section_activate');
            sections[userPosition].classList.remove('section_activate_reverse');
            userPosition--;
            if (userPosition < sections.length - 1) document.getElementsByClassName("footer")[0].classList.remove("footer_active");
            window.location.href = '#' + sections[userPosition].id
            sections[userPosition].classList.add('section_activate_reverse');
            beScrolled = true
        }
    } else if (event.deltaY > 0 || event.key === 'ArrowDown') {
        if (userPosition + 1 < sections.length){
            sections[userPosition].classList.remove('section_activate');
            sections[userPosition].classList.remove('section_activate_reverse');
            userPosition++;
            if (userPosition == sections.length -1) document.getElementsByClassName("footer")[0].classList.add("footer_active");
            window.location.href = '#' + sections[userPosition].id
            sections[userPosition].classList.add('section_activate');
            beScrolled = true
        } else {
            userPosition += userPosition + 1 <= sections.length ? 1 : 0;
            document.getElementsByClassName("footer")[0].classList.add("footer_complete");
        }   
    }
    return !beScrolled
}

function makeScroll(event){
    if (canScroll) {
        canScroll = scrollPage(event);
        if(!canScroll) setTimeout(function(){canScroll = true;}, 500);
    }
}

window.addEventListener('wheel', function(event){
    makeScroll(event);
});

window.addEventListener('keydown', function(event){
    makeScroll(event);
});