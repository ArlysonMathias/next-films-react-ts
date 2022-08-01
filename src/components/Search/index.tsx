import * as Styled from "./style";
import { BsSearch } from 'react-icons/bs';

const Search = () => {
  return (
    <Styled.Search>
      <Styled.SearchInput type="text" placeholder="Search..." />
      <Styled.SearchA><i><BsSearch/></i></Styled.SearchA>
    </Styled.Search>
  );
};

export default Search;
