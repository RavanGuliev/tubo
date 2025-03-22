 const content= document.getElementById("content")
 const id = new URLSearchParams(location.search).get("id")

 const item = data.find(elem => elem.id ==id)


 function showDetail(){
    content.innerHTML = `
       
	<div class="container max-w-6xl p-6 mx-auto space-y-2 ">
	<h3 class=" font-semibold sm:text-2xl ">${item.brand} ${item.model} , ${item.engine} L ,${item.year} , ${item.odometer} km</h3> 
	
		<a rel="noopener noreferrer" href="#" class="block max-w-sm gap-3 mx-auto sm:max-w-full group hover:no-underline focus:no-underline lg:grid lg:grid-cols-12 dark:bg-gray-50">
			<img src="${item.images}" alt="" class="object-cover w-full h-64 rounded sm:h-96 lg:col-span-7 ">
			<div class="p-6 space-y-2 lg:col-span-5 bg-[#f6f7fa] border-2 border-[#4c88f9] rounded sm:h-96">
				<span class="text-3xl text-[#000] font-semibold ">${item.price} ${item.currency}</span>
				<p>${item.city}, ${item.dates}</p>
			   <button id="numara" onclick="nomre()" class=" w-[268px] h-[73px]  font-semibold    bg-[#269547] border-0  text-xl text-[#fff] hover:bg-[#269549] rounded-[7px]"> <i class="fa-solid fa-mobile"></i> Nömrəni göstər</button>
			 
			</div>
					
		</a>
	</div>
                         `
 }

 showDetail()


 function nomre(){
	alert(" Brat Nomren yoxdu pis olma ")
 }

