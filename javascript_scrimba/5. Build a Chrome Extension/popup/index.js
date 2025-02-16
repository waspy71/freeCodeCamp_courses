

let myLeads = localStorage.getItem('myLeads') ? JSON.parse(localStorage.getItem('myLeads')) : []
const inputEl = document.getElementById('input-el')
const inputBtn = document.getElementById('input-btn')
const ulEl = document.getElementById('ul-el')
const deleteBtn = document.getElementById('delete-btn')
const tabBtn = document.getElementById('tab-btn')

if(myLeads) {
  render(myLeads)
}

function render(leads) {
  let listItems = ''
  for( let i = 0; i < leads.length; i++) {
    // ulEl.innerHTML += '<li>' + leads[i] + '</li>'
    // let liEl = document.createElement('li')
    // liEl.textContent = leads[i]
    // ulEl.appendChild(liEl)
    listItems += `<li><a target='_blank' href="${leads[i]}">${leads[i]}</a></li>`
  }
  
  ulEl.innerHTML = listItems
}

// let leadsFromLocalStorage = JSON.parse(localStorage.getItem('myLeads'))
// console.log('leadsFromLocalStorage', leadsFromLocalStorage)

tabBtn.addEventListener('click', () => {
  browser.tabs.query({ active: true, currentWindow: true })
    .then(tabs => {
      myLeads.push(tabs[0].url)
      localStorage.setItem('myLeads', JSON.stringify(myLeads))
      render(myLeads)
    })
})

deleteBtn.addEventListener('dblclick', () => {
  localStorage.clear()
  myLeads = []
  // ulEl.innerHTML = ''
  render(myLeads)
})

inputBtn.addEventListener('click', () => {
  if(inputEl.value) {
    myLeads.push(inputEl.value)
    inputEl.value = ''
    render(myLeads)
    localStorage.setItem('myLeads', JSON.stringify(myLeads))
    console.log('clicked from event listener', localStorage.getItem('myLeads'))
  }
})

