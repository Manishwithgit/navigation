import {useState} from 'react';
import { BsCaretLeft, BsCaretDown } from 'react-icons/bs'

function Accordion({items}){
    const [expandedIndex, setExpandedIndex] = useState(-1);

    const handleClick = (nextIndex) => {
        setExpandedIndex ((currentExpandedIndex) => {
            if (currentExpandedIndex === nextIndex) {
                return -1;
            }else{
                return nextIndex;
            }
        });
        // console.log(expandedIndex);

        // if (expandedIndex === nextIndex){
        //     setExpandedIndex(-1);
        // }else{

        //     setExpandedIndex(nextIndex);
        // }

    };

    const renderItem=items.map((item, index)=>{
        // if(index === expandedIndex){
        //     console.log('expanded')
        // } else {
        //     console.log('collapsed')
        // }
        const isExpanded = index === expandedIndex;
        // console.log(isExpanded);
        // const handleClick = () => {
        //     setExpandedIndex(index);

        // };

        const icon = (
            <span className='text-3xl'>
             {isExpanded ? <BsCaretDown/> :<BsCaretLeft />}
            </span>
        )

        return (
            <div key={item.id}>
                <div className='flex justify-between p-3 bg-gray-100 border-b items-center cursor-pointer'
                //  onClick={(handleClick)=> {
                //     console.log(index);
                //  setExpandedIndex(index);
                //   }}
                onClick={()=>handleClick(index)}
                >
                  {item.label}
                    {icon}
                 </div>
                {/* <div>{item.content}</div> */}
                {isExpanded && <div className='border-b p-5'>{item.content}</div>}
            </div>
        );
    });



    return <div className='border-x border-t rounded'>{renderItem}</div>
}

export default Accordion;