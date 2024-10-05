
function Fruit( {name, price, soldout, color}) {
    return (
    <>
        <li key={name}>

          {name} {price} {soldout} {color}
        </li>
    </>
)
}

export default Fruit