function generatePassword() {
    const length = document.getElementById("length").value;
    const useUppercase = document.getElementById("uppercase").checked;
    const useLowercase = document.getElementById("lowercase").checked;
    const useNumbers = document.getElementById("numbers").checked;
    const useSpecialChars = document.getElementById("specialChars").checked;

    let charset = "";
    if (useUppercase) charset += "ABCDEFGHIJKLMNOPQRSTUVWXYZ";
    if (useLowercase) charset += "abcdefghijklmnopqrstuvwxyz";
    if (useNumbers) charset += "0123456789";
    if (useSpecialChars) charset += "!@#$%^&*()_+[]{}|;:,.<>?";

    if (charset === "") {
        alert("En az bir seçeneği işaretleyin.");
        return;
    }

    let password = "";
    for (let i = 0; i < length; i++) {
        const randomIndex = Math.floor(Math.random() * charset.length);
        password += charset.charAt(randomIndex);
    }

    // Oluşturulan şifreyi ekranda göster
    const passwordOutput = document.getElementById("passwordOutput");
    passwordOutput.innerHTML = `<p>Oluşturulan Şifre: <strong>${password}</strong></p>`;

    // TODO: Şifreyi kaydetme işlemleri eklenebilir (örneğin, tarayıcı yerel depolama).
}
