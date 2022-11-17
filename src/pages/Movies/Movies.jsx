import { Outlet } from "react-router-dom";
import { useState } from "react";
import { toast } from 'react-toastify';
import { BiSearch } from 'react-icons/bi';
import { SearchForm, SearchFormInput, FormButton } from "./Movies.styled";

export const Movies = () => {
  const [query, setQuery] = useState('');

  const handleQueryChange = e => {
    setQuery(e.currentTarget.value.toLowerCase());
  };

  const handleSubmit = e => {
    e.preventDefault();
    
    if (query.trim() === '') {
      return toast.warn('Enter your query in the search bar!');
    };    

    setQuery('');
  };
  
  return (
    <main>
      <SearchForm onSubmit={handleSubmit}>
        <SearchFormInput
          type="text"
          name="query" 
          value={query}        
          autoComplete="off"
          autoFocus
          placeholder="Search movies"
          onChange={handleQueryChange}        
        />

        <FormButton type="submit">
          <BiSearch size={24}/>
        </FormButton>
      </SearchForm>
      <Outlet/>
    </main>
  );
};