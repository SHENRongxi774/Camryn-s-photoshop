document.addEventListener('DOMContentLoaded', function() {
    document.querySelector('.resizable-image').addEventListener('click', function() {
        this.classList.toggle('enlarged');
    });
});