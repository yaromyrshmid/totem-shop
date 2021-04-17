import React from 'react';
import { Box, FormControl, InputLabel, makeStyles, MenuItem, Select } from '@material-ui/core';

import { Category } from '../../../types/Category';

const useStyles = makeStyles((theme) => ({
  formControl: {
    margin: theme.spacing(1),
    minWidth: 120
  },
  selectEmpty: {
    marginTop: theme.spacing(2)
  }
}));

interface FilterPanelProps {
  categories: Array<Category>;
  onCategorySelect: (categoryId: string) => void;
  selectedCategory: string;
}

const FilterPanel: React.FC<FilterPanelProps> = ({
  categories,
  onCategorySelect,
  selectedCategory
}: FilterPanelProps): JSX.Element => {
  const classes = useStyles();

  const handleCategorySelect = (
    e: React.ChangeEvent<{
      name?: string | undefined;
      value: unknown;
    }>
  ) => {
    onCategorySelect(e.target.value as string);
  };

  return (
    <Box>
      <FormControl className={classes.formControl}>
        <InputLabel id="category-select-label">Категорія</InputLabel>
        <Select
          labelId="category-select-label"
          id="category-select"
          value={selectedCategory}
          onChange={handleCategorySelect}
        >
          <MenuItem value="">Усі</MenuItem>
          {categories.map(({ category, id }) => (
            <MenuItem value={id} key={id}>
              {category}
            </MenuItem>
          ))}
        </Select>
      </FormControl>
    </Box>
  );
};

export default FilterPanel;
