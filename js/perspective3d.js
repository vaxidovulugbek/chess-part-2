let elperspective = document.querySelector("#d3")
let count4 = 2
elperspective.addEventListener("click" , () => {
  elList.classList.toggle("animation3d")

  if (count4 % 2 == 0) {
    elperspective.textContent = "2D"
  }
  else if (count4 % 2 != 0) {
    elperspective.textContent = "3D"
  }
  count4++
})



