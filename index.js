var lucysays = ["Yes",
                "Obviously",
                "Are you crazy?\nYes"
];

var theMessage = document.getElementById('the-message');
var theButton = document.getElementById('the-button');

function respond() {
    theMessage.innerHTML = lucysays[Math.floor(Math.random() * lucysays.length)];
}

theButton.addEventListener("click", respond);