// Cotação de moedas do dia.
const USD = 5.755
const EUR = 5.978
const GBP = 7.163

// Obtendo os elementos do formulário.
const form = document.querySelector("form")
const amount = document.getElementById("amount")
const currency = document.getElementById("currency")
const footer = document.querySelector("main footer")
const description = document.getElementById("description")

// Manipulando o input amount para receber somente números.
amount.addEventListener("input", () => {
    const hasCharactersRegex = /\D+/g
    amount.value = amount.value.replace(hasCharactersRegex, "")
})

// Captando o evento de submit (enviar) do formulário
form.onsubmit = (event) => {
    event.preventDefault()

    switch(currency.value) {
        case "USD":
            convertCurrency(amount.value, USD, "US$")
            break
        case "EUR":
            convertCurrency(amount.value, EUR, "€")
            break
        case "GBP":
            convertCurrency(amount.value, GBP, "£")
            break
    }
}

// Função para converter a moeda
function convertCurrency(amount, price, symbol) {
    try {
        description.textContent = `${symbol} 1 = ${price}`

        footer.classList.add("show-result") // Aplica a classe que exibe o footer para mostrar o resultado.
    } catch (error) {
        footer.classList.remove("show-result") // Remove a classe do footer removendo ele da tela.

        console.log(error)
        alert("Não foi possível converter. Tente novamente mais tarde.")
    }
}