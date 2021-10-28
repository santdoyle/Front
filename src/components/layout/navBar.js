import React from "react";

const NavBar = () => {
    const destroyTokeb = () => {
        localStorage.removeItem('token')
    }
    return(
        <nav className="navbar navbar-expand-lg navbar-light bg-light">
            <div className="container-fluid">
                <a className="navbar-brand" href="/">Conexa</a>
                <div className="collapse navbar-collapse" id="navbarNav">
                    <ul className="navbar-nav">
                        <li className="nav-item">
                            <a className="nav-link active" aria-current="page" href="/posts">Posts</a>
                        </li>
                        <li className="nav-item">
                            <a className="nav-link active" aria-current="page" href="/photos">Photos</a>
                        </li>
                        <li className="nav-item">
                            <button className="btn btn-outline-success" onClick={destroyTokeb}>Logout</button>
                        </li>
                    </ul>
                </div>
            </div>
            </nav>
    )
}

export default NavBar