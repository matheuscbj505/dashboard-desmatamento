// frontend/src/components/TabelaDesmatamento.js
import React, { useEffect, useState } from 'react';
import axios from 'axios';

const TabelaDesmatamento = () => {
  const [dados, setDados] = useState([]);

  useEffect(() => {
    axios.get('http://localhost:8000/api/desmatamento/')
      .then(response => setDados(response.data))
      .catch(error => console.error('Erro ao buscar dados:', error));
  }, []);

  return (
    <div className="p-4">
      <h2 className="text-xl font-bold mb-4">Dados de Desmatamento</h2>
      <table className="table-auto w-full border-collapse border border-gray-400">
        <thead>
          <tr className="bg-gray-200">
            <th className="border p-2">Ano</th>
            <th className="border p-2">Região</th>
            <th className="border p-2">Área Desmatada (hectares)</th>
          </tr>
        </thead>
        <tbody>
          {dados.map((item) => (
            <tr key={item.id}>
              <td className="border p-2">{item.ano}</td>
              <td className="border p-2">{item.regiao}</td>
              <td className="border p-2">{item.hectares}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default TabelaDesmatamento;