document.addEventListener('DOMContentLoaded', () => {
    // Funkcija za dinamičko učitavanje i prikazivanje proizvoda
    function loadProducts(url, listId) {
        fetch(url)
            .then(response => response.json())
            .then(products => {
                const productList = document.getElementById(listId);
                products.forEach(product => {
                    const listItem = document.createElement('li');
                    listItem.textContent = `${product.name}  ${product.price}`;
                    productList.appendChild(listItem);
                });
            })
            .catch(error => console.error(`Error fetching data from ${url}:`, error));
    }

    // Učitavanje kafa
    loadProducts('coffee.json', 'coffee-list');

    // Učitavanje bezalkoholnih pića
    loadProducts('noalcohol.json', 'noalcohol-list');

    // Učitavanje voda
    loadProducts('wather.json', 'wather-list');

    // Učitavanje energetskih pića
    loadProducts('energy.json', 'energy-list');

    // Učitavanje žestokih pića
    loadProducts('alcohol.json', 'alcohol-list');

    // Učitavanje piva
    loadProducts('bear.json', 'bear-list');

    // Učitavanje koktela
    loadProducts('coctails.json', 'coctails-list');

    // Učitavanje vina
    loadProducts('vine.json', 'vine-list');
});
