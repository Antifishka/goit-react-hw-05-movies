import { useState } from "react";
import { toast } from 'react-toastify';
import { BiSearch } from 'react-icons/bi';
import { Form, FormInput, FormButton } from "./SearchForm.styled";
import PropTypes from 'prop-types';

export const SearchForm = ({onSubmit}) => {
  const [query, setQuery] = useState('');

  const handleQueryChange = e => {
    setQuery(e.currentTarget.value.toLowerCase());
  };

  const handleSubmit = e => {
    e.preventDefault();
    
    if (query.trim() === '') {
      return toast.warn('Enter your query in the search bar!');
    };    

    onSubmit(query);
    setQuery('');
  };
  
  return (
    <>
        <Form onSubmit={handleSubmit}>
            <FormInput
            type="text"
            name="query" 
            value={query}        
            autoComplete="off"
            autoFocus
            placeholder="Search movies"
            onChange={handleQueryChange}        
            />

            <FormButton type="submit">
            <BiSearch size={23}/>
            </FormButton>
        </Form>
    </>
  );
};

SearchForm.propsType = {
  onSubmit: PropTypes.func.isRequired,
}