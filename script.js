let box = document.querySelector(".box")

let inp = document.getElementById("input1")
let inp2 = document.getElementById("input2")
let btn = document.querySelector(".btn")

let data = [123456]
let data1 = [201212]

alert(`sizningi ID ${data} va pasword ${data1}`)

btn.addEventListener("click",()=>{
    if (inp.value == data && inp2.value == data1) {
        alert("Дабро пожаловать")
            inp2.value = ''
      inp.value = ''
    } else {
        alert("sizninig ID yoki Psaword toxri emas ")
        inp2.value = ''
      inp.value = ''
    }
})


