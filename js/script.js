var initDemo = function () {
    var header = document.getElementById("header");
    var skin = location.href.split('skin=')[1];

    if (!skin) {
        skin = 'Snapgram';
    }

    if (skin.indexOf('#') !== -1) {
        skin = skin.split('#')[0];
    }

    var skins = {
        'Snapgram': {
            'avatars': true,
            'list': false,
            'autoFullScreen': false,
            'cubeEffect': true
        }

    };

    var timeIndex = 0;
    var shifts = [35, 60, 60 * 3, 60 * 60 * 2, 60 * 60 * 25, 60 * 60 * 24 * 4, 60 * 60 * 24 * 10];
    var timestamp = function () {
        var now = new Date();
        var shift = shifts[timeIndex++] || 0;
        var date = new Date(now - shift * 1000);

        return date.getTime() / 1000;
    };

    var stories = new Zuck('stories', {
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
                if(storyId === 'case5') {
                    $('#stories .story:first-child a').trigger('click');
                }
                callback();  // on end story
            }
        },
        stories: [
            {
                id: "case1",
                photo: "images/case1-img.jpg",
                name: "Медея",
                link: "https://ramon.codes",
                lastUpdated: timestamp(),
                items: [
                    Zuck.buildItem("case-1", "video", 3, "video/case1.TRIM.MOV", "https://raw.githubusercontent.com/ramon82/assets/master/zuck.js/stories/1.jpg", '#modal1', false, false, timestamp())
                ]
            },
            {
                id: "case2",
                photo: "images/case2-img.jpg",
                name: "Андрей",
                link: "",
                lastUpdated: timestamp(),
                items: [
                    Zuck.buildItem("case-2", "video", 0, "video/case2.mp4", "https://raw.githubusercontent.com/ramon82/assets/master/zuck.js/stories/4.jpg", '#modal1', false, false, timestamp())
                ]
            },
            {
                id: "case3",
                photo: "images/case3-img.jpg",
                name: "Светлана Горчеева",
                link: "",
                lastUpdated: timestamp(),
                items: [
                    Zuck.buildItem("case-3", "video", 5, "video/case3.mp4", "https://raw.githubusercontent.com/ramon82/assets/master/zuck.js/stories/6.jpg", '#modal1', false, false, timestamp())
                ]
            },
            {
                id: "case4",
                photo: "images/case4-img.jpg",
                name: "Андрей Тимонин",
                link: "",
                lastUpdated: timestamp(),
                items: [
                    Zuck.buildItem("case-4", "video", 5, "video/case4.MOV", "https://raw.githubusercontent.com/ramon82/assets/master/zuck.js/stories/8.jpg", '#modal1', false, false, timestamp())
                ]
            },
            {
                id: "case5",
                photo: "images/case5-img.jpg",
                name: "“Безопасный кекс”",
                link: "",
                lastUpdated: timestamp(),
                items: [
                    Zuck.buildItem("case-5", "photo", 10, "video/case5.jpg", "https://raw.githubusercontent.com/ramon82/assets/master/zuck.js/stories/9.jpg", '#modal1', false, false, timestamp())
                ]
            }
        ]
    });

    var el = document.querySelectorAll('#skin option');
    var total = el.length;
    for (var i = 0; i < total; i++) {
        var what = (skin == el[i].value) ? true : false;

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
    $('.slides .item').innerHTML = 'HELLO NIGGAS'
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

$(window).on('load', function () {
    initDemo();
    triggerClick();
    addTextStories();
    animation();
    menuToggle();
    triggerStories();
    closeDropdown();
    smoothScroll();
});

$(window).on('load', function () {

    $('.preload').fadeOut(800);
});

