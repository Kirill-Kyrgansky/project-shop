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
    closeDropdown();
    document.getElementById(type).classList.toggle("show");
}

window.onclick = function (event) {
    if (!event.target.matches('.dropdown')) {
        closeDropdown();
    }
};

function getFile(fileName) {
    return new Promise((resolve, reject) => {
        let request = new XMLHttpRequest();
        request.open('GET', fileName, true);

        request.onload = function () {
            if (request.status === 200) {
                try {
                    const data = JSON.parse(request.responseText);
                    resolve(data);
                } catch (error) {
                    reject(error);
                }
            } else {
                reject(new Error('Request failed. Status: ' + request.status));
            }
        };

        request.onerror = function () {
            reject(new Error('Request failed'));
        };
        request.send();
    });
}

getFile('../statics/data/products.json')
    .then((data) => {
        const productListContainer = document.getElementById('product-list');
        data.products.forEach((product) => {
            const productElement = document.createElement('div');
            productElement.innerHTML = `
        <h3>${product.name}</h3>
        <p>Цена: ${product.price}</p>
      `;
            productListContainer.appendChild(productElement);
        });
    })
    .catch((error) => {
        console.error(error);
        // Обработка ошибок
    });
