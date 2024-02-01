const colors = document.querySelectorAll('.clr');
const body = document.querySelector('body');
const shades = ["red", "blue", "green", "yellow", "purple"];
let rndShade;
colors.forEach((clr) => {
    clr.style.backgroundColor = clr.innerHTML;
})

colors.forEach((clr) => {
    
    clr.addEventListener("click", (e)=>{
        
        if((e.target.innerHTML).toLowerCase() == 'default'){
            body.style.backgroundColor = "#202020";
        }else{
            
            rndShade = (shades[Math.floor(Math.random()*shades.length)]);
            clr.style.boxShadow = `inset 5px 5px 15px 2px ${rndShade}`;
            // console.log(rndShade);
            body.style.backgroundColor = e.target.innerHTML;
        }
    })
})
