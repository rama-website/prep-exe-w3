import React, { useState } from 'react';
import { BigHead } from '@bigheads/core';

const AvatarGenerator = () => {
  const [name, setName] = useState('');
  const [avatarProps, setAvatarProps] = useState({
    hat: 'beanie',
    hatColor: 'blue',
    accessory: 'roundGlasses',
    clothing: 'shirt',
    clothingColor: 'red',
    graphic: 'react',
  });

  // Function to handle changes in the input field
  const handleInputChange = (event) => {
    setName(event.target.value);
  };

  // Function to generate an avatar based on the entered name
  const generateAvatar = () => {
    const newAvatarProps = {
      ...avatarProps,
      graphic: name || 'react', // Use the entered name or a default name for the graphic
    };
    setAvatarProps(newAvatarProps);
  };

  return (
    <div>
      <h2>Avatar Generator</h2>

      {/* Input field to enter the name */}
      <input
        type="text"
        placeholder="Enter a name"
        value={name}
        onChange={handleInputChange}
      />

      {/* Button to generate the avatar */}
      <button onClick={generateAvatar}>Generate Avatar</button>

      {/* Display the generated avatar */}
      <div style={{ marginTop: '20px' }}>
        <BigHead {...avatarProps} />
      </div>
    </div>
  );
};

export default AvatarGenerator;

