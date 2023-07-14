import React, { useState } from 'react';
import data from './data';
import List from './List';
function App() {
  const [pessoas, setpessoas] = useState(data)
  
  return <h2>
    <section className= "container">
      <h3>{pessoas.length} Aniversarios </h3>
      <List pessoas={pessoas} />
      <button onClick={()=> setpessoas([])
      }>Limpar tudo</button>
    </section>
  </h2>;
}

export default App;
