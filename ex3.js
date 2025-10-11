let listEuler1=(a,b,l)=>0;//obviously wrong - compute the sum of multiples of a or b in list l
let listEuler2=(a,l)=>0;//obviously wrong - compute the sum of multiples in list a found in list l
let listEuler3=(a,l)=>0;//obviously wrong - compute the sum of multiples in list a found in list l

let eulerlist=(a,b,l)=>
{
    // a=2//can un-hardcode
    // b=3
    // l=[1,2,3,4,5,6,7,9,10,10,10]  //document.getElementById('l').value.split(" ").map((x=>parseInt(x)); // if l is space separated numbers
    // call listEuler1 and alert. - compute the sum of multiples of a or b in list l 

    console.log("L: " + l);
    let sum = 0;
    
    l.filter(x => x % a == 0 || x % b == 0).forEach(x => sum += x);

    alert("The sum of multiples of " + a + " or " + b + " in the list is: " + sum);
}

let euler2Lists=(a,l)=>
{
    console.log("A: " + a);
    console.log("L: " + l);
    let sum = 0;
    a.forEach(x => {
        (l.filter(y => y % x == 0)).forEach(y => sum += y);
    });
    alert("The sum of multiples of elements in list A found in list L is: " + sum);
}

let euler2Lists1=()=>
{
    a=[2,3,5]//can un-hardcode
    l=[1,2,3,4,5,6,7,9,10,10,10]
    //call listEuler3 and alert.
}