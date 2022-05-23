
function commas(num) {
    let pattern = /\B(?=(\d{3})+(?!\d))/g
    return num.toString().replace(pattern,' ')
    
}

<<<<<<< HEAD
console.log(commas('11111111'));
=======
>>>>>>> 4e297f30a410de00ac7e070e18c94e24af85fc99
