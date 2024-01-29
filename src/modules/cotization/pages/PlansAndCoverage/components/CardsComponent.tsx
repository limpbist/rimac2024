import { Link } from 'react-router-dom';
import useUser from '../../../hooks/useUser';
import './CardsComponents.css';
import { useDispatch } from 'react-redux';
import { getUser } from '../../../redux/userSlice';

function CardsComponent() {
    const dispatch = useDispatch();

    const {user} = useUser();

    const { name } = user;

    const handleClick = () => {
        console.log('Click Volver')
     }
     
     dispatch(getUser(user))

     return (
    <>
        <div>
            <div>
                <img src="assets/icon_back.svg" />
                <img src="assets/icon_circle.svg" />
            </div>
            <Link to={'/'}>
            <a href='' onClick={handleClick}>Volver</a>
            </Link>
        </div>

        <div>
            <div className='titleCards'>
                <p>{name}¿Para quién deseas cotizar?</p>
            </div>
            <div className='subTitleCards'>
                <p>Selecciona la opción que se ajuste más a tus necesidades.</p>
            </div>
        </div>

        <div className="Principal">
            <div className="Secondary">
                <img src='assets/icon_checkBox.svg' />
                <img className="icon_protectionLight" src='assets/icon_protectionLight.svg' />
                <p className='titlePrincipalCards'>Para mi</p>
                <p className='descripcionPrincipalCards'>Cotiza tu seguro de salud y agrega familiares si así lo deseas.</p>
            </div>
            <div className="Secondary">
                <img src='assets/icon_checkBox.svg' />
                <img className="icon_addUserLight" src='assets/icon_addUserLight.svg' />
                <p className='titlePrincipalCards'>Para alguien mas</p>
                <p className='descripcionPrincipalCards'>Realiza una cotización para uno de tus familiares o cualquier persona.</p>
            </div>
        </div>
    </>
    )
}

export default CardsComponent;