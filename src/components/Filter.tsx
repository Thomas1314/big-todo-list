import { MenuItem, Select } from '@material-ui/core';
import Switch from '@material-ui/core/Switch';
import React, { useState } from 'react';
import { useSelector } from 'react-redux';
import { getCategoriesFromState } from '../redux/selectors/selectors';
import { Icon } from './Icon';
import { useStyles } from './TaskListWrapper.styles';

type SwitchesType = {
  title: string;
  checked: boolean;
  onChange: (event: React.ChangeEvent<HTMLInputElement>) => void;
};

type FilterType = {
  onNameSortChange: (event: React.ChangeEvent<HTMLInputElement>) => void;
  onDateSortChange: (event: React.ChangeEvent<HTMLInputElement>) => void;
  nameSort: boolean;
  dateSort: boolean;
  categoryId: string | string[] | null;
  setCategoryId: (categoryId: string | string[] | null) => void;
};

const Filter: React.FC<FilterType> = ({
  onNameSortChange,
  onDateSortChange,
  nameSort,
  dateSort,
  categoryId,
  setCategoryId,
}) => {
  const [opened, setOpened] = useState(false);
  const categories = useSelector(getCategoriesFromState);
  const classes = useStyles();

  const onOpen = () => {
    setOpened(true);
  };

  const onClose = () => {
    setOpened(false);
  };

  const handleChangeCategory = (
    event: React.ChangeEvent<{ name?: string | undefined; value: unknown }>
  ) => {
    event.target.value !== 51
      ? setCategoryId(`${event.target.value}`)
      : setCategoryId(null);
  };

  const completedTasksSwitches: SwitchesType[] = [
    {
      title: 'Sort Task by date',
      checked: dateSort,
      onChange: onDateSortChange,
    },
    {
      title: 'Sort Task by name',
      checked: nameSort,
      onChange: onNameSortChange,
    },
  ];

  return (
    <div>
      <div className="appCategory">
        <Select
          onOpen={onOpen}
          onClose={onClose}
          onChange={handleChangeCategory}
          value={categoryId}
        >
          {categories.map(({ id, color, icon, name }) => (
            <MenuItem key={id} value={id}>
              <>
                <Icon color={color} icon={icon} />
                {opened && name}
              </>
            </MenuItem>
          ))}
          <MenuItem value={51}>Clear</MenuItem>
        </Select>
      </div>
      <div className="appSwitches">
        {completedTasksSwitches.map(({ checked, onChange, title }, index) => (
          <div key={index}>
            <span>{title}</span>
            <Switch
              checked={checked}
              onChange={onChange}
              color="default"
              name="checkedB"
              inputProps={{ 'aria-label': 'checkbox with default color' }}
            />
          </div>
        ))}
      </div>
    </div>
  );
};

export default Filter;
