import nino from './nino.jpg'
const Header = () => {
    <link rel="stylesheet" href="https://cdn.jsdelivr.net/npm/bootstrap@4.4.1/dist/css/bootstrap.min.css" integrity="sha384-Vkoo8x4CGsO3+Hhxv8T/Q5PaXtkKtu6ug5TOeNV6gBiFeWPGFN9MuhOf23Q9Ifjh" crossorigin="anonymous"></link>
    return (
        
        <header>
            <nav>
                <ul class="list-group">
                    <li class="list-group-item">
                        <a href="/">Home</a>
                    </li>
                    <li class="list-group-item">
                        <a href="/about">About</a>
                    </li>
                </ul>
            </nav>
            <img width={100} height={100} src={nino} alt=""/>
            <p>1985</p>
            <br></br>
        </header>
    );
}

export default Header;