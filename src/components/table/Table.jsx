import React, { useEffect } from "react";
import { Box } from "@mui/material";
import { DataGrid } from "@mui/x-data-grid";
import { stocksApi, useGetAllStocksQuery } from "../../api/api";

// Will auto update stock prices
// useEffect(() => {}, [data]);

const columns = [
  { field: "alphaID", headerName: "ID", width: 70 },
  { field: "companyName", headerName: "Company Name", width: 130 },
  { field: "value", headerName: "Price", width: 70 },
];

export default function Table() {
  const { data, error, isLoading } = useGetAllStocksQuery();

  return (
    <Box sx={{ display: "flex" }}>
      {data ? (
        <DataGrid
          autoHeight
          getRowId={(row) => row.alphaID}
          rows={data}
          columns={columns}
          pageSize={5}
          rowsPerPageOptions={[5]}
        />
      ) : (
        <p>Nothing found</p>
      )}
    </Box>
  );
}
