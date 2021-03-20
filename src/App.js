import Navbar from "./components/Navbar"
import FirstSlider from "./components/FirstSlider";
import SecondSlider from './components/SecondSlide';
import styled from "styled-components";
import Lists from "./components/Lists";
import SmartBasket from "./components/SmartBasket";
import BankOffer from "./components/BankOffer";
//Images


function App() {
  return (
    <AppContainer>
      <Navbar />
      <FirstSlider />
      <Lists />
      <SecondSlider />
      <BankOffer />
      <SmartBasket />
    </AppContainer>
  );
}

export default App;


const AppContainer = styled.div`
  display: flex;
  flex-direction: column;
`;
