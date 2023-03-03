import PropTypes from 'prop-types';

export function Filter ({getFilter}){
    return (
        <label >Find contacts by name<input onChange={(e) => getFilter(e.target.value)} name="filter" type="text" /></label>
    );
    };

Filter.propTypes = {
    getFilter: PropTypes.func.isRequired,
};