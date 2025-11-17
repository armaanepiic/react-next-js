const list = document.getElementById("list");

list.addEventListener("click" , (e) => {
    console.dir(e.target);
    if(e.target.matches("li")){
        if(e.target.innerText == "JavaScript")
            e.target.style.backgroundColor = "yellow";
        else
            e.target.style.backgroundColor = "red";
    }
})