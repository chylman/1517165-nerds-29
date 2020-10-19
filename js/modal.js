const sendMsgBtn = document.querySelector(".send-message");
const feedbackModal = document.querySelector(".modal-feedback");
const formFeedback = document.querySelector(".feedback-form");
const closeBtn = document.querySelector(".button-close");
const nameFeedback = document.querySelector(".name-form");
const emailFeedback = document.querySelector(".email-form");
const messageFeedback = document.querySelector(".message-form");
const sliderBtn = document.querySelectorAll(".slider-button");
const sliderContent = document.querySelector(".slider-content");
const sliderText = document.querySelectorAll(".slider-text");


sendMsgBtn.addEventListener("click", function(evt) {
    feedbackModal.classList.remove("hidden");
    feedbackModal.classList.add("modal-feedback-animation");
    nameFeedback.focus();
})

closeBtn.addEventListener("click", function(evt){
    feedbackModal.classList.add("hidden");
    feedbackModal.classList.remove("modal-eror");
    feedbackModal.classList.remove("modal-feedback-animation");
})

window.addEventListener("keydown", function(evt){
    if (evt.keyCode === 27){
        if (!feedbackModal.classList.contains("hidden")){    
        feedbackModal.classList.add("hidden");
        feedbackModal.classList.remove("modal-eror");
        feedbackModal.classList.remove("modal-feedback-animation");
        } 
    }
})


formFeedback.addEventListener("submit", function(evt){
    if (!nameFeedback.value || !emailFeedback.value || !messageFeedback.value) {
        evt.preventDefault();
        feedbackModal.classList.remove("modal-eror");
        feedbackModal.offsetWidth = feedbackModal.offsetWidth; 
        feedbackModal.classList.add("modal-eror");
    } 
})

//Slider

sliderBtn[0].addEventListener("click", function(evt){
    sliderContent.classList.remove("slider-bgr-1", "slider-bgr-2","slider-bgr-3");
    sliderContent.classList.add("slider-bgr-1");
    for (let i=0; i < 3; i++) {
    sliderText[i].classList.remove("slider-text-show");
    }
    sliderText[0].classList.add("slider-text-show");
    for (i=0; i<3; i++){
        sliderBtn[i].classList.remove("slider-button-active");    
    }    
    sliderBtn[0].classList.add("slider-button-active");
})

sliderBtn[1].addEventListener("click", function(evt){
    sliderContent.classList.remove("slider-bgr-1", "slider-bgr-2","slider-bgr-3");
    sliderContent.classList.add("slider-bgr-2");
    for (let i=0; i < 3; i++) {
    sliderText[i].classList.remove("slider-text-show");
    }
    sliderText[1].classList.add("slider-text-show");
    for (i=0; i<3; i++){
        sliderBtn[i].classList.remove("slider-button-active");    
    }    
    sliderBtn[1].classList.add("slider-button-active");
})

sliderBtn[2].addEventListener("click", function(evt){
    sliderContent.classList.remove("slider-bgr-1", "slider-bgr-2","slider-bgr-3");
    sliderContent.classList.add("slider-bgr-3");
    for (let i=0; i < 3; i++) {
    sliderText[i].classList.remove("slider-text-show");
    }
    sliderText[2].classList.add("slider-text-show");
    for (i=0; i<3; i++){
        sliderBtn[i].classList.remove("slider-button-active");    
    }    
    sliderBtn[2].classList.add("slider-button-active");
})

