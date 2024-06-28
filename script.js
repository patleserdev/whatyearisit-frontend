
backendurllocal='http://localhost:3000/year'
backendonline='https://whatyearisit-backend-ten-mu.vercel.app/year'

fetch(backendonline).then(response => response.json()).then((data)=> {

    document.querySelector('#year').textContent=data.year

})