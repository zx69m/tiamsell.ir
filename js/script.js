let menu = document.querySelector('#menu-bar');
let navbar = document.querySelector('.navbar');
let btnir = document.getElementById('btnir')
let btnmci = document.getElementById('btnmci')
let btnritel = document.getElementById('btnritel')
let btnadsl = document.getElementById('btnadsl')

menu.onclick = () =>{
  menu.classList.toggle('fa-times');
  navbar.classList.toggle('active');
}

btnir.addEventListener('click' , () => {
  navigator.clipboard.writeText('vmess://ewogICJ2IjogIjIiLAogICJwcyI6ICJ2MnJheXNzZC1AdjJyYXlzc2QtaXIiLAogICJhZGQiOiAiMTgxLjQxLjE5NC4xNzMiLAogICJwb3J0IjogNTM1MDEsCiAgImlkIjogIjU3OWY2MTE5LTIzMmYtNDlmYS1iZmFkLTYzMjc2MDMwMGI4ZCIsCiAgIm5ldCI6ICJ0Y3AiLAogICJ0eXBlIjogImh0dHAiLAogICJ0bHMiOiAibm9uZSIsCiAgInBhdGgiOiAiLyIKfQ==')

  btnir.textContent = 'کپی شد✔'
  btnir.style.backgroundColor = "rgb(0, 255, 55)"
}) 

btnmci.addEventListener('click' , () => {
  navigator.clipboard.writeText('vless://f290ea09-f2cc-4b38-88d9-045553d738b3@gcore.com:80?path=%2Fvless&security=none&encryption=none&host=v2rayssd.com&type=ws#MCI-V2RAYSSd')

  btnmci.textContent = 'کپی شد✔'
  btnmci.style.backgroundColor = "rgb(0, 255, 55)"
}) 

btnritel.addEventListener('click' , () => {
  navigator.clipboard.writeText('vmess://ewogICJ2IjogIjIiLAogICJwcyI6ICJWMnJheXNzZC1mb2UtQFYycmF5c3NkIiwKICAiYWRkIjogIjE4MS40MS4xOTQuMTczIiwKICAicG9ydCI6IDEyMzQsCiAgImlkIjogIjk4Yjc5Y2FlLWQ3ODktNDFlZC05NjA1LTdiMzRjNDg0YmM4NCIsCiAgIm5ldCI6ICJ3cyIsCiAgInR5cGUiOiAibm9uZSIsCiAgInRscyI6ICJub25lIiwKICAicGF0aCI6ICIvd3M/ZWQ9MjA0OCIKfQ==')

  btnritel.textContent = 'کپی شد✔'
  btnritel.style.backgroundColor = "rgb(0, 255, 55)"
}) 

btnadsl.addEventListener('click' , () => {
  navigator.clipboard.writeText('vless://d88c148e-da8d-4096-a1d5-f467ab6d8049@181.41.194.173:2053?type=tcp&path=%2F&headerType=http&security=none#V2rayssd-adsl')

  btnadsl.textContent = 'کپی شد✔'
  btnadsl.style.backgroundColor = "rgb(0, 255, 55)"
}) 


