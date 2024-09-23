let faq = document.querySelectorAll('#faqContainer .faq');

console.log(faq);

faq.forEach(e => {
    console.log(e);
    e.onclick = () => {
        e.classList.toggle('active');
    }
})


function showMessage() {
    alert("Button was clicked!");
}