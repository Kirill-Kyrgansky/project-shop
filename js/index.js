$(function () {
    $('.marquee').marquee({
        duration: 17000,
        startVisible: true,
        duplicated: true
    });
});


function closeDropdown() {
    const dropdowns = document.getElementsByClassName("dropdown-content");
    for (let i = 0; i < dropdowns.length; i++) {
        const openDropdown = dropdowns[i];
        if (openDropdown.classList.contains('show')) {
            openDropdown.classList.remove('show');
        }
    }
}

function showList(type) {
    this.closeDropdown()
    document.getElementById(type).classList.toggle("show");
}

closeWindow = window.onclick = function (event) {
    if (!event.target.matches('.dropdown')) {
        this.closeDropdown()
    }
}
