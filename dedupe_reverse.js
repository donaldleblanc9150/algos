// Write a function that will remove duplicate characters (case-sensitive)
// including punctuation. Keep only the LAST instance of each character

// EXAMPLE: Given "Snaps! crackles! pops!", return "Snrackle ops!"
function dedupe(string) {
    freq = {};
    newstring = '';
    for (let i = string.length - 1; i >= 0; i--) {
        if (string[i] in freq) {
            freq[string[i]]++;
        } else {
            freq[string[i]] = 1;
            newstring = string[i] + newstring;
        }
    }
    return newstring;
}
string = "Snaps! crackles! pops!";
console.log(dedupe(string));


// Write a function that, given a string, will maintain the order of each word,
// but reverse each word individually.

// EXAMPLE: Given "hello world my name is Donald", return
// "olleh dlrow ym eman si dlanoD"
function reverseWords(string) {
    var word = '';
    var newstring = '';
    for (let i = 0; i < string.length; i++) {
        if (string[i] == ' ') {
            newstring += ' ' + word;
            word = '';
        } else {
            word = string[i] + word;
        }
    }
    newstring += ' ' + word;
    return newstring;
}

string = "hello world my name is Donald";
console.log(reverseWords(string));