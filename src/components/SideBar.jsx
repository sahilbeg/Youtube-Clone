import { Stack } from '@mui/material';
import { categories } from '../utils/constants';

function SideBar({selectedCategory, setSelectedCategory}) {
  return (
    <Stack direction="row"
    sx={{overflowY:"auto",height:{sx: 'auto',md:'95%',p:'20px 0px 0px'},
    flexDirection:{md:'column'},}}>
        {categories.map((category)=>(
            <button className='category-btn' 
            onClick={()=> setSelectedCategory(category.name)}
            style={{background: category.name === selectedCategory && '#7012e7', color:'white'}}
            key={category.name}>
                <span style={{marginRight:'15px',opacity : category.name === selectedCategory ? '1' : '0.8' }}>{category.icon}</span>
                <span style={{opacity : category.name === selectedCategory ? '1' : '0.8'}}>{category.name}</span>
            </button>
        ))}
    </Stack>
  )
}

export default SideBar