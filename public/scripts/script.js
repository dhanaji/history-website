
// JavaScript to handle tab switching and highlighting the active tab
const tabButtons = document.querySelectorAll('.tab-button');
const tabContents = document.querySelectorAll('.tab-content');

// JavaScript for search functionality
const searchInput = document.getElementById('searchInput');
const searchButton = document.getElementById('searchButton');
//const tabContents = document.querySelectorAll('.tab-content');

tabButtons.forEach(button => {
    button.addEventListener('click', () => {
        const category = button.getAttribute('data-category');

        // Hide all tab contents
        tabContents.forEach(content => {
            content.style.display = 'none';
        });

        // Remove the "active-tab" class from all tab buttons
        tabButtons.forEach(tabButton => {
            tabButton.classList.remove('active-tab');
        });

        // Show the tab content associated with the clicked button
        const selectedContent = document.querySelector(`.tab-content[data-category="${category}"]`);
        selectedContent.style.display = 'block';

        // Add the "active-tab" class to the clicked tab button
        button.classList.add('active-tab');
    });
});



searchButton.addEventListener('click', () => {
    const searchText = searchInput.value.toLowerCase();

    tabContents.forEach(content => {
        const contentText = content.textContent.toLowerCase();
        if (contentText.includes(searchText)) {
            content.style.display = 'block';
        } else {
            content.style.display = 'none';
        }
    });
});
