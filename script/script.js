const getRemoteData = function () {
  fetch("https://striveschool-api.herokuapp.com/books", {

  })
    .then((res) => {
        console.log(res)
      if (res.ok) {
        return res.json();
      } else {
        throw new Error("Errore nel caricamento");
      }
    })
    .then((data) => {
      console.log(data);
      let spinnerContainer = document.getElementById('spinner-container')
      spinnerContainer.classList.add('d-none')
      let row = document.querySelector('.row')
      data.forEach(book => {
        let newCol = document.createElement('div')
        newCol.classList.add('col', 'col-3')
        newCol.innerHTML = `
        <div class="card mb-3 ">
        <img src=${book.img} class="card-img-top" alt="Book Cover" >

        <div class="card-body d-flex flex-column justify-content-between">
        <h5 class="card-title">${book.title}</h5>
        <p class="card-text">${book.category}</p>
        <p class="card-text text-end">€${book.price}</p>
        <button class="btn btn-danger mb-3" id='remove'>Scarta</button>
        <a href="#" class="btn btn-primary">Compra Ora</a>
  </div>


        </div>
        `
        row.appendChild(newCol)
        
      });
    })
    .catch((err) => {
      console.log("Errore!", err);
    });
};

getRemoteData()


