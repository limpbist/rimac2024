import { Link } from 'react-router-dom';
import usePlans from '../../../hooks/usePlans';
import './CardsListComponent.css';
import { useDispatch, useSelector } from 'react-redux';
import { changeEmail, getPlans } from '../../../redux/userSlice';

function CardsListComponent() {
    const dispatch = useDispatch();
    const dataPlansAndCoverage = useSelector((state) => state.user.email)

    const {plan} = usePlans();
 
    const {list} = plan;

    const handleClick = (data) => {
        dispatch(getPlans(data))
    }
    return (
        <div className='CardListBox'> 
        {
            list?.map((item) => {
                return(
                <div className='CardListPrincipal'>
                    <div>
                        <p className='titleListPrincipal'>{item.name}</p>
                        <img src='assets/icon_homeLight.svg' />
                        <div>
                            <p className='titleListPrice'>COSTO DEL PLAN</p>
                            <p className='titleListPriceBefore'>${item.price} antes</p>
                            <p className='titleListPriceNow'>${item.price - item.price*(5/100)} al mes</p>
                        </div>
                    </div>
                    <img src='assets/icon_lineDefault.svg' />
                    <div className=''>
                        {item?.description.map((list) => {
                            return (
                                <ul>
                                <li>{list}</li>
                                </ul>
                            )
                        })}
                    </div>

                    <div className='CardListSecondary'>
                    <Link to={'/ResumenDelSeguro'}>
                    <button onClick={()=>handleClick(item)}className='buttonCardList'>
                    <p className='textButtonCardList'>Seleccionar Plan</p>
                    </button>
                    </Link>

                    </div>
                </div>
                )}
            )

            
        }

        </div>
    )






    // return (
    //     <div className='CardListBox'>


    //         <div className='CardListPrincipal'>
    //             <div>
    //                 <p className='titleListPrincipal'>Plan en Casa y Clinica</p>
    //                 <img src='assets/icon_hospitalLight.svg' />
    //                 <div>
    //                     <p className='titleListPrice'>COSTO DEL PLAN</p>
    //                     <p className='titleListPriceBefore'>$99 antes</p>
    //                     <p className='titleListPriceNow'>$94.05 al mes</p>
    //                 </div>
    //             </div>
    //             <img src='assets/icon_lineDefault.svg' />
    //         </div>

    //         <div className='CardListPrincipal'>
    //             <div>
    //                 <p className='titleListPrincipal'>Plan en Casa + Chequeo</p>
    //                 <img src='assets/icon_homeLight.svg' />
    //                 <div>
    //                     <p className='titleListPrice'>COSTO DEL PLAN</p>
    //                     <p className='titleListPriceBefore'>$49 antes</p>
    //                     <p className='titleListPriceNow'>$46.55 al mes</p>
    //                 </div>
    //             </div>
    //             < img src='assets/icon_lineDefault.svg' />
    //         </div>
    //     </div>
    // )
}

export default CardsListComponent;