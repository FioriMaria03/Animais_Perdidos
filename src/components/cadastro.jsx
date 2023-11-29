import { useState } from 'react';

function Cadastro({ addAnimal }) {
  const [descricao, setDesc] = useState('');
  const [local, setLocal] = useState('');
  const [raca, setRaca] = useState('');
  const [resgatado, setResgatado] = useState(false);
  const [perdido, setPerdido] = useState(false);

  const cadastrar = () => {
    if (descricao === '' || local === '' || raca === '') {
      
      return;
    }

    addAnimal(
      descricao,
      local,
      raca,
      resgatado,
      perdido
    );
    setDesc('');
    setLocal('');
    setRaca('');
    setResgatado(false);
    setPerdido(false);
  };

  return (
    <>
      <h3>Cadastro</h3>
      <div className="cadastrar">
        <input
          type="text"
          value={descricao}
          onChange={(e) => setDesc(e.target.value)}
          placeholder="Informe uma breve descricao do animal...."
        />
        <input
          type="text"
          value={local}
          onChange={(e) => setLocal(e.target.value)}
          placeholder="Informe o local que o animal foi encontrado...."
        />
        <input
          type="text"
          value={raca}
          onChange={(e) => setRaca(e.target.value)}
          placeholder="Informe o tipo e raça do animal...."
        />
        <label>
          Resgatado
          <input
            type="checkbox"
            checked={resgatado}
            onChange={() => setResgatado(!resgatado)}
          />
        </label>
        <label>
          Perdido
          <input
            type="checkbox"
            checked={perdido}
            onChange={() => setPerdido(!perdido)}
          />
        </label>
        <button className="concluir" onClick={cadastrar}>
          Cadastrar
        </button>
      </div>
    </>
  );
}

export default Cadastro;
