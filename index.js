// Creating objects//

const Users = {
    id: 'user1',
    firstName: 'Yuvraj',
    lastName:'Singh',
    age: '45',
    email:'yuvraj@email.com',
    city: 'Mumbai',
    fullName(){
       return this.firstName + ' ' + this.lastName
    },
};

class UsersTemplate {
    constructor(x){
        this.name = x[0],
        this.age = x[1],
        this.occupation = x[2]
    };
}

const occp = function(){
    
    return 'Youtuber';
}

const User1_data = ['Siddharth', 24, occp()];
// const User2_data = ['Mahesh', 24, 'Job']

const user1 = new UsersTemplate(User1_data);

console.log(user1, typeof user1.occupation);

