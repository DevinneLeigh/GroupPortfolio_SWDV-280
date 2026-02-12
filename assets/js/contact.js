(function(){
    emailjs.init("hk3ozmu2Kg_JRClBj");
})();

document.getElementById("contact-form")
.addEventListener("submit", function(event) {
    event.preventDefault();

    const button = this.querySelector("button");
    button.disabled = true;
    button.innerText = "Sending...";

    emailjs.sendForm("service_pd7jq6x", "template_1jwmn1d", this)
    .then(function() {
        window.location.href = "message-confirm.html";
    }, function(error) {
        console.log(error);
        document.getElementById("status").innerText = "Failed to send message.";
    });
});