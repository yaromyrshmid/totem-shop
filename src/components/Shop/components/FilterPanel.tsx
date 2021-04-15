import React from "react"
import PropTypes from "prop-types"
import {
  Box,
  FormControl,
  InputLabel,
  makeStyles,
  MenuItem,
  Select,
} from "@material-ui/core"

import { ICategory } from "../../../types/Category"

interface FilterPanelProps {
  categories: Array<ICategory>
  onCategorySelect: Function
  selectedCategory: string
}

const FilterPanel = ({
  categories,
  onCategorySelect,
  selectedCategory,
}: FilterPanelProps) => {
  const classes = useStyles()

  const handleCategorySelect = (e: React.ChangeEvent<HTMLInputElement>) => {
    onCategorySelect(e.target.value)
  }

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
          <MenuItem value={""}>Усі</MenuItem>
          {categories.map(({ category, id }) => (
            <MenuItem value={id} key={id}>
              {category}
            </MenuItem>
          ))}
        </Select>
      </FormControl>
    </Box>
  )
}

const useStyles = makeStyles((theme) => ({
  formControl: {
    margin: theme.spacing(1),
    minWidth: 120,
  },
  selectEmpty: {
    marginTop: theme.spacing(2),
  },
}))

FilterPanel.propTypes = {}

export default FilterPanel
