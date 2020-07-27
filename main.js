//NICKNAME GENERATOR 

//Global Variables (grab array from file) 
let nicknameArray;

fetch('nicknameSamples.txt').then((rawData) => rawData.text()).then(data => {
    nicknameArray = data.split(",");
})

//Event Listners 
document.getElementById('random-nickname').addEventListener('click', generateRandomName);
document.getElementById('all-nicknames').addEventListener('click', generateAllNames);


//Event Functions 
function generateRandomName() {
    let firstName = document.getElementById('first-Name').value;
    let lastName = document.getElementById('last-Name').value;

    let randomName = Math.randomInt(0, nicknameArray.length);
    document.getElementById('nickname-results').innerHTML = firstName + " " + '"' + nicknameArray[randomName] + '"' + " " + lastName;

}


function generateAllNames() {
    let firstName = document.getElementById('first-Name').value;
    let lastName = document.getElementById('last-Name').value;

    for (i = 0; i < nicknameArray.length; i++) {
        document.getElementById('nickname-results').innerHTML += firstName + " " + '"' + nicknameArray[i] + '"' + " " + lastName;
    }
}