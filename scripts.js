// Custom JavaScript for Unity Bengkel

document.addEventListener('DOMContentLoaded', function() {
    const contactForm = document.getElementById('contactForm');
    const formMessage = document.getElementById('formMessage');

    contactForm.addEventListener('submit', function(e) {
        e.preventDefault();

        // Mengambil nilai input
        const name = document.getElementById('name').value.trim();
        const email = document.getElementById('email').value.trim();
        const message = document.getElementById('message').value.trim();

        // Validasi sederhana
        if(name === '' || email === '' || message === '') {
            formMessage.textContent = 'Semua bidang harus diisi.';
            formMessage.style.color = 'red';
            return;
        }

        // Simulasi pengiriman (Anda dapat mengintegrasikan backend di sini)
        setTimeout(() => {
            formMessage.textContent = 'Pesan Anda telah terkirim!';
            formMessage.style.color = 'green';
            contactForm.reset();
        }, 1000);
    });
});
