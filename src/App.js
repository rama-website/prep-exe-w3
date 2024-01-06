import React from 'react';
import AvatarGenerator from './components/AvatarGenerator';
import useWindowSize from './components/WindowSizeHook';

const App = () => {
  const isBigScreen = useWindowSize(1001, Infinity);
  const isMediumScreen = useWindowSize(701, 1000);
  const isSmallScreen = useWindowSize(0, 700);

  return (
    <div>
      {isBigScreen && <AvatarGenerator type="Mithi" />}
      {isMediumScreen && <AvatarGenerator type="Diana" />}
      {isSmallScreen && <AvatarGenerator type="Mikong" />}
    </div>
  );
};

export default App;

