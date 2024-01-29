import './Steper.css'

const Stepper = () => {

  return (
    <>
  <div className='Stepper_Horizontal' style={{ width: '100%', height: '100%', paddingRight: 16, alignItems: 'flex-start', gap: 16, display: 'inline-flex' }}>
            <div style={{ justifyContent: 'flex-start', alignItems: 'flex-start', gap: 16, display: 'flex' }}>
                <div style={{ width: 24, height: 24, position: 'relative' }}>
                    <div style={{ width: 24, height: 24, left: 0, top: 0, position: 'absolute', background: '#4F4FFF', borderRadius: 9999 }} />
                    <div style={{ width: 8, left: 8, top: 4, position: 'absolute', textAlign: 'center', color: 'white', fontSize: 12, fontWeight: '700', letterSpacing: 0.40, wordWrap: 'break-word' }}>1</div>
                </div>
                <div style={{ color: '#141938', fontSize: 16, fontWeight: '700', letterSpacing: 0.20, wordWrap: 'break-word' }}>
                    Planes y coberturas
                </div>
            </div>
            <div style={{ height: 24, paddingTop: 12, paddingBottom: 12, flexDirection: 'column', justifyContent: 'center', alignItems: 'center', gap: 10, display: 'inline-flex' }}>
                <div style={{ width: 32, flex: '1 1 0', border: '2px #4F4FFF dotted' }}></div>
            </div>
            <div style={{height: '100%', paddingRight: 16, justifyContent: 'flex-start', alignItems: 'flex-start', gap: 16, display: 'inline-flex'}}>
            
            <div style={{justifyContent: 'flex-start', alignItems: 'flex-start', gap: 16, display: 'flex'}}>
            <div style={{width: 24, height: 24, position: 'relative'}}>
            <div style={{width: 24, height: 24, left: 0, top: 0, position: 'absolute', borderRadius: 9999, border: '1px #7981B2 solid'}} />
            <div style={{width: 8, left: 8, top: 4, position: 'absolute', textAlign: 'center', color: '#7981B2', fontSize: 12, fontWeight: '700', letterSpacing: 0.40, wordWrap: 'break-word'}}>2</div>
            </div>
            <div style={{color: '#7981B2', fontSize: 16, fontWeight: '400', letterSpacing: 0.20, wordWrap: 'break-word'}}>Resumen</div>
            </div>
            </div>
  </div>
    </>
  );
};
export default Stepper;



