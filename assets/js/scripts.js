// ==================== DARK MODE ====================
const toggle = document.getElementById("btn-theme");

if (localStorage.getItem("theme") === "dark") {
    document.body.classList.add("dark");
}

toggle.addEventListener("click", () => {
    document.body.classList.toggle("dark");

    if (document.body.classList.contains("dark")) {
        localStorage.setItem("theme", "dark");
    } else {
        localStorage.setItem("theme", "light");
    }
});


// ==================== MÁSCARAS FORMULÁRIO ====================
const cpf = document.getElementById("cpf");
const tel = document.getElementById("tel");
const cep = document.getElementById("cep");

if (cpf) {
    cpf.addEventListener("input", () => {
        cpf.value = cpf.value
            .replace(/\D/g, "") // remove não numeros
            .replace(/(\d{3})(\d)/, "$1.$2")
            .replace(/(\d{3})(\d)/, "$1.$2")
            .replace(/(\d{3})(\d{1,2})$/, "$1-$2");
    });
}

if (tel) {
    tel.addEventListener("input", () => {
        tel.value = tel.value
            .replace(/\D/g, "")
            .replace(/(\d{2})(\d)/, "($1) $2")
            .replace(/(\d{5})(\d)/, "$1-$2");
    });
}

if (cep) {
    cep.addEventListener("input", () => {
        cep.value = cep.value
            .replace(/\D/g, "")
            .replace(/(\d{5})(\d)/, "$1-$2");
    });
}


// ==================== CONFIRMAÇÃO DE FORMULÁRIO ====================
const form = document.getElementById("form-voluntario");

if (form) {
    form.addEventListener("submit", (e) => {
        if (!form.checkValidity()) {
            alert("⚠ Por favor, preencha todos os campos corretamente!");
            return;
        }

        e.preventDefault();
        alert("✅ Cadastro enviado com sucesso! Obrigado por se inscrever! 💚");
        form.reset();
    });
}