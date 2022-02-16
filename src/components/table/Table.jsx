import React, { useEffect } from "react";
import { Box } from "@mui/material";
import { DataGrid } from "@mui/x-data-grid";

import { stocksApi, useGetAllStocksQuery } from "../../api/api";
import "./Table.css";

// Will auto update stock prices
// useEffect(() => {}, [data]);

const columns = [
  {
    headerClassName: "theme--header",
    field: "alphaID",
    description: "Stock Id",
    headerName: "Id",
    headerAlign: "center",
    align: "center",
    flex: 0.2,
  },
  {
    headerClassName: "theme--header",
    field: "companyName",
    description: "Company's full name",
    headerName: "Company Name",
    headerAlign: "center",
    align: "center",
    flex: 0.8,
  },
  {
    headerClassName: "theme--header",
    field: "value",
    description: "Current price",
    headerName: "Price",
    headerAlign: "center",
    align: "right",
    flex: 0.3,
  },
];

export default function Table() {
  const { data, error, isLoading } = useGetAllStocksQuery();

  return (
    <Box sx={{ display: "flex", width: 700, margin: "auto" }}>
      {data ? (
        <DataGrid
          autoHeight
          getRowId={(row) => row.alphaID}
          rows={data}
          columns={columns}
          pageSize={5}
          rowsPerPageOptions={[5]}
          sx={{ textAlign: "center" }}
        />
      ) : (
        <p>Nothing found</p>
      )}
    </Box>
  );
}
