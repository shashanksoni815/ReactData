import { NavLink } from "react-router-dom";
import React from 'react';

function Navii() {
    return (
        <>
            <nav className="navbar navbar-expand-lg navbar-light bg-secondary">
            <div className="container-fluid mx-2">
                <a className="navbar-brand" href="#">Topics</a>
                <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNavAltMarkup" aria-controls="navbarNavAltMarkup" aria-expanded="false" aria-label="Toggle navigation">
                <span className="navbar-toggler-icon"></span>
                </button>
                <div className="collapse navbar-collapse" id="navbarNavAltMarkup">
                <div className="navbar-nav fs-6 ">
                    <a className="nav-link active mx-2" aria-current="page" href='/age' >Age</a>
                    <a className="nav-link active mx-2" aria-current="page" href='/calenders' >Calendar</a>
                    <a className="nav-link active mx-2" aria-current="page" href='/profitLoss' >Profit & Loss</a>
                    <a className="nav-link active mx-2" aria-current="page" href='/speedDistanceTime' >Speed, Distance & Time </a>
                    <a className="nav-link active mx-2" aria-current="page" href='/simpleInterst' >Simple Interest</a>
                    <a className="nav-link active mx-2" aria-current="page" href='/mixtureAlligation' >Mixture & Alligation</a>
                    <a className="nav-link active mx-2" aria-current="page" href='/pipesCiserns' >Pipes & Cisterns</a>
                    <a className="nav-link active mx-2" aria-current="page" href='/permutationCombination' >Permutation & Combination</a>
                    <a className="nav-link active mx-2" aria-current="page" href='/random' >Random</a>
                </div>
                </div>
            </div>
            </nav>
        </>
     );
}

export default Navii;