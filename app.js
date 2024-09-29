const users = [
    {
        username: "konz",
        password: "konz",
        data: {
            balance: 1000000,
        }
    },
]

function getUser(username) {
    return users[0]
}

function validation(username, password) {

}

function optionsMenu() {
    return prompt(`Apa yang ingin dilakukan
        1. Cek Saldo
        2. Tarik Tunai
        3. Open BO
        4. Sabung Ayam
    `)
}

function toIDR(currency) {
    return new Intl.NumberFormat('id-ID', { maximumSignificantDigits: 3 }).format(currency)
}

function checkBalance(user) {
    const balance = toIDR(user.data.balance)
    alert(`Saldo kamu sekarang tersisa Rp. ${balance}`)
}

function options(action, user) {
    switch (action) {
        case "1":
            checkBalance(user)
            break;
        case "2":
            console.log('tarik tunai')
            break;
        case "3":
            console.log('Open BO')
            break;
        case "4":
            console.log('Sabung Ayam')
            break;
        default:
            console.log('pilihan tidak tersedia')
            break;
    }
}

function main() {
    const username = prompt("username: ")
    const password = prompt("password: ")
    const user = getUser()

    if(!(user.username === username && user.password === password)) {
        return alert('kamu gagal login')
    }

    const action = optionsMenu()
    options(action, user)
}
main()