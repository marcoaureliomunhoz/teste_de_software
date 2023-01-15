import React from 'react';
import { PublicApi } from '../../models/PublicApi';
import { publicApiService } from '../../services/PublicApiService';

interface IProps {
  onSearch?: (list: PublicApi[]) => void;
}

function PublicApiSearcher({
  onSearch
}: IProps) {

  const [value, setValue] = React.useState<string>('');

  return (
    <div style={{display:'flex', flexDirection:'column', alignItems:'center'}}>
      <h1>Public API Searcher</h1>
      <div style={{width:'100%'}}>
        <input 
          type='text'
          defaultValue={value}
          value={value}
          onChange={(event) => setValue(event.target.value)}
          style={{padding:'8px 8px', border:'1px solid #888', borderRadius:'5px', width:'100%'}}
        />
      </div>
      <div style={{margin:'10px 0px'}}>
        <button className='btn btn-primary' onClick={search}>Search</button>
        <button className='btn' onClick={clear}>Clear</button>
      </div>
    </div>
  );

  async function search() {
    if (!value) return;
    const response = await publicApiService.getEntries(value);
    //console.log('---- search response: ', response);
    onSearch && onSearch(response);
  }

  function clear() {
    setValue('');
    onSearch && onSearch([]);
  }
}

export { PublicApiSearcher };
