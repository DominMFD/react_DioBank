const conta = {
    email: "mfdmatheus@hotmail.com",
    password: 'matheus14',
    name: 'Matheus Domingos',
    balance: 2000,
    id: '1',
}

export const api = new Promise((resolve) => {
    setTimeout(() => {
        resolve(conta)
    }, 3000)
})