import React from 'react';
import Select from 'react-select';
import { useForm, Controller } from 'react-hook-form';
import sass from './Filter.module.scss';

const {
  section,
  filterForm,
  filterInputs,
  select,
  selectPrice,
  filterLabel,
  searchButton,
  // mileageInputsWrapper,
  // miliageInput,
  // miliageInputTo,
} = sass;

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
  { value: 'land rover', label: 'Land Rover' },
  { value: 'tesla', label: 'Tesla' },
  { value: 'toyota', label: 'Toyota' },
  { value: 'ford', label: 'Ford' },
  { value: 'jeep', label: 'Jeep' },
];

const priceOptions = [
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

export default function Filter({ onSubmit }) {
  // const [minValue, setMinValue] = useState(0);
  // const [maxValue, setMaxValue] = useState(0);

  // const handleMinValueChange = evt => {
  //   setMinValue(evt.target.value);
  // };

  // const handleMaxValueChange = evt => {
  //   setMaxValue(evt.target.value);
  // };

  const { handleSubmit, control } = useForm();

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
                  />
                </label>
              </>
            )}
          />
        </div>
        {/* <div>
          <label className={filterLabel}>Price/ 1 hour</label>
          <Select
            options={costOptions}
            className={`${select} ${selectCost}`}
            styles={styles}
            name="cost"
            placeholder="To $"
            // {...register('cost')}
          />
        </div> */}
        {/* <div className={mileageInputsWrapper}>
          <label className={filterLabel}>Car mileage / km</label>
          <div>
            <input
              type="number"
              placeholder="From"
              className={miliageInput}
              value={minValue}
              onChange={handleMinValueChange}
              max={maxValue}
              name="min"
            />
            <input
              type="number"
              placeholder="To"
              className={`${miliageInput} ${miliageInputTo}`}
              value={maxValue}
              onChange={handleMaxValueChange}
              min={minValue}
              name="max"
            />
          </div>
        </div> */}
        <button type="submit" className={searchButton}>
          Search
        </button>
      </form>
    </section>
  );
}
