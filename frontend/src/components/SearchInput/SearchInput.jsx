import { faMagnifyingGlass } from "@fortawesome/free-solid-svg-icons";
import { Wrapper, Input, SearchBtn, SearchIcon } from "./SearchInput.styled";

export function SearchInput(){
  return (
    <Wrapper>
      <Input/>
      <SearchBtn type="button">
      <SearchIcon icon={faMagnifyingGlass} />
      </SearchBtn>
    </Wrapper>
  );
};

