const order = document.querySelector(".solutions-btn");
const form = document.querySelector(".backdrop");
const closeForm = document.querySelector(".modal-close-btn");
const sendForm = document.querySelector(".modal-send-btn");
const inputForm = document.querySelector(".modal-input");
const textareaForm = document.querySelector(".modal-textarea");
const footerInput = document.querySelector(".footer-input"); 
const sendEmail = document.querySelector(".footer-subscribe-btn");
const menuBtn = document.querySelector(".open-menu-btn");
const menu = document.querySelector(".mob-menu");
const menuClose = document.querySelector(".mob-menu-close-btn");
const menuPoint = document.querySelectorAll(".mob-menu-list-item");

menuBtn.addEventListener("click", (event) => {
    event.preventDefault();
    menu.classList.add("is-open");
})

menuPoint.forEach((element) => {
    element.addEventListener("click", (event) => {
        event.preventDefault();
        menu.classList.remove("is-open");
    });
})

menuClose.addEventListener("click", (event) => {
    event.preventDefault;
    menu.classList.remove("is-open");
})

order.addEventListener("click", (event) => {
    event.preventDefault();
    form.classList.add("is-open");
})

closeForm.addEventListener("click", (event) => {
    event.preventDefault();
    form.classList.remove("is-open");
})

sendForm.addEventListener("click", (event) => {
    event.preventDefault();
    if(inputForm.value && textareaForm.value) {
        iziToast.success({
            title: 'Success!',
            position: 'center',
            message: 'Thank you! We will call you back within 15min.',
        }); 
        form.classList.remove("is-open");
        inputForm.value = "";
        textareaForm.value = "";
    } else {
        iziToast.warning({
            title: 'Caution',
            position: 'center',
            message: 'You should fill in all fields!',
        });
    }
})

sendEmail.addEventListener("click", (event) => {
    event.preventDefault();

    if(footerInput.value) {
        iziToast.success({
            title: 'Success!',
            position: 'center',
            message: 'Thank you!',
        }); 
        footerInput.value = "";
    } else {
        iziToast.warning({
            title: 'Caution',
            position: 'center',
            message: 'You should enter your email address!',
        });
    }

})

