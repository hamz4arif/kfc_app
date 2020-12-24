import logo from './logo.svg';
import './App.css';
import react, { useState } from 'react'
import { products, categories } from './data'

function App() {
  let [counter, setCounter] = useState(0);
  let [selectedCat, setSelectedCat] = useState(categories[0]);
  return (
    <div className="container">
      <nav className="navbar navbar-expand-lg my-3 navbar-light bg-light">
        <h1>KFC Counter={counter}</h1>
      </nav>
      {/* ---------------------------------------------- */}
      <div id="carouselExampleControls" className="mx-2 carousel slide" data-ride="carousel">
  <div className="carousel-inner">
    <div className="carousel-item active">
      <img className="d-block w-100" src="https://source.unsplash.com/1600x500/?kfc,zinger" alt="First slide"/>
    </div>
    <div className="carousel-item">
      <img className="d-block w-100" src="https://source.unsplash.com/1600x500/?lunch,pizza" alt="Second slide"/>
    </div>
    <div className="carousel-item">
      <img className="d-block w-100" src="https://source.unsplash.com/1600x500/?food,burger" alt="Third slide"/>
    </div>
  </div>
  <a className="carousel-control-prev" href="#carouselExampleControls" role="button" data-slide="prev">
    <span className="carousel-control-prev-icon" aria-hidden="true"></span>
    <span className="sr-only">Previous</span>
  </a>
  <a className="carousel-control-next" href="#carouselExampleControls" role="button" data-slide="next">
    <span className="carousel-control-next-icon" aria-hidden="true"></span>
    <span className="sr-only">Next</span>
  </a>
</div>
      {/* ---------------------------------------------- */}
      <div className="row mt-4">
        <div className="col-3">
          <ul className="list-group">
            {categories.map(c => <li
              className={selectedCat === c ? "list-group-item active" : "list-group-item"}
              onClick={() => setSelectedCat(c)}
            >{c}</li>)}
          </ul>
        </div>
        {/* cards */}
        <div className="col-9">
          <div className="row">
            {products.filter(p => p.category === selectedCat).
              map(p =>
                <div className="card col-4">
                  <img className="card-img-top" src={p.image} alt="Card image cap" />
                  <div className="card-body">
                    <h5 className="card-title">{p.name}</h5>
                    <p className="card-text">{p.description}</p>
                    <button href="#" onClick={() => setCounter(++counter)} className="btn btn-primary">Add to Cart</button>
                  </div>
                </div>
              )}
          </div>
        </div>
      </div>
    </div>
  );
}

export default App;
