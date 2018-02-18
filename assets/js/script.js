if ('serviceWorker' in navigator) {
    navigator.serviceWorker
        .register('../../sw.js')
        .then(function() { 
            console.log('Service Worker Registered');
        });
}

function documentReady(fn) {
    if (document.readyState != 'loading') {
        return fn();
    } 

    return document.addEventListener('DOMContentLoaded', fn);
}

var toggleClass = function(selector, value) {
    if (selector.classList.contains(value)) {
        selector.classList.remove(value);
    } else {
        selector.classList.add(value);
    }
}

var toggleSidebar = function() {
    Array.prototype.forEach.call(document.getElementsByClassName('button'), function(element, i) {
        toggleClass(element, 'active');
    });
    toggleClass(document.querySelector('main'), 'move-to-left');
    Array.prototype.forEach.call(document.getElementsByClassName('sidebar-item'), function(element, i) {
        toggleClass(element, 'active');
    });
    Array.prototype.forEach.call(document.getElementsByClassName('detail'), function(element, i) {
        toggleClass(element, 'move-info-to-right');
    });
}

documentReady(function() {
    Array.prototype.forEach.call(document.getElementsByClassName('button'), function(element, i) {
        element.addEventListener('click', function() {
            toggleSidebar();
        });
        element.addEventListener('tap', function() {
            toggleSidebar();
        });
    });

    document.addEventListener('keyup', function(e) {
        if (e.keyCode === 27) {
            toggleSidebar();
        }
    });


    if ('IntersectionObserver' in window) {
        function onIntersection(images, observer) {
            images.forEach(image => {
                observer.observe(image);
            });
        }

        var images = document.querySelectorAll('img');
        var config = {
            rootMargin: '50px 0px',
            threshold: 0.01
        };

        var observer = new IntersectionObserver(onIntersection, config);
    }
});