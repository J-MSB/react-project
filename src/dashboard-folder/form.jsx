import './form.scss';
function FormSection(){
    return(
        <div className='form-section'>
            <h3 className='form-submit'>Form Validation</h3>
            <h4> Username</h4>
            <input type="text" placeholder='Enter name'/>
            <h4>Password</h4>
            <input type="text" placeholder='Enter password'/>
            <div><button>submit</button></div>
        </div>
    )
}
export default FormSection;