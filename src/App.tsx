import './App.css'

type ProductInfoProps = {
  value: string | number | boolean;
};

function ProductInfo ({value}:ProductInfoProps){
  let displayInfo : string;
  if (typeof value === "string") {
    displayInfo = value;
  } else if(typeof value === "number") {
   displayInfo = value.toFixed(0);
  }else{
    displayInfo= value  ? "Status: Active" : "Status: InActive"
  }

  return <p>info: {displayInfo}</p>
}

function App() {


  return (
  <>
   <div>
      <ProductInfo value="Laptop" />
      <ProductInfo value={65000} />
      <ProductInfo value={true} />
      <ProductInfo value={false} />
   </div>
  </> 
  )
}

export default App
