//Exercise #1
const transaction = (money) => {
  return money * 0.001 + 3;
};
console.log(transaction(100));

//Exercise #2
//Prat 1
const greeting = (name1, name2, name3) => {
  return `Welcome ${name1}, ${name2}, ${name3}`;
};
console.log(greeting("Pum", "Boom", "Ing"));


//Prat 2
const age = (year) => {
    const d = new Date();
    let currentYear = d.getFullYear();
    let age = currentYear - year
  return age;
};
console.log(age(1988));


//Part 3
const welcome = (name1, age1) => {
  return `Welcome ${name1}, you are ${age1}`;
};
console.log(welcome("Beer", 19));
console.log(welcome("Pong", 25));
console.log(welcome("Tee", 29));



//Challenge Yourself

const grad = (score) => {
  if (score === 11) {
    return "Perfect";
  }else if (score > 8) {
    return "Excellent";
  }else if (score >= 5) {
    return true;
  }else {
    return false;
  }
};
console.log(grad(11))
