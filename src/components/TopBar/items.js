import { useState } from 'react';
// i18n
import { useTranslation } from 'react-i18next';
// Components (styles)
import { Items, Item } from './topBar.styles';
import { Button } from '../index';

function Menu({ open, setOpen }) {
  // i18n
  const I18NEXT_KEY = 'i18nextLng';
  const { t, i18n } = useTranslation();
  const [selectedValue, setSelectedValue] = useState(
    localStorage.getItem(I18NEXT_KEY) || 'en'
  );

  const changeLanguage = option => {
    setSelectedValue(option.target.value);
    localStorage.setItem(I18NEXT_KEY, option.target.value);
    i18n.changeLanguage(option.target.value);
  }

  // Toggler
  const hideItems = () => setOpen(false);

  const redirectToApp = () => window.open('https://editeapp.vercel.app');


  return (
    <Items open={open}>
      {/* Middle → Items */}
      <ul className="topBar__middle">
        <Item onClick={hideItems}>
          <a href="#home">
            {t('Items.One')}
          </a>
        </Item>
        <Item onClick={hideItems}>
          <a href="#tools">
            {t('Items.Two')}
          </a>
        </Item>
        <Item onClick={hideItems}>
          <a href="#community">
            {t('Items.Three')}
          </a>
        </Item>
      </ul>
      {/* Right → Select & Button */}
      <div className="topBar__right">
        <select value={selectedValue} onChange={changeLanguage}>
          <option value="en">En</option>
          <option value="pt">Pt</option>
        </select>
        <Button onClick={redirectToApp}>
          {t('Button')}
        </Button>
      </div>
    </Items>
  )
}

export default Menu;
