document.querySelector("#show-login")
     .addEventListener("click", function () {
         document.querySelector(".popup").classList.add("active");
     });

     document.querySelector(".popup .close-btn")
     .addEventListener("click", function () {
         document.querySelector(".popup").classList.remove("active");
     });

const form = document.querySelector("#login");
form.addEventListener("submit", (event) => {
    event.preventDefault();
    const email = form.elements.email.value;
    const password = form.elements.password.value;

    if(email === "kimerkonge@hotmail.com" && password === "1234") {
        window.location.href = "./test.html";
    }
    else if (email === "kimerkonge@hotmail.com" && password !== "1234") {
        alert("Forkert kode. Prøv igen!")
    }
    else {
        alert("Kan ikke finde denne email :(")
    }


} )