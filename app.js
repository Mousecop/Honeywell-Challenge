var testQuerySelector = function() {
    var homeIcon = document.querySelector('.home');
    console.log(homeIcon.classList)
};

var toggleActiveClass = function() {
    var homeElement = document.querySelector('.home');
    var dashElement = document.querySelector('.dashboard');
    var servicesElement =  document.querySelector('.services');

    homeElement.addEventListener('click', function(e) {
        if(!(this.classList.contains('active-nav-item'))) {
            this.classList.add('active-nav-item')
        } else if(dashElement.classList.contains('active-nav-item')) {
            dashElement.classList.remove('active-nav-item')
        } else if(servicesElement.classList.contains('active-nav-item')) {
            servicesElement.classList.remove('active-nav-item')
        }
    })


    dashElement.addEventListener('click', function(e) {
        if(!(this.classList.contains('active-nav-item'))) {
            this.classList.add('active-nav-item')
        } else if(homeElement.classList.contains('active-nav-item')) {
            homeElement.classList.remove('active-nav-item')
        } else if(servicesElement.classList.contains('active-nav-item')) {
            servicesElement.classList.remove('active-nav-item')
        }
    })

    servicesElement.addEventListener('click', function(e) {
        if(!(this.classList.contains('active-nav-item'))) {
            this.classList.add('active-nav-item')
        } else if(dashElement.classList.contains('active-nav-item')) {
            dashElement.classList.remove('active-nav-item')
        } else if(homeElement.classList.contains('active-nav-item')) {
            homeElement.classList.remove('active-nav-item')
        }
    })
}

var toggleLeftNav = function() {
    var caretElement = document.querySelector('.caret');
    var leftNavUl = document.querySelector('.left-nav-ul');

    caretElement.addEventListener('click', function(e) {
        leftNavUl.classList.toggle('toggle-left-nav-window');
        caretElement.classList.toggle('caret-rotate');
    })
}


//Invocations
toggleLeftNav();
toggleActiveClass();
testQuerySelector();