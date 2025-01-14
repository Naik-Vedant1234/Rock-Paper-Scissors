let user_score = 0;
let comp_score = 0;
let user_choice;
let comp_choice;
let msg = document.querySelector("#msg");
let u1 = document.querySelector("#u1");
let u2 = document.querySelector("#u2");

const choice = document.querySelectorAll(".choice");
console.log(choice);

choice.forEach((i)=>{
    console.log(i);
    i.addEventListener("click",()=>{
        user_choice=i.getAttribute("id");
        console.log(user_choice);
        playgame(user_choice);
    })
});
const comp = () =>{
    let options = ["rock","paper","scissors"];
    let index = Math.floor(Math.random() *3);
    console.log(index);
    return options[index];
};
const userWin = () =>{
    msg.innerText = "You Won"
    user_score++;
    u1.innerText = user_score;
};
const compWin = () =>{
    msg.innerText = "You Lost"
    comp_score++;
    u2.innerText = comp_score;
};

const playgame = (user_choice) =>{
    comp_choice=comp();
    if(comp_choice === user_choice){
        msg.innerText = "It is a Draw";
    }else{
        if(user_choice === "rock"){
            if(comp_choice === "paper"){
                compWin();
            }else{
                userWin();
            }
        }
        else if(user_choice === "paper"){
            if(comp_choice === "scissors"){
                compWin();
            }else{
                userWin();
            }
        }else{
            if(comp_choice === "rock"){
                compWin();
            }else{
                userWin();
            }
        }
    }
};
