const switchBtn = document.querySelector(".slider")
const checkbox = document.querySelector("input[type=checkbox]")
const image = document.querySelector("img")

switchBtn.addEventListener("click", () => {
  checkbox.checked
    ? (document.body.classList.replace("colors-lightmode", "colors-darkmode"),
      (image.src = "./assets/avatar.png"))
    : (document.body.classList.replace("colors-darkmode", "colors-lightmode"),
      (image.src = "./assets/avatar-light.png"))
})

// aprimoração do chat GPT

// const switchBtn = document.querySelector(".slider")
// const checkbox = document.querySelector("input[type=checkbox]")
// const image = document.querySelector("img")

// switchBtn.addEventListener("click", () => {
//   document.body.classList.toggle("colors-lightmode", !checkbox.checked)
//   document.body.classList.toggle("colors-darkmode", checkbox.checked)
//   image.src = checkbox.checked
//     ? "./assets/avatar.png"
//     : "./assets/avatar-light.png"
// })
