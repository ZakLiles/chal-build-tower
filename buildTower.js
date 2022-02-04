const buildTower = num => {
    let arr = [];
    for(let i = num; i > 0 ; i--){
        if(i===num){
            arr.push("*".repeat(i*2-1))
        } else {
            arr.push(arr.at(-1).replace(/\*(?!.*\*)/," ").replace("*"," "))
        }
    }
    return arr.reverse();
}

console.log(buildTower(9))
console.log(buildTower(20))
