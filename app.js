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
        return alert(`Invalid username or password. Please try again.`)
    }

    return user
}

// todo - utils
function toIDR(currency) {
    return new Intl.NumberFormat('id-ID', { style: 'currency', currency: 'IDR', maximumSignificantDigits: 3 }).format(currency)
}

function optionsMenu(user) {
    return prompt(`Welcome, ${user.username}!
            What would you like to do?
            1. Check Balance
            2. Withdraw Cash
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
            alert('Invalid option. Please try again.')
            break;
    }
}

// todo - service
function validateUser(username, password) {
    const user = getUser(username)

    if (user) {
        if (!(user.username === username && user.password === password)) {
            return alert('Login failed. Please check your credentials and try again.')
        }
    }

    return user
}

function checkBalance(user) {
    const balance = user.data.balance
    alert(`Your current balance is ${toIDR(balance)}`)
}

function cashWithdrawal(user) {
    const cash = prompt("Enter the amount you wish to withdraw: ")
    if (!(user.data.balance >= cash)) {
        return alert(`Insufficient funds. Your current balance is ${toIDR(user.data.balance)}`)
    }
    const balance = user.data.balance
    const remainingBalance = balance - cash
    alert(`You've withdrawn ${toIDR(cash)}. Your balance has changed from ${toIDR(balance)} to ${toIDR(remainingBalance)}`)
}

// todo - main

(function () {
    const username = prompt("Enter your username: ")
    const password = prompt("Enter your password: ")

    const user = validateUser(username, password)

    if (user) {
        const action = optionsMenu(user)
        options(action, user)
    }
}())