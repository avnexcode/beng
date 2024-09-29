// todo - data
const users = [
    {
        username: "aziz",
        password: "aziz",
        data: {
            balance: 1000000,
        }
    },
    {
        username: "kiki",
        password: "kiki",
        data: {
            balance: 2000000,
        }
    },
    {
        username: "aldi",
        password: "aldi",
        data: {
            balance: 3000000,
        }
    },
    {
        username: "rafi",
        password: "rafi",
        data: {
            balance: 4000000,
        }
    },
    {
        username: "diki",
        password: "diki",
        data: {
            balance: 5000000,
        }
    },
]

// todo - repository
function getUser(username) {
    const user = users.filter(item => item.username === username)[0]

    if (!user) {
        return alert(`username or password invalid`)
    }

    return user
}

// todo - utils
function toIDR(currency) {
    return new Intl.NumberFormat('id-ID', { maximumSignificantDigits: 3 }).format(currency)
}

function optionsMenu(user) {
    return prompt(`Selamat datang dengan bapak ${user.username}
            Apa yang ingin dilakukan
            1. Cek Saldo
            2. Tarik Tunai
            3. Open BO
            4. Sabung Ayam
        `)
}

function options(action, user) {
    switch (action) {
        case "1":
            checkBalance(user)
            break;
        case "2":
            cashWithdrawal(user)
            break;
        default:
            alert('pilihan tidak tersedia')
            break;
    }
}

// todo - service
function validation(username, password) {
    const user = getUser(username)

    if (user) {
        if (!(user.username === username && user.password === password)) {
            return alert('kamu gagal login')
        }
    }

    return user
}

function checkBalance(user) {
    const balance = user.data.balance
    alert(`Saldo kamu sekarang tersisa Rp. ${toIDR(balance)}`)
}

function cashWithdrawal(user) {
    const cash = prompt("Jumlah yang di ambil: ")
    if (!(user.data.balance >= cash)) {
        return alert(`Saldo anda tidak cukup`)
    }
    const balance = user.data.balance
    const remainingBalance = balance - cash
    alert(`Anda menarik sejumlah Rp. ${toIDR(cash)} dari saldo anda sebesar Rp. ${toIDR(balance)} menjadi Rp. ${toIDR(remainingBalance)}`)
}

// todo - main

function main() {
    const username = prompt("username: ")
    const password = prompt("password: ")

    const user = validation(username, password)

    if (user) {
        const action = optionsMenu(user)
        options(action, user)
    }
}

// todo - runtime
main()