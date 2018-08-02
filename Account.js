class Account{

    constructor(accountName, accountBalance)
    {
        this.accountName = accountName;
        this.accountBalance = accountBalance;
    }

    withdrawal(amount)
    {
        this.accountBalance -= amount;
    }

    deposit(amount)
    {
        this.accountBalance += amount;
    }

    balance()
    {
        return this.accountBalance;
    }
}

function main()
{
var account = new Account(myAccount, 100.0);
    account.deposit(20.0);
    alert(account.balance())
    var mattsAccount = new Account(MattsAccount ,1000);
    mattsAccount.withdrawal(100.0);
    alert(mattsAccount.balance());
    var myAccount = new Account(MyAccount,0);
    myAccount.deposit(100.0)
    alert(myAccount.balance())


}

main();
