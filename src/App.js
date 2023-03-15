import { useState } from 'react';
import CVEdit from './components/CVEdit/CVEdit';
import CVPreview from './components/CVPreview/CVPreview';

function App() {
  const [user, setUser] = useState({name: ''});
  const [avatar, setAvatar] = useState();

  const childProps = {
    user,
    setUser,
    avatar,
    setAvatar,
  };

  return (
    <main className="grid min-h-screen gap-12 bg-slate-100 px-6 lg:grid-cols-2 lg:px-8 lg:pt-8 2xl:px-36">
      <CVEdit {...childProps} />
      <CVPreview {...childProps} />
    </main>
  );
}

export default App;
