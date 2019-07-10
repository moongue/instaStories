let initDemo = function () {
    let header = document.getElementById("header");
    let skin = location.href.split('skin=')[1];

    if (!skin) {
        skin = 'Snapgram';
    }

    if (skin.indexOf('#') !== -1) {
        skin = skin.split('#')[0];
    }

    let skins = {
        'Snapgram': {
            'avatars': true,
            'list': false,
            'autoFullScreen': false,
            'cubeEffect': true
        }

    };

    let timeIndex = 0;
    let shifts = [35, 60, 60 * 3, 60 * 60 * 2, 60 * 60 * 25, 60 * 60 * 24 * 4, 60 * 60 * 24 * 10];
    let timestamp = function () {
        let now = new Date();
        let shift = shifts[timeIndex++] || 0;
        let date = new Date(now - shift * 1000);

        return date.getTime() / 1000;
    };

    let stories = new Zuck('stories', {
        backNative: true,
        previousTap: true,
        autoFullScreen: skins[skin]['autoFullScreen'],
        skin: skin,
        avatars: skins[skin]['avatars'],
        list: skins[skin]['list'],
        cubeEffect: skins[skin]['cubeEffect'],
        localStorage: true,
        callbacks: {
            'onEnd': function (storyId, callback) {
                // alert(storyId);
                if (storyId === 'case5') {
                    $('#stories .story:first-child a').trigger('click');
                }
                callback();  // on end story
            },
            'onView': function(storyId) {
                if ($("div[data-story-id='" + storyId + "'] > video").load()) {

                    $("div[data-story-id='" + storyId + "'] > .slides-pointers").addClass('show');
                }
            },
        },
        stories: [
            {
                id: "preview",
                photo: "images/logo.svg",
                name: "Shohnin & Co",
                link: "https://ramon.codes",
                lastUpdated: timestamp(),
                items: [
                    Zuck.buildItem("preview", "", 20, "<div class='title-stories'>Раскрутка инстаграм аккаунта</div><div class='text-stories'>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Architecto asperiores delectus eos expedita ipsam laudantium libero magnam minima molestias nisi odit placeat quasi reiciendis repellendus tempore temporibus, unde velit vero!</div>", "https://raw.githubusercontent.com/ramon82/assets/master/zuck.js/stories/1.jpg", '#modal1', false, false, timestamp())
                ]
            },
            {
                id: "case1",
                photo: "images/logo.svg",
                name: "Shohnin & Co",
                link: "https://ramon.codes",
                lastUpdated: timestamp(),
                items: [
                    Zuck.buildItem("case-1", "video", 20, "video/case1.mp4", "https://raw.githubusercontent.com/ramon82/assets/master/zuck.js/stories/1.jpg", '#modal1', false, false, timestamp())
                ]
            },
            {
                id: "case2",
                photo: "images/logo.svg",
                name: "Shohnin & Co",
                link: "",
                lastUpdated: timestamp(),
                items: [
                    Zuck.buildItem("case-3", "", 15, "<img src='video/case5.jpg' alt=''>", "https://raw.githubusercontent.com/ramon82/assets/master/zuck.js/stories/9.jpg", '#modal1', false, false, timestamp())
                ]
            },
            {
                id: "case3",
                photo: "images/logo.svg",
                name: "Shohnin & Co",
                link: "",
                lastUpdated: timestamp(),
                items: [
                    Zuck.buildItem("case-4", "video", 0, "video/case2.mp4", "https://raw.githubusercontent.com/ramon82/assets/master/zuck.js/stories/4.jpg", '#modal1', false, false, timestamp())
                ]
            },
            {
                id: "case4",
                photo: "images/logo.svg",
                name: "Shohnin & Co",
                link: "",
                lastUpdated: timestamp(),
                items: [
                    Zuck.buildItem("case-5", "video", 5, "video/case3.mp4", "https://raw.githubusercontent.com/ramon82/assets/master/zuck.js/stories/6.jpg", '#modal1', false, false, timestamp())
                ]
            },
            {
                id: "case5",
                photo: "images/logo.svg",
                name: "Shohnin & Co",
                link: "",
                lastUpdated: timestamp(),
                items: [
                    Zuck.buildItem("case-4", "video", 5, "video/case4.mp4", "https://raw.githubusercontent.com/ramon82/assets/master/zuck.js/stories/8.jpg", '#modal1', false, false, timestamp())
                ]
            },

        ]
    });

    let el = document.querySelectorAll('#skin option');
    let total = el.length;
    for (let i = 0; i < total; i++) {
        let what = (skin == el[i].value) ? true : false;

        if (what) {
            el[i].setAttribute('selected', what);

            header.innerHTML = skin;
            header.className = skin;
        } else {
            el[i].removeAttribute('selected');
        }
    }

    document.body.style.display = 'block';
};


function addTextStories() {
    // $('.slides .item').innerHTML = 'HELLO NIGGAS';


}

function triggerClick() {
    setTimeout(function () {
        $('#stories .story:first-child a').trigger('click');
    }, 0);
}

function animation() {
    $(".modal").animated("bounceInUp", "fadeOutDown");
}

function menuToggle() {
    $('.menu-toggle').click(function () {
        $('.dropdown-menu').toggleClass('active');
    })
}

function triggerStories() {
    $('.dropdown-menu .first-stories').click(function () {
        $('#stories .story:first-child a').trigger('click');
    });
    $('.dropdown-menu .second-stories').click(function () {
        $('#stories .story:nth-child(2) a').trigger('click');
    });
    $('.dropdown-menu .third-stories').click(function () {
        $('#stories .story:nth-child(3) a').trigger('click');
    });
    $('.dropdown-menu .four-stories').click(function () {
        $('#stories .story:nth-child(4) a').trigger('click');
    });
    $('.dropdown-menu .five-stories').click(function () {
        $('#stories .story:nth-child(5) a').trigger('click');
    });
}

function closeDropdown() {
    $('.dropdown-menu li').click(function () {
        $('.dropdown-menu').removeClass('active');
        $('.ham').removeClass('active');
    })
}

function smoothScroll() {
    $(".smooth-scroll").mPageScroll2id();
}

function swipeUnderStories() {
    document.addEventListener('swiped-up', function (e) {
        // console.log(e.target); // the element that was swiped
        let elem = e.target;
        if ($(elem).hasClass('item')) {
            $('html, body').animate({
                scrollTop: $("#howWorks").offset().top
            }, 1000);
        }
    });
}

function fluidVh() {
    let vh = window.innerHeight * 0.01;
// Then we set the value in the --vh custom property to the root of the document
    document.documentElement.style.setProperty('--vh', `${vh}px`);
}

$(window).on('load', function () {
    initDemo();
    triggerClick();
    addTextStories();
    animation();
    menuToggle();
    triggerStories();
    closeDropdown();
    smoothScroll();
    swipeUnderStories();
    fluidVh();
});

$(window).on('load', function () {

    $('.wrap-circle').addClass('hidden');
});

