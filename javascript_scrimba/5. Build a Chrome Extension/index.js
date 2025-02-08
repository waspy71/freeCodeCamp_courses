
let myLeads = []
const inputEl = document.getElementById('input-el')
const inputBtn = document.getElementById('input-btn')

inputBtn.addEventListener('click', () => {
  myLeads.push('www.awesomelead.com')
  console.log(myLeads)
  console.log('clicked from event listener')
})