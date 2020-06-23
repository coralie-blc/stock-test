import React from 'react';
import base from '../table/table';

const Position = ({ position }) => {
  console.log(position);

  // Je map pour afficher mon "background" : les colonnes, puis les rectangles de chacune.
  // Je leur attribue un ix en key (unique)
  // Puis, lignes 19 à 22 : je modifie la class selon un ternaire:
  // si 'position' (qui est la case où se trouve l'objet) est === au rectangle
  // la class sera Lettre-column ET 'here'
  // sinon, la class de base sera Lettre-column
  // Dans chaque rectangle, j'affiche le nom de celui ci, que je transforme en majuscules.
  return <div>
    <div className="background">
      {base.map((rectangles, ix) => {
        return (
          <div key={ix} className="column">
            {rectangles.map((rectangle, ix) => {
              return (
                <div
                key={ix}
                className={
                  position === rectangle
                  ? rectangle.charAt(0) + "-column here"
                  : rectangle.charAt(0) + "-column"
                }
                >
                  {rectangle.toUpperCase()}
                </div>
              );
            })}
          </div>
        );
      })}
    </div>
  </div>
}

export default Position;
