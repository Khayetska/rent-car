import React from 'react';
import Select from 'react-select';
import { useForm, Controller } from 'react-hook-form';
import makes from '../../data/makes.json';
import price from '../../data/price.json';
import sass from './Filter.module.scss';

const {
  section,
  filterForm,
  filterInputs,
  select,
  selectPrice,
  filterLabel,
  mileageInputLabel,
  inputMileage,
  searchButton,
  mileageInputsWrapper,
  miliageInput,
  inputsWrapper,
  miliageInputTo,
} = sass;

const priceOptions = price.map(item => ({
  value: item,
  label: item,
}));

const brandOptions = makes.map(make => ({
  value: make.toLowerCase(),
  label: make,
}));

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

export default function Filter({ onSubmit }) {
  const { handleSubmit, control, register } = useForm();

  return (
    <section className={section}>
      <form className={filterForm} onSubmit={handleSubmit(onSubmit)}>
        <div className={filterInputs}>
          <Controller
            control={control}
            name="brand"
            render={({ field: { onChange, value } }) => (
              <>
                <label className={filterLabel}>
                  Car brand
                  <Select
                    options={brandOptions}
                    className={`${select}`}
                    styles={styles}
                    name="brand"
                    placeholder="Enter the text"
                    value={brandOptions.find(b => b.value === value)}
                    onChange={val => onChange(val.value)}
                    aria-label="Filter cars by their brand"
                  />
                </label>
              </>
            )}
          />
          <Controller
            control={control}
            name={'price'}
            render={({ field: { onChange, value } }) => (
              <>
                <label className={filterLabel}>
                  Price/ 1 hour
                  <Select
                    options={priceOptions}
                    className={`${select} ${selectPrice}`}
                    styles={styles}
                    name="price"
                    placeholder="To $"
                    value={priceOptions.find(p => p.value === value)}
                    onChange={val => onChange(val.value)}
                    aria-label="Filter cars by their price per 1 hour"
                  />
                </label>
              </>
            )}
          />
        </div>
        <div className={mileageInputsWrapper}>
          <legend className={filterLabel}>Car mileage / km</legend>
          <div className={inputsWrapper}>
            <div className={inputMileage}>
              <label htmlFor="min" className={mileageInputLabel}>
                From
              </label>
              <input
                type="number"
                className={miliageInput}
                step={100}
                {...register('min')}
              />
            </div>
            <div className={inputMileage}>
              <label htmlFor="max" className={mileageInputLabel}>
                To
              </label>
              <input
                type="number"
                className={`${miliageInput} ${miliageInputTo}`}
                step={100}
                {...register('max')}
              />
            </div>
          </div>
        </div>
        <button type="submit" className={searchButton}>
          Search
        </button>
      </form>
    </section>
  );
}
