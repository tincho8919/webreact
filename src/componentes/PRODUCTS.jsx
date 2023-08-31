
import React, { useState } from 'react';
import '../css/PRODUCTS.scss'; // Importa tu archivo de estilos CSS

const ProductTable = () => {
    const [products, setProducts] = useState([
        { id: 1, name: 'VUELO 1 MEXICO', price: 62000000 },
        { id: 2, name: 'VUELO 2 COLOMBIA', price: 3000000 },
        { id: 3, name: 'VUELO 3 FRANCE', price: 7000000 },
        { id: 4, name: 'VUELO 4 GERMANY', price: 4000000 },
        { id: 5, name: 'VUELO 5 CHINA', price: 8000000 },
        { id: 6, name: 'VUELO 6 QUATAR', price: 9000000 },
        { id: 7, name: 'VUELO 7 Greece', price: 200000 },
        { id: 8, name: 'VUELO 8 Lithuania', price: 300000 },
        { id: 9, name: 'VUELO 9 Switzerland', price: 150000 },
        { id: 10, name: 'VUELO 10 Spain', price: 200000 },
        { id: 11, name: 'VUELO 11 Poland', price: 300000 },
        { id: 12, name: 'VUELO 12 Brazil', price: 150000 },
    ]);
    const handleBuy = (productId, productName) => {
        window.alert(`¡Has comprado ${productName} (ID: ${productId})!`);
    };

    return (
        <div>
            <h2>Tabla de Carga de Productos</h2>
            <table className="black-background-table">
                <thead>
                    <tr>
                        <th>ID</th>
                        <th>Nombre del Producto</th>
                        <th>Precio</th>
                        <th>Acciones</th>
                    </tr>
                </thead>
                <tbody>
                    {products.map((product) => (
                        <tr key={product.id}>
                            <td>{product.id}</td>
                            <td>{product.name}</td>
                            <td>${product.price}</td>
                            <td>
                                <button onClick={() => handleBuy(product.id, product.name)}>Comprar</button>
                            </td>
                        </tr>
                    ))}
                </tbody>
            </table>
        </div>
    );
};

export default ProductTable;