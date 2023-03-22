import Button from './Button';

const ButtonList = () => {

    const data = ['All', 'Music', 'Mixes', 'Stocks', 'Gadgets', 'Live', 'Animations', 'JobInterviews', 'Technology', 'Science', 'Programming']

  return (
    <div className='flex pl-7 bg-white w-[81rem]'>
        {
            data.map((button, index) => {
                return (<Button key={index} name={button}></Button>)
            })
        }
    </div>
  )
}

export default ButtonList