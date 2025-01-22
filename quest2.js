// Questão 2
let num = 10
let encontrou = false
let a = 0, b = 1, temp;
const seq = []
while (!encontrou) {
    seq.push(a)
    temp = a + b;
    a = b;
    b = temp;
    if(a == num){
        encontrou = true
        console.log(`O numero ${num}, está na sequência ${seq}`)
    }
    else if(a > num){
        seq.push(a)
        encontrou = true
        console.log(`O numero ${num}, não está na sequência ${seq}`)
    }
}
