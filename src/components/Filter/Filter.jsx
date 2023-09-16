import React from 'react';
import Select from 'react-select';
import sass from './Filter.module.scss';

const { section, filterForm, select, selectCost, filterLabel, searchButton } =
  sass;

const brandOptions = [
  { value: 'buick', label: 'Buick' },
  { value: 'volvo', label: 'Volvo' },
  { value: 'hummer', label: 'HUMMER' },
  { value: 'subaru', label: 'Subaru' },
  { value: 'mitsubishi', label: 'Mitsubishi' },
  { value: 'nissan', label: 'Nissan' },
  { value: 'lincoln', label: 'Lincoln' },
  { value: 'gmc', label: 'GMC' },
  { value: 'hyundai', label: 'Hyundai' },
  { value: 'mini', label: 'MINI' },
  { value: 'bentley', label: 'Bentley' },
  { value: 'mercedes-benz', label: 'Mercedes-Benz' },
  { value: 'aston martin', label: 'Aston Martin' },
  { value: 'pontiac', label: 'Pontiac' },
  { value: 'lamborghini', label: 'Lamborghini' },
  { value: 'audi', label: 'Audi' },
  { value: 'bmw', label: 'BMW' },
  { value: 'chevrolet', label: 'Chevrolet' },
  { value: 'mercedes-benz', label: 'Mercedes-Benz' },
  { value: 'chrysler', label: 'Chrysler' },
  { value: 'kia', label: 'Kia' },
  { value: 'land', label: 'Land' },
];

const costOptions = [
  { value: '40', label: '40' },
  { value: '50', label: '50' },
  { value: '60', label: '60' },
  { value: '70', label: '70' },
  { value: '80', label: '80' },
  { value: '90', label: '90' },
  { value: '100', label: '100' },
  { value: '110', label: '110' },
  { value: '120', label: '120' },
  { value: '130', label: '130' },
  { value: '140', label: '140' },
  { value: '150', label: '150' },
  { value: '160', label: '160' },
  { value: '170', label: '170' },
  { value: '180', label: '180' },
  { value: '190', label: '190' },
  { value: '200', label: '200' },
  { value: '250', label: '250' },
  { value: '300', label: '300' },
  { value: '500', label: '500' },
];

const styles = {
  option: (defaultStyles, state) => ({
    ...defaultStyles,
    color: state.isSelected ? '#121417' : '#12141733',
    backgroundColor: state.isFocused ? '#F7F7FB' : '#fff',
    borderRadius: '14px',
  }),

  control: defaultStyles => ({
    ...defaultStyles,
    backgroundColor: '#F7F7FB',
    padding: '6px 10px',
    border: 'none',
    borderRadius: '14px',
    boxShadow: 'none',
    color: '#121417',
  }),
};

export default function Filter() {
  return (
    <section className={section}>
      <form className={filterForm}>
        <div>
          <label htmlFor="brand" className={filterLabel}>
            Car brand
          </label>
          <Select
            options={brandOptions}
            className={`${select}`}
            styles={styles}
            name="brand"
            placeholder="Enter the text"
          />
        </div>
        <div>
          <label htmlFor="cost" className={filterLabel}>
            Price/ 1 hour
          </label>
          <Select
            options={costOptions}
            className={`${select} ${selectCost}`}
            styles={styles}
            name="cost"
            placeholder="To $"
          />
        </div>
        <div>
          <label className={filterLabel}>Сar mileage / km</label>
        </div>
        <button type="submit" className={searchButton}>
          Search
        </button>
      </form>
    </section>
  );
}
