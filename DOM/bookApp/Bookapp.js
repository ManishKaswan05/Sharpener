document.addEventListener("DOMContentLoaded", function() {
    let userForm = document.getElementById("my-form");

    userForm.addEventListener("submit", function(event) {
        event.preventDefault();

        let name = document.getElementById("name").value;
        let email = document.getElementById("email").value;

        let userDetails = {
            name: name,
            email: email
        };

        localStorage.setItem("Userdetails", JSON.stringify(userDetails));

        alert("Successfully Submitted");

        userForm.reset();
    });
});