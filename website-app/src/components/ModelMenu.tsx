import React from 'react';

const ModelMenu: React.FC = () => {
  return (
    <div>
      {/* Dropdown menu for models */}
      <select>
        <option value="sarali">SARALÍ</option>
        <option value="cherry">CHERRY</option>
        <option value="claudia">CLAUDIA</option>
        <option value="zorrogris">ZORRO GRIS</option>
        {/* Add other models */}
      </select>
    </div>
  );
};

export default ModelMenu;
