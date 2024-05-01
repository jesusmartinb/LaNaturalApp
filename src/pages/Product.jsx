import { useParams } from 'react-router-dom';

const Product = () => {

    const { id } = useParams();

  return (
    <div>
      Estamos en el producto {id}
    </div>
  )
}

export default Product
