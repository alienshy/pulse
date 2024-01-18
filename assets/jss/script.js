let url = "http://localhost:3000/data/"
let search = document.querySelector("#search");
let sort = document.querySelector("#sort");
let crud = document.querySelector(".mycrud");
let filter = [];
let copy = [];



async function getfun() {
    let res = await axios.get(url)
    let data = await res.data
    copy = data;

    crud.innerHTML = ""
    filter = filter.length || search.value ? filter : data;


    filter.forEach(el => {
        crud.innerHTML += `
        <div class="crud">
        <h2>${el.name}</h2>
        <p>${el.info}</p>
        <p>........................................</p>
        <h4>$${el.price}</h4>
    </div>
        `
    });
}
getfun()

////sorch/////
search.addEventListener("input", (e) => {
    filter = copy;
    filter = filter.filter((y) => {
        return y.name.toLocaleLowerCase().includes(e.target.value.toLocaleLowerCase())
    })
    getfun()
});



///////sort////
sort.addEventListener("change", (e) => {
    if(e.target.value == "az"){
        filter.sort((a,b)=>a.price - b.price);
        console.log("test");
    }
    else if(e.target.value == "za"){
        filter.sort((a,b)=>b.price - a.price);
    }
    else{
        filter = copy;
    }
    getfun()
});

