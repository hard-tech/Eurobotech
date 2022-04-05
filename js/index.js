window.onload = function index() {
    const LasteChangeDate = 
{
    "laste_modified" : [5,4,2022]
}

const LasteChangeDay = JSON.stringify(LasteChangeDate.laste_modified[0])
const LasteChangeMoth = JSON.stringify(LasteChangeDate.laste_modified[1])
const LasteChangeYear = JSON.stringify(LasteChangeDate.laste_modified[2])

document.querySelector('.last-modif').innerHTML = LasteChangeDay + " / " + LasteChangeMoth + " / " + LasteChangeYear ;
}