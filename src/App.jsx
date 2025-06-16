import Listing from './Listing';

function App() {
  const data = [ 
        {
          id: 1,
          title: "Essence Mascara Lash Princess",
          price : 150,
          thumbnail: "https://cdn.dummyjson.com/product-images/beauty/essence-mascara-lash-princess/thumbnail.webp"
        },
        {
          id: 2,
          title: "Eyeshadow Palette with Mirror",
          price : 450,
          thumbnail: "https://cdn.dummyjson.com/product-images/beauty/eyeshadow-palette-with-mirror/thumbnail.webp"
        },
        {
          id: 3,
          title: "Powder Canister",
          price : 210,
          thumbnail: "https://cdn.dummyjson.com/product-images/beauty/powder-canister/thumbnail.webp"
        },
        {
          id: 4,
          title: "Red Lipstick",
          price : 160,
          thumbnail: "https://cdn.dummyjson.com/product-images/beauty/red-lipstick/thumbnail.webp"
        },
        {
          id: 5,
          title: "Red Nail Polish",
          price : 90,
          thumbnail: "https://cdn.dummyjson.com/product-images/beauty/red-nail-polish/thumbnail.webp"
        },{
          id: 2,
          title: "Eyeshadow Palette with Mirror",
          price : 450,
          thumbnail: "https://cdn.dummyjson.com/product-images/beauty/eyeshadow-palette-with-mirror/thumbnail.webp"
        },
        {
          id: 3,
          title: "Powder Canister",
          price : 210,
          thumbnail: "https://cdn.dummyjson.com/product-images/beauty/powder-canister/thumbnail.webp"
        }
      ]

      const tableRow = data.map((data,index) => {
        return  <Listing key={data.id} num={index} image={data.thumbnail} price={data.price} title={data.title}/> 
      })
      console.log(tableRow)

    return (
    <div className="container">
    <table className="table">
    <thead>
    <tr>
      <th scope="col">S.No</th>
      <th scope="col">img</th>
      <th scope="col">Name</th>
      <th scope="col">Price</th>
      <th scope="col">Qty</th>
      <th scope="col">Final</th>
    </tr>
  </thead>
  <tbody>
  {
    tableRow
  }
</tbody>
</table>  
  </div> 
  )
}

export default App;
