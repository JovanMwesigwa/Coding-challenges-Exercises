
class User {
    constructor(username, password, loggin=false){
        this.username = username;
        this.password = password;
        this.loggin = loggin;
    }
    login(){
       if (this.username === "Jovan" && this.password === 12345){
           this.loggin = true;
       }
    }
    show(){
        console.log( this.username);
        console.log( this.password);
        console.log( this.loggin);
    }
}

let user1 = new User('Jovan', 12345);

user1.show()
