import ItemListContainer from './components/ItemListContainer/ItemListContainer';
import NavBarComponent from './components/NavBarComponent/NavBarComponent';
import 'bootstrap/dist/css/bootstrap.min.css';


async function getProducts () {
  const response = await axios.get('https://dummyjson.com/products')
  return response;
}


const App = () => {

  const promesa = new Promise((resolve, reject) => {
    const flag = false;
    if(flag) {
      resolve('Promesa resuelta correctamente');
    } else {
      reject('Promesa se resuelve negativamente');
    }
  });


  getProducts().then(res => console.log(res)).catch(error => console.error(error))


  const productsData = [
    {
      id: '111123123',
      title: "producto 1",
      description: 'este es el producto 1',
      price: 100
    }
  ]
  
  promesa.then(res => console.log(res)).catch(error => console.log(error))
  
  const array = [1, 2, 3, 4, 5, 6, 7]
  
  return (
    <div style={{width: '100vw', height: '100vh'}}>
      <NavBarComponent />
      <ItemListContainer greeting="Bienvenidos a mi tienda"/>
      <ul>
        {
          array.map((item, index) => {
            return(
              <li key={item.id}>{item.title}</li>
            )
          })
        }
      </ul>
    </div>
  );
}

export default App;