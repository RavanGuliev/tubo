const masinlar = document.getElementById("masinlar")
const marka = document.getElementById("marka")
const model = document.getElementById("model")
const il = document.getElementById("il")
const city = document.getElementById("city")
const max = document.getElementById("max")
const btn = document.getElementById("btn")
const banType = document.getElementById("banType")
const val = document.getElementById("val")



 
const markax = Array.from(new Set(data.map(item => item.brand)));
const brandx = Array.from(new Set(data.map(item => item.model)));
const cityx = Array.from(new Set(data.map(item => item.city)));
const bantypex = Array.from(new Set(data.map(item => item.banType)));
const valx = Array.from(new Set(data.map(item => item.currency)));
const ilx = Array.from(new Set(data.map(item => item.year))).sort();


 const likedbar = document.getElementById("likedbar")
 const likedCard= document.getElementById("likedCard")






let basket = [
    
       
]

let count = 9;
function show() {

    masinlar.innerHTML = ' ';

    data
        .slice(0, 9)
        .map(item => {
            masinlar.innerHTML += `
                    <a href="./../pages/details.htm?id=${item.id}&name=${item.brand}">
                             <div 
                            onclick="showDetail()"
                            
                         class="w-[300px]  h-[400px] bg-white rounded-[10px] relative overflow-hidden shadow-[0_0_15px_#ccc] mx-auto  ">
                            <div class="w-[300px]  h-[50%]">
                           <i onclick="addToBasket(event,${item.id})" id="favorite" class="fa-regular fa-bookmark  text-${item.status ? '[red]': 'white'} text-2xl  absolute right-2 top-2"></i> 
                            <img src="${item.images[0]}" alt="" class="object-cover object-center  rounded-t-md w-full  h-[100%] dark:bg-gray-500">
                            </div>
                        <div class="flex flex-col justify-between p-6 space-y-8">
                            <div class="space-y-2">
                               <h2>${item.price} ${item.currency}</h2>
                                <p>${item.brand} ${item.model}</p>
                                <p>${item.year},${item.engine} L, ${item.odometer} ${item.odometerUnit}</p>
                                <p class="text-[#8d94ad]">Baki, ${item.dates}</p>
                            </div>
                           
                        </div>
                    </div>
    
                    
                 
                        

                
                       
            `
        })

}
show()


function handleSelect() {
    brandx.map(item => model.innerHTML += `<option>${item}</option>`);
    markax.map(item => marka.innerHTML += `<option>${item}</option>`);
    cityx.map(item => city.innerHTML += `<option>${item}</option>`);
    valx.map(item => val.innerHTML += `<option>${item}</option>`);
    bantypex.map(item => banType.innerHTML += `<option>${item}</option>`);
    ilx.map(item => il.innerHTML += `<option>${item}</option>`)
    ilx.sort((a, b) => b - a).map(item => maxs.innerHTML += `<option>${item}</option>`)


}
handleSelect()

function filtirleme(elem){
    
    data = zapaz.filter( item => item[elem.name] == elem.value  )

    show()
}


function artirmag() {

    if (count < data.length) {
        count += 8;

    }
    if (count > data.length) {
        count = data.length
        btn.style.display = 'none'
    }

    show()
}

    

 

function showBasket(){
    likedCard.innerHTML = '';
    basket.map((item , i) =>{
        likedCard.innerHTML+=`
            <article class="w-[95%] h-[110px] text-center m-4   bg-indigo-500 shadow-lg shadow-indigo-500/50overflow-hidden  flex flex-row items-center rounded-[8px]" id="x${i}">
        <div class="max-w-[40%] h-[100%] overflow-hidden">
         <img class="bg-center bg-cover" src="${item.images[0]}" alt="avto" />
        </div>
        <div class="w-[60%] bg-white p-2">
          <h2 class="font-bold">${item.price} ${item.currency}</h2>
          <h6>${item.brand} ${item.model}</h6>
          <p>${item.year}, ${item.engine}, ${item.odometer}${item.odometerUnit}</p>
          <span>${item.city}, ${item.dates}</span>
        </div>  
        <div class="h-[30%] shadow-2xl flex flex-col justify-center gap-1">
          <button onclick="basketInc(${item.id})" class="border-[1px] border-[#dfe3e7] text-white w-[25px] h-[25px] rounded-[5px] mx-[5px]">-</button>
          <span id="num" class=" text-white">${item.count} </span>
          <button onclick="basketDec(${item.id})" class="border-[1px] border-[#dfe3e7]  text-white w-[25px] h-[25px] rounded-[5px] mx-[5px]">+</button>
        </div>
        <i onclick="basketdenSil(${item.id})" class="fa-solid fa-trash text-2xl mr-2  text-white"></i>
    </article>
    `
        
        
    })

}
showBasket()


 function likedBaskets() {
     likedbar.classList.toggle("hidden")
   }
    function closebaskets() {
        likedbar.classList.toggle("hidden")
       }


   function addToBasket(e,id){
    e.preventDefulat(f)
    
            const element = data.find(item => item.id == id)
            element.status = true

            const yoxla = basket.find(elem => elem.id == id)

            if (yoxla == undefined) {
                element.count = 1
                basket.push(element)
              } else {
                yoxla.count++
              }
            
            
              show()
              showBasket()
          
   }

   function basketdenSil(id) {
    
    basket = basket.filter(item => item.id != id);
    data.find(item => item.id == id).status = false
    show()
    showBasket()
  }


  function basketInc(id) {
    const elem = basket.find(item => item.id == id);
  
    if (elem.count > 1) elem.count--;
    else basketdenSil(id);
  
    showBasket();
  }
  


  function basketDec(id) {
    basket.find(item => item.id == id).count++
    showBasket()
  }











