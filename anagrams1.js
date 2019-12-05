const button = document.getElementById("findButton");
button.onclick = function () {
    let typedText = document.getElementById("input").value;
    getAnagramsOf(typedText);
}

function alphabetize(a) {
    return a.toLowerCase().split("").sort().join("").trim();
}


let getAnagramsOf = (input) => {
    let result = []
    const sorted = alphabetize(input)
    for(let word of words) {
        let sort = alphabetize(word)
        if (sorted === sort) {
            result.push(word)
        }
    }
    let main = document.getElementById("main")
    let output = document.createElement('div')
    output.textContent = result.join(", ")
    main.appendChild(output)
    return result
}