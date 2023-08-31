import React from "react";
import "./product.css";

export default function ProductDisplay(props) {
    const renderProduct = props.prodData.map((item)=>{

      return(
        // <div className="card">
        //   <img src = {item.flags.png} alt={item.name.common}/> <div>
        //     <p> <h4>Country Name:  {item.name.common}</h4></p>
        //     <p> <h6>Officail Name:  {item.name.official}</h6></p>
        //     <p> <h6>Region :{item.region}</h6></p>
        //     <p><h6>Population :{item.population}</h6></p>
        //       <p><h6>Continent : {item.continents}</h6></p>

              
             
           
        //   </div>

        // </div>
      <div>
      
                           
        <div >
           
         <div >

           <div>
                <div class="cards">
                    
               
                <div >
                <img src = {item.flags.png} alt={item.name.common}/>
                <p> <h4>Country Name:  {item.name.common}</h4></p>
            <p> <h6>Officail Name:  {item.name.official}</h6></p>
           <p> <h6>Region :{item.region}</h6></p>
           <p><h6>Population :{item.population}</h6></p>
               <p><h6>Continent : {item.continents}</h6></p>

                    
                </div>

                 </div>
                  
           </div>



        



       

     </div>
           
    </div>
      </div>

      )

    })
  return (
    <>
      <div className="main">{renderProduct}</div>
    </>
  );
}
