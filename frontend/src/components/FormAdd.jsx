import { useState, useEffect } from 'react'
import { getProductsRequest, getUsersRequest, updateSpecialPriceRequest } from '../api/api'
import NavBar from './NavBar'

function FormAdd() {
  const [products, setProducts] = useState([])
  const [users, setUsers] = useState([])
  const [formData, setFormData] = useState({
    productId: '',
    userId: '',
    basePrice: '',
    specialPrice: ''
  })

  useEffect(() => { 
    loadData()
  }, [])

    const loadData = async () => {
      try {
        const [productsRes, userRes] = await Promise.all([
          getProductsRequest(),
          getUsersRequest()
        ])
        setProducts(productsRes.data)
        setUsers(userRes.data)
      } catch (error) {
        console.error('Error al cargar datos:', error)
      }
    }

  const handleSubmit = async (e) => {
    e.preventDefault()
    try {
      await updateSpecialPriceRequest({
        productId: formData.productId,
        userId: formData.userId,
        basePrice: formData.basePrice,
        specialPrice: formData.specialPrice
      })
      alert('Precio especial guardado correctamente')
      setFormData({
        productId: '',
        userId: '',
        basePrice: '',
        specialPrice: ''
      });
    } catch (error) {
      console.error('Error al guardar:', error)
      alert('Error al guardar el precio especial')
    }
  }

  const handleProductChange = (e) => {
    const product = products.find(p => p._id === e.target.value)
    setFormData({
      ...formData,
      productId: e.target.value,
      basePrice: product ? product.basePrice : ''
    })
  }

  return (
    <>
      <NavBar />
    <div className="max-w-md mx-auto p-6 bg-white rounded-lg shadow-lg">
      <h2 className="text-2xl font-bold mb-6">Gestionar Precio Especial</h2>
      <form onSubmit={handleSubmit} className="space-y-4">
        <div>
          <label className="block mb-2">Producto:</label>
          <select
            value={formData.productId}
            onChange={handleProductChange}
            className="w-full p-2 border rounded"
            required
          >
            <option value="">Seleccione un producto</option>
            {products.map(product => (
              <option key={product._id} value={product._id}>
                {product.name}
              </option>
            ))}
          </select>
        </div>

        <div>
          <label className="block mb-2">Usuario:</label>
          <select
            value={formData.userId}
            onChange={(e) => setFormData({...formData, userId: e.target.value})}
            className="w-full p-2 border rounded"
            required
          >
            <option value="">Seleccione un usuario</option>
            {users.map(user => (
              <option key={user._id} value={user._id}>
                {user.name}
              </option>
            ))}
          </select>
        </div>

        <div>
          <label className="block mb-2">Precio Base:</label>
          <input
            type="number"
            value={formData.basePrice}
            readOnly
            className="w-full p-2 border rounded bg-gray-100"
          />
        </div>

        <div>
          <label className="block mb-2">Precio Especial:</label>
          <input
            type="number"
            value={formData.specialPrice}
            onChange={(e) => setFormData({...formData, specialPrice: e.target.value})}
            className="w-full p-2 border rounded"
            required
          />
        </div>

        <button
          type="submit"
          className="w-full bg-blue-500 text-white py-2 px-4 rounded"
        >
          Guardar Precio Especial
        </button>
      </form>
      </div>
    </>
  )
}

export default FormAdd