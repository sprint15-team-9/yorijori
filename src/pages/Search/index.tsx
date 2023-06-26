import { useState } from 'react';
import SearchContents from '../../components/Search/SearchContents';
import SearchForm from '../../components/Search/SearchForm';

export default function Search() {
  const [inputValue, setInputValue] = useState('');

  return (
    <>
      <SearchForm inputValue={inputValue} setInputValue={setInputValue} />
      <SearchContents />
    </>
  );
}
