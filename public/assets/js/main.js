const translateButton = document.querySelector("#translateButton");

translateButton.addEventListener("click", async () => {

    let userText = document.querySelector("#userText");

    // Itzuli nahi den testua
    const text = userText.value.trim();

    // Helburuko hizkuntza
    const targetLang = document.querySelector("#targetLang").value;

    if (!text) return false;

    // AJAX eskaera backend-era, stringify-ek datuen 'estrukturazioa' (key+value) lortzen du?
    try {

        const response = await fetch("/api/translate", {
            method: "POST",
            headers: { "Content-Type": "application/json" },
            body: JSON.stringify({ text, targetLang })
        });

        const data = await response.json(); // beharrezko da await hemen?
        const botText = document.querySelector("#botText");
        botText.textContent = data.translatedText;

    } catch (error) {
        console.error("Errorea itzulpenean:", error)
    }
});