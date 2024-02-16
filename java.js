let boxes = document.querySelectorAll(".box");
let reset = document.querySelector("#reset");
let newGameBtn = document.querySelector("#newBtn");
let msgContainer = document.querySelector(".msg-container");
let msg = document.querySelector("#msg");

let turnO=true;

const winPattern=[
    [0,1,2],
    [3,4,5],
    [6,7,8],
    [0,3,6],
    [1,4,7],
    [2,5,8],
    [0,4,8],
    [2,4,6],
];

const resetGame= () =>{
    turnO=true;
    enableBox();
    msgContainer.classList.add("hide");
}

boxes.forEach((box) => {
    box.addEventListener("click", () =>{

        if (turnO){
            box.innerText="O";
            turnO=false;
            box.style.color = "green";
        }
        else{
            box.innerText="X";
            turnO=true;            
            box.style.color="black";
        }
        box.disabled=true;

        checkWinner();
    });
});

const disableBox = ()=>{
    for ( let box of boxes){
        box.disabled=true;
    }
}

const enableBox = ()=>{
    for ( let box of boxes){
        box.disabled=false;
        box.innerText="";
    }
}

const showWinner= (winner) => {
    msg.innerText = `Winner is ${winner}`;
    msgContainer.classList.remove("hide");
    disableBox();
}

const checkWinner= () =>{
    for (pattern of winPattern){
       
           let pos1Val= boxes[pattern[0]].innerText;
           let pos2Val= boxes[pattern[1]].innerText;
           let pos3Val= boxes[pattern[2]].innerText;

           if(pos1Val != "" && pos2Val != "" && pos3Val != "")
            {
                if(pos1Val===pos2Val && pos2Val===pos3Val){
                    showWinner(pos1Val);
                }
            }
           
    }
};

newGameBtn.addEventListener("click",resetGame);

reset.addEventListener("click",resetGame);