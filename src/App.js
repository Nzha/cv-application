import { useState } from 'react';
import CVEdit from './components/CVEdit/CVEdit';
import CVPreview from './components/CVPreview/CVPreview';

function App() {
  const [user, setUser] = useState('');

  return (
    <main className="grid min-h-screen grid-cols-2 gap-12 bg-slate-100 px-36 pt-8">
      <CVEdit user={user} setUser={setUser} />
      <CVPreview user={user} />
    </main>
  );
}

export default App;
