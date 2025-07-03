// +++++++++++++++++++++++++++++++++ Query Selector() +++++++++++++++++++++++++++++++++++++++++++++++++

// It return All value
// It is NodeList not Array , So Some function not run directly first convert in Array and then use function 
//  like :- Map()

// 1.]Example :--
document.querySelectorAll('h4')


// 2.]Example :--
document.getElementById('one')
const li = document.querySelectorAll('li')

li.style.color = "green" 
// Show Error : Beacuse QueryselectorAll() not accepet direct value ,define  specific value
li[0].style.color = "green" 


// 3.]Example :--
li.forEach(function(l){
    l.style.color= "blue"})


// 4.]Example :--
document.getElementsByClassName('onehy')
const onehy = document.getElementsByClassName('onehy') 
// onehy :- Show data

// --------------------- Convert in Array :--- ---------------
Array.from(onehy)
const myarr = Array.from(onehy)
// myarr :- Show Data

