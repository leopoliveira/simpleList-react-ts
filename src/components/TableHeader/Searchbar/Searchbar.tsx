import { ChangeEvent } from "react";
import "./searchBarStyles.css";

type Props = {
  filterText: string;
  checkIsStocked: boolean;
  setFilterText: React.Dispatch<React.SetStateAction<string>>;
  setCheckStocked: React.Dispatch<React.SetStateAction<boolean>>;
};

export const Searchbar = (props: Props) => {
  function handleChange(text: string): void
  {
    props.setFilterText(text);
  }

  function handleCheck(isChecked: boolean): void
  {
    props.setCheckStocked(isChecked);
  }

  return (
    <div className="searchBar-container">
      <div className="search-input">
        <input
          type="text"
          placeholder="Search..."
          value={props.filterText}
          onChange={(event) => handleChange(event.target.value)}
        />
      </div>

      <div className="search-checkbox">
        <input
          type="checkbox"
          id="onlyStocked"
          checked={props.checkIsStocked}
          onChange={(e) => handleCheck(e.target.checked)}
        />
        <label htmlFor="onlyStocked">Only show products on stock</label>
      </div>
    </div>
  );
};
