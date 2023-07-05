import Spinner from 'react-bootstrap/Spinner';

function Loading() {
  return (
    <Spinner animation="grow" role="status" className='loading' variant='light'/>
  );
}

export default Loading;