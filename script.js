document.addEventListener("DOMContentLoaded", function () {
    const links = document.querySelectorAll("a");

    links.forEach(link => {
        link.addEventListener("click", function (event) {
            if (link.hash) {
                event.preventDefault();
                const target = document.querySelector(link.hash);
                if (target) {
                    window.scrollTo({
                        top: target.offsetTop,
                        behavior: "smooth"
                    });
                }
            }
        });
    });
});
