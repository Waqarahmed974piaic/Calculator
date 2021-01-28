function num(num){
    var val=document.getElementById("zip")
    val.value+=num
    console.log(val.value)
}


function Evaluation(){
    var val=document.getElementById("zip")
    var operator=["+","-","/","*"]
    // if(val.value.charAt(val.value.length-1)!==-1){

    // }
    var result=eval(val.value)
    val.value=result
}

function Clear(){
    var val=document.getElementById("zip")
    val.value=""
}