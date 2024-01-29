import { useForm} from 'react-hook-form';
import './Form.css';
import { Link, Navigate, Form, useSubmit, useNavigate  } from 'react-router-dom';
import { useDispatch } from 'react-redux';
import { getPaymentResponsible } from '../../redux/userSlice';


function FormComponent () {
    const dispatch = useDispatch();
    const navigate = useNavigate();
    const { register, formState:{errors}, handleSubmit} = useForm();

    const onSubmit = (data) => {
        dispatch(getPaymentResponsible(data));
        navigate('/PlanesyCoberturas');
    }
    return (
        <div>
                <div className='headerSecurity'>
                <div className='promo'>
                <p className='text__promo'>Seguro Salud Flexible</p>
                <p className='subtitle'>Creado para ti y tu familia</p>
                </div>
                <div className='imageForm'></div>
                </div>
                <div className='description'>
                    <p>Tú eliges cuánto pagar. Ingresa tus datos, cotiza y recibe nuestra asesoría. 100% online.</p>
                </div>
            <div className='formPrincipal'>
            
            {/* <Form  onSubmit={handleSubmit(onSubmit)}> */}
            <form onSubmit={handleSubmit(onSubmit)}>
                <div className='selectIdentity'>
                    <select className='inputIdentity' {...register('identityDocument')}>
                        <option value='dni'>DNI</option>
                        <option value='ce'>C.E</option>
                        <option value='pasport'>PASAPORTE</option>
                    </select>
                    <div className='input-group'>
                    <input className='inputnumberDocument' type='text' {...register('numberDocument', {
                        required:true,
                        maxLength:8
                    })} />
                    <label className='telephone'>DNI</label>
                    {errors.numberDocument?.type === 'required' && <p>El campo numero de documento es requerido</p>}
                    {errors.numberDocument?.type === 'maxLength' && <p>El campo numero de documento debe tener 8 digitos</p>}
                    </div>
                </div>
                <div className='input-group'>
                    <input className="input" type='text' {...register('telephone', {
                        required:true,
                        maxLength:9,
                        pattern: /(9)(\d{8})/gm
                    })}/>
                    <label className='telephone'>Celular</label>
                    {errors.telephone?.type === 'required' && <p>El campo celular es requerido</p>}
                    {errors.telephone?.type === 'maxLength' && <p>El campo celular debe tener 9 digitos</p>}
                    {errors.telephone?.type === 'pattern' && <p>El campo celular no es valido</p>}
                </div>
                <div className='checkedPrincipal'>
                <div className='privacyPolicies'>
                    <input  type='checkbox' {...register('privacyPolicies', {
                        required:true
                    })} />
                    <span>Acepto la Política de Privacidad</span>
                </div>
                <div className='comercialCommunicationsPolicies'>
                    <input type='checkbox' {...register('comercialCommunicationsPolicies', {
                        required:true
                    })} />
                    <span>Acepto la Política Comunicaciones Comerciales</span>
                </div>
                <div className='termsConditionsApply'>
                    <p>Aplican Términos y Condiciones.</p>
                </div>
                </div>
                <button className='buttonPrimary' type='submit'>Cotiza aqui</button>
            </form>
            </div>
        </div>
    );
}

export default FormComponent;