import React from 'react';
import { Jumbotron, Button } from 'reactstrap';

const NoMatchPage = (props) => {
  return (
    <div>
      <Jumbotron>
        <h1 className="display-3">Nem található a keresett oldal!</h1>
        <p className="lead">Sajnáljuk, de az ön által keresett oldal nem elérhető, vagy olyan címet adott meg, ahol nem is volt tartalom.</p>
        <p className="lead">
          <a href="/"><Button color="primary">Vissza a főoldalra</Button></a>
        </p>
      </Jumbotron>
    </div>
  );
};

export default NoMatchPage;