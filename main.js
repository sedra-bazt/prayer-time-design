let modon=[
  "حلب","دمشق","اللاذقية","طرطوس","ريف دمشق","درعا","ديرالزور","الحسكة","الرقه","حماة","حمص","السويدا","القنيطرة","ادلب"
]
for(i of modon){
  const element= `<Option>${i}</Option>`
  document.getElementById("ss").innerHTML+=element;
}

document.getElementById("ss").addEventListener("change",()=>{
console.log(document.getElementById("ss").value)
if(document.getElementById("ss").value==="حلب"){
  getPrayertime("Halab")
}else if(document.getElementById("ss").value==="دمشق"){
  getPrayertime("Dimashq")
}else if(document.getElementById("ss").value==="الاذقية"){
  getPrayertime("Al Lādhiqīyah")
}
else if(document.getElementById("ss").value==="ريف دمشق"){
  getPrayertime("	Rīf Dimashq")
}
else if(document.getElementById("ss").value==="حمص"){
  getPrayertime("Ḩimş")
}
else if(document.getElementById("ss").value==="طرطوس"){
  getPrayertime("	Ţarţūs")
}
else if(document.getElementById("ss").value==="حماة"){
  getPrayertime("Ḩamāh")
}
else if(document.getElementById("ss").value==="ادلب"){
  getPrayertime("	Idlib")
}
else if(document.getElementById("ss").value==="الحسكة"){
  getPrayertime("	Al Ḩasakah")
}
else if(document.getElementById("ss").value==="درعا"){
  getPrayertime("Dar'ā")
}
else if(document.getElementById("ss").value==="السويدا"){
  getPrayertime("	As Suwaydā'")
}
else if(document.getElementById("ss").value==="القنيطرة"){
  getPrayertime("	Al Qunayţirah")
}
else if(document.getElementById("ss").value==="دير الزور"){
  getPrayertime("	Dayr az Zawr")
}
else if(document.getElementById("ss").value==="الرقه"){
  getPrayertime("	Ar Raqqah")
}
})

function getPrayertime(cityName){

  let params={
    country:"sy",
    city:cityName,
}


axios.get("http://api.aladhan.com/v1/timingsByCity", {
    params:params
  })
  .then(function (response) {
    console.log(response.data.data.timings);
    let timings=response.data.data.timings;
    document.getElementById("shrouq").innerHTML=timings.Sunrise
    document.getElementById("fajr").innerHTML=timings.Fajr
    document.getElementById("alesha").innerHTML=timings.Isha
    document.getElementById("almoughreb").innerHTML=timings.Maghrib
    document.getElementById("aser").innerHTML=timings.Asr
    document.getElementById("doher").innerHTML=timings.Dhuhr

  const day1=response.data.data.date.hijri.weekday.ar;
  const day2=response.data.data.date.readable
  document.getElementById("day").innerHTML=day2 +" "+day1;
  document.getElementById("city").innerHTML=document.getElementById("ss").value;

  })
  .catch(function (error) {
    console.log(error);
  })
  .finally(function () {
    // always executed
  });  
}




