import { useState } from 'react';
import CVForm from './components/CVForm/CVForm';
import CVPreview from './components/CVPreview/CVPreview';

function App() {
  const [user, setUser] = useState([]);

  return (
    <main className="grid min-h-screen grid-cols-2 gap-12 bg-slate-100 px-36 pt-10">
      <CVForm user={user} setUser={setUser} />
      <CVPreview user={user} />
    </main>
  );
}

export default App;
