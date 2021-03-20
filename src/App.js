import './App.css';
import BestSellerComponent from './component/Nextbar/Nextbar';
import Slide1 from './component/Slide/Slide1';
import Promotion1 from './component/Bank/Bank1';
import CarouselContainer from './component/CarouselContainer';
import Sideby from './component/Sideby';
import MostPopular from './component/MostPopular/MostPopular';
import Foot from './component/Foot/Foot';

function App() {
  return (
    <div className="App">
      <CarouselContainer />
      <Sideby />
      <BestSellerComponent />
      <Slide1 />
      <Promotion1 />
      <MostPopular />
      <Foot />
    </div>
  );
}

export default App;