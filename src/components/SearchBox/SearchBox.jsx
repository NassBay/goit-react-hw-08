import { useSelector, useDispatch } from "react-redux";
import { changeFilter } from "../../redux/filter/slice";
import { selectNameFilter } from "../../redux/filter/selector";
import css from "./SearchBox.module.css";
import { FiSearch } from "react-icons/fi";

const SearchBox = () => {
  const nameFilter = useSelector(selectNameFilter);
  const dispatch = useDispatch();

  const handleFilterChange = (e) => {
    const { value } = e.target;
    dispatch(changeFilter(value));
  };
  
  return (
    <div className={css.container}>
      <div className={css.inputContainer}>
        <input
          className={css.textInput}
          type="text"
          value={nameFilter}
          onChange={handleFilterChange}
          placeholder="Find contacts by name"
        />
        <FiSearch className={css.icon} />
      </div>
    </div>
  );
};

export default SearchBox;
