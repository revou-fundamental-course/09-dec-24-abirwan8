// Ini Javascript

document.addEventListener('DOMContentLoaded', function () {
    let currentIndex = 0;
    const slides = document.querySelectorAll('.banner-slide');
    const totalSlides = slides.length;

    function showNextSlide() {
        // Menyembunyikan gambar sebelumnya
        slides[currentIndex].classList.remove('active');
        
        // Mengubah indeks gambar berikutnya
        currentIndex = (currentIndex + 1) % totalSlides;
        
        // Menampilkan gambar berikutnya
        slides[currentIndex].classList.add('active');
    }

    // Menampilkan gambar pertama
    slides[currentIndex].classList.add('active');

    // Menjalankan autoslide setiap 3 detik
    setInterval(showNextSlide, 3000);
});