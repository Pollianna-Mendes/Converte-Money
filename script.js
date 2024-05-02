const convertButton = document.querySelector(".convert-button");
const currencySelect = document.querySelector(".currency-select");

function convertValues() {
   const inputCurrencyValue = document.querySelector(".input-currency").value;
   const currencyValueToConvert = document.querySelector(".currency-value-to-convert");
   const currencyValueToConverted = document.querySelector(".currency-value");

   const dolarToday = 5.19
   const euroToday = 5.54
   const libraToday = 6.42
    const bitcoinToday = 1.0


   currencyValueToConvert.innerHTML = new Intl.NumberFormat("pt-BR", {
      style: "currency",
      currency: "BRL"
   }).format(inputCurrencyValue)

   if (currencySelect.value == "dolar") {
      currencyValueToConverted.innerHTML = new Intl.NumberFormat("en-US", {
         style: "currency",
         currency: "USD"
      }).format(inputCurrencyValue / dolarToday)
   }

   if (currencySelect.value == "euro") {
      currencyValueToConverted.innerHTML = new Intl.NumberFormat("de-DE", {
         style: "currency",
         currency: "EUR"
      }).format(inputCurrencyValue / euroToday)
   }

   if (currencySelect.value == "libra") {
       currencyValueToConverted.innerHTML = new Intl.NumberFormat("en-UK", {
         style: "currency",
         currency: "GBP"
      }).format(inputCurrencyValue / libraToday) }
}
function changeCurrency() {
   const currencyName = document.getElementById("currency-name");
   const currencyImg = document.querySelector(".currency-img");

   if (currencySelect.value == "dolar") {
      currencyName.innerHTML = "Dólar Americano"
      currencyImg.src = "./assets/estados-unidos (1) 1.png";
   }

   if (currencySelect.value == "euro") {
      currencyName.innerHTML = "Euro"
      currencyImg.src = "./assets/moeda-euro.png";
   }

    if (currencySelect.value == "libra") {
   currencyName.innerHTML =  "LIBRA"
   currencyImg.src = "./assets/libra 1.png";
    }
convertValues();
}
currencySelect.addEventListener("change", changeCurrency);
convertButton.addEventiListener("click", convertValues);
