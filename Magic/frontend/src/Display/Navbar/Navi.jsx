function Navi() {
    return ( 
        <>
            <nav class="navbar navbar-light bg-light mx-5">
            <div class="container-fluid">
                <a class="navbar-brand">M-Cube</a>
                <form class="d-flex">
                <input class="form-control me-2" type="search" placeholder="Search" aria-label="Search" />
                <button class="btn btn-outline-success" type="submit">Search</button>
                </form>
            </div>
            </nav>
        </>
     );
}

export default Navi;
