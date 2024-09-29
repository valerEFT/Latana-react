import * as React from "react";
import Pagination from "@mui/material/Pagination";
import Stack from "@mui/material/Stack";
import { Link } from "react-router-dom";
import { PaginationItem } from "@mui/material";
import { useSelector } from "react-redux";

export default function PaginationSize({ page, pageQty, setPage }) {
  const isDarkMode = useSelector((state) => state.theme.isDarkMode);
  return (
    <Stack spacing={2}>
      <Pagination
        showFirstButton
        showLastButton
        page={page}
        count={pageQty}
        size="large"
        onChange={(_, num) => setPage(num)}
        renderItem={(item) => {
          return (
            <PaginationItem
              component={Link}
              to={`/?page=${item.page}`}
              {...item}
              sx={{
                bgcolor: isDarkMode ? "#000" : "#fff",
                color: isDarkMode ? "#fff" : "#000",
              }}
            />
          );
        }}
      />
    </Stack>
  );
}
