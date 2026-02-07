document.addEventListener('DOMContentLoaded', () =>{

    const input = document.querySelector("#input");
    const Btn = document.querySelector("#translateBtn");
    const output = document.querySelector('#output');

    async function translateText(){
        const text = input.value.trim()
        const safeText = encodeURIComponent(text)
        const email = "matvii2013marshalek@gmail.com"
        const url = `https://api.mymemory.translated.net/get?q=${safeText}&langpair=uk|en&de=${email}`;

        const response = await fetch(url)
        const data = await response.json()

        console.log(data)
        output.textContent = data.responseData.translatedText
    }

        Btn.addEventListener('click', translateText);
    
});