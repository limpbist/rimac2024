import ComponentHeader from '../../components/Header/ComponentHeader';
import Steper from '../../components/Steper/Steper';
import './InsuranceSummary.css'
import DetailSummary from './components/DetailSummary';

function InsuranceSummary () {
    return (
        <div>
            <h1>InsuranceSummary</h1>
            <ComponentHeader />
            <Steper />
            <DetailSummary />
        </div>
    )
}

export default InsuranceSummary;
