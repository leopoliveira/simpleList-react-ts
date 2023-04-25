import "./tableHeaderStyle.css";
import { Searchbar } from "./Searchbar/Searchbar";
import { useState } from "react";

type Props = {
  filterText: string;
  checkIsStocked: boolean;
  setFilterText: React.Dispatch<React.SetStateAction<string>>;
  setCheckStocked: React.Dispatch<React.SetStateAction<boolean>>;
};

export const TableHeader = (props: Props) => {

  return (
    <thead className="table-header">
      <Searchbar
        filterText={props.filterText}
        checkIsStocked={props.checkIsStocked}
        setFilterText={props.setFilterText}
        setCheckStocked={props.setCheckStocked}
      />
    </thead>
  );
};
