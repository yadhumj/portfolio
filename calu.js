function display(num){
    result.value += num
    console.log(result);
}

function clearAll() {
    result.value=""

}

function outPut(){
    result.value= eval(result.value)
}
function removeLast(){
    result.value=(result.value).slice(0,-1)
}