import Card from "react-bootstrap/Card";
import { Button } from "react-bootstrap";
import { useGetProductById } from "../hooks/useProducts";
import { useParams } from "react-router-dom";


export const ItemDetailContainer = () => {
    const { id } = useParams();

    const { productData } = useGetProductById(id);


  return (
    <Card  key={productData.id} style={{ width: '18rem', margin: 10 }}>
        <Card.Img variant="top" src={productData.thumbnail} />

        <Card.Body>
            <Card.Title>{productData.title}</Card.Title>
            <Card.Text>{productData.description}</Card.Text>
            {/* {

              productData.images ? productData.images.map((image) => {
                return (
                  <Card.Img variant="top" src={image} />
                )
              }) :null
            }  */}
            <div>{productData.price}</div>
            <Button variant="primary">Go somewhere</Button>
            </Card.Body>
        </Card>
  );
};
