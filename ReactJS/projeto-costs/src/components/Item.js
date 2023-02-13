import PropTypes from 'prop-types'

function Item({marca, anoLancamento}){
  return(
    <>
        <li>
            {marca} - {anoLancamento}
        </li>
    </>
  )
}

Item.prototype = {
    marca: PropTypes.string.isRequired,
    anoLancamento: PropTypes.number.isRequired
}

Item.defaultProps = {
    marca: "Faltou a marca",
    anoLancamento: 0
}

export default Item