const search_btn = document.getElementsByClassName("fa-magnifying-glass")[0]
const search_con = document.getElementsByClassName("search-container")[0]
const xbtn = document.getElementsByClassName("fa-x")[0]
const link_top = document.getElementById("link-top")

function toggleSearchCon(){
    var list = link_top.children
    if (search_con.style.display != "block"){
        search_con.style.display = "block"
        for (let i in list){
            console.log(list[i].className)
            if (list[i].className != "search-container"){
                list[i].style.display = "none"
            }
        }
    }
    else{
        search_con.style.display = "none"
        for (let i in list){
            if (list[i].className != "search-container"){
                list[i].style.display = "block"
            }
        }
    }
    
}

search_btn.addEventListener("click", toggleSearchCon)
xbtn.addEventListener("click", toggleSearchCon)