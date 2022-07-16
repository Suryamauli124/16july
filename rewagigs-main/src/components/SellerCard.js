import sellerData from "./sellerData.json";
import ClientWindow from "./ClientWindow";
import * as React from "react";

function SellerCard() {
  
  console.log("inside sellercard")
    return (
    <div>
        {console.log(sellerData, "data")}
      <div 
        style={{
          display: "grid",
          gridTemplateColumns: "250px 250px 250px 250px",
          gridGap: "40px"
        }}
        >
        {sellerData.map((seller,i) => {
          return (
            <div>
              <ClientWindow seller={seller} i={i} />
            </div>
          );
        })}
      </div>
    </div>
  );
}

export default SellerCard;