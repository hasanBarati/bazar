import logo from './logo.svg';
import './App.css';
import {Route,Switch,Link} from 'react-router-dom'
import Header from './components/header/header.component'
import Shop from './page/shop/shop'
import HomePage from './page/homepage/homepage'
import Category from './page/shop/category/category.component'
import CartIcon from './components/carticon/carticon'
import CartSection from './page/cartsection/cartsecton'
function App() {
  return (
    <div className="App">
    <Header />
  <div className='container-fluid'>
   <Switch>
       <Route exact path="/"   component={HomePage}/> 
      <Route path="/shop" component={Shop}/>
       <Route path="/category" component={Category}/>
   </Switch>
</div>     
   
   <CartSection /> 

    
</div>
  );
}

export default App;
