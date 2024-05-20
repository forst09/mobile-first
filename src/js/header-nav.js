function headerNav() {
    let navHeader = document.querySelector('.header');

    if (navHeader) {
        if (window.innerWidth <= 1024) {
            let prevScrollPosition = window.scrollY;
            document.addEventListener('scroll', () => {
                let scrollPosition = window.scrollY;

                if (scrollPosition > 10) {
                    navHeader.style.setProperty('--bgOpacity', 1);
                }
                else {
                    navHeader.style.setProperty('--bgOpacity', 0);
                }
                if (prevScrollPosition <= scrollPosition && prevScrollPosition > 0 && scrollPosition > 0) {
                    navHeader.style.opacity = 0;
                    navHeader.style.pointerEvents = 'none';
                } else {
                    navHeader.style.opacity = 1;
                    navHeader.style.pointerEvents = 'all';
                }

                prevScrollPosition = scrollPosition;
            })
        }
    }
}

export default headerNav;

