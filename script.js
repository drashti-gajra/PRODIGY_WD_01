window.addEventListener('scroll', function() {
    const navbar = document.getElementById('navbar');
    if (window.scrollY > 50) {
        navbar.style.backgroundColor = '#000';
    } else {
        navbar.style.backgroundColor = '#333';
    }
});

const menuItems = document.querySelectorAll('nav ul li a');
menuItems.forEach(item => {
    item.addEventListener('mouseenter', () => {
        item.style.color = '#ff0';
    });
    item.addEventListener('mouseleave', () => {
        item.style.color = '#fff';
    });
});
