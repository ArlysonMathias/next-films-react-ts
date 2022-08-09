import { InputHTMLAttributes } from 'react';
import { BsSearch } from 'react-icons/bs';
import * as Styled from "./style";

interface SearchListProps  extends InputHTMLAttributes<HTMLInputElement> {
  searchInputValue: string,
  handleSearchInputChange: (event: React.ChangeEvent<{value: string}>) => void
}
const Search = ({searchInputValue, handleSearchInputChange}: SearchListProps) => {

  
  return (
    <Styled.Search>
      <Styled.SearchInput value={searchInputValue} onChange={handleSearchInputChange} type="text" placeholder="Search..." />
      <Styled.SearchA><i><BsSearch/></i></Styled.SearchA>
    </Styled.Search>
  );
};

export default Search;
