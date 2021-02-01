import logo from './logo.svg';
import './App.css';

function App() {
  return (
    <div className="App">
      <nav class="navbar navbar-dark bg-dark">
        <a class="navbar-brand" href="#">Lambda Calculator</a>
      </nav>
      <div className= "row mt-5">
        <div class="col-md-12 d-flex justify-content-center">
          <form name="Cal">
            <div class="row ">
              <div class="col-md-12 p-0">
                <div class="form-group">
                  <textarea class="form-control" rows="3" id="total" type="text" name="ans"></textarea>
                </div>
              </div>
            </div>
            <div class="row">
              <div class="col-xs-4">
                <button type="button" class="btn">1</button>
              </div>
              <div class="col-xs-4">
                <button type="button" class="btn">2</button>
              </div>
              <div class="col-xs-4">
                <button type="button" class="btn">3</button>
              </div>
            </div>
            <div class="row">
              <div class="col-xs-4">
                <button type="button" class="btn">4</button>
              </div>
              <div class="col-xs-4">
                <button type="button" class="btn">5</button>
              </div>
              <div class="col-xs-4">
                <button type="button" class="btn">6</button>
              </div>
            </div>
            <div class="row">
              <div class="col-xs-4">
                <button type="button" class="btn">7</button>
              </div>
              <div class="col-xs-4">
                <button type="button" class="btn">8</button>
              </div>
              <div class="col-xs-4">
                <button type="button" class="btn">9</button>	
              </div>
            </div>
            <div class="row">
              <div class="col-xs-4">
                <button type="button" class="btn">+</button>	
              </div>
              <div class="col-xs-4">
                <button type="button" class="btn">0</button>	
              </div>
              <div class="col-xs-4">
                <button type="button" class="btn">-</button>
              </div>
            </div>
            <div class="row">
              <div class="col-xs-4">
                <button type="button" class="btn">/</button>
              </div>
              <div class="col-xs-4">
                <button type="button" class="btn">*</button>
              </div>
              <div class="col-xs-4">
                <button type="button" class="btn">⟵</button>
              </div>
            </div>
            <div class="row">
              <div class="col-xs-6 p-0">
                <button type="button" class="btn">=</button>
              </div>
              <div class="col-xs-6 p-0">
                <button type="button" class="btn">CE</button>
              </div>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
}

export default App;
