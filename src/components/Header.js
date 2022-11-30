
import './header.css'

const Header = (props) => {

    return (
        <>

            <header>
                <nav>
                    <div>
                        {props.title}
                    </div>
                </nav>
            </header>

        </>

    );

}

export default Header;