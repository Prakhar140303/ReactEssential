import './Navbar.css'
import PropTypes from 'prop-types'
function Navbar(props){
    return(
            <>
                <h1>{props.title}</h1>
                <h1>Mango</h1>
            </>
    );
};
Navbar.propTypes = { 
    title: PropTypes.string.isRequired
};
 
export default Navbar;