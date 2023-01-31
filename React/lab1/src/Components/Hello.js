import './style.css'
import image from '../char.jpg'
function Hello(){
    return (
        <div className='hello'>

            <img src={image} alt="" />
            <br />
            <h3 className='fw-bold  text-center'>Hello</h3>
        </div>
    )

}
export default Hello;