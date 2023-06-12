import { useSelector, useDispatch } from 'react-redux';
import { getFilterValue } from 'redux/selectors/selectors';
import { setFilter } from 'redux/filterSlice';
import css from './Filter.module.css';

export const Filter = () => {
    const filterValue = useSelector(getFilterValue);
    const dispatch = useDispatch();

    return (
        <div>
            <label className={css.labelFilter}>Find contacts by name
            </label>

            <input
                className={css.inputFilter}
                type='text'
                value={filterValue}
                name="filter"
                onChange={(e) => dispatch(setFilter(e.target.value))}
            />
        </div>
    );
};
