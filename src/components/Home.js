import React from 'react';
import { Link } from "react-router-dom";

const Home = () => {

  return (
    <>
      <main role="main" className="container">
        <div className="m-5 text-center">
          <p>Vous avez un QCM à faire cliquez <Link to="/qcm">ici</Link> ou dans le menu <Link to="/qcm">QCM</Link> pour commencer.</p>
        </div>
      </main>
    </>
  )
}
export default Home;