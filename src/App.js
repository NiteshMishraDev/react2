import React ,{Component} from 'react';

import './App.css';
import Header from './Header';
import Main from './Main';
import Footer from './Footer';
import JSON   from './db.json'
import ProductDisplay from './ProductDisplay';


class App extends Component {
      
           constructor(){
            super()
            this.state={
              productData:JSON,
               filterData:JSON
            }
           }
            filterData=(keyword)=>{

              let output = this.state.productData.filter((data)=>{
                return(
                  data.name.common.toLowerCase().indexOf(keyword.toLowerCase())>-1
                )
                 
              })
              this.setState({filterData:output})
            }
        render(){

  return (
   <div>
<Header userInput={(data)=>{this.filterData(data)}}/>
  <ProductDisplay prodData ={this.state.filterData }/>
  <Footer year="2023" month="Aug" ></Footer>
   </div>
  );
  }
}
export default App