import React from 'react';

import './Directory.scss';
import '../MenuItem/MenuItem';
import sections from './sections';
import MenuItem from '../MenuItem/MenuItem';

class Directory extends React.Component {
  render() {
    return (
      <div className="directory-menu">
        {sections.map(({ id, title, imageUrl, size }) => {
          return <MenuItem key={id} title={title} imageUrl={imageUrl} size={size} />;
        })}
      </div>
    );
  }
}

export default Directory;
