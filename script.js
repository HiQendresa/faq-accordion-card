const faqs = document.querySelectorAll('.faq');

faqs.forEach((item) => {
    const btn = item.querySelector('.question');
    const answer = item.querySelector('.answer');
    const icon = item.querySelector('.question img');
    const question = item.querySelector('.question h3');
    
    btn.addEventListener('click', () => {
        faqs.forEach((faqItem) => {
            const faqAnswer = faqItem.querySelector('.answer');
            if (faqAnswer !== answer) {
                faqAnswer.style.display = 'none';
                icon.style.transform = "rotate(0deg)";
                question.style.fontWeight = 'regular';
            }
        });
      if (answer.style.display === 'none' || answer.style.display === '') {
                answer.style.display = 'block';
                icon.style.transform = "rotate(180deg)";
                question.style.fontWeight = 'bold';
            } else {
                answer.style.display = 'none';
                icon.style.transform = "rotate(0deg)";
                question.style.fontWeight = 'regular';
            }
        });
})


