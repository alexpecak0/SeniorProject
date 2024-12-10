document.querySelectorAll('.brands-category.caution h3').forEach(header => {
    header.addEventListener('click', () => {
        const brandList = header.nextElementSibling;
        brandList.classList.toggle('hidden');
    });
});