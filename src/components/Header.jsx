import PropTypes from 'prop-types';
import Button from './Button';

const Header = ({ title, onAdd, showAdd }) => {

  return (
    <header className="flex justify-between items-center mb-5 text-2xl font-bold">
        <h1>{title}</h1>
       {<Button color={showAdd ? 'red' : 'green'} text={showAdd ? 'Cerrar' : 'Agregar'} onClick={onAdd} />}
    </header>
  )
}

Header.defaultProps = {
    title: 'Recordatorios'
}

Header.propTypes = {
    title: PropTypes.string.isRequired,
    onAdd: PropTypes.func,
    showAdd: PropTypes.func
  };

  //CSS IN JSX

  /*const headingStyle = {
    color: 'red',
    backgroundColor: 'black'
  }*/

export default Header


