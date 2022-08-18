let a = [
    { id: 1 }, 
    { id: 1 }, 
    { id: 2 }, 
    { id: 3 }, 
    { id: 3 }
];

let key = "id";

let b = [...new Map(a.map((item) => [item[key], item])).values()];

