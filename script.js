const faqs = document.querySelectorAll('.faq');

faqs.forEach((item) => {
    const btn = item.querySelector('.question');
    btn.addEventListener('click', () => {
        
        const isActive = item.classList.contains('active');

        faqs.forEach((faq) => {
            faq.classList.remove('active');
        });

        if (!isActive) {
            item.classList.add('active');
        }
    });
});
