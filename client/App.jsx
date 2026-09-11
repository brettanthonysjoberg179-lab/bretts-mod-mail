import { useState } from 'react';
import { useReddit } from '@devvit/web/client';

export function App() {
  const reddit = useReddit();
  const [mail, setMail] = useState([]);
  const [selected, setSelected] = useState(null);

  return (
    <div>
      <h1>Brett's Mod Mail</h1>
      <p>Mod mail reader and responder</p>
      
      <div>
        <h2>Messages ({mail.length})</h2>
        {selected && <p>Viewing: {selected}</p>}
      </div>
    </div>
  );
}
