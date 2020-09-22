const listOfCircles= document.querySelectorAll('.circle')

function loader(param2){
    param2.classList.add("red")
// on ajoute
    function up (){
        param2.classList.remove("red")
    }
// on remove
    setTimeout(up,1000);
}
function loop(){

    function animation(){

        listOfCircles.forEach((e,i)=>{
            setTimeout(() => {
                loader(e)
            }, i * 1000);
        })
    }
    animation();

    setInterval(() => {

        animation();

    }, listOfCircles.length * 1000);


    
}
loop();




