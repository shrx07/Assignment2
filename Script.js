//ADD HOBBY
function addHobby() {
    let input = document.getElementById("hobbyInput");
    let text = input.value;

    if (text === "") {
        alert("Please enter something");
        return;
    }

    let li = document.createElement("li");
    li.textContent = text;

    let btn = document.createElement("button");
    btn.textContent = "Delete";
    btn.className = "delete-btn";

    btn.onclick = function () {
        li.remove();
    };

    li.appendChild(btn);

    document.getElementById("hobbyList").appendChild(li);

    input.value = ""; 
}

//FORM ALERT
document.getElementById("contactForm").addEventListener("submit", function(e) {
    e.preventDefault(); 
    alert("Form submitted successfully!");
});

//DATE & TIME
function showTime() {
    let now = new Date();

    let formatted = now.toLocaleString("en-GB", {
        day: "2-digit",
        month: "long",
        year: "numeric",
        hour: "2-digit",
        minute: "2-digit",
        second: "2-digit"
    });

    document.getElementById("dateTime").innerText = formatted;
}

//UPDATE EVERY SECOND
setInterval(showTime, 1000);