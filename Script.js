const Alphabets = {
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

// Clear output

// Event listener for clearing the encrypted value output when the input field is focused
document.getElementById("Input-String-Value").addEventListener("focusin", function () {
    document.getElementById('Output-Encrypted-Value').innerHTML = '';
});

// Event listener for clearing the decrypted string output when the input field is focused
document.getElementById("Input-Morse-Code").addEventListener("focusin", function () {
    document.getElementById('Output-Decrypted-String').innerHTML = '';
});

// Encryption function code
document.getElementById("Encform").addEventListener("click", function () {
    const InputStringValue = document.getElementById("Input-String-Value").value.toUpperCase();
    let OutputSentence = "";

    // Splitting the input string into an array of characters
    InputStringValue.split("").forEach((letter) => {
        // Building the encrypted Morse code by appending each corresponding code for the character
        OutputSentence += Alphabets[letter] + " ";
    });
    document.getElementById("Output-Encrypted-Value").innerHTML = OutputSentence;
});

// Decryption function code
document.getElementById("Decform").addEventListener("click", function () {
    let StartCountIndex = 0;
    let OutputSentence = "";
    const InputMorseCode = document.getElementById("Input-Morse-Code").value.toString() + " ";

    for (let IndexVal = 0; IndexVal <= InputMorseCode.length; IndexVal++) {
        if (InputMorseCode[IndexVal] === " ") {
            // Extracting each Morse code from the input using space as a delimiter
            var index = IndexVal;
            const MorseCode = InputMorseCode.slice(StartCountIndex, index);
            StartCountIndex = ++index;

            // Finding the corresponding character for the Morse code and appending it to the decrypted string output
            OutputSentence += FindKey(Alphabets, MorseCode) != undefined ? FindKey(Alphabets, MorseCode) : alert("Some mistakes in your Morse code...");
        }
    }
    document.getElementById("Output-Decrypted-String").innerHTML = OutputSentence;
});

// Get data from array [Alphabets]
// Function to find the corresponding character for a given Morse code in the Alphabets object
function FindKey(Alphabets, Value) {
    for (let Keys in Alphabets) {
        if (Alphabets.hasOwnProperty(Keys)) {
            if (Alphabets[Keys] === Value) {
                // Returning the lowercase character to match the input format
                return Keys.toLowerCase();
            }
        }
    }
}