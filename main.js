
function handleEncrypt() {
    const plaintext = document.getElementById('plaintext').value.trim();
    const key = parseInt(document.getElementById('key').value);
    encrypt(plaintext, key);
}

function encrypt(plaintext, key) {
    let ciphertext = '';

    // Ensure key is a number
    key = parseInt(key);

    for (let i = 0; i < plaintext.length; i++) {
        let char = plaintext[i];

        // Only shift letters
        if (/[a-zA-Z]/.test(char)) {
            // let isUpper = char === char.toUpperCase();
            // let base = isUpper ? 65 : 97;

            let shifted;

            if(key >= 0 ){

                shifted = ((char.toLowerCase().charCodeAt(0) - 97 + key) % 26) + 97;
            }else if (key < 0  ){

                shifted = ((char.toLowerCase().charCodeAt(0) - 122 + key) % 26) + 122;
            }

            ciphertext += String.fromCharCode(shifted);
        } else {
            // Leave non-letters as-is
            ciphertext += char;
        }
    }

    document.getElementById('result').value = ciphertext;
    console.log(ciphertext);
}
