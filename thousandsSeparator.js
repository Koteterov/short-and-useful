
function commas(num) {
    let pattern = /\B(?=(\d{3})+(?!\d))/g
    return num.toString().replace(pattern,' ')
    
}

