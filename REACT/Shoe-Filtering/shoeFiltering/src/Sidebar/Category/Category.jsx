import './Category.css'
import Input from '../../components/Input'

function Category({handleChange}) {
  return (
    <div>
        <h2 className='sidebar-title'>Category</h2>
        <div>
            <label className='sidebar-label-container'>
                <input type="radio" onChange={handleChange} />
                <span className='checkmark'></span>All
            </label>
        <Input
        handleChange={handleChange}
        value="sneakers"
        title="Sneakers"
        name= "test"
        /> 
        <Input
        handleChange={handleChange}
        value="sneakers"
        title="Sneakers"
        name= "test"
        /> 
        <Input
        handleChange={handleChange}
        value="flats"
        title="Flats"
        name= "test"
        /> 
        <Input
        handleChange={handleChange}
        value="sandals"
        title="Sandals"
        name= "test"
        /> 
        <Input
        handleChange={handleChange}
        value="hills"
        title="Hills"
        name= "test"
        /> 

            
        </div>
    </div>
  )
}

export default Category