import Accordion from './components/Accordion';

function App(){
  const items=[
    {
      id:'0a',
      label:'Can i use react on a project 01',
      content:'yes, you can use react on any project as you want.yes, you can use react on any project as you want.yes, you can use react on any project as you want.yes, you can use react on any project as you want'
    },
    {
      id:'1a',
      label:'can i use javascript on a project 02',
      content:'yes, you can use react on any project as you want'

    },
    {
      id:'2a',
      label:'can i use css on a project 03',
      content:'yes, you can use react on any project as you want'

    }

  ];
  // function myFunction(items, expandedIndex){
  //   return items.map((item, index)=>{
  //     if(index === expandedIndex){
  //       return 'Expanded!'
  //     } else{
  //       return 'Collapsed'
  //     }
  //   })

  // }
  // myFunction(propsItems, 0); // expanded collapsed collapsed
  // myFunction(propsItems, 2); // collapsed collapsed expanded 


  return <Accordion items={items} />
}

export default App;