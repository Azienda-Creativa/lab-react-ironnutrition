import { Row, Input } from 'antd';
import Search from 'antd/es/transfer/search';
import { useState } from 'react';

function SearchBar({ onSearch }) {
  const [serch, setSearch] = useState('');
  const handleSearch = (value) => {
    onSearch(value);
    console.log('Search query:', value);
    setSearch();
  };

  return (
    <Row style={{ display: 'flex', justifyContent: 'center' }}>
      <Input.Search
        placeholder="Search for something"
        onSearch={handleSearch}
        style={{ width: 200 }}
      />
    </Row>
  );
}

export default SearchBar;
