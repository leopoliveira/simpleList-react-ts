import "./tableStyles.css";
import { TableHeader } from "../TableHeader/TableHeader";
import { TableMain } from "../TableMain/TableMain";
import { useState } from "react";

export const Table = () => {
  const [filterText, setFilterText] = useState("");
  const [checkStocked, setCheckStocked] = useState(false);

  return (
    <table>
      <TableHeader
        filterText={filterText}
        checkIsStocked={checkStocked}
        setFilterText={setFilterText}
        setCheckStocked={setCheckStocked}
      />
      <TableMain
        filterText={filterText}
        checkIsStocked={checkStocked}
      />
    </table>
  );
};
