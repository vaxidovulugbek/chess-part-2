
let massiv = []
let obj = {}

let elList = document.querySelector("#list")
let elY = document.querySelector("#ycordinat")
let elX = document.querySelector("#xcordinat")

let count = 0
let count2 = 1
let y = 1
for (let i = 0; i < 8; i++){
  let li = document.createElement("li")
  li.className = `item`
  li.classList.add(`y_${y}`)
  li.classList.add(`8`)
  elList.appendChild(li)
  if (count % 2 == 0) {
    li.style.backgroundImage = "url('../img/white.jpg')"
    li.style.backgroundSize = "10px"
    li.classList.add("white")
  }
  if (count % 2 != 0) {
    li.style.backgroundImage = "url('../img/darkbg.jpeg')"
    li.classList.add("dark")
  }
  count++
  count2++
  y++
  massiv.push(li)
}

y = 1
for (let i = 0; i < 8; i++){
  let li = document.createElement("li")
  li.className = `item`
  li.classList.add(`y_${y}`)
  li.classList.add(`7`)
  elList.appendChild(li)
  if (count % 2 == 0) {
    li.classList.add("dark")
    li.style.backgroundImage = "url('../img/darkbg.jpeg')"
  }
  if (count % 2 != 0) {
    li.classList.add("white")
    li.style.backgroundImage = "url('../img/white.jpg')"
    li.style.backgroundSize = "10px"
  }
  count++
  count2++
  y++
  massiv.push(li)
}
y = 1
for (let i = 0; i < 8; i++){
  let li = document.createElement("li")
  li.className = `item`
  li.classList.add(`y_${y}`)
  li.classList.add(`6`)
  elList.appendChild(li)
  if (count % 2 == 0) {
    li.classList.add("white")
    li.style.backgroundImage = "url('../img/white.jpg')"
    li.style.backgroundSize = "10px"
  }
  if (count % 2 != 0) {
    li.classList.add("dark")
    li.style.backgroundImage = "url('../img/darkbg.jpeg')"
  }
  count++
  count2++
  y++
  massiv.push(li)
}
y = 1
for (let i = 0; i < 8; i++){
  let li = document.createElement("li")
  li.className = `item`
  li.classList.add(`y_${y}`)
  li.classList.add(`5`)
  elList.appendChild(li)
  if (count % 2 == 0) {
    li.classList.add("dark")
    li.style.backgroundImage = "url('../img/darkbg.jpeg')"
  }
  if (count % 2 != 0) {
    li.classList.add("white")
    li.style.backgroundImage = "url('../img/white.jpg')"
    li.style.backgroundSize = "10px"
  }
  count++
  count2++
  y++
  massiv.push(li)
}
y = 1
for (let i = 0; i < 8; i++){
  let li = document.createElement("li")
  li.className = `item`
  li.classList.add(`y_${y}`)
  li.classList.add(`4`)
  elList.appendChild(li)
  if (count % 2 == 0) {
    li.classList.add("white")
    li.style.backgroundImage = "url('../img/white.jpg')"
    li.style.backgroundSize = "10px"
  }
  if (count % 2 != 0) {
    li.classList.add("dark")
    li.style.backgroundImage = "url('../img/darkbg.jpeg')"
  }
  count++
  count2++
  y++
  massiv.push(li)
}
y = 1
for (let i = 0; i < 8; i++){
  let li = document.createElement("li")
  li.className = `item`
  li.classList.add(`y_${y}`)
  li.classList.add(`3`)
  elList.appendChild(li)
  if (count % 2 == 0) {
    li.classList.add("dark")
    li.style.backgroundImage = "url('../img/darkbg.jpeg')"
  }
  if (count % 2 != 0) {
    li.classList.add("white")
    li.style.backgroundImage = "url('../img/white.jpg')"
    li.style.backgroundSize = "10px"
  }
  count++
  count2++
  y++
  massiv.push(li)
}
y = 1
for (let i = 0; i < 8; i++){
  let li = document.createElement("li")
  li.className = `item`
  li.classList.add(`Y_${y}`)
  li.classList.add(`2`)
  elList.appendChild(li)
  if (count % 2 == 0) {
    li.classList.add("white")
    li.style.backgroundImage = "url('../img/white.jpg')"
    li.style.backgroundSize = "10px"
  }
  if (count % 2 != 0) {
    li.classList.add("dark")
    li.style.backgroundImage = "url('../img/darkbg.jpeg')"
  }
  count++
  count2++
  y++
  massiv.push(li)
}
y = 1
for (let i = 0; i < 8; i++){
  let li = document.createElement("li")
  li.className = `item`
  li.classList.add(`y_${y}`)
  li.classList.add(`1`)
  elList.appendChild(li)
  if (count % 2 == 0) {
    li.classList.add("dark")
    li.style.backgroundImage = "url('../img/darkbg.jpeg')"
  }
  if (count % 2 != 0) {
    li.classList.add("white")
    li.style.backgroundImage = "url('../img/white.jpg')"
    li.style.backgroundSize = "10px"
  }
  count++
  count2++
  y++
  massiv.push(li)
  // console.log(li.classList);
}

let elitem = document.querySelectorAll(".item")


elitem.forEach((itemm, index) => {
  itemm.addEventListener("mouseover",(e) => {
    // console.log(e.target.classList[1]);
    e.target.classList.add("black")
    elX.textContent = e.target.classList[2]
    elY.textContent = e.target.classList[1].slice(-1)
  })
})

elitem.forEach((itemm, index) => {
  itemm.addEventListener("mouseout",(e) => {
    e.target.classList.remove("black")
  })
})

//  =============================== RUH YURISHI ================================
let ruh1 = 2
elContentSubitem1.addEventListener("click" ,(s) => {
  elitem.forEach((itemm, index) => {
    itemm.addEventListener("click",() => {
      console.log(itemm);
      if (ruh1 % 2 == 0) {
       itemm.innerHTML = `<img class="content__subimg" src="img/ruh.svg" alt="ruh">`
       console.log(a);
      }
      else if (ruh1 % 2 != 0){
        itemm.innerHTML = `<img class="content__subimg" src="img/ruh.svg" alt="ruh">`
        itemm.innerHTML = ``
      }
      ruh1++
      // itemm.style.backgroundImage = "url('../img/ot.svg')"
      // itemm.style.background = "url('../img/ruh.svg')"
    })
    itemm.addEventListener("mouseover",(j) => {
      // j.target.innerHTML = `<img class="content__subimg simg" src="../img/ot.svg">`
      // j.target.style.backgroundImage = "url('../img/ruh.svg')"
      // j.target.style.backgroundSize = "60px"
      // j.target.style.backgroundPosition = "center"
      // j.target.style.backgroundRepeat = "no-repeat"

      elitem.forEach((d,h)=>{
        if (j.target.classList[2] ==  d.classList[2]){
          d.classList.add("red")
        }
        if (j.target.classList[1].split("_")[1] == d.classList[1].split("_")[1]) {
          d.classList.add("red")
        }
      }) 
    })
  })

  elitem.forEach((itemm, index) => {
    itemm.addEventListener("mouseout",(j) => {
      // j.target.innerHTML = ``

      elitem.forEach((d,h)=>{
        if (j.target.classList[2] ==  d.classList[2])   {
          d.classList.remove("red")
          // j.target.style.backgroundImage = "url('../img/white.jpg')"
          // j.target.style.backgroundSize = "0px"
        }
        if (j.target.classList[1].split("_")[1] == d.classList[1].split("_")[1]) {
          d.classList.remove("red")
        }
      }) 
    })
  })
})


// ========================================================================
// =========================== SHOX YURISHI ===============================
// ========================================================================

elContentSubitem5.addEventListener("click", (e) => {
  elitem.forEach((itemm, index) => {
    itemm.addEventListener("click",() => {
      console.log(itemm);
      if (ruh1 % 2 == 0) {
       itemm.innerHTML = `<img class="content__subimg" src="img/shoh.svg" alt="ruh">`
       console.log(a);
      }
      else if (ruh1 % 2 != 0){
        itemm.innerHTML = `<img class="content__subimg" src="img/shoh.svg" alt="ruh">`
        itemm.innerHTML = ``
      }
      ruh1++
      // itemm.style.backgroundImage = "url('../img/ot.svg')"
      // itemm.style.background = "url('../img/ruh.svg')"
    })
  itemm.addEventListener("mouseover",(j) => {
    elitem.forEach((d,h)=>{
      // console.log(d);
      // console.log(j.target.classList[1].split("_")[1]);
      // console.log(d.classList[2]);
      // console.log(j.target.classList[2]);
      // console.log(j.target.classList[1]);
      // let ay = j.target.classList[1].split("_")[1]
      // let ax = j.target.classList[2]
      // console.log(ax);
      // console.log(d.classList[1].split("_")[1]);
      // console.log(d.classList[1].split("_")[1]);
      if(j.target.classList[2]-0+1 == d.classList[2] && j.target.classList[1].split("_")[1] == d.classList[1].split("_")[1]){
        d.classList.add("red")
      }
      if(j.target.classList[2] == d.classList[2] && j.target.classList[1].split("_")[1]-0+1 == d.classList[1].split("_")[1]){
        d.classList.add("red")
      }
      if(j.target.classList[2]-0-1 == d.classList[2] && j.target.classList[1].split("_")[1] == d.classList[1].split("_")[1]){
        d.classList.add("red")
      }
      if(j.target.classList[2] == d.classList[2] && j.target.classList[1].split("_")[1]-0-1 == d.classList[1].split("_")[1]){
        d.classList.add("red")
      }
      if(j.target.classList[2]-0+1 == d.classList[2] && j.target.classList[1].split("_")[1]-0+1 == d.classList[1].split("_")[1]){
        d.classList.add("red")
      }
      if(j.target.classList[2]-0+1 == d.classList[2] && j.target.classList[1].split("_")[1]-0-1 == d.classList[1].split("_")[1]){
        d.classList.add("red")
      }
      if(j.target.classList[2]-0-1 == d.classList[2] && j.target.classList[1].split("_")[1]-0+1 == d.classList[1].split("_")[1]){
        d.classList.add("red")
      }
      if(j.target.classList[2]-0-1 == d.classList[2] && j.target.classList[1].split("_")[1]-0-1 == d.classList[1].split("_")[1]){
        d.classList.add("red")
      }
    }) 
  })
})

elitem.forEach((itemm, index) => {
  itemm.addEventListener("mouseout",(j) => {
    elitem.forEach((d,h)=>{
      if(j.target.classList[2]-0+1 == d.classList[2] && j.target.classList[1].split("_")[1] == d.classList[1].split("_")[1]){
        d.classList.remove("red")
      }
      if(j.target.classList[2] == d.classList[2] && j.target.classList[1].split("_")[1]-0+1 == d.classList[1].split("_")[1]){
        d.classList.remove("red")
      }
      if(j.target.classList[2]-0-1 == d.classList[2] && j.target.classList[1].split("_")[1] == d.classList[1].split("_")[1]){
        d.classList.remove("red")
      }
      if(j.target.classList[2] == d.classList[2] && j.target.classList[1].split("_")[1]-0-1 == d.classList[1].split("_")[1]){
        d.classList.remove("red")
      }
      if(j.target.classList[2]-0+1 == d.classList[2] && j.target.classList[1].split("_")[1]-0+1 == d.classList[1].split("_")[1]){
        d.classList.remove("red")
      }
      if(j.target.classList[2]-0+1 == d.classList[2] && j.target.classList[1].split("_")[1]-0-1 == d.classList[1].split("_")[1]){
        d.classList.remove("red")
      }
      if(j.target.classList[2]-0-1 == d.classList[2] && j.target.classList[1].split("_")[1]-0+1 == d.classList[1].split("_")[1]){
        d.classList.remove("red")
      }
      if(j.target.classList[2]-0-1 == d.classList[2] && j.target.classList[1].split("_")[1]-0-1 == d.classList[1].split("_")[1]){
        d.classList.remove("red")
      }
    }) 
  })
})
})

// ========================================================================
// =========================== OT YURISHI =================================
// ========================================================================

elContentSubitem2.addEventListener("click" ,() => {
  elitem.forEach((itemm, index) => {
    itemm.addEventListener("click",() => {
      console.log(itemm);
      if (ruh1 % 2 == 0) {
       itemm.innerHTML = `<img class="content__subimg" src="img/ot.svg" alt="ruh">`
       console.log(a);
      }
      else if (ruh1 % 2 != 0){
        itemm.innerHTML = `<img class="content__subimg" src="img/ot.svg" alt="ruh">`
        itemm.innerHTML = ``
      }
      ruh1++
      // itemm.style.backgroundImage = "url('../img/ot.svg')"
      // itemm.style.background = "url('../img/ruh.svg')"
    })
    itemm.addEventListener("mouseover",(j) => {
      elitem.forEach((d,h)=>{
        if(j.target.classList[2]-0+2 == d.classList[2] && j.target.classList[1].split("_")[1]-0+1 == d.classList[1].split("_")[1]){
          d.classList.add("red")
        }
        if(j.target.classList[2]-0+2 == d.classList[2] && j.target.classList[1].split("_")[1]-0-1 == d.classList[1].split("_")[1]){
          d.classList.add("red")
        }
        if(j.target.classList[2]-0-2 == d.classList[2] && j.target.classList[1].split("_")[1]-0+1 == d.classList[1].split("_")[1]){
          d.classList.add("red")
        }
        if(j.target.classList[2]-0-2 == d.classList[2] && j.target.classList[1].split("_")[1]-0-1 == d.classList[1].split("_")[1]){
          d.classList.add("red")
        }
        if(j.target.classList[2]-0+1 == d.classList[2] && j.target.classList[1].split("_")[1]-0+2 == d.classList[1].split("_")[1]){
          d.classList.add("red")
        }
        if(j.target.classList[2]-0+1 == d.classList[2] && j.target.classList[1].split("_")[1]-0-2 == d.classList[1].split("_")[1]){
          d.classList.add("red")
        }
        if(j.target.classList[2]-0+1 == d.classList[2] && j.target.classList[1].split("_")[1]-0-2 == d.classList[1].split("_")[1]){
          d.classList.add("red")
        }
        if(j.target.classList[2]-0-1 == d.classList[2] && j.target.classList[1].split("_")[1]-0+2 == d.classList[1].split("_")[1]){
          d.classList.add("red")
        }
        if(j.target.classList[2]-0-1 == d.classList[2] && j.target.classList[1].split("_")[1]-0-2 == d.classList[1].split("_")[1]){
          d.classList.add("red")
        }
      }) 
    })
  })

  elitem.forEach((itemm, index) => {
    itemm.addEventListener("mouseout",(j) => {
      elitem.forEach((d,h)=>{
        if(j.target.classList[2]-0+2 == d.classList[2] && j.target.classList[1].split("_")[1]-0+1 == d.classList[1].split("_")[1]){
          d.classList.remove("red")
        }
        if(j.target.classList[2]-0+2 == d.classList[2] && j.target.classList[1].split("_")[1]-0-1 == d.classList[1].split("_")[1]){
          d.classList.remove("red")
        }
        if(j.target.classList[2]-0-2 == d.classList[2] && j.target.classList[1].split("_")[1]-0+1 == d.classList[1].split("_")[1]){
          d.classList.remove("red")
        }
        if(j.target.classList[2]-0-2 == d.classList[2] && j.target.classList[1].split("_")[1]-0-1 == d.classList[1].split("_")[1]){
          d.classList.remove("red")
        }
        if(j.target.classList[2]-0+1 == d.classList[2] && j.target.classList[1].split("_")[1]-0+2 == d.classList[1].split("_")[1]){
          d.classList.remove("red")
        }
        if(j.target.classList[2]-0+1 == d.classList[2] && j.target.classList[1].split("_")[1]-0-2 == d.classList[1].split("_")[1]){
          d.classList.remove("red")
        }
        if(j.target.classList[2]-0-1 == d.classList[2] && j.target.classList[1].split("_")[1]-0+2 == d.classList[1].split("_")[1]){
          d.classList.remove("red")
        }
        if(j.target.classList[2]-0-1 == d.classList[2] && j.target.classList[1].split("_")[1]-0-2 == d.classList[1].split("_")[1]){
          d.classList.remove("red")
        }
      }) 
    })
  })
})


// ========================================================================
// =========================== FEL YURISHI ================================
// ========================================================================
elContentSubitem3.addEventListener("click" ,() => {
  elitem.forEach((itemm, index) => {
    itemm.addEventListener("click",() => {
      console.log(itemm);
      if (ruh1 % 2 == 0) {
       itemm.innerHTML = `<img class="content__subimg" src="img/fel.svg" alt="ruh">`
       console.log(a);
      }
      else if (ruh1 % 2 != 0){
        itemm.innerHTML = `<img class="content__subimg" src="img/fel.svg" alt="ruh">`
        itemm.innerHTML = ``
      }
      ruh1++
      // itemm.style.backgroundImage = "url('../img/ot.svg')"
      // itemm.style.background = "url('../img/ruh.svg')"
    })
    itemm.addEventListener("mouseover",(j) => {
      elitem.forEach((d,h)=>{
        if(j.target.classList[2]-0+1 == d.classList[2] && j.target.classList[1].split("_")[1]-0+1 == d.classList[1].split("_")[1]){
          d.classList.add("red")
        }
        if(j.target.classList[2]-0+2 == d.classList[2] && j.target.classList[1].split("_")[1]-0+2 == d.classList[1].split("_")[1]){
          d.classList.add("red")
        }
        if(j.target.classList[2]-0+3 == d.classList[2] && j.target.classList[1].split("_")[1]-0+3 == d.classList[1].split("_")[1]){
          d.classList.add("red")
        }
        if(j.target.classList[2]-0+4 == d.classList[2] && j.target.classList[1].split("_")[1]-0+4 == d.classList[1].split("_")[1]){
          d.classList.add("red")
        }
        if(j.target.classList[2]-0+5 == d.classList[2] && j.target.classList[1].split("_")[1]-0+5 == d.classList[1].split("_")[1]){
          d.classList.add("red")
        }
        if(j.target.classList[2]-0+6 == d.classList[2] && j.target.classList[1].split("_")[1]-0+6 == d.classList[1].split("_")[1]){
          d.classList.add("red")
        }
        if(j.target.classList[2]-0+6 == d.classList[2] && j.target.classList[1].split("_")[1]-0+6 == d.classList[1].split("_")[1]){
          d.classList.add("red")
        }
        if(j.target.classList[2]-0+7 == d.classList[2] && j.target.classList[1].split("_")[1]-0+7 == d.classList[1].split("_")[1]){
          d.classList.add("red")
        }
        if(j.target.classList[2]-0+8 == d.classList[2] && j.target.classList[1].split("_")[1]-0+8 == d.classList[1].split("_")[1]){
          d.classList.add("red")
        }


        if(j.target.classList[2]-0-1 == d.classList[2] && j.target.classList[1].split("_")[1]-0-1 == d.classList[1].split("_")[1]){
          d.classList.add("red")
        }
        if(j.target.classList[2]-0-2 == d.classList[2] && j.target.classList[1].split("_")[1]-0-2 == d.classList[1].split("_")[1]){
          d.classList.add("red")
        }
        if(j.target.classList[2]-0-3 == d.classList[2] && j.target.classList[1].split("_")[1]-0-3 == d.classList[1].split("_")[1]){
          d.classList.add("red")
        }
        if(j.target.classList[2]-0-4 == d.classList[2] && j.target.classList[1].split("_")[1]-0-4 == d.classList[1].split("_")[1]){
          d.classList.add("red")
        }
        if(j.target.classList[2]-0-5 == d.classList[2] && j.target.classList[1].split("_")[1]-0-5 == d.classList[1].split("_")[1]){
          d.classList.add("red")
        }
        if(j.target.classList[2]-0-6 == d.classList[2] && j.target.classList[1].split("_")[1]-0-6 == d.classList[1].split("_")[1]){
          d.classList.add("red")
        }
        if(j.target.classList[2]-0-6 == d.classList[2] && j.target.classList[1].split("_")[1]-0-6 == d.classList[1].split("_")[1]){
          d.classList.add("red")
        }
        if(j.target.classList[2]-0-7 == d.classList[2] && j.target.classList[1].split("_")[1]-0-7 == d.classList[1].split("_")[1]){
          d.classList.add("red")
        }
        if(j.target.classList[2]-0-8 == d.classList[2] && j.target.classList[1].split("_")[1]-0-8 == d.classList[1].split("_")[1]){
          d.classList.add("red")
        }

        if(j.target.classList[2]-0+1 == d.classList[2] && j.target.classList[1].split("_")[1]-0-1 == d.classList[1].split("_")[1]){
          d.classList.add("red")
        }
        if(j.target.classList[2]-0+2 == d.classList[2] && j.target.classList[1].split("_")[1]-0-2 == d.classList[1].split("_")[1]){
          d.classList.add("red")
        }
        if(j.target.classList[2]-0+3 == d.classList[2] && j.target.classList[1].split("_")[1]-0-3 == d.classList[1].split("_")[1]){
          d.classList.add("red")
        }
        if(j.target.classList[2]-0+4 == d.classList[2] && j.target.classList[1].split("_")[1]-0-4 == d.classList[1].split("_")[1]){
          d.classList.add("red")
        }
        if(j.target.classList[2]-0+5 == d.classList[2] && j.target.classList[1].split("_")[1]-0-5 == d.classList[1].split("_")[1]){
          d.classList.add("red")
        }
        if(j.target.classList[2]-0+6 == d.classList[2] && j.target.classList[1].split("_")[1]-0-6 == d.classList[1].split("_")[1]){
          d.classList.add("red")
        }
        if(j.target.classList[2]-0+6 == d.classList[2] && j.target.classList[1].split("_")[1]-0-6 == d.classList[1].split("_")[1]){
          d.classList.add("red")
        }
        if(j.target.classList[2]-0+7 == d.classList[2] && j.target.classList[1].split("_")[1]-0-7 == d.classList[1].split("_")[1]){
          d.classList.add("red")
        }
        if(j.target.classList[2]-0+8 == d.classList[2] && j.target.classList[1].split("_")[1]-0-8 == d.classList[1].split("_")[1]){
          d.classList.add("red")
        }

        if(j.target.classList[2]-0-1 == d.classList[2] && j.target.classList[1].split("_")[1]-0+1 == d.classList[1].split("_")[1]){
          d.classList.add("red")
        }
        if(j.target.classList[2]-0-2 == d.classList[2] && j.target.classList[1].split("_")[1]-0+2 == d.classList[1].split("_")[1]){
          d.classList.add("red")
        }
        if(j.target.classList[2]-0-3 == d.classList[2] && j.target.classList[1].split("_")[1]-0+3 == d.classList[1].split("_")[1]){
          d.classList.add("red")
        }
        if(j.target.classList[2]-0-4 == d.classList[2] && j.target.classList[1].split("_")[1]-0+4 == d.classList[1].split("_")[1]){
          d.classList.add("red")
        }
        if(j.target.classList[2]-0-5 == d.classList[2] && j.target.classList[1].split("_")[1]-0+5 == d.classList[1].split("_")[1]){
          d.classList.add("red")
        }
        if(j.target.classList[2]-0-6 == d.classList[2] && j.target.classList[1].split("_")[1]-0+6 == d.classList[1].split("_")[1]){
          d.classList.add("red")
        }
        if(j.target.classList[2]-0-6 == d.classList[2] && j.target.classList[1].split("_")[1]-0+6 == d.classList[1].split("_")[1]){
          d.classList.add("red")
        }
        if(j.target.classList[2]-0-7 == d.classList[2] && j.target.classList[1].split("_")[1]-0+7 == d.classList[1].split("_")[1]){
          d.classList.add("red")
        }
        if(j.target.classList[2]-0-8 == d.classList[2] && j.target.classList[1].split("_")[1]-0+8 == d.classList[1].split("_")[1]){
          d.classList.add("red")
        }
      }) 
    })
  })

  elitem.forEach((itemm, index) => {
    itemm.addEventListener("mouseout",(j) => {
      elitem.forEach((d,h)=>{
        if(j.target.classList[2]-0+1 == d.classList[2] && j.target.classList[1].split("_")[1]-0+1 == d.classList[1].split("_")[1]){
          d.classList.remove("red")
        }
        if(j.target.classList[2]-0+2 == d.classList[2] && j.target.classList[1].split("_")[1]-0+2 == d.classList[1].split("_")[1]){
          d.classList.remove("red")
        }
        if(j.target.classList[2]-0+3 == d.classList[2] && j.target.classList[1].split("_")[1]-0+3 == d.classList[1].split("_")[1]){
          d.classList.remove("red")
        }
        if(j.target.classList[2]-0+4 == d.classList[2] && j.target.classList[1].split("_")[1]-0+4 == d.classList[1].split("_")[1]){
          d.classList.remove("red")
        }
        if(j.target.classList[2]-0+5 == d.classList[2] && j.target.classList[1].split("_")[1]-0+5 == d.classList[1].split("_")[1]){
          d.classList.remove("red")
        }
        if(j.target.classList[2]-0+6 == d.classList[2] && j.target.classList[1].split("_")[1]-0+6 == d.classList[1].split("_")[1]){
          d.classList.remove("red")
        }
        if(j.target.classList[2]-0+6 == d.classList[2] && j.target.classList[1].split("_")[1]-0+6 == d.classList[1].split("_")[1]){
          d.classList.remove("red")
        }
        if(j.target.classList[2]-0+7 == d.classList[2] && j.target.classList[1].split("_")[1]-0+7 == d.classList[1].split("_")[1]){
          d.classList.remove("red")
        }
        if(j.target.classList[2]-0+8 == d.classList[2] && j.target.classList[1].split("_")[1]-0+8 == d.classList[1].split("_")[1]){
          d.classList.remove("red")
        }

        if(j.target.classList[2]-0-1 == d.classList[2] && j.target.classList[1].split("_")[1]-0-1 == d.classList[1].split("_")[1]){
          d.classList.remove("red")
        }
        if(j.target.classList[2]-0-2 == d.classList[2] && j.target.classList[1].split("_")[1]-0-2 == d.classList[1].split("_")[1]){
          d.classList.remove("red")
        }
        if(j.target.classList[2]-0-3 == d.classList[2] && j.target.classList[1].split("_")[1]-0-3 == d.classList[1].split("_")[1]){
          d.classList.remove("red")
        }
        if(j.target.classList[2]-0-4 == d.classList[2] && j.target.classList[1].split("_")[1]-0-4 == d.classList[1].split("_")[1]){
          d.classList.remove("red")
        }
        if(j.target.classList[2]-0-5 == d.classList[2] && j.target.classList[1].split("_")[1]-0-5 == d.classList[1].split("_")[1]){
          d.classList.remove("red")
        }
        if(j.target.classList[2]-0-6 == d.classList[2] && j.target.classList[1].split("_")[1]-0-6 == d.classList[1].split("_")[1]){
          d.classList.remove("red")
        }
        if(j.target.classList[2]-0-6 == d.classList[2] && j.target.classList[1].split("_")[1]-0-6 == d.classList[1].split("_")[1]){
          d.classList.remove("red")
        }
        if(j.target.classList[2]-0-7 == d.classList[2] && j.target.classList[1].split("_")[1]-0-7 == d.classList[1].split("_")[1]){
          d.classList.remove("red")
        }
        if(j.target.classList[2]-0-8 == d.classList[2] && j.target.classList[1].split("_")[1]-0-8 == d.classList[1].split("_")[1]){
          d.classList.remove("red")
        }

        if(j.target.classList[2]-0+1 == d.classList[2] && j.target.classList[1].split("_")[1]-0-1 == d.classList[1].split("_")[1]){
          d.classList.remove("red")
        }
        if(j.target.classList[2]-0+2 == d.classList[2] && j.target.classList[1].split("_")[1]-0-2 == d.classList[1].split("_")[1]){
          d.classList.remove("red")
        }
        if(j.target.classList[2]-0+3 == d.classList[2] && j.target.classList[1].split("_")[1]-0-3 == d.classList[1].split("_")[1]){
          d.classList.remove("red")
        }
        if(j.target.classList[2]-0+4 == d.classList[2] && j.target.classList[1].split("_")[1]-0-4 == d.classList[1].split("_")[1]){
          d.classList.remove("red")
        }
        if(j.target.classList[2]-0+5 == d.classList[2] && j.target.classList[1].split("_")[1]-0-5 == d.classList[1].split("_")[1]){
          d.classList.remove("red")
        }
        if(j.target.classList[2]-0+6 == d.classList[2] && j.target.classList[1].split("_")[1]-0-6 == d.classList[1].split("_")[1]){
          d.classList.remove("red")
        }
        if(j.target.classList[2]-0+6 == d.classList[2] && j.target.classList[1].split("_")[1]-0-6 == d.classList[1].split("_")[1]){
          d.classList.remove("red")
        }
        if(j.target.classList[2]-0+7 == d.classList[2] && j.target.classList[1].split("_")[1]-0-7 == d.classList[1].split("_")[1]){
          d.classList.remove("red")
        }
        if(j.target.classList[2]-0+8 == d.classList[2] && j.target.classList[1].split("_")[1]-0-8 == d.classList[1].split("_")[1]){
          d.classList.remove("red")
        }

        if(j.target.classList[2]-0-1 == d.classList[2] && j.target.classList[1].split("_")[1]-0+1 == d.classList[1].split("_")[1]){
          d.classList.remove("red")
        }
        if(j.target.classList[2]-0-2 == d.classList[2] && j.target.classList[1].split("_")[1]-0+2 == d.classList[1].split("_")[1]){
          d.classList.remove("red")
        }
        if(j.target.classList[2]-0-3 == d.classList[2] && j.target.classList[1].split("_")[1]-0+3 == d.classList[1].split("_")[1]){
          d.classList.remove("red")
        }
        if(j.target.classList[2]-0-4 == d.classList[2] && j.target.classList[1].split("_")[1]-0+4 == d.classList[1].split("_")[1]){
          d.classList.remove("red")
        }
        if(j.target.classList[2]-0-5 == d.classList[2] && j.target.classList[1].split("_")[1]-0+5 == d.classList[1].split("_")[1]){
          d.classList.remove("red")
        }
        if(j.target.classList[2]-0-6 == d.classList[2] && j.target.classList[1].split("_")[1]-0+6 == d.classList[1].split("_")[1]){
          d.classList.remove("red")
        }
        if(j.target.classList[2]-0-6 == d.classList[2] && j.target.classList[1].split("_")[1]-0+6 == d.classList[1].split("_")[1]){
          d.classList.remove("red")
        }
        if(j.target.classList[2]-0-7 == d.classList[2] && j.target.classList[1].split("_")[1]-0+7 == d.classList[1].split("_")[1]){
          d.classList.remove("red")
        }
        if(j.target.classList[2]-0-8 == d.classList[2] && j.target.classList[1].split("_")[1]-0+8 == d.classList[1].split("_")[1]){
          d.classList.remove("red")
        }
      }) 
    })
  })
})


// ========================================================================
// =========================== QIROLICHA YURISHI ==========================
// ========================================================================

elContentSubitem4.addEventListener("click" ,() => {
  elitem.forEach((itemm, index) => {
    itemm.addEventListener("click",() => {
      console.log(itemm);
      if (ruh1 % 2 == 0) {
       itemm.innerHTML = `<img class="content__subimg" src="img/farzin.svg" alt="ruh">`
       console.log(a);
      }
      else if (ruh1 % 2 != 0){
        itemm.innerHTML = `<img class="content__subimg" src="img/farzin.svg" alt="ruh">`
        itemm.innerHTML = ``
      }
      ruh1++
      // itemm.style.backgroundImage = "url('../img/ot.svg')"
      // itemm.style.background = "url('../img/ruh.svg')"
    })
    itemm.addEventListener("mouseover",(j) => {
      elitem.forEach((d,h)=>{
        if (j.target.classList[2] ==  d.classList[2])   {
          d.classList.add("red")
        }
        if (j.target.classList[1].split("_")[1] == d.classList[1].split("_")[1]) {
          d.classList.add("red")
        }
        // if (d.classList[1].slice(-1) == e.target.classList[1].slice(-1)) {
        //   d.classList.add("red")
        // }
        // if (d.classList[2] == e.target.classList[2]) {
        //   d.classList.add("red")
        // }


        if(j.target.classList[2]-0+1 == d.classList[2] && j.target.classList[1].split("_")[1] == d.classList[1].split("_")[1]){
          d.classList.add("red")
        }
        if(j.target.classList[2] == d.classList[2] && j.target.classList[1].split("_")[1]-0+1 == d.classList[1].split("_")[1]){
          d.classList.add("red")
        }
        if(j.target.classList[2]-0-1 == d.classList[2] && j.target.classList[1].split("_")[1] == d.classList[1].split("_")[1]){
          d.classList.add("red")
        }
        if(j.target.classList[2] == d.classList[2] && j.target.classList[1].split("_")[1]-0-1 == d.classList[1].split("_")[1]){
          d.classList.add("red")
        }
        if(j.target.classList[2]-0+1 == d.classList[2] && j.target.classList[1].split("_")[1]-0+1 == d.classList[1].split("_")[1]){
          d.classList.add("red")
        }
        if(j.target.classList[2]-0+1 == d.classList[2] && j.target.classList[1].split("_")[1]-0-1 == d.classList[1].split("_")[1]){
          d.classList.add("red")
        }
        if(j.target.classList[2]-0-1 == d.classList[2] && j.target.classList[1].split("_")[1]-0+1 == d.classList[1].split("_")[1]){
          d.classList.add("red")
        }
        if(j.target.classList[2]-0-1 == d.classList[2] && j.target.classList[1].split("_")[1]-0-1 == d.classList[1].split("_")[1]){
          d.classList.add("red")
        }

        if(j.target.classList[2]-0+1 == d.classList[2] && j.target.classList[1].split("_")[1]-0+1 == d.classList[1].split("_")[1]){
          d.classList.add("red")
        }
        if(j.target.classList[2]-0+2 == d.classList[2] && j.target.classList[1].split("_")[1]-0+2 == d.classList[1].split("_")[1]){
          d.classList.add("red")
        }
        if(j.target.classList[2]-0+3 == d.classList[2] && j.target.classList[1].split("_")[1]-0+3 == d.classList[1].split("_")[1]){
          d.classList.add("red")
        }
        if(j.target.classList[2]-0+4 == d.classList[2] && j.target.classList[1].split("_")[1]-0+4 == d.classList[1].split("_")[1]){
          d.classList.add("red")
        }
        if(j.target.classList[2]-0+5 == d.classList[2] && j.target.classList[1].split("_")[1]-0+5 == d.classList[1].split("_")[1]){
          d.classList.add("red")
        }
        if(j.target.classList[2]-0+6 == d.classList[2] && j.target.classList[1].split("_")[1]-0+6 == d.classList[1].split("_")[1]){
          d.classList.add("red")
        }
        if(j.target.classList[2]-0+6 == d.classList[2] && j.target.classList[1].split("_")[1]-0+6 == d.classList[1].split("_")[1]){
          d.classList.add("red")
        }
        if(j.target.classList[2]-0+7 == d.classList[2] && j.target.classList[1].split("_")[1]-0+7 == d.classList[1].split("_")[1]){
          d.classList.add("red")
        }
        if(j.target.classList[2]-0+8 == d.classList[2] && j.target.classList[1].split("_")[1]-0+8 == d.classList[1].split("_")[1]){
          d.classList.add("red")
        }


        if(j.target.classList[2]-0-1 == d.classList[2] && j.target.classList[1].split("_")[1]-0-1 == d.classList[1].split("_")[1]){
          d.classList.add("red")
        }
        if(j.target.classList[2]-0-2 == d.classList[2] && j.target.classList[1].split("_")[1]-0-2 == d.classList[1].split("_")[1]){
          d.classList.add("red")
        }
        if(j.target.classList[2]-0-3 == d.classList[2] && j.target.classList[1].split("_")[1]-0-3 == d.classList[1].split("_")[1]){
          d.classList.add("red")
        }
        if(j.target.classList[2]-0-4 == d.classList[2] && j.target.classList[1].split("_")[1]-0-4 == d.classList[1].split("_")[1]){
          d.classList.add("red")
        }
        if(j.target.classList[2]-0-5 == d.classList[2] && j.target.classList[1].split("_")[1]-0-5 == d.classList[1].split("_")[1]){
          d.classList.add("red")
        }
        if(j.target.classList[2]-0-6 == d.classList[2] && j.target.classList[1].split("_")[1]-0-6 == d.classList[1].split("_")[1]){
          d.classList.add("red")
        }
        if(j.target.classList[2]-0-6 == d.classList[2] && j.target.classList[1].split("_")[1]-0-6 == d.classList[1].split("_")[1]){
          d.classList.add("red")
        }
        if(j.target.classList[2]-0-7 == d.classList[2] && j.target.classList[1].split("_")[1]-0-7 == d.classList[1].split("_")[1]){
          d.classList.add("red")
        }
        if(j.target.classList[2]-0-8 == d.classList[2] && j.target.classList[1].split("_")[1]-0-8 == d.classList[1].split("_")[1]){
          d.classList.add("red")
        }

        if(j.target.classList[2]-0+1 == d.classList[2] && j.target.classList[1].split("_")[1]-0-1 == d.classList[1].split("_")[1]){
          d.classList.add("red")
        }
        if(j.target.classList[2]-0+2 == d.classList[2] && j.target.classList[1].split("_")[1]-0-2 == d.classList[1].split("_")[1]){
          d.classList.add("red")
        }
        if(j.target.classList[2]-0+3 == d.classList[2] && j.target.classList[1].split("_")[1]-0-3 == d.classList[1].split("_")[1]){
          d.classList.add("red")
        }
        if(j.target.classList[2]-0+4 == d.classList[2] && j.target.classList[1].split("_")[1]-0-4 == d.classList[1].split("_")[1]){
          d.classList.add("red")
        }
        if(j.target.classList[2]-0+5 == d.classList[2] && j.target.classList[1].split("_")[1]-0-5 == d.classList[1].split("_")[1]){
          d.classList.add("red")
        }
        if(j.target.classList[2]-0+6 == d.classList[2] && j.target.classList[1].split("_")[1]-0-6 == d.classList[1].split("_")[1]){
          d.classList.add("red")
        }
        if(j.target.classList[2]-0+6 == d.classList[2] && j.target.classList[1].split("_")[1]-0-6 == d.classList[1].split("_")[1]){
          d.classList.add("red")
        }
        if(j.target.classList[2]-0+7 == d.classList[2] && j.target.classList[1].split("_")[1]-0-7 == d.classList[1].split("_")[1]){
          d.classList.add("red")
        }
        if(j.target.classList[2]-0+8 == d.classList[2] && j.target.classList[1].split("_")[1]-0-8 == d.classList[1].split("_")[1]){
          d.classList.add("red")
        }

        if(j.target.classList[2]-0-1 == d.classList[2] && j.target.classList[1].split("_")[1]-0+1 == d.classList[1].split("_")[1]){
          d.classList.add("red")
        }
        if(j.target.classList[2]-0-2 == d.classList[2] && j.target.classList[1].split("_")[1]-0+2 == d.classList[1].split("_")[1]){
          d.classList.add("red")
        }
        if(j.target.classList[2]-0-3 == d.classList[2] && j.target.classList[1].split("_")[1]-0+3 == d.classList[1].split("_")[1]){
          d.classList.add("red")
        }
        if(j.target.classList[2]-0-4 == d.classList[2] && j.target.classList[1].split("_")[1]-0+4 == d.classList[1].split("_")[1]){
          d.classList.add("red")
        }
        if(j.target.classList[2]-0-5 == d.classList[2] && j.target.classList[1].split("_")[1]-0+5 == d.classList[1].split("_")[1]){
          d.classList.add("red")
        }
        if(j.target.classList[2]-0-6 == d.classList[2] && j.target.classList[1].split("_")[1]-0+6 == d.classList[1].split("_")[1]){
          d.classList.add("red")
        }
        if(j.target.classList[2]-0-6 == d.classList[2] && j.target.classList[1].split("_")[1]-0+6 == d.classList[1].split("_")[1]){
          d.classList.add("red")
        }
        if(j.target.classList[2]-0-7 == d.classList[2] && j.target.classList[1].split("_")[1]-0+7 == d.classList[1].split("_")[1]){
          d.classList.add("red")
        }
        if(j.target.classList[2]-0-8 == d.classList[2] && j.target.classList[1].split("_")[1]-0+8 == d.classList[1].split("_")[1]){
          d.classList.add("red")
        }
      }) 
    })
  })

  elitem.forEach((itemm, index) => {
    itemm.addEventListener("mouseout",(j) => {
      elitem.forEach((d,h)=>{
        if (j.target.classList[2] ==  d.classList[2])   {
          d.classList.remove("red")
        }
        if (j.target.classList[1].split("_")[1] == d.classList[1].split("_")[1]) {
          d.classList.remove("red")
        }


        if(j.target.classList[2]-0+1 == d.classList[2] && j.target.classList[1].split("_")[1]-0+1 == d.classList[1].split("_")[1]){
          d.classList.remove("red")
        }
        if(j.target.classList[2]-0+2 == d.classList[2] && j.target.classList[1].split("_")[1]-0+2 == d.classList[1].split("_")[1]){
          d.classList.remove("red")
        }
        if(j.target.classList[2]-0+3 == d.classList[2] && j.target.classList[1].split("_")[1]-0+3 == d.classList[1].split("_")[1]){
          d.classList.remove("red")
        }
        if(j.target.classList[2]-0+4 == d.classList[2] && j.target.classList[1].split("_")[1]-0+4 == d.classList[1].split("_")[1]){
          d.classList.remove("red")
        }
        if(j.target.classList[2]-0+5 == d.classList[2] && j.target.classList[1].split("_")[1]-0+5 == d.classList[1].split("_")[1]){
          d.classList.remove("red")
        }
        if(j.target.classList[2]-0+6 == d.classList[2] && j.target.classList[1].split("_")[1]-0+6 == d.classList[1].split("_")[1]){
          d.classList.remove("red")
        }
        if(j.target.classList[2]-0+6 == d.classList[2] && j.target.classList[1].split("_")[1]-0+6 == d.classList[1].split("_")[1]){
          d.classList.remove("red")
        }
        if(j.target.classList[2]-0+7 == d.classList[2] && j.target.classList[1].split("_")[1]-0+7 == d.classList[1].split("_")[1]){
          d.classList.remove("red")
        }
        if(j.target.classList[2]-0+8 == d.classList[2] && j.target.classList[1].split("_")[1]-0+8 == d.classList[1].split("_")[1]){
          d.classList.remove("red")
        }

        if(j.target.classList[2]-0-1 == d.classList[2] && j.target.classList[1].split("_")[1]-0-1 == d.classList[1].split("_")[1]){
          d.classList.remove("red")
        }
        if(j.target.classList[2]-0-2 == d.classList[2] && j.target.classList[1].split("_")[1]-0-2 == d.classList[1].split("_")[1]){
          d.classList.remove("red")
        }
        if(j.target.classList[2]-0-3 == d.classList[2] && j.target.classList[1].split("_")[1]-0-3 == d.classList[1].split("_")[1]){
          d.classList.remove("red")
        }
        if(j.target.classList[2]-0-4 == d.classList[2] && j.target.classList[1].split("_")[1]-0-4 == d.classList[1].split("_")[1]){
          d.classList.remove("red")
        }
        if(j.target.classList[2]-0-5 == d.classList[2] && j.target.classList[1].split("_")[1]-0-5 == d.classList[1].split("_")[1]){
          d.classList.remove("red")
        }
        if(j.target.classList[2]-0-6 == d.classList[2] && j.target.classList[1].split("_")[1]-0-6 == d.classList[1].split("_")[1]){
          d.classList.remove("red")
        }
        if(j.target.classList[2]-0-6 == d.classList[2] && j.target.classList[1].split("_")[1]-0-6 == d.classList[1].split("_")[1]){
          d.classList.remove("red")
        }
        if(j.target.classList[2]-0-7 == d.classList[2] && j.target.classList[1].split("_")[1]-0-7 == d.classList[1].split("_")[1]){
          d.classList.remove("red")
        }
        if(j.target.classList[2]-0-8 == d.classList[2] && j.target.classList[1].split("_")[1]-0-8 == d.classList[1].split("_")[1]){
          d.classList.remove("red")
        }

        if(j.target.classList[2]-0+1 == d.classList[2] && j.target.classList[1].split("_")[1]-0-1 == d.classList[1].split("_")[1]){
          d.classList.remove("red")
        }
        if(j.target.classList[2]-0+2 == d.classList[2] && j.target.classList[1].split("_")[1]-0-2 == d.classList[1].split("_")[1]){
          d.classList.remove("red")
        }
        if(j.target.classList[2]-0+3 == d.classList[2] && j.target.classList[1].split("_")[1]-0-3 == d.classList[1].split("_")[1]){
          d.classList.remove("red")
        }
        if(j.target.classList[2]-0+4 == d.classList[2] && j.target.classList[1].split("_")[1]-0-4 == d.classList[1].split("_")[1]){
          d.classList.remove("red")
        }
        if(j.target.classList[2]-0+5 == d.classList[2] && j.target.classList[1].split("_")[1]-0-5 == d.classList[1].split("_")[1]){
          d.classList.remove("red")
        }
        if(j.target.classList[2]-0+6 == d.classList[2] && j.target.classList[1].split("_")[1]-0-6 == d.classList[1].split("_")[1]){
          d.classList.remove("red")
        }
        if(j.target.classList[2]-0+6 == d.classList[2] && j.target.classList[1].split("_")[1]-0-6 == d.classList[1].split("_")[1]){
          d.classList.remove("red")
        }
        if(j.target.classList[2]-0+7 == d.classList[2] && j.target.classList[1].split("_")[1]-0-7 == d.classList[1].split("_")[1]){
          d.classList.remove("red")
        }
        if(j.target.classList[2]-0+8 == d.classList[2] && j.target.classList[1].split("_")[1]-0-8 == d.classList[1].split("_")[1]){
          d.classList.remove("red")
        }

        if(j.target.classList[2]-0-1 == d.classList[2] && j.target.classList[1].split("_")[1]-0+1 == d.classList[1].split("_")[1]){
          d.classList.remove("red")
        }
        if(j.target.classList[2]-0-2 == d.classList[2] && j.target.classList[1].split("_")[1]-0+2 == d.classList[1].split("_")[1]){
          d.classList.remove("red")
        }
        if(j.target.classList[2]-0-3 == d.classList[2] && j.target.classList[1].split("_")[1]-0+3 == d.classList[1].split("_")[1]){
          d.classList.remove("red")
        }
        if(j.target.classList[2]-0-4 == d.classList[2] && j.target.classList[1].split("_")[1]-0+4 == d.classList[1].split("_")[1]){
          d.classList.remove("red")
        }
        if(j.target.classList[2]-0-5 == d.classList[2] && j.target.classList[1].split("_")[1]-0+5 == d.classList[1].split("_")[1]){
          d.classList.remove("red")
        }
        if(j.target.classList[2]-0-6 == d.classList[2] && j.target.classList[1].split("_")[1]-0+6 == d.classList[1].split("_")[1]){
          d.classList.remove("red")
        }
        if(j.target.classList[2]-0-6 == d.classList[2] && j.target.classList[1].split("_")[1]-0+6 == d.classList[1].split("_")[1]){
          d.classList.remove("red")
        }
        if(j.target.classList[2]-0-7 == d.classList[2] && j.target.classList[1].split("_")[1]-0+7 == d.classList[1].split("_")[1]){
          d.classList.remove("red")
        }
        if(j.target.classList[2]-0-8 == d.classList[2] && j.target.classList[1].split("_")[1]-0+8 == d.classList[1].split("_")[1]){
          d.classList.remove("red")
        }

        if(j.target.classList[2]-0+1 == d.classList[2] && j.target.classList[1].split("_")[1] == d.classList[1].split("_")[1]){
          d.classList.remove("red")
        }
        if(j.target.classList[2] == d.classList[2] && j.target.classList[1].split("_")[1]-0+1 == d.classList[1].split("_")[1]){
          d.classList.remove("red")
        }
        if(j.target.classList[2]-0-1 == d.classList[2] && j.target.classList[1].split("_")[1] == d.classList[1].split("_")[1]){
          d.classList.remove("red")
        }
        if(j.target.classList[2] == d.classList[2] && j.target.classList[1].split("_")[1]-0-1 == d.classList[1].split("_")[1]){
          d.classList.remove("red")
        }
        if(j.target.classList[2]-0+1 == d.classList[2] && j.target.classList[1].split("_")[1]-0+1 == d.classList[1].split("_")[1]){
          d.classList.remove("red")
        }
        if(j.target.classList[2]-0+1 == d.classList[2] && j.target.classList[1].split("_")[1]-0-1 == d.classList[1].split("_")[1]){
          d.classList.remove("red")
        }
        if(j.target.classList[2]-0-1 == d.classList[2] && j.target.classList[1].split("_")[1]-0+1 == d.classList[1].split("_")[1]){
          d.classList.remove("red")
        }
        if(j.target.classList[2]-0-1 == d.classList[2] && j.target.classList[1].split("_")[1]-0-1 == d.classList[1].split("_")[1]){
          d.classList.remove("red")
        }
      }) 
    })
  })
})








// peshka yurishi
elContentSubitem6.addEventListener("click" ,() => {
  elitem.forEach((itemm, index) => {
    itemm.addEventListener("click",() => {
      console.log(itemm);
      if (ruh1 % 2 == 0) {
       itemm.innerHTML = `<img class="content__subimg" src="img/piyoda.svg" alt="ruh">`
       console.log(a);
      }
      else if (ruh1 % 2 != 0){
        itemm.innerHTML = `<img class="content__subimg" src="img/piyoda.svg" alt="ruh">`
        itemm.innerHTML = ``
      }
      ruh1++
      // itemm.style.backgroundImage = "url('../img/ot.svg')"
      // itemm.style.background = "url('../img/ruh.svg')"
    })
    itemm.addEventListener("mouseover",(j) => {

      // console.log(itemm.classList[2]);
      
      elitem.forEach((d,h)=>{
        if(j.target.classList[2]-0+1 == d.classList[2] && j.target.classList[1].split("_")[1] == d.classList[1].split("_")[1]){
          d.classList.add("red")
        }
        if (itemm.classList[2] == 2) {
          if(j.target.classList[2]-0+2 == d.classList[2] && j.target.classList[1].split("_")[1] == d.classList[1].split("_")[1]){
            d.classList.add("red")
          }
        }
        if (itemm.classList[2] == 1) {
            d.classList.remove("red")
        }
        
      }) 
    })
  })

  elitem.forEach((itemm, index) => {
    itemm.addEventListener("mouseout",(j) => {
      elitem.forEach((d,h)=>{
        if(j.target.classList[2]-0+1 == d.classList[2] && j.target.classList[1].split("_")[1] == d.classList[1].split("_")[1]){
          d.classList.remove("red")
        }
        if (itemm.classList[2] == 2) {
          if(j.target.classList[2]-0+2 == d.classList[2] && j.target.classList[1].split("_")[1] == d.classList[1].split("_")[1]){
            d.classList.remove("red")
          }
        }
        if (itemm.classList[2] == 1) {
          d.classList.remove("red")
        }
      }) 
    })
  })
})


