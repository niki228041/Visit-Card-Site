import { Route,Router,Routes,BrowserRouter,Outlet, Link} from 'react-router-dom';
import Header from './Components/Header/Header';
import Footer from './Components/Footer/Footer';
import MainInfo from './Components/MainInfo';

const App=()=>{


    return(
    <>
        <BrowserRouter>
        <Routes>
            <Route path='/*' element={<>
              <div className='flex flex-col ' style={{minHeight:"100vh"}}>
                <Header />
                <MainInfo/>
                <Footer/>
              </div>
            </>}></Route>
            
            <Route path="models" element={<></>}>
            </Route>
        
        </Routes>
        
      </BrowserRouter>
    </>
    )
};

export default App;