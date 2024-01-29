import { useSelector } from 'react-redux';
import './DetailSummary.css'
import { Link } from 'react-router-dom';
function DetailSummary() {

    const data = useSelector((state:any) => state.user)
    const handleClick = () => {
        console.log('Click Volver')
     }
    return (


        <div className='DetailBoxPrimary'>
                <div>
        <div>
        <img src="assets/icon_back.svg" />
        <img src="assets/icon_circle.svg" />
        </div>
    <Link to={'/PlanesyCoberturas'}>
    <a href='' onClick={handleClick}>Volver</a>
    </Link>
    </div>
            <div className="DetailTitle">
                <p>Resumen del seguro </p>
            </div>

            <div className='DetailBoxSecondaryBox' >
                <div className='DetailBoxSecondary'>
                    <div className="DetailName">
                        <p className='DetailSubtitle'>Precios calculados para:</p>
                        <div className='DetailNamePrincipal'>
                        <img src='assets/icon_family.svg' />
                        <p>{`${data.user.name} ${data.user.lastName}`}</p>
                        </div>
                    </div>
                    <div className="DetailResponsiblePayment">
                        <p className='DetailResponsiblePaymentTitle'>Responsable de pago</p>
                        <p className='DetailResponsiblePaymentDocumentIdentity'>DNI: {data.numberDocument}</p>
                        <p className='DetailResponsiblePaymentTelephone'>Celular: {data.telephone}</p>
                    </div>
                    <div className="DetailChosenPlan">
                        <p className='DetailChosenPlanTitle'>Plan elegido</p>
                        <p className='DetailChosenPlanDescription'>{data.plans.name}</p>
                        <p className='DetailChosenPlanCost'>Costo del Plan: ${data.plans.price} al mes</p>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default DetailSummary;