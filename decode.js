let first_word = document.getElementById("first-word");
let second_word = document.getElementById("second-word");
let message = document.getElementById("message");
let decode = document.getElementById("decode");

decode.addEventListener("click", () => {
    if (first_word.value === "" || second_word.value === "") {
        alert("Word is missing");
    } else {
        let word = "";
        for (let i = 1; i <= first_word.value.length + second_word.value.length; i++) {
            if (i % 2 == 0) {
                word += second_word.value.charAt(i / 2 - 1);
            }else{
                word += first_word.value.charAt((i + 1) / 2 - 1);
            }
        }

        message.innerText = word;
    
        first_word.value = "";
        second_word.value = "";
    }
});