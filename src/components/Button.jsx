import PropTypes from 'prop-types'

const Button = ({ color, text, onClick }) => {

    return (
        <div>
            <button onClick={onClick} style={{ backgroundColor: color }} className="text-white rounded-lg m-1 text-sm py-2.5 px-5">{text}</button>
        </div>
    )
}

Button.propTypes = {
    color: PropTypes.string,
    text: PropTypes.string,
    onClick: PropTypes.func
};

export default Button
