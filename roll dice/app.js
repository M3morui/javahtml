//element selection
const dice1 = document.querySelector('.dice-1');
const dice2 = document.querySelector('.dice-2');
const psum = document.querySelector('.dice-sum');
const btnRoll = document.querySelector('.btn-roll');

btnRoll.addEventListener('click', ()=>{
    btnRoll.disabled = true;
    //add animation
    if(!dice1.classList.contains('animation'))
        dice1.classList.add('animation');
    if(!dice2.classList.contains('animation'))
        dice2.classList.add('animation');

        //delay
        setTimeout(() => 
        {
            let d1 = GetRandomDice();
            let d2 = GetRandomDice();

            //update gui
            dice1.src = `dice-${d1}.png`; // img/dice-4.png
            dice2.src = `dice-${d2}.png`;

            let sum = d1+d2;
            psum.innerText = sum;

            //remove the animation
            if(dice1.classList.contains('animation'))
                dice1.classList.remove('animation');
            if(dice2.classList.contains('animation'))
                dice2.classList.remove('animation');

            btnRoll.disabled = false;
        }, 2000);
    
    
});

function GetRandomDice(){
    return Math.ceil(Math.random()*6); //1-6
}