//inside the function check the number
function check(num) {
    return num > 100;
}
var num1 = 101;
console.log(check(num1)); //true
var num2 = 81;
console.log(check(num2)); //false
console.log(check(105)); //true

console.log("-----------");

function check2(num) {
    if (num > 100) {
        return true;
    } else {
        return false;
    }
};
var answer = check2(100); //calling func with var(answer)
console.log(answer); // false
var answer = check2(5); //calling func with var(answear)
console.log(answer); // false
// return = produce something



console.log("Bouncer Brenda ---------------------------------");

function bouncerBrenda(maxPeople, currentPeople, age) {
    const agelimit = 18;


    if (age < agelimit) {
        console.log("this is a club for adults");
    } else if (currentPeople <= maxPeople) {
        console.log("come in");
    } else {
        console.log("it's too busy now, come back later");
    }
};

bouncerBrenda(100, 80, 20); // come in
bouncerBrenda(100, 81, 17); // for adults
bouncerBrenda(100, 101, 20); // too busy



console.log("Bouncer Brenda2 -----------");

function bouncerBrenda2(maxPeople, currentPeople, age) {
    const agelimit = 18;
    let greeting;

    if (currentPeople >= maxPeople) {
        // test of club TE vol is
            greeting ="it's too busy now, come back later";
    } else if (age < agelimit) {
        // alleen leeftijd testen als club NIET vol is
        greeting ="this is a club for adults";
    } else  {
        // club is nu dus NIET te vol EN leeftijd is NIET te jong
        greeting ="come in";
    }
    return greeting;
};

console.log(bouncerBrenda2(100, 80, 20)); // come in
console.log(bouncerBrenda2(100, 81, 17)); // for adults
console.log(bouncerBrenda2(100, 101, 20)); // too busy


console.log("Average ---------------------------------");

function average5(num1, num2,num3,num4,num5) {
    return ((num1+num2+num3+num4+num5)/5);
}
console.log(average5(1,3,7,2,6));

function average5b(num1, num2,num3,num4,num5) {
    return Math.round((num1+num2+num3+num4+num5)/5);
}
console.log(average5b(1,3,7,2,6));
