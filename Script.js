var Alphabets = {
    " ": "|",
    A: ".-",
    B: "-...",
    C: "-.-.",
    D: "-..",
    E: ".",
    F: "..-.",
    G: "--.",
    H: "....",
    I: "..",
    J: ".---",
    K: "-.-",
    L: ".-..",
    M: "--",
    N: "-.",
    O: "---",
    P: ".--.",
    Q: "--.-",
    R: ".-.",
    S: "...",
    T: "-",
    U: "..-",
    V: "...-",
    W: ".--",
    X: "-..-",
    Y: "-.--",
    Z: "--..",
    1: ".----",
    2: "..---",
    3: "...--",
    4: "....-",
    5: ".....",
    6: "-....",
    7: "--...",
    8: "---..",
    9: "----.",
    0: "-----",
};
// CLEAR OUTPUT
document.getElementById("Input-String-Value").addEventListener("focusin", function() {
    document.getElementById('Output-Encrypted-Value').innerHTML = '';
});

document.getElementById("Input-Morse-Code").addEventListener("focusin", function() {
    document.getElementById('Output-Decrypted-String').innerHTML = '';
});
// ENCRYPTION FUNCTION CODE

// TODO:try Catch Blocks
document.getElementById("Encform").addEventListener("click", function() {
    // TODO:For In Loop
    var InputStringValue = document.getElementById("Input-String-Value").value.toUpperCase();

    InputStringValue.split("");

    for (var IndexVal = 0; IndexVal < InputStringValue.length; IndexVal++) {

        document.getElementById("Output-Encrypted-Value").innerHTML += Alphabets[InputStringValue[IndexVal]] + " ";

    }

});


// ENCRYPTION FUNCTION CODE


// DECRYPTION FUNCTION CODE
document.getElementById("Decform").addEventListener("click", function() {
    var StartCountIndex = 0,
        InputMorseCode = document.getElementById("Input-Morse-Code").value.toString() + " ";
    // try {
    for (var IndexVal = 0; IndexVal <= InputMorseCode.length; IndexVal++) {
        if (InputMorseCode[IndexVal] === " ") {

            var index = IndexVal;
            var MorseCode = InputMorseCode.slice(StartCountIndex, index);
            StartCountIndex = ++index;

            document.getElementById("Output-Decrypted-String").innerHTML += FindKey(Alphabets, MorseCode) != undefined ? FindKey(Alphabets, MorseCode) : alert("Some Mistakes In Your Morse Code...");
            // document.getElementById('Output-Decrypted-String').innerHTML = '';
        }
    }
    // } catch (e) {
    //     alert("Some Mistakes In Your Morse Code...");

    // }
});
// DECRYPTION FUNCTION CODE

// GET DATA FROM ARRAY [Alphabets]
function FindKey(Alphabets, Value) {
    for (var Keys in Alphabets) {
        if (Alphabets.hasOwnProperty(Keys)) {
            if (Alphabets[Keys] === Value) {
                return Keys.toLowerCase();
            }
        }
    }
}
// GET DATA FROM ARRAY