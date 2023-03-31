import { Page } from './PageStyles';
import Landing from './components/Landing/Landing';
import Header from './components/Header/Header';
import Footer from './components/Footer/Footer';
import ChatSupport from './components/ChatSupport/ChatSupport';
import { useEffect, useState } from 'react';
import Product from './components/Product/Product';

function App() {

  const [page, setPage] = useState(localStorage.getItem('page'))

  useEffect(() => {
    if(!localStorage.getItem('page')) {
      localStorage.setItem('page','Landing')
    }
    setPage(localStorage.getItem('page'))
  },[])

  return (
    <div>
      <Page>
        <Header/>
          {page == 'Landing' && <Landing/>}
          {page == 'Checkout' && <Product/>}
          {page == 'Product' && <Product/>}
          {page == 'Checkout' && <Product/>}
          <ChatSupport/>
        <Footer/>
      </Page>
    </div>
  );
}

export default App;
