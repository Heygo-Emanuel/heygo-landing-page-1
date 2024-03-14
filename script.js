/* Sticky header */
document.addEventListener('DOMContentLoaded', function() {
    let lastScrollTop = 0;
    const header = document.querySelector('header');

    window.addEventListener('scroll', function() {
        let currentScroll = window.pageYOffset || document.documentElement.scrollTop;

        if (currentScroll > lastScrollTop) {
            // Scroll down
            header.style.top = '-' + header.offsetHeight + 'px';
        } else {
            // Scroll up
            header.style.top = '0';
        }
        lastScrollTop = currentScroll <= 0 ? 0 : currentScroll;
    }, false);
});

// Sidebar / Eventlistener header-button-left
document.addEventListener('DOMContentLoaded', function() {
    const headerButtonLeft = document.querySelector('.header-button-left');
    const sidebar = document.querySelector('.sidebar');
    const overlay = document.querySelector('.overlay');
    let touchStartX = 0;
    let touchEndX = 0;

    function handleSwipeGesture() {
        if (touchStartX - touchEndX > 50) {
            closeSidebar();
        }
    }

    function closeSidebar() {
        sidebar.style.left = '-280px';
        overlay.style.display = 'none';
    }

    headerButtonLeft.addEventListener('click', function() {
        if (sidebar.style.left === '0px') {
            closeSidebar();
        } else {
            sidebar.style.left = '0';
            overlay.style.display = 'block';
        }
    });

    overlay.addEventListener('click', function() {
        closeSidebar();
    });

    sidebar.addEventListener('touchstart', function(e) {
        touchStartX = e.changedTouches[0].screenX;
    }, false);

    sidebar.addEventListener('touchend', function(e) {
        touchEndX = e.changedTouches[0].screenX;
        handleSwipeGesture();
    }, false);
});

/* Footer */
document.addEventListener('DOMContentLoaded', function() {
    var currentYear = new Date().getFullYear();
    document.querySelectorAll('.current-year-desktop, .current-year-mobile').forEach(function(el) {
        el.textContent = `© ${currentYear} Heygo`;
    });
});


/* Company Founders */
document.addEventListener('DOMContentLoaded', function() {
    // Initialize all collapse elements to be hidden
    var allCollapses = document.querySelectorAll('.accordion-collapse');
    allCollapses.forEach(function(collapse) {
        collapse.style.display = 'none';
    });

    // Add click event listener to all buttons
    document.querySelectorAll('.accordion-button').forEach(function(button) {
        button.addEventListener('click', function() {
            // Find the collapse element
            var content = this.nextElementSibling;
            var svg = this.querySelector('.accordion-item-svg'); // Find the SVG element

            // Toggle visibility of the collapse element
            if (content.style.display === 'block') {
                // If visible, hide it
                content.style.display = 'none';
                svg.classList.remove('rotate-svg'); // Remove the rotation class from the SVG
            } else {
                // If hidden, show it
                content.style.display = 'block';
                svg.classList.add('rotate-svg'); // Add the rotation class to the SVG
            }
        });
    });
});

/* Button to WhatsApp-Community*/
function redirectToWhatsApp() {
    setTimeout(function() {
        window.location.href = 'https://chat.whatsapp.com/EzIwTBB04Sf8N7vi0BXJIr';
    }, 300);
}