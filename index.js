// Creating objects//

const users = {
    id: 'user1',
    firstName: 'Yuvraj',
    lastName:'Singh',
    age: '45',
    email:'yuvraj@email.com',
    city: 'Mumbai',
    fullName(){
        fullNamef = this.firstName + ' ' + this.lastName;
        return fullNamef;
    },
};


users.fullName()
console.log(users);