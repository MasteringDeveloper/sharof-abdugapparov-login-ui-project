function togglePassword() {
    var passwordInput = document.getElementById("passwordInput");
    var lockIcon = document.getElementById("lockIcon");

    if (passwordInput.type === "password") {
        passwordInput.type = "text";
        lockIcon.classList.remove("bxs-lock");
        lockIcon.classList.add("bxs-show");
    } else {
        passwordInput.type = "password";
        lockIcon.classList.remove("bxs-show");
        lockIcon.classList.add("bxs-lock");
    }
}
