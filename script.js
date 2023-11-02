const btnsQuestion = document.querySelectorAll('.question');
const answer = document.querySelector('.answer');
const icon = document.querySelector('.question img');

btnsQuestion.forEach((btn) => {
    
    btn.addEventListener('click', () => {
        answer.style.display='block';
        icon.style.transform = "rotate(180deg)";
    });
})

