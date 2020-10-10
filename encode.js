let message = document.querySelector("input");
let encode = document.getElementById("encode");
let output = document.getElementById("message");

encode.addEventListener("click", () => {
    if (message.value == "") {
        alert("Message is missing");
    } else {
        message.value = message.value.trim();

        let word1 = "";
        let word2 = "";

        for (let i = 1; i <= message.value.length; i++) {
            if (i % 2 == 0) {
                word2 += message.value.charAt(i - 1);
            } else {
                word1 += message.value.charAt(i - 1);
            }
        }

        output.innerText = `First Word:- ${word1} \nSecond Word:- ${word2}`;

        message.value = '';
    }
})