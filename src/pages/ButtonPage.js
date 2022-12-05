import { MdEco, MdChat, MdClearAll, MdHourglassTop, MdCode} from 'react-icons/md';
import Button from '../components/Button';

function ButtonPage() {
  const handleClick = () => {
    console.log('clicked!');
  };
  return (
    <div>
      <div>
        <Button   
          primary 
          rounded 
          outline
          className='mb-5' 
          onClick={handleClick} 
        >
        <MdEco className='mr-1' />
        Click me!!
        </Button>
      </div>
      <div>
        <Button danger outline onMouseEnter={handleClick} >
        <MdHourglassTop className='mr-1' />
        Buy Now!
        </Button>
      </div>
      <div>
        <Button secondary >
        <MdChat className='mr-1' />
        See Deal!</Button>
      </div>
      <div>
        <Button success outline >
        <MdClearAll className='mr-1' />
        Hide Ads!</Button>
      </div>
      <div>
        <Button warning>
        <MdCode className='mr-1'/>
        Something!</Button>
      </div>
    </div>
  );
}

export default ButtonPage;