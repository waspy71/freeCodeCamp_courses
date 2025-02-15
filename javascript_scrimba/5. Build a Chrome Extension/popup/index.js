

let myLeads = localStorage.getItem('myLeads') ? JSON.parse(localStorage.getItem('myLeads')) : []
const inputEl = document.getElementById('input-el')
const inputBtn = document.getElementById('input-btn')
const ulEl = document.getElementById('ul-el')

if(myLeads) {
  renderLeads()
}

// let leadsFromLocalStorage = JSON.parse(localStorage.getItem('myLeads'))
// console.log('leadsFromLocalStorage', leadsFromLocalStorage)

inputBtn.addEventListener('click', () => {
  if(inputEl.value) {
    myLeads.push(inputEl.value)
    inputEl.value = ''
    renderLeads()
    localStorage.setItem('myLeads', JSON.stringify(myLeads))
    console.log('clicked from event listener', localStorage.getItem('myLeads'))
  }
})

function renderLeads() {
  let listItems = ''
  for( let i = 0; i < myLeads.length; i++) {
    // ulEl.innerHTML += '<li>' + myLeads[i] + '</li>'
    // let liEl = document.createElement('li')
    // liEl.textContent = myLeads[i]
    // ulEl.appendChild(liEl)
    listItems += `<li><a target='_blank' href="${myLeads[i]}">${myLeads[i]}</a></li>`
  }
  
  ulEl.innerHTML = listItems
}