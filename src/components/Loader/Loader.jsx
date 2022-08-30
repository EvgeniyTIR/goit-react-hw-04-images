import { SCLoader } from './Loader.styled';
import { FidgetSpinner } from 'react-loader-spinner';

const Loader = () => (
  <SCLoader>
    <FidgetSpinner
      visible={true}
      height="180"
      width="180"
      ariaLabel="dna-loading"
      wrapperStyle={{}}
      wrapperClass="dna-wrapper"
      ballColors={['#ff0000', '#00ff00', '#fbff00']}
      backgroundColor="#5353cc"
    />
  </SCLoader>
);

export default Loader;
