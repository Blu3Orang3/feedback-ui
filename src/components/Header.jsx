import PropTypes from 'prop-types';


function Header({bgColor, textColor, txt}) {
  const headerStyles = {
    backgroundColor:bgColor,
    color:textColor
  }

  return (
    <>
      <header style={headerStyles}>
        <div className="container">
          <h2>{txt}</h2>
        </div>
      </header>
    </>
  )
}

Header.defaultProps = {
  txt: 'Feedback UI',
  bgColor: 'rgba(0,0,0,0.4)',
  textColor: '#ff6a95'
}

Header.propTypes = {
  txt: PropTypes.string,
  bgColor: PropTypes.string,
  textColor: PropTypes.string
}

export default Header;
