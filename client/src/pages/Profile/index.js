import { Box, Button, useTheme } from "@mui/material";
import { Link } from "react-router-dom";
import Title from "../../components/Title";
import {
  DataGrid,
  GridToolbarColumnsButton,
  GridToolbarContainer,
  GridToolbarDensitySelector,
  GridToolbarFilterButton,
} from "@mui/x-data-grid";
import EditIcon from "@mui/icons-material/Edit";
import DeleteIcon from "@mui/icons-material/Delete";
import VisibilityIcon from "@mui/icons-material/Visibility";

const Profile = () => {
  const data = [
    {
      id: 1,
      name: "Atomic Habits",
      group: "book",
      date: new Date(),
    },

    {
      id: 2,
      name: "Avengers EndGame",
      group: "movie",
      date: new Date(),
    },

    {
      id: 3,
      name: "The power of Habit",
      group: "book",
      date: new Date(),
    },

    {
      id: 4,
      name: "Archery 2",
      group: "game",
      date: new Date(),
    },
  ];
  const columns = [
    {
      field: "id",
      headerName: "ID",
      flex: 0.5,
    },
    {
      field: "name",
      headerName: "Review Name",
      flex: 1,
    },
    {
      field: "date",
      headerName: "Review Date",
      flex: 1,
    },
    {
      field: "group",
      headerName: "Group",
      flex: 1,
    },
    {
      field: "actions",
      headerName: "Actions",
      flex: 1.5,
      sortable: false,
      renderCell: () => (
        <Box display="flex" gap={1}>
          <Button
            size="small"
            variant="outlined"
            startIcon={<VisibilityIcon />}
            color="secondary"
          >
            Read
          </Button>
          <Button
            size="small"
            variant="outlined"
            startIcon={<EditIcon />}
            color="success"
          >
            Edit
          </Button>
          <Button
            size="small"
            variant="outlined"
            startIcon={<DeleteIcon />}
            color="error"
          >
            Delete
          </Button>
        </Box>
      ),
    },
  ];

  const CustomToolbar = () => (
    <GridToolbarContainer>
      <GridToolbarColumnsButton />
      <GridToolbarFilterButton />
      <GridToolbarDensitySelector />
    </GridToolbarContainer>
  );

  const theme = useTheme();

  return (
    <>
      <Title variant="h5">Profile</Title>
      <Button
        LinkComponent={Link}
        to="/create-review"
        variant="text"
        size="small"
        sx={{ mb: 1 }}
      >
        Create Review
      </Button>

      <Box
        sx={{
          "& .MuiDataGrid-root": {
            border: `2px solid ${theme.palette.primary.main}`,
          },
          "& .MuiDataGrid-row > div, .MuiDataGrid-columnHeaders, .MuiDataGrid-toolbarContainer":
            {
              borderBottom: `2px solid ${theme.palette.primary.main} !important`,
            },
          "& .MuiDataGrid-footerContainer": {
            borderTop: "none",
          },
          "& .MuiDataGrid-columnHeader:not(:last-child), .MuiDataGrid-cell:not(:last-child)":
            {
              borderRight: `2px solid ${theme.palette.primary.main}`,
            },
        }}
      >
        <DataGrid
          rows={data}
          columns={columns}
          pageSizeOptions={[20, 50, 100]}
          components={{ Toolbar: CustomToolbar }}
          autoPageSize={false}
        />
      </Box>
    </>
  );
};

export default Profile;
