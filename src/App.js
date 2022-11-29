// import logo from './logo.svg';
// import Data from './components/data/db.json';
import './App.css';
import Body from './components/molecules/Body';
import Footer from './components/molecules/Footer';
import Header from './components/molecules/Header';

function App() {
  return (
    <div>
      {/* {
        Data.map(post =>{
          return (
            <div>
              <p>{post.Email}</p>
            </div>)
        })
      } */}
      <Header></Header>
      <Body></Body>
      <Footer></Footer>
    </div>
  );
}

export default App;
