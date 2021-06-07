import React from 'react';
import PropTypes from 'prop-types';
import { ThemeRowWrapper } from './styles';
import ThemeRadio from '../../components/ThemeRadio';
const ThemeRow = ({ onSelectTheme }) => {
  return (
    <ThemeRowWrapper>
      <div>calc</div>
      <div>
        <div
          style={{
            marginRight: '10px',
            fontSize: '0.5rem',
            alignSelf: 'center',
          }}
        >
          THEME
        </div>
        <ThemeRadio onSelectTheme={onSelectTheme} />
      </div>
    </ThemeRowWrapper>
  );
};

ThemeRow.propTypes = {};

export default ThemeRow;
