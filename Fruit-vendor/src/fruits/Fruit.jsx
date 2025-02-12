import './Fruit.css'
import PropTypes from 'prop-types'
function Fruit(props){
    return(
        <div className="fruit">
            <h1 className='name'>Name: {props.name}</h1>
            <h1 className='price'>Price: {props.price}</h1>
            <h1 className='quantity'>Quantity: {props.quantity}</h1>
        </div>
    ); 
};
Fruit.propTypes ={
    name: PropTypes.string,
    price: PropTypes.number,
    quantity: PropTypes.number
}
Fruit.defaultProps = {
    name: 'Unknown',
    price: 0,
    quantity: 0
};
export default Fruit;