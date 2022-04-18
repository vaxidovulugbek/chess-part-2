
let elContentSubitem1 = document.querySelector("#content__subitem1")
let elContentSubitem2 = document.querySelector("#content__subitem2")
let elContentSubitem3 = document.querySelector("#content__subitem3")
let elContentSubitem4 = document.querySelector("#content__subitem4")
let elContentSubitem5 = document.querySelector("#content__subitem5")
let elContentSubitem6 = document.querySelector("#content__subitem6")

elContentSubitem1.addEventListener("click" ,(e) => {
  e.preventDefault()
  elContentSubitem1.classList.add("bgc")
  elContentSubitem2.classList.remove("bgc")
  elContentSubitem3.classList.remove("bgc")
  elContentSubitem4.classList.remove("bgc")
  elContentSubitem5.classList.remove("bgc")
  elContentSubitem6.classList.remove("bgc")
})

elContentSubitem2.addEventListener("click" ,(e) => {
  e.preventDefault()
  elContentSubitem2.classList.add("bgc")
  elContentSubitem1.classList.remove("bgc")
  elContentSubitem3.classList.remove("bgc")
  elContentSubitem4.classList.remove("bgc")
  elContentSubitem5.classList.remove("bgc")
  elContentSubitem6.classList.remove("bgc")
})

elContentSubitem3.addEventListener("click" ,(e) => {
  e.preventDefault()
  elContentSubitem3.classList.add("bgc")
  elContentSubitem2.classList.remove("bgc")
  elContentSubitem1.classList.remove("bgc")
  elContentSubitem4.classList.remove("bgc")
  elContentSubitem5.classList.remove("bgc")
  elContentSubitem6.classList.remove("bgc")
})

elContentSubitem4.addEventListener("click" ,(e) => {
  e.preventDefault()
  elContentSubitem4.classList.add("bgc")
  elContentSubitem2.classList.remove("bgc")
  elContentSubitem3.classList.remove("bgc")
  elContentSubitem1.classList.remove("bgc")
  elContentSubitem5.classList.remove("bgc")
  elContentSubitem6.classList.remove("bgc")
})

elContentSubitem5.addEventListener("click" ,(e) => {
  e.preventDefault()
  elContentSubitem5.classList.add("bgc")
  elContentSubitem2.classList.remove("bgc")
  elContentSubitem3.classList.remove("bgc")
  elContentSubitem4.classList.remove("bgc")
  elContentSubitem1.classList.remove("bgc")
  elContentSubitem6.classList.remove("bgc")
})

elContentSubitem6.addEventListener("click" ,(e) => {
  e.preventDefault()
  elContentSubitem6.classList.add("bgc")
  elContentSubitem2.classList.remove("bgc")
  elContentSubitem3.classList.remove("bgc")
  elContentSubitem4.classList.remove("bgc")
  elContentSubitem5.classList.remove("bgc")
  elContentSubitem1.classList.remove("bgc")
})


