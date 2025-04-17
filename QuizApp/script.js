// https://opentdb.com/api_category.php  //get catogory
//https://opentdb.com/api.php?amount=10&category=9 // get quiz

let catagory = document.getElementsByClassName("catagory")[0];
let dropDown = document.querySelector("select");
let catagoryButton = document.querySelector("button");
let questionDiv = document.getElementsByClassName("questions")[0];
let question = document.getElementById("question");
let queNo = document.getElementById("queNo");
let optContainer = document.getElementsByClassName("options")[0]
option1 = document.getElementById("op1")
option2 = document.getElementById("op2")
option3 = document.getElementById("op3")
option4 = document.getElementById("op4")
let catagoryLists = [], questions = [], options = [], randomOptions = [];
let queCounter = 0;
let correctAns = "";

(async () => {
    const response = await fetch("https://opentdb.com/api_category.php")
    const data = await response.json()
    catagoryLists = data.trivia_categories;

    catagoryLists.map(list => {

        let option = document.createElement("option");
        option.value = list.id;
        option.innerText = list.name;
        dropDown.appendChild(option);
    });

}

)();

catagoryButton.addEventListener("click", function () {
    let selectedCatagory = dropDown.value;
    // console.log(selectedCatagory);
    // getQuiz(selectedCatagory);
    getQuestions(selectedCatagory);
    questionDiv.style.display = "block";
    catagory.style.display = "none";

})

const getQuestions = async (catagory) => {
    let data = await fetch(`https://opentdb.com/api.php?amount=10&category=${catagory}&type=multiple`).then(res => res.json())
    questions = data.results;
    await loadQuestion();
}

const loadQuestion = async () => {

    queCounter++;
    if (queCounter <= 10) {
        queNo.innerText = queCounter;
        // let randNo = getRamdomNo();
        let randNo = queCounter;
        question.innerText = questions[randNo].question;
        let options = [...questions[randNo].incorrect_answers, questions[randNo].correct_answer]
        correctAns = questions[randNo].correct_answer;
        console.log(correctAns)
        let updatedOptions = shuffleOptions(options)
        optContainer.innerHTML = '';
        updatedOptions.forEach((option, index) => {
            div = document.createElement("div");
            div.className = "suboption";
            input = document.createElement("input")
            input.type = "radio";
            input.value = option;
            input.name = "option";
            input.id = `op${index + 1}`
            label = document.createElement("label");
            label.innerText = option;
            div.appendChild(input);
            div.appendChild(label);
            // console.log(option)
            optContainer.append(div);


        })
        //    console.log(optContainer)
    }
}

const getRamdomNo = () => {
    return Math.floor(Math.random() * 10);
}

const shuffleOptions = (options) => {
    randomOptions = []
    while (randomOptions.length < options.length) {
        let randomItem = options[Math.floor(Math.random() * options.length)]
        if (!randomOptions.includes(randomItem)) {
            randomOptions.push(randomItem)
        }
    }

    return randomOptions;
}

const checkAnswer = () => {
    let clickedValue = document.querySelector("input[type='radio'][name=option]:checked").value;
    if (clickedValue === correctAns) {
        alert("Good!!! Right answer")
    }
    else {
        alert("Sorry!!! Wrong answer");
    }
}