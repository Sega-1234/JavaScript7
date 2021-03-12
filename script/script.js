let arr = [[14, 45], [1], ['a', 'b', 'c']]

let sorted = arr.sort((a,b) => a.length - b.length);

sorted.forEach((item, i) => console.log(item))



////////////////////////////////////////////////////////////////////



console.log('/////////////////////////////////////////////////////');



let proc = [
    {
        cpu: 'intel',
        info: {
            cores: 2,
            cache: 3,
        }
    },
    {
        cpu: 'intel',
        info: {
            cores: 4,
            cache: 4,
        }
    },
    {
        cpu: 'amd',
        info: {
            cores: 1,
            cache: 1,
        }
    },
    {
        cpu: 'intel',
        info: {
            cores: 3,
            cache: 2,
        }
    },
    {
        cpu: 'amd',
        info: {
            cores: 4,
            cache: 2,
        }
    },
]

let sorty = proc.sort((d, c) => d.info.cores - c.info.cores )

sorty.forEach((core, x) => console.log(core))




//////////////////////////////////////////////////////////////////



console.log('/////////////////////////////////////////////////////');


let nums = [1,2,3,5,8,9,10]

let numbers = nums.map(ell =>(ell = {diggit: ell, odd: ell % 2 == 0 ? 'Четное' : 'Нечетное' }));

numbers.forEach((num, y) => console.log(num) )



///////////////////////////////////////////////////////////////////////////////////



console.log('/////////////////////////////////////////////////////');



const array = [
    { name: "Вася", age: 25 },
    { name: "Петя", age: 30 },
    { name: "Маша", age: 29 }
]

let newarray = array.map(el => el.age);

let sum = newarray.reduce((a, b) => a + b );

sum = sum / array.length

console.log(sum);



console.log('/////////////////////////////////////////////////////');



/////////////////////////////////////////////////////////////////////////////////



let users = [

    { name: "Вася ", surname: "Пупкин ", id: 1 },
    { name: "Петя ", surname: "Иванов ", id: 2 },
    { name: "Маша ", surname: "Петрова ", id: 3 }
];

let fullname = users.map(ellement => (ellement = {fullname: ellement.name + ellement.surname + ellement.id}));

fullname.forEach((nam, z) => console.log(nam))