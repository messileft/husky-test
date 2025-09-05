import React, { useEffect } from 'react';
import AOS from 'aos';

import './App.css';
import Navbar from './component/Navbar';
import Secondpart from './component/second-part';
import Mainimage from './component/mainimage';
import ClearDoubt from './component/div-for-clear-doubt';
import LiveGuruCards from './component/live-guru-cards';
import FeaturedGuruCards from './component/featured-guru-cards';
import WorkAnddetail from './component/how-it-work';
import Testinomials from './component/testinomials';
import Ourblogs from './component/our-blogs';
import GuideToOurFeature from './component/guide-our-feature';
import Footer from './component/footer';

function App() {
  useEffect(() => {
    AOS.init({
      duration: 1000,
      easing: 'ease-in-out',
      once: true,
      offset: 100,
    });
  }, []);

  return (
    <>
      <Navbar/>
      <Secondpart/>
      <Mainimage/>
      <ClearDoubt/>
      <LiveGuruCards/>
      <FeaturedGuruCards/>
      <WorkAnddetail/>
      <Testinomials/>
      <Ourblogs/>
      <GuideToOurFeature/>
      <Footer/>
    </>
  );
}

export default App;
