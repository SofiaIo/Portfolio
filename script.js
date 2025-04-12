document.addEventListener('DOMContentLoaded', () => {
    // Плавный скролл
    document.querySelectorAll('nav a').forEach(anchor => {
        anchor.addEventListener('click', function(e) {
            e.preventDefault();
            const targetId = this.getAttribute('href');
            document.querySelector(targetId).scrollIntoView({
                behavior: 'smooth'
            });
        });
    });
    
    // Модальное окно
    const contactForm = document.getElementById('contactForm');
    const modal = document.getElementById('successModal');
    const closeModal = document.querySelector('.close-modal');
    
    contactForm.addEventListener('submit', function(e) {
        e.preventDefault();
        
        // Здесь можно добавить код для отправки формы
        // Например, с помощью FormSubmit или EmailJS
        
        modal.style.display = 'flex';
        contactForm.reset();
    });
    
    closeModal.addEventListener('click', function() {
        modal.style.display = 'none';
    });
    
    window.addEventListener('click', function(e) {
        if (e.target === modal) {
            modal.style.display = 'none';
        }
    });
});