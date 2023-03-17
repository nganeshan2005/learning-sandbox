class myDropdown{
    constructor(){
        this.dropdown = document.querySelectorAll('div[data-type="dropdown"]');
        document.addEventListener('click', (e)=>{
            this.dropdownMenu = function(){
                if(e.target.classList.contains('dropdown-btn')){
                this.dropdownMenu = e.target.nextElementSibling;
                }
            }
            this.intialize(e);
        });        
    }

    intialize(passEve){
        if(e.target.classList.contains('dropdown-btn')){
            
            if(!dropdownMenu.classList.contains('show')){
                dropdownMenu.classList.add('show')
            }else{
                dropdownMenu.classList.remove('show')
            };
        }
    }
        
    }

    
    

document.addEventListener('DOMContentLoaded', () => {
    new myDropdown
})
