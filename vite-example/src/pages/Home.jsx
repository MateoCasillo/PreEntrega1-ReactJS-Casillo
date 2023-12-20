import { useEffect } from 'react';
import ItemListContainer from "../components/ItemListContainer"
import { useGetProducts } from "../hooks/useProducts"


export const Home = () => {

  const { productsData } = useGetProducts(15);

    // Setear nombre de la pagina
    useEffect(() => {
        document.title = "Tienda Mateo"
    })


  return <ItemListContainer productsData={productsData}/>
  
};

// export default Home;
