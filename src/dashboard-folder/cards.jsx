import './cards.scss';
import FormSection from './form';
function CardsSection(){
    return(
        <div>
        <div className="cards-profile demo">
            <div className="cards"></div>
            <div className="cards"></div>
            <div className="cards"></div>
            <div className="cards"></div>
            <div className="cards"></div>
            <div className="cards"></div>
            <div className="cards"></div>
            <div className="cards"></div>
        </div>
        <div>
            <FormSection />
        </div>
        </div>
    )
}
export default CardsSection;