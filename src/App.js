import './App.css';
import { Header } from './components/Header'
import { Author } from './components/Author'
import { Contact } from './components/Contact'
import { ParallaxSection } from './components/ParallaxSection'
import { Partners } from './components/Partners.js'
import supportData from './components/support.json'
import listenData from './components/listen.json'
import partnerData from './components/partner.json'

import { Linktree  } from './components/Linktree'

export const App = () => {
  return (
    <>
      <Header />
      <Author />
      <ParallaxSection img='./assets/img/Varpsund2542_M.webp' alt="Rickard and Richard sitting next to eachother" />
      <Linktree title="Stöd podden." data={supportData} />
      <Linktree title="Lyssna på podden." data={listenData} />
      <Partners title="Partners." data={partnerData} />
      <ParallaxSection img='./assets/img/_MGF2156_L.webp' alt="Mixer table and animal horn placed on table" />
      <Contact />
    </>
  );
}
export default App;
