function wordle(){
    let target = document.getElementById("target").value;
    let guess = document.getElementById("guess").value;
    let outcome = []
    let errord = 0;
    if (target.length != guess.length){
        return document.getElementById("result").innerHTML="the length of the target word and the guess word are not the same"
    }
    for(var i = 0 ; i < target.length; i++){
        if (target[i] != guess[i]){
            errord = 1;
            for(var j = 0; j < target.length; j++){
                if (guess[i] == target[j]){
                    outcome += "guess word " + guess[i] + "is in the target word at wrong position" + j + '\n'
                    break;
                }
            }
            outcome += "guess word " + guess[i] + "is not in the target word" + '\n'
        }
    }
    if(errord == 0){
        outcome = "the target word is same as the guess word"
    }
    document.getElementById("result").innerHTML = outcome;
}

function lcm(){
    let num1 = document.getElementById("num1").value;
    let num2 = document.getElementById("num2").value;
    for(let i = 1 ; i <= num1 * num2 ; i ++)
    {
        if(i % num1 == 0 && i % num2 == 0)
        {
            document.getElementById("resultlcm").innerHTML = i;
            break;
        }
    }
}

function heap(){
    let year = document.getElementById("year").value;
    if(year % 4 == 0 && year % 100 != 0 || year % 400 == 0){
        document.getElementById("resultheap").innerHTML = "the year is a heap year";
    }
    else{
        document.getElementById("resultheap").innerHTML = "the year is not a heap year";
    }
}

function anagram(){
    let word = document.getElementById("anagram").value;
    for(let i = 0 ; i < word.length / 2 ; i ++){
        if(word[i] != word[word.length - i - 1]){
            document.getElementById("resultanagram").innerHTML = "the word is not an anagram";
            return;
        }
    }
    document.getElementById("resultanagram").innerHTML = "the word is an anagram";
}