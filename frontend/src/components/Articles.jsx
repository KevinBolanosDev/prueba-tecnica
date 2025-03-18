import { useState, useEffect } from 'react'
import { getProductsRequest, getSpecialPricesRequest } from '../api/api';
import NavBar from './NavBar';

function Articles() {
  const [products, setProducts] = useState([])
  const [specialPrices, setSpecialPrices] = useState([])

  // Cargar datos al cargar el componente
  useEffect(() => {
    loadData()
  }, [])

  const loadData = async () => {
    try {
      const [productsRes, specialPricesRes] = await Promise.all([
        getProductsRequest(),
        getSpecialPricesRequest()
      ]);
      
      setProducts(productsRes.data);
      setSpecialPrices(specialPricesRes.data.groupProductsCategory || {});
    } catch (error) {
      console.error('Error cargando datos:', error);
    }
  };

  const getSpecialPrices = (productName) => {
    // Buscar la categoría que contiene el producto
    const category = Object.keys(specialPrices).find(cat => 
      specialPrices[cat].product.name === productName
    );

    if (category) {
      // Obtener los precios especiales de todos los usuarios para este producto
      const prices = specialPrices[category].users.map(user => {
        return `${user.user.name} = ${user.specialPrice}`; // Mostramos precios especiales y usuarios
      });
      
      if (prices.length > 0) {
        return prices.join(', ');
      }
    }
    return 'No hay precios especiales';
  };

  return (
    <>
    <NavBar />
    <div className="mx-auto p-4">
      <h1 className="text-2xl font-bold">Artículos</h1>
      <table className="bg-white border border-gray-300">
        <thead>
          <tr className="bg-gray-100">
            <th className="px-4 py-2">Producto</th>
            <th className="px-4 py-2">Descripción</th>
            <th className="px-4 py-2">Categoría</th>
            <th className="px-4 py-2">Precio Base</th>
            <th className="px-4 py-2">Usuarios con Precios Especiales</th>
          </tr>
        </thead>
        <tbody>
          {products.map((product) => (
            <tr key={product._id} className="border-t border-gray-300">
              <td className="px-4 py-2">{product.name}</td>
              <td className="px-4 py-2">{product.description}</td>
              <td className="px-4 py-2">{product.category}</td>
              <td className="px-4 py-2">{product.basePrice}</td>
              <td className="px-4 py-2">{getSpecialPrices(product.name)}</td>
            </tr>
          ))}
        </tbody>
      </table>
      </div>
    </>
  )
}

export default Articles