// Variabel untuk melacak slide yang sedang aktif
let currentSlide = 0;
// Jumlah total slide
const totalSlides = 5;
// Elemen HTML dari wrapper slide
const carouselWrapper = document.querySelector('.carousel-wrapper');
// Semua elemen dot navigasi
const dots = document.querySelectorAll('.dot');

/**
 * Fungsi untuk memperbarui tampilan korsel ke slide tertentu.
 * @param {number} index - Indeks slide yang akan ditampilkan (0 sampai 4).
 */
function updateCarousel(index) {
    // Pastikan indeks berada dalam batas (0 hingga totalSlides - 1)
    if (index >= totalSlides) {
        currentSlide = 0; // Kembali ke slide pertama
    } else if (index < 0) {
        currentSlide = totalSlides - 1; // Pindah ke slide terakhir
    } else {
        currentSlide = index;
    }

    // Hitung pergeseran horizontal (translateX)
    // -0% untuk slide 1, -20% untuk slide 2, -40% untuk slide 3, dst.
    const offset = -currentSlide * (100 / totalSlides); 

    // Terapkan pergeseran ke carousel-wrapper
    carouselWrapper.style.transform = `translateX(${offset}%)`;

    // Perbarui status titik navigasi
    dots.forEach((dot, i) => {
        dot.classList.remove('active');
        if (i === currentSlide) {
            dot.classList.add('active');
        }
    });
}

/**
 * Pindah ke slide berikutnya (ke kanan).
 */
function nextSlide() {
    updateCarousel(currentSlide + 1);
}

/**
 * Pindah ke slide sebelumnya (ke kiri).
 */
function prevSlide() {
    updateCarousel(currentSlide - 1);
}

/**
 * Pindah langsung ke slide dengan indeks tertentu (digunakan oleh dot).
 * @param {number} index - Indeks slide tujuan.
 */
function goToSlide(index) {
    updateCarousel(index);
}

// Inisialisasi tampilan awal
updateCarousel(currentSlide);