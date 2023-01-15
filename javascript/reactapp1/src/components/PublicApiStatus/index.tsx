
interface IProps {
  count?: number;
}

function PublicApiStatus({
  count
}: IProps) {

  return (
    <div role='status' style={{marginBottom:'10px', color:'#888'}}>
      {count && count > 0 ? `${count} api(s) found` : 'None api found'}
    </div>
  );
}

export { PublicApiStatus };
