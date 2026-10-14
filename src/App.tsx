import './App.css'

type Product ={
  name : string;
  price : number;
  instock : boolean;
};

function App() {

  const products: Product[] = [
    {name : "Laptop", price : 65000, instock: true },
    {name: "Phone", price: 25000, instock: true},
    {name: "Headphone", price: 3000, instock: false}
  ];
 
  return (
  <>
  <h1>Product Information</h1>
   {products.map((product)=>(
    <div key={product.name}>
      <h3>Name: {product.name}</h3>
      <h3>Price: {product.price}</h3>
      <h3>Instock: {product.instock ? "Yes" : "No"}</h3>
    </div>
   ))}
  </> 
  )
}

export default App
