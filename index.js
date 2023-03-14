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

// console.log(user1, typeof user1.occupation);


const   dropGroup = document.querySelector('.dropdown-group'),
        dropLabel = document.querySelector('.dropdown-label'),
        dropMenu = document.querySelector('.dropdown-menu'),
        dropBtn = document.querySelector('.dropdown-btn'),
        dropItem = document.querySelectorAll('.dropdown-item'),
        dropText = document.querySelector('.dropdown-text');

window.addEventListener('click', function(e){
    e.stopPropagation();
    if (e.target == dropBtn && dropMenu.style.display !== 'block'){
        dropMenu.style.display = 'block';
    } else {
        dropMenu.style.display = 'none';
    };
}, false);

dropItem.forEach(function(ele){
    ele.addEventListener('click', function(e){
        if(e.target == ele){
            dropText.innerText = ele.innerText
        }
    })
});

window.addEventListener('click', function(e){
    console.log(e.target)
})

// console.log(dropMenu)
