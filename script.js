
    let lastScroll = 0;
    const header = document.querySelector(".menu");

    window.addEventListener("scroll", () => {
        let currentScroll = window.scrollY;

        if (currentScroll > lastScroll) {
            // scrolling down → hide navbar
            header.classList.add("hide");
        } else {
            // scrolling up → show navbar
            header.classList.remove("hide");
        }

        lastScroll = currentScroll;
    });

    
