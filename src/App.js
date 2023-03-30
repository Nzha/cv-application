import { useState, useEffect } from 'react';
import CVEdit from './components/CVEdit/CVEdit';
import CVPreview from './components/CVPreview/CVPreview';

function App() {
  const [user, setUser] = useState(() => {
    const storedUser = JSON.parse(localStorage.getItem('cv-builder'));
    return storedUser || { cvTitle: 'My Resume', proExp: [], eduExp: [] };
  });
  const [avatar, setAvatar] = useState();

  // Save user in local storage every time a change in user occurs
  useEffect(() => {
    localStorage.setItem('cv-builder', JSON.stringify(user));
  }, [user]);

  // localStorage.clear()

  const childProps = {
    user,
    setUser,
    avatar,
    setAvatar,
  };

  return (
    <main className="grid min-h-screen gap-12 bg-slate-100 px-6 lg:grid-cols-2 lg:px-8 lg:pt-8 min-[1670px]:px-36">
      <CVEdit {...childProps} />
      <CVPreview {...childProps} />
    </main>
  );
}

export default App;
