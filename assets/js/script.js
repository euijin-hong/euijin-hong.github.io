const openModalButtons = document.querySelectorAll('[data-modal-target]')
const closeModalButtons = document.querySelectorAll('[data-close-button]')
const body = document.querySelector("body")
const overlay = document.getElementById('overlay')

openModalButtons.forEach(button => {
    button.addEventListener('click', () => {
        const modal = document.querySelector(button.dataset.modalTarget)
        openModal(modal)
    })
})

overlay.addEventListener('click', () => {
    const modals = document.querySelectorAll('.modal.active')
    modals.forEach(modal => {
        closeModal(modal)
    })
})
closeModalButtons.forEach(button => {
    button.addEventListener('click', () => {
        const modal = button.closest('.modal')
        closeModal(modal)
    })
})

function openModal(modal) {
    if (modal == null) return
    modal.classList.add('active')
    overlay.classList.add('active')
    body.style.overflow = "hidden"
}

function closeModal(modal) {
    if (modal == null) return
    modal.classList.remove('active')
    overlay.classList.remove('active')
    body.style.overflow=""
}

document.addEventListener('DOMContentLoaded', function () {
    // Get all menu items and add event listeners
    document.querySelectorAll('.menu-item').forEach(item => {
        item.addEventListener('click', function (event) {
            // Prevent default link behavior
            event.preventDefault();
            // Get the target section id from the clicked menu item's data-target attribute
            const sectionId = item.dataset.target;
            // Show the corresponding section
            showSection(sectionId);
        });
    });

    // Initially hide all sections except the first one and mark the first menu item as active
    document.querySelectorAll('.menu-section').forEach((section, index) => {
        if (index !== 0) {
            section.style.display = 'none';
        }
    });
    document.querySelector('.menu-item').classList.add('active');
});

// Function to show the section based on the clicked menu item
function showSection(sectionId) {
    // Hide all sections
    document.querySelectorAll('.menu-section').forEach(section => {
        section.style.display = 'none';
    });
    // Show the selected section
    document.getElementById(sectionId).style.display = 'block';

    // Remove 'active' class from all menu items
    document.querySelectorAll('.menu-item').forEach(item => {
        item.classList.remove('active');
    });
    // Add 'active' class to the clicked menu item
    document.querySelectorAll('[data-target="' + sectionId + '"]').forEach(item => {
        item.classList.add('active');
    });
}
