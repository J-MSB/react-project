import './sidebar.scss';
function Sidebar(){
    return(
        <div className='side-bar-container'>
            <h4 className="menu-text">Menu</h4>
            <div className='side-bar-links'>
                <a href="#">About</a>
                <a href="#">Contact</a>
                <a href="#">News</a>
                <a href="#">Internal Page</a>
            </div>
        </div>
    )
}
export default Sidebar;