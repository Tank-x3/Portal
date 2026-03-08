document.addEventListener('DOMContentLoaded', () => {
    // ページ内のすべてのカルーセル要素を対象にする
    const carousels = document.querySelectorAll('.carousel');

    carousels.forEach(carousel => {
        const slides = carousel.querySelectorAll('.carousel-slide');
        const prevButton = carousel.querySelector('.carousel-prev');
        const nextButton = carousel.querySelector('.carousel-next');
        const counter = carousel.querySelector('.carousel-counter');
        
        let currentSlide = 0;
        const totalSlides = slides.length;

        function showSlide(index) {
            // すべてのスライドを一旦非表示に
            slides.forEach(slide => {
                slide.classList.remove('active');
            });
            
            // 該当するスライドを表示
            slides[index].classList.add('active');
            
            // カウンターを更新
            if (counter) {
                counter.textContent = `${index + 1} / ${totalSlides}`;
            }

            // ボタンの表示/非表示を制御
            prevButton.disabled = index === 0;
            nextButton.disabled = index === totalSlides - 1;
        }

        prevButton.addEventListener('click', () => {
            if (currentSlide > 0) {
                currentSlide--;
                showSlide(currentSlide);
            }
        });

        nextButton.addEventListener('click', () => {
            if (currentSlide < totalSlides - 1) {
                currentSlide++;
                showSlide(currentSlide);
            }
        });

        // 初期表示
        showSlide(currentSlide);
    });
});