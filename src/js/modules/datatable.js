import { DataTable } from "simple-datatables";

export default () => {
    const dataTable = new DataTable("#myTable", {
        searchable: false,
        fixedHeight: true,
    });
};
