(function(){
    emailjs.init("hk3ozmu2Kg_JRClBj");
})();

document.getElementById("contact-form")
.addEventListener("submit", function(event) {
    event.preventDefault();

    emailjs.sendForm("service_pd7jq6x", "template_1jwmn1d", this)
    .then(function() {
        document.getElementById("status").innerText = "Message sent successfully!";
        document.getElementById("contact-form").reset();
    }, function(error) {
        document.getElementById("status").innerText = "Failed to send message.";
          console.log(error);
    });
});