import SearchIcon from "@mui/icons-material/Search";
import { Search, SearchIconWrapper, StyledInputBase } from "./style";

const SearchBar = () => {
  const handleSubmit = (e) => {
    e.preventDefault();
  };
  return (
    <Search component="form" onSubmit={handleSubmit}>
      <StyledInputBase
        type="search"
        placeholder="Search…"
        inputProps={{ "aria-label": "search" }}
      />
      <SearchIconWrapper>
        <SearchIcon />
      </SearchIconWrapper>
    </Search>
  );
};

export default SearchBar;
