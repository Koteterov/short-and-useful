
function commas(num) {
    let pattern = /\B(?=(\d{3})+(?!\d))/g
    return num.toString().replace(pattern,' ')
    
}

console.log(commas('11111111'));