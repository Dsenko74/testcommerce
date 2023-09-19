import { getStaticProps } from  "./utils/getStaticProps";


function App() {

  getStaticProps().then(res => console.log(res.props.products[2].image.url))
     

    return (
      <button>button</button>
    )
  
  // return (
  //   <div className="App">


  //     {products.map((product) => (
  //       <div key={product.id}>
  //         <img src={product.media.source} alt={product.name} />
  //       </div>
         
  //     ))}
  //   </div>
  // );
}

export default App;
