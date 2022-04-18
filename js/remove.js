
// ruh yurishi

elContentSubitem1.addEventListener("click" ,() => {
  elitem.forEach((itemm, index) => {
    itemm.addEventListener("mouseover",(j) => {
      elitem.forEach((d,h)=>{
        if (j.target.classList[2] ==  d.classList[2])   {
          d.classList.add("red")
        }
        if (j.target.classList[1].split("_")[1] == d.classList[1].split("_")[1]) {
          d.classList.add("red")
        }
        // =============================== shox yurishni remove qilish ===========================

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

        // ============================= OT YURISHI REMOVE =======================================

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
        if(j.target.classList[2]-0+1 == d.classList[2] && j.target.classList[1].split("_")[1]-0-2 == d.classList[1].split("_")[1]){
          d.classList.remove("red")
        }
        if(j.target.classList[2]-0-1 == d.classList[2] && j.target.classList[1].split("_")[1]-0+2 == d.classList[1].split("_")[1]){
          d.classList.remove("red")
        }
        if(j.target.classList[2]-0-1 == d.classList[2] && j.target.classList[1].split("_")[1]-0-2 == d.classList[1].split("_")[1]){
          d.classList.remove("red")
        }

        //  ================================= FEL YURISHI REMOVE ====================================

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

elitem.forEach((itemm, index) => {
    itemm.addEventListener("mouseout",(j) => {
      elitem.forEach((d,h)=>{
        if (j.target.classList[2] ==  d.classList[2])   {
          d.classList.remove("red")
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
  itemm.addEventListener("mouseover",(j) => {
    elitem.forEach((d,h)=>{
      // ============================== RUH YURISHI ===========================================
      if(j.target.classList[2]-0+2 == d.classList[2] && j.target.classList[1].split("_")[1] == d.classList[1].split("_")[1]){
        d.classList.remove("red")
      }
      if(j.target.classList[2]-0+3 == d.classList[2] && j.target.classList[1].split("_")[1] == d.classList[1].split("_")[1]){
        d.classList.remove("red")
      }
      if(j.target.classList[2]-0+4 == d.classList[2] && j.target.classList[1].split("_")[1] == d.classList[1].split("_")[1]){
        d.classList.remove("red")
      }
      if(j.target.classList[2]-0+5 == d.classList[2] && j.target.classList[1].split("_")[1] == d.classList[1].split("_")[1]){
        d.classList.remove("red")
      }
      if(j.target.classList[2]-0+6 == d.classList[2] && j.target.classList[1].split("_")[1] == d.classList[1].split("_")[1]){
        d.classList.remove("red")
      }
      if(j.target.classList[2]-0+7 == d.classList[2] && j.target.classList[1].split("_")[1] == d.classList[1].split("_")[1]){
        d.classList.remove("red")
      }
      if(j.target.classList[2]-0+8 == d.classList[2] && j.target.classList[1].split("_")[1] == d.classList[1].split("_")[1]){
        d.classList.remove("red")
      }
      if(j.target.classList[2]-0-2 == d.classList[2] && j.target.classList[1].split("_")[1] == d.classList[1].split("_")[1]){
        d.classList.remove("red")
      }
      if(j.target.classList[2]-0-3 == d.classList[2] && j.target.classList[1].split("_")[1]== d.classList[1].split("_")[1]){
        d.classList.remove("red")
      }
      if(j.target.classList[2]-0-4 == d.classList[2] && j.target.classList[1].split("_")[1] == d.classList[1].split("_")[1]){
        d.classList.remove("red")
      } 
      if(j.target.classList[2]-0-5 == d.classList[2] && j.target.classList[1].split("_")[1] == d.classList[1].split("_")[1]){
        d.classList.remove("red")
      } 
      if(j.target.classList[2]-0-6 == d.classList[2] && j.target.classList[1].split("_")[1] == d.classList[1].split("_")[1]){
        d.classList.remove("red")
      }
      if(j.target.classList[2]-0-7 == d.classList[2] && j.target.classList[1].split("_")[1] == d.classList[1].split("_")[1]){
        d.classList.remove("red")
      } 
      if(j.target.classList[2]-0-8 == d.classList[2] && j.target.classList[1].split("_")[1] == d.classList[1].split("_")[1]){
        d.classList.remove("red")
      }

      if(j.target.classList[2] == d.classList[2] && j.target.classList[1].split("_")[1]-0+2 == d.classList[1].split("_")[1]){
        d.classList.remove("red")
      }
      if(j.target.classList[2] == d.classList[2] && j.target.classList[1].split("_")[1]-0+3 == d.classList[1].split("_")[1]){
        d.classList.remove("red")
      }
      if(j.target.classList[2] == d.classList[2] && j.target.classList[1].split("_")[1]-0+4 == d.classList[1].split("_")[1]){
        d.classList.remove("red")
      }
      if(j.target.classList[2] == d.classList[2] && j.target.classList[1].split("_")[1]-0+5 == d.classList[1].split("_")[1]){
        d.classList.remove("red")
      }
      if(j.target.classList[2] == d.classList[2] && j.target.classList[1].split("_")[1]-0+6 == d.classList[1].split("_")[1]){
        d.classList.remove("red")
      }
      if(j.target.classList[2] == d.classList[2] && j.target.classList[1].split("_")[1]-0+7 == d.classList[1].split("_")[1]){
        d.classList.remove("red")
      }
      if(j.target.classList[2] == d.classList[2] && j.target.classList[1].split("_")[1]-0+8 == d.classList[1].split("_")[1]){
        d.classList.remove("red")
      }

      if(j.target.classList[2] == d.classList[2] && j.target.classList[1].split("_")[1]-0-2 == d.classList[1].split("_")[1]){
        d.classList.remove("red")
      }
      if(j.target.classList[2] == d.classList[2] && j.target.classList[1].split("_")[1]-0-3 == d.classList[1].split("_")[1]){
        d.classList.remove("red")
      }
      if(j.target.classList[2] == d.classList[2] && j.target.classList[1].split("_")[1]-0-4 == d.classList[1].split("_")[1]){
        d.classList.remove("red")
      }
      if(j.target.classList[2] == d.classList[2] && j.target.classList[1].split("_")[1]-0-5 == d.classList[1].split("_")[1]){
        d.classList.remove("red")
      }
      if(j.target.classList[2] == d.classList[2] && j.target.classList[1].split("_")[1]-0-6 == d.classList[1].split("_")[1]){
        d.classList.remove("red")
      }
      if(j.target.classList[2] == d.classList[2] && j.target.classList[1].split("_")[1]-0-7 == d.classList[1].split("_")[1]){
        d.classList.remove("red")
      }
      if(j.target.classList[2] == d.classList[2] && j.target.classList[1].split("_")[1]-0-8 == d.classList[1].split("_")[1]){
        d.classList.remove("red")
      }

      // ============================= OT YURISHI REMOVE =======================================
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
      if(j.target.classList[2]-0+1 == d.classList[2] && j.target.classList[1].split("_")[1]-0-2 == d.classList[1].split("_")[1]){
        d.classList.remove("red")
      }
      if(j.target.classList[2]-0-1 == d.classList[2] && j.target.classList[1].split("_")[1]-0+2 == d.classList[1].split("_")[1]){
        d.classList.remove("red")
      }
      if(j.target.classList[2]-0-1 == d.classList[2] && j.target.classList[1].split("_")[1]-0-2 == d.classList[1].split("_")[1]){
        d.classList.remove("red")
      }

      //  ================================= FEL YURISHI REMOVE ====================================


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

elitem.forEach((itemm, index) => {
  itemm.addEventListener("mouseout",(j) => {
    elitem.forEach((d,h)=>{

    }) 
  })
})
})






// // ========================================================================
// // =========================== OT YURISHI =================================
// // ========================================================================

elContentSubitem2.addEventListener("click" ,() => {
  elitem.forEach((itemm, index) => {
    itemm.addEventListener("mouseover",(j) => {
      elitem.forEach((d,h)=>{
      //  =========================================== fel yurishi remove ========================================
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
  
        if(j.target.classList[2]-0+1 == d.classList[2] && j.target.classList[1].split("_")[1]-0-1 == d.classList[1].split("_")[1]){
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
  
        if(j.target.classList[2]-0-1 == d.classList[2] && j.target.classList[1].split("_")[1]-0-1 == d.classList[1].split("_")[1]){
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

        // ======================================== RUH YURISHI REMOVE ================================

        if(j.target.classList[2] == d.classList[2] && j.target.classList[1].split("_")[1] == d.classList[1].split("_")[1]){
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
        if(j.target.classList[2]-0+2 == d.classList[2] && j.target.classList[1].split("_")[1] == d.classList[1].split("_")[1]){
          d.classList.remove("red")
        }
        if(j.target.classList[2]-0+3 == d.classList[2] && j.target.classList[1].split("_")[1] == d.classList[1].split("_")[1]){
          d.classList.remove("red")
        }
        if(j.target.classList[2]-0+4 == d.classList[2] && j.target.classList[1].split("_")[1] == d.classList[1].split("_")[1]){
          d.classList.remove("red")
        }
        if(j.target.classList[2]-0+5 == d.classList[2] && j.target.classList[1].split("_")[1] == d.classList[1].split("_")[1]){
          d.classList.remove("red")
        }
        if(j.target.classList[2]-0+6 == d.classList[2] && j.target.classList[1].split("_")[1] == d.classList[1].split("_")[1]){
          d.classList.remove("red")
        }
        if(j.target.classList[2]-0+7 == d.classList[2] && j.target.classList[1].split("_")[1] == d.classList[1].split("_")[1]){
          d.classList.remove("red")
        }
        if(j.target.classList[2]-0+8 == d.classList[2] && j.target.classList[1].split("_")[1] == d.classList[1].split("_")[1]){
          d.classList.remove("red")
        }
        if(j.target.classList[2]-0-2 == d.classList[2] && j.target.classList[1].split("_")[1] == d.classList[1].split("_")[1]){
          d.classList.remove("red")
        }
        if(j.target.classList[2]-0-3 == d.classList[2] && j.target.classList[1].split("_")[1]== d.classList[1].split("_")[1]){
          d.classList.remove("red")
        }
        if(j.target.classList[2]-0-4 == d.classList[2] && j.target.classList[1].split("_")[1] == d.classList[1].split("_")[1]){
          d.classList.remove("red")
        } 
        if(j.target.classList[2]-0-5 == d.classList[2] && j.target.classList[1].split("_")[1] == d.classList[1].split("_")[1]){
          d.classList.remove("red")
        } 
        if(j.target.classList[2]-0-6 == d.classList[2] && j.target.classList[1].split("_")[1] == d.classList[1].split("_")[1]){
          d.classList.remove("red")
        }
        if(j.target.classList[2]-0-7 == d.classList[2] && j.target.classList[1].split("_")[1] == d.classList[1].split("_")[1]){
          d.classList.remove("red")
        } 
        if(j.target.classList[2]-0-8 == d.classList[2] && j.target.classList[1].split("_")[1] == d.classList[1].split("_")[1]){
          d.classList.remove("red")
        }
  
        if(j.target.classList[2] == d.classList[2] && j.target.classList[1].split("_")[1]-0+2 == d.classList[1].split("_")[1]){
          d.classList.remove("red")
        }
        if(j.target.classList[2] == d.classList[2] && j.target.classList[1].split("_")[1]-0+3 == d.classList[1].split("_")[1]){
          d.classList.remove("red")
        }
        if(j.target.classList[2] == d.classList[2] && j.target.classList[1].split("_")[1]-0+4 == d.classList[1].split("_")[1]){
          d.classList.remove("red")
        }
        if(j.target.classList[2] == d.classList[2] && j.target.classList[1].split("_")[1]-0+5 == d.classList[1].split("_")[1]){
          d.classList.remove("red")
        }
        if(j.target.classList[2] == d.classList[2] && j.target.classList[1].split("_")[1]-0+6 == d.classList[1].split("_")[1]){
          d.classList.remove("red")
        }
        if(j.target.classList[2] == d.classList[2] && j.target.classList[1].split("_")[1]-0+7 == d.classList[1].split("_")[1]){
          d.classList.remove("red")
        }
        if(j.target.classList[2] == d.classList[2] && j.target.classList[1].split("_")[1]-0+8 == d.classList[1].split("_")[1]){
          d.classList.remove("red")
        }
  
        if(j.target.classList[2] == d.classList[2] && j.target.classList[1].split("_")[1]-0-2 == d.classList[1].split("_")[1]){
          d.classList.remove("red")
        }
        if(j.target.classList[2] == d.classList[2] && j.target.classList[1].split("_")[1]-0-3 == d.classList[1].split("_")[1]){
          d.classList.remove("red")
        }
        if(j.target.classList[2] == d.classList[2] && j.target.classList[1].split("_")[1]-0-4 == d.classList[1].split("_")[1]){
          d.classList.remove("red")
        }
        if(j.target.classList[2] == d.classList[2] && j.target.classList[1].split("_")[1]-0-5 == d.classList[1].split("_")[1]){
          d.classList.remove("red")
        }
        if(j.target.classList[2] == d.classList[2] && j.target.classList[1].split("_")[1]-0-6 == d.classList[1].split("_")[1]){
          d.classList.remove("red")
        }
        if(j.target.classList[2] == d.classList[2] && j.target.classList[1].split("_")[1]-0-7 == d.classList[1].split("_")[1]){
          d.classList.remove("red")
        }
        if(j.target.classList[2] == d.classList[2] && j.target.classList[1].split("_")[1]-0-8 == d.classList[1].split("_")[1]){
          d.classList.remove("red")
        }
  
      }) 
    })
  })

  elitem.forEach((itemm, index) => {
    itemm.addEventListener("mouseout",(j) => {
      elitem.forEach((d,h)=>{
        
      }) 
    })
  })
})


// // ========================================================================
// // =========================== FEL YURISHI ================================
// // ========================================================================
elContentSubitem3.addEventListener("click" ,() => {
  elitem.forEach((itemm, index) => {
    itemm.addEventListener("mouseover",(j) => {
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
        if(j.target.classList[2]-0+1 == d.classList[2] && j.target.classList[1].split("_")[1]-0-2 == d.classList[1].split("_")[1]){
          d.classList.remove("red")
        }
        if(j.target.classList[2]-0-1 == d.classList[2] && j.target.classList[1].split("_")[1]-0+2 == d.classList[1].split("_")[1]){
          d.classList.remove("red")
        }
        if(j.target.classList[2]-0-1 == d.classList[2] && j.target.classList[1].split("_")[1]-0-2 == d.classList[1].split("_")[1]){
          d.classList.remove("red")
        }

        //  ======================================= RUH YURISHI ===================================================

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
        if(j.target.classList[2]-0+2 == d.classList[2] && j.target.classList[1].split("_")[1] == d.classList[1].split("_")[1]){
          d.classList.remove("red")
        }
        if(j.target.classList[2]-0+3 == d.classList[2] && j.target.classList[1].split("_")[1] == d.classList[1].split("_")[1]){
          d.classList.remove("red")
        }
        if(j.target.classList[2]-0+4 == d.classList[2] && j.target.classList[1].split("_")[1] == d.classList[1].split("_")[1]){
          d.classList.remove("red")
        }
        if(j.target.classList[2]-0+5 == d.classList[2] && j.target.classList[1].split("_")[1] == d.classList[1].split("_")[1]){
          d.classList.remove("red")
        }
        if(j.target.classList[2]-0+6 == d.classList[2] && j.target.classList[1].split("_")[1] == d.classList[1].split("_")[1]){
          d.classList.remove("red")
        }
        if(j.target.classList[2]-0+7 == d.classList[2] && j.target.classList[1].split("_")[1] == d.classList[1].split("_")[1]){
          d.classList.remove("red")
        }
        if(j.target.classList[2]-0+8 == d.classList[2] && j.target.classList[1].split("_")[1] == d.classList[1].split("_")[1]){
          d.classList.remove("red")
        }
        if(j.target.classList[2]-0-2 == d.classList[2] && j.target.classList[1].split("_")[1] == d.classList[1].split("_")[1]){
          d.classList.remove("red")
        }
        if(j.target.classList[2]-0-3 == d.classList[2] && j.target.classList[1].split("_")[1]== d.classList[1].split("_")[1]){
          d.classList.remove("red")
        }
        if(j.target.classList[2]-0-4 == d.classList[2] && j.target.classList[1].split("_")[1] == d.classList[1].split("_")[1]){
          d.classList.remove("red")
        } 
        if(j.target.classList[2]-0-5 == d.classList[2] && j.target.classList[1].split("_")[1] == d.classList[1].split("_")[1]){
          d.classList.remove("red")
        } 
        if(j.target.classList[2]-0-6 == d.classList[2] && j.target.classList[1].split("_")[1] == d.classList[1].split("_")[1]){
          d.classList.remove("red")
        }
        if(j.target.classList[2]-0-7 == d.classList[2] && j.target.classList[1].split("_")[1] == d.classList[1].split("_")[1]){
          d.classList.remove("red")
        } 
        if(j.target.classList[2]-0-8 == d.classList[2] && j.target.classList[1].split("_")[1] == d.classList[1].split("_")[1]){
          d.classList.remove("red")
        }
  
        if(j.target.classList[2] == d.classList[2] && j.target.classList[1].split("_")[1]-0+2 == d.classList[1].split("_")[1]){
          d.classList.remove("red")
        }
        if(j.target.classList[2] == d.classList[2] && j.target.classList[1].split("_")[1]-0+3 == d.classList[1].split("_")[1]){
          d.classList.remove("red")
        }
        if(j.target.classList[2] == d.classList[2] && j.target.classList[1].split("_")[1]-0+4 == d.classList[1].split("_")[1]){
          d.classList.remove("red")
        }
        if(j.target.classList[2] == d.classList[2] && j.target.classList[1].split("_")[1]-0+5 == d.classList[1].split("_")[1]){
          d.classList.remove("red")
        }
        if(j.target.classList[2] == d.classList[2] && j.target.classList[1].split("_")[1]-0+6 == d.classList[1].split("_")[1]){
          d.classList.remove("red")
        }
        if(j.target.classList[2] == d.classList[2] && j.target.classList[1].split("_")[1]-0+7 == d.classList[1].split("_")[1]){
          d.classList.remove("red")
        }
        if(j.target.classList[2] == d.classList[2] && j.target.classList[1].split("_")[1]-0+8 == d.classList[1].split("_")[1]){
          d.classList.remove("red")
        }
  
        if(j.target.classList[2] == d.classList[2] && j.target.classList[1].split("_")[1]-0-2 == d.classList[1].split("_")[1]){
          d.classList.remove("red")
        }
        if(j.target.classList[2] == d.classList[2] && j.target.classList[1].split("_")[1]-0-3 == d.classList[1].split("_")[1]){
          d.classList.remove("red")
        }
        if(j.target.classList[2] == d.classList[2] && j.target.classList[1].split("_")[1]-0-4 == d.classList[1].split("_")[1]){
          d.classList.remove("red")
        }
        if(j.target.classList[2] == d.classList[2] && j.target.classList[1].split("_")[1]-0-5 == d.classList[1].split("_")[1]){
          d.classList.remove("red")
        }
        if(j.target.classList[2] == d.classList[2] && j.target.classList[1].split("_")[1]-0-6 == d.classList[1].split("_")[1]){
          d.classList.remove("red")
        }
        if(j.target.classList[2] == d.classList[2] && j.target.classList[1].split("_")[1]-0-7 == d.classList[1].split("_")[1]){
          d.classList.remove("red")
        }
        if(j.target.classList[2] == d.classList[2] && j.target.classList[1].split("_")[1]-0-8 == d.classList[1].split("_")[1]){
          d.classList.remove("red")
        }
      }) 
    })
  })

  elitem.forEach((itemm, index) => {
    itemm.addEventListener("mouseout",(j) => {
      elitem.forEach((d,h)=>{

      }) 
    })
  })
})


// // ========================================================================
// // =========================== QIROLICHA YURISHI ==========================
// // ========================================================================

elContentSubitem4.addEventListener("click" ,() => {
  elitem.forEach((itemm, index) => {
    itemm.addEventListener("mouseover",(j) => {
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








// // peshka yurishi
elContentSubitem6.addEventListener("click" ,() => {
  elitem.forEach((itemm, index) => {
    itemm.addEventListener("mouseover",(j) => {    
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
        if(j.target.classList[2]-0+1 == d.classList[2] && j.target.classList[1].split("_")[1]-0-2 == d.classList[1].split("_")[1]){
          d.classList.remove("red")
        }
        if(j.target.classList[2]-0-1 == d.classList[2] && j.target.classList[1].split("_")[1]-0+2 == d.classList[1].split("_")[1]){
          d.classList.remove("red")
        }
        if(j.target.classList[2]-0-1 == d.classList[2] && j.target.classList[1].split("_")[1]-0-2 == d.classList[1].split("_")[1]){
          d.classList.remove("red")
        }

        // =========================================== FEL YURISHI ======================================

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

          // =============================== shox yurishni remove qilish ===========================

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
        if(j.target.classList[2]== d.classList[2] && j.target.classList[1].split("_")[1]-0+1 == d.classList[1].split("_")[1]){
          d.classList.remove("red")
        }
        if(j.target.classList[2]-0-1 == d.classList[2] && j.target.classList[1].split("_")[1] == d.classList[1].split("_")[1]){
          d.classList.remove("red")
        }
        if(j.target.classList[2] == d.classList[2] && j.target.classList[1].split("_")[1]-0-1 == d.classList[1].split("_")[1]){
          d.classList.remove("red")
        }

        //  ==================================== RUH YURISHI ====================================

        if(j.target.classList[2] == d.classList[2] && j.target.classList[1].split("_")[1] == d.classList[1].split("_")[1]){
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
        if(j.target.classList[2]-0+3 == d.classList[2] && j.target.classList[1].split("_")[1] == d.classList[1].split("_")[1]){
          d.classList.remove("red")
        }
        if(j.target.classList[2]-0+4 == d.classList[2] && j.target.classList[1].split("_")[1] == d.classList[1].split("_")[1]){
          d.classList.remove("red")
        }
        if(j.target.classList[2]-0+5 == d.classList[2] && j.target.classList[1].split("_")[1] == d.classList[1].split("_")[1]){
          d.classList.remove("red")
        }
        if(j.target.classList[2]-0+6 == d.classList[2] && j.target.classList[1].split("_")[1] == d.classList[1].split("_")[1]){
          d.classList.remove("red")
        }
        if(j.target.classList[2]-0+7 == d.classList[2] && j.target.classList[1].split("_")[1] == d.classList[1].split("_")[1]){
          d.classList.remove("red")
        }
        if(j.target.classList[2]-0+8 == d.classList[2] && j.target.classList[1].split("_")[1] == d.classList[1].split("_")[1]){
          d.classList.remove("red")
        }
        if(j.target.classList[2]-0-2 == d.classList[2] && j.target.classList[1].split("_")[1] == d.classList[1].split("_")[1]){
          d.classList.remove("red")
        }
        if(j.target.classList[2]-0-3 == d.classList[2] && j.target.classList[1].split("_")[1]== d.classList[1].split("_")[1]){
          d.classList.remove("red")
        }
        if(j.target.classList[2]-0-4 == d.classList[2] && j.target.classList[1].split("_")[1] == d.classList[1].split("_")[1]){
          d.classList.remove("red")
        } 
        if(j.target.classList[2]-0-5 == d.classList[2] && j.target.classList[1].split("_")[1] == d.classList[1].split("_")[1]){
          d.classList.remove("red")
        } 
        if(j.target.classList[2]-0-6 == d.classList[2] && j.target.classList[1].split("_")[1] == d.classList[1].split("_")[1]){
          d.classList.remove("red")
        }
        if(j.target.classList[2]-0-7 == d.classList[2] && j.target.classList[1].split("_")[1] == d.classList[1].split("_")[1]){
          d.classList.remove("red")
        } 
        if(j.target.classList[2]-0-8 == d.classList[2] && j.target.classList[1].split("_")[1] == d.classList[1].split("_")[1]){
          d.classList.remove("red")
        }
  
        if(j.target.classList[2] == d.classList[2] && j.target.classList[1].split("_")[1]-0+2 == d.classList[1].split("_")[1]){
          d.classList.remove("red")
        }
        if(j.target.classList[2] == d.classList[2] && j.target.classList[1].split("_")[1]-0+3 == d.classList[1].split("_")[1]){
          d.classList.remove("red")
        }
        if(j.target.classList[2] == d.classList[2] && j.target.classList[1].split("_")[1]-0+4 == d.classList[1].split("_")[1]){
          d.classList.remove("red")
        }
        if(j.target.classList[2] == d.classList[2] && j.target.classList[1].split("_")[1]-0+5 == d.classList[1].split("_")[1]){
          d.classList.remove("red")
        }
        if(j.target.classList[2] == d.classList[2] && j.target.classList[1].split("_")[1]-0+6 == d.classList[1].split("_")[1]){
          d.classList.remove("red")
        }
        if(j.target.classList[2] == d.classList[2] && j.target.classList[1].split("_")[1]-0+7 == d.classList[1].split("_")[1]){
          d.classList.remove("red")
        }
        if(j.target.classList[2] == d.classList[2] && j.target.classList[1].split("_")[1]-0+8 == d.classList[1].split("_")[1]){
          d.classList.remove("red")
        }
  
        if(j.target.classList[2] == d.classList[2] && j.target.classList[1].split("_")[1]-0-2 == d.classList[1].split("_")[1]){
          d.classList.remove("red")
        }
        if(j.target.classList[2] == d.classList[2] && j.target.classList[1].split("_")[1]-0-3 == d.classList[1].split("_")[1]){
          d.classList.remove("red")
        }
        if(j.target.classList[2] == d.classList[2] && j.target.classList[1].split("_")[1]-0-4 == d.classList[1].split("_")[1]){
          d.classList.remove("red")
        }
        if(j.target.classList[2] == d.classList[2] && j.target.classList[1].split("_")[1]-0-5 == d.classList[1].split("_")[1]){
          d.classList.remove("red")
        }
        if(j.target.classList[2] == d.classList[2] && j.target.classList[1].split("_")[1]-0-6 == d.classList[1].split("_")[1]){
          d.classList.remove("red")
        }
        if(j.target.classList[2] == d.classList[2] && j.target.classList[1].split("_")[1]-0-7 == d.classList[1].split("_")[1]){
          d.classList.remove("red")
        }
        if(j.target.classList[2] == d.classList[2] && j.target.classList[1].split("_")[1]-0-8 == d.classList[1].split("_")[1]){
          d.classList.remove("red")
        }

        // if(j.target.classList[2]-0+2 == d.classList[2] && j.target.classList[1].split("_")[1] == d.classList[1].split("_")[1]){
        //   d.classList.remove("red")
        // }

        if (itemm.classList[2] == 2) {
          if(j.target.classList[2]-0+2 == d.classList[2] && j.target.classList[1].split("_")[1] == d.classList[1].split("_")[1]){
            d.classList.add("red")
          }
        }
        else if(j.target.classList[2]-0+2 == d.classList[2] && j.target.classList[1].split("_")[1] == d.classList[1].split("_")[1]){
          d.classList.remove("red")
        }
      }) 
    })
  })

  elitem.forEach((itemm, index) => {
    itemm.addEventListener("mouseout",(j) => {
      elitem.forEach((d,h)=>{
        if (itemm.classList[2] == 2) {
          if(j.target.classList[2]-0+2 == d.classList[2] && j.target.classList[1].split("_")[1] == d.classList[1].split("_")[1]){
            d.classList.remove("red")
          }
        }
        // if(j.target.classList[2]-0+2 == d.classList[2] && j.target.classList[1].split("_")[1] == d.classList[1].split("_")[1]){
        //   d.classList.remove("red")
        // }
      }) 
    })
  })
})

