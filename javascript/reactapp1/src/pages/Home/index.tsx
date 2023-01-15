import React from 'react';
import { PublicApiList } from '../../components/PublicApiList';
import { PublicApiSearcher } from '../../components/PublicApiSearcher';
import { PublicApiStatus } from '../../components/PublicApiStatus';
import { PublicApi } from '../../models/PublicApi';


export default function Home() {

  const [items, setItems] = React.useState<PublicApi[]>([]);

  return (
    <div className='page'>
      <PublicApiSearcher onSearch={(value) => {
        //console.log('value:', value)
        setItems(value)
      }} />
      <PublicApiStatus count={items?.length} />
      <PublicApiList items={items} />
    </div>
  );

}
