// Questão 4
const fat = [
    {
        "tipo": "SP",
        "valor": 67836.43
    },
    {
        "tipo": "RJ",
        "valor": 36678.66
    },
    {
        "tipo": "MG",
        "valor": 29229.88
    },
    {
        "tipo": "ES",
        "valor": 27165.48
    },
    {
        "tipo": "Outros",
        "valor": 19849.53
    }
]
let total = 0
for (let i = 0; i < fat.length; i++) {
    total += fat[i]["valor"];
}

for (let i = 0; i < fat.length; i++) {
    let porcentagem = fat[i]["valor"]/total * 100
    console.log(`O estado ${fat[i]["tipo"]} tem ${porcentagem.toFixed(0)}% do valor total ${total}`)
}