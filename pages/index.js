import LockedPage from '../components/LockedPage';
import UnlockedPage from '../components/UnlockedPage';
import { getState } from '../components/State';
import jsHttpCookie from 'cookie';


const Index = props => {
  return (props.user ? <LockedPage/> : <UnlockedPage/>)

};

Index.getInitialProps = async ({req}) => {
  const initProps = {};
  if (req && req.headers) {
    
    const cookies = req.headers.cookie;

    if (typeof cookies === 'string') {
      const cookiesJSON = jsHttpCookie.parse(cookies);
      initProps.user = cookiesJSON.user;
    }
  }
  return initProps;
};

export default Index;
