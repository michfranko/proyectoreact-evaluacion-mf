import React, { useState } from 'react';
import './App.css';
import { db } from './firebaseConfig';
import { collection, addDoc } from 'firebase/firestore';

function App() {
  const [nombre, setNombre] = useState('');
  const [precio, setPrecio] = useState('');
  const [stock, setStock] = useState('');
  const [error, setError] = useState('');
  const [success, setSuccess] = useState('');

  const handleSubmit = async (e) => {
    e.preventDefault();
    setError('');
    setSuccess('');

 
    if (!nombre || !precio || !stock) {
      setError('Todos los campos son obligatorios.');
      return;
    }
    if (isNaN(precio) || Number(precio) <= 0) {
      setError('El precio debe ser un número positivo.');
      return;
    }
    if (isNaN(stock) || Number(stock) < 0) {
      setError('El stock debe ser un número igual o mayor a 0.');
      return;
    }

    try {
      await addDoc(collection(db, 'products'), {
        nombre,
        precio: Number(precio),
        stock: Number(stock),
      });
      setSuccess('Producto registrado correctamente.');
      setNombre('');
      setPrecio('');
      setStock('');
      setTimeout(() => setSuccess(''), 3000); 
    } catch (err) {
      setError('Error al registrar el producto.');
      setTimeout(() => setError(''), 3000); 
    }
  };

  return (
    <div className="App">
      <header className="App-header">
        <h2>Registro de Productos</h2>
        <form onSubmit={handleSubmit} style={{ display: 'flex', flexDirection: 'column', gap: 10, width: 300 }}>
          <input
            type="text"
            placeholder="Nombre"
            value={nombre}
            onChange={e => setNombre(e.target.value)}
          />
          <input
            type="number"
            placeholder="Precio"
            value={precio}
            onChange={e => setPrecio(e.target.value)}
            min="1"
          />
          <input
            type="number"
            placeholder="Stock"
            value={stock}
            onChange={e => setStock(e.target.value)}
            min="0"
          />
          <button type="submit">Registrar</button>
        </form>
        {error && <p style={{ color: 'red' }}>{error}</p>}
        {success && <p style={{ color: 'lightgreen' }}>{success}</p>}
      </header>
    </div>
  );
}

export default App;
