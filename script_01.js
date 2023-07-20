"use strict";
/*** Mini-Challenge  */
// Satzbau + Punktuation

// Vereinbarung:
// "S" (sentence) --> "."  Ich bin Max.
// "Q" (question) --> "?"  Bist du Max?
// "E" (exclamation) --> "!"  Ich bin!

// Parameter --> funktion getSentence([ ...], "Q"){ ...}
const GAP = " ";
const PUNCTUATION = {S: '.', Q: '?', E: '!'}
const ERROR_PUNC = "FEHLER! Satzzeichen nicht erkannt."


/*** Funktion mit Array als Parameter */
// mögliche Tests:
output(getSentence(["Ich","bin","Max"],"S"));
output(getSentence(["Bist","du","Max"],"Q"));
output(getSentence(["Ich","bin"],"E"));
output(getSentence(["Ich","hätt","gern","die","Platt","von","dene","zwei",
                    "diwodaso","Spass","mache,","habbe","Sie","die"],"Q"));
output(getSentence(["Ich","bin","Max"],"A")); // ERROR_PUNC

function getSentence(arr,op) {
    if (op in PUNCTUATION) {
        return arr.join(GAP) + PUNCTUATION[op];
    } else {
        return ERROR_PUNC
    }
}

function output(outputData) {
    console.log(outputData);
}