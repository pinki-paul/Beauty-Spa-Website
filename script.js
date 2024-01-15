
//jquery code

$(document).ready(function(){


const sections = document.querySelectorAll("section[id]");
window.addEventListener("scroll", scrollActive);

function scrollActive() {
    const scrollY = window.pageYOffset;

    sections.forEach(current => {
        const sectionHeight = current.offsetHeight;
        const sectionTop = current.offsetTop - 85;
        sectionId = current.getAttribute('id');

        if (scrollY > sectionTop && scrollY <= sectionTop + sectionHeight) {
            document.querySelector(".navbar-nav a[href*=" + sectionId + ']').classList.add("active");
        }else{
            document.querySelector(".navbar-nav a[href*=" + sectionId + ']').classList.remove("active");
        }
    })
}

    //search toggle button
    $(function () {
        $('.toggle-overlay').click(function () {
            $('.search-overlay').toggleClass('open');
        })
    });

    //menu toggle button

    $('.menu-toggle').click(function () {
        $('.menu-toggle').toggleClass('active');
    });


    // Filter section

    $(".gallery-button").click(function () {
        var name = $(this).attr('data-filter');
        if (name = "all") {
            $(".shot-thumbnail").show("2000");
        } else {
            $(".shot-thumbnail").not('.' + name).hide("2000");
            $(".shot-thumbnail").filter("." + name).show("2000");
        }

        $(".navigation a").click(function () {
            $(this).addClass("active").siblings().removeClass("active");
        });

    });



});


