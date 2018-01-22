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

var toggleProfileImageClick = function() {
    var profileImage = document.querySelector('.profile-image');
    var xIcon = document.querySelector('.x-icon');
    var containerElement = document.querySelector('.profile-container');
    var profileName = document.querySelector('.profile-name');
    var dropDownDrawer = document.querySelector('.dropdown-menu-ul');
    var dropDownItems = document.querySelectorAll('.dropdown-item');

    profileImage.addEventListener('click', function(e) {
        e.preventDefault();

        this.classList.add('profile-image-click');
        xIcon.classList.add('x-icon-toggle');
        containerElement.classList.add('profile-container-toggle');
        profileName.classList.add('profile-name-toggle');
        dropDownDrawer.classList.add('dropdown-menu-ul-toggle');

        //Loop to add class to all dropdown menu items
        for(var i =0; i<dropDownItems.length; i++) {
            dropDownItems[i].classList.add('dropdown-item-toggle');
        }

        //Loop to stagger sliding transition
        for(var i =0; i<dropDownItems.length; i++) {
            dropDownItems[i].classList.add('slide-item-toggle');
        }

    })

    xIcon.addEventListener('click', function(e) {
        e.preventDefault();

        this.classList.remove('x-icon-toggle');
        profileImage.classList.remove('profile-image-click');
        containerElement.classList.remove('profile-container-toggle');
        profileName.classList.remove('profile-name-toggle');
        dropDownDrawer.classList.remove('dropdown-menu-ul-toggle');

        //Loop to remove class to all dropdown menu items
        for(var i =0; i<dropDownItems.length; i++) {
            dropDownItems[i].classList.remove('dropdown-item-toggle');
        }

        //Loop to remove stagger sliding transition
        for(var i =0; i<dropDownItems.length; i++) {
            dropDownItems[i].classList.remove('slide-item-toggle');
        }
    })
}


//Invocations
toggleProfileImageClick();
toggleLeftNav();
toggleActiveClass();