const inputBox = document.getElementById("input-box");
const listContainer = document.getElementById("list-container");

function addTask(){
    if(inputBox.value === '')
    {
        alert("You must write something!")
    }
    else
    {
        const li = document.createElement("li");
        li.textContent = inputBox.value;

        const timestamp = new Date();
        const options = {year:'numeric', month:'long',day:'numeric'};
        const formattedTime = timestamp.toLocaleDateString('en-US', options);

        const  timeSpan = document.createElement("span");
        timeSpan.textContent = ` - ${formattedTime}`;
        timeSpan.style.fontSize = "14px";
        timeSpan.style.color = "#888";
        timeSpan.style.marginLeft = "10px";
        li.appendChild(timeSpan);

        listContainer.appendChild(li);

        let span = document.createElement("span");
        span.innerHTML = "\u00d7";
        span.style.position = "absolute" ;
        span.style.right = "0";
        span.style.top = "5px";
        span.style.width = "40px"; 
        span.style.height = "40px";
        span.style.fontSize = "22px";
        span.style.borderRadius = "50%";
        li.appendChild(span);
    }
    inputBox.value = "";
    saveData();
}

listContainer.addEventListener("click", function(e){
    if(e.target.tagName === "LI")
    {
        e.target.classList.toggle("checked");
        saveData();
    }
    else if(e.target.tagName === "SPAN")
    {
        e.target.parentElement.remove();
        saveData();
    }
},false);

function saveData(){
    localStorage.setItem("data", listContainer.innerHTML);
}
function showTask(){
    listContainer.innerHTML = localStorage.getItem("data");
}

showTask();

