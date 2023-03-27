const dogbtn = document.getElementById("dogbtn");


async function getDog(){
    const resp = await fetch("https://dog.ceo/api/breeds/image/random");
    const data =  await resp.json();
    console.log(data);
    showdata(data.message);
}
getDog();

function showdata(dogimage){
    document.getElementById("dog").innerHTML = `
    <img src="${dogimage}" alt="Perros en búsca de hogar">
    `
}


dogbtn.addEventListener("click",()=>{
getDog();
});



