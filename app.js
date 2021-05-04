var ul = document.getElementById("u-list")
var lilist = []
var current_index = 0
var solved_this_round = 0


class Item{
    static GetItem(index){

        let items = document.querySelectorAll("#u-list li")
        
        return items[index]
    }
    static GetAll(){
        return document.querySelectorAll("#u-list li")
    }

    static Swap(f, s){
        let tmpf = f.innerHTML
        let tmps = s.innerHTML
        
        f.innerHTML = tmps
        s.innerHTML = tmpf
    }
    static getHeight(elem){
        return parseInt(elem.getElementsByClassName("height-num")[0].textContent)
    }
}


function setup(){    
    for (let i = 0; i < 20; i++) {
        let newdiv = document.createElement("div")
        let newli = document.createElement("li")
        let new_a = document.createElement("a")

        let height = Math.floor(Math.random() * 10 + 1);
        new_a.textContent =  height
        new_a.classList.add("height-num")
        newdiv.appendChild(new_a)
        let height_div = document.createElement("div")
        newdiv.appendChild(height_div)
        height_div.style.height = (height * 10).toString() + "px"
        height_div.classList.add('height-div')

        ul.appendChild(newli).appendChild(newdiv)
    }
    lilist = document.querySelectorAll("#u-list li")
    
}
setup()





function SolveStep(startindex){
    console.log(startindex)
    let first = Item.GetItem(startindex)
    let second = Item.GetItem(startindex + 1)
    
    if(Item.getHeight(first) > Item.getHeight(second)){
        Item.Swap(first, second)
        solved_this_round ++ 
    }
    
    
}
function SolveNext(){
    SolveStep((current_index))
    current_index += 1
    if(current_index > Item.GetAll().length-2){
        current_index = 0
        if(solved_this_round == 0){
            alert("done")
            solve = false
        }
        solved_this_round = 0
    }
}
var solve = true
while (solve){
    SolveNext()
}




