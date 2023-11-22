import { React, useState, useEffect } from "react";
import { ResponsiveContainer, PolarAngleAxis, RadialBar, RadialBarChart } from "recharts";
import { userService } from "../_services/userService.js";

export default function Score({ id, isMocked }) {
  const [data, setData] = useState(null);

  useEffect(() => {
    userService.getScore(setData, id, isMocked);
  }, [setData, id, isMocked]);

  return (
    data && (
      <div className="score">
        <ResponsiveContainer width="100%" height="100%">
          <RadialBarChart cx="50%" cy="50%" innerRadius="90%" outerRadius="90%" startAngle={212} endAngle={-212} barSize={10} data={[data]}>
            <text className="title" x="0" y="7%">
              Score
            </text>

            <PolarAngleAxis type="number" domain={[0, 1]} tick={false} />
            <RadialBar dataKey="score" cornerRadius="5" fill="#ff0000" />

            <circle cx="50%" cy="50%" r="38%" fill="#fff"></circle>

            <text className="content">
              <tspan className="percent" x="38.5%" y="49%">{`${data.score * 100}%`}</tspan>
              <tspan x="36%" y="62%">
                de votre
              </tspan>
              <tspan x="37%" y="74%">
                objectif
              </tspan>
            </text>
          </RadialBarChart>
        </ResponsiveContainer>
      </div>
    )
  );
}

// ### Composants Recharts utilisés :

// 1. **`ResponsiveContainer`** :
//    - Ajuste automatiquement la taille du graphique en fonction de la taille du parent.
//    - `width`: Largeur du conteneur.
//    - `height`: Hauteur du conteneur.

// 2. **`RadialBarChart`** :
//    - `cx`: Coordonnée x du centre du graphique.
//    - `cy`: Coordonnée y du centre du graphique.
//    - `innerRadius`: Rayon intérieur du graphique.
//    - `outerRadius`: Rayon extérieur du graphique.
//    - `startAngle`: Angle de départ du graphique.
//    - `endAngle`: Angle de fin du graphique.
//    - `barSize`: Taille des barres radiales.
//    - `data`: Les données à afficher dans le graphique (tableau d'objets).

// 3. **`PolarAngleAxis`** :
//    - `type`: Type de données sur l'axe des angles.
//    - `domain`: Plage de valeurs sur l'axe des angles.
//    - `tick`: Affiche ou masque les étiquettes d'angle.

// 4. **`RadialBar`** :
//    - `dataKey`: La clé dans les données correspondant à la série de barres radiales.
//    - `cornerRadius`: Rayon de coin des barres radiales.
//    - `fill`: Couleur de remplissage des barres radiales.

// ### Remarques supplémentaires :

// - Les données utilisées dans le graphique (`[data]`) doivent être encapsulées dans un tableau d'objets.

// - Le composant `PolarAngleAxis` est configuré pour afficher un axe des angles de type nombre avec des étiquettes désactivées (`tick={false}`).

// - `RadialBar` représente la série de barres radiales avec une couleur de remplissage définie par `fill`.

// - Un cercle (`circle`) est ajouté au centre du graphique avec un rayon de 38% pour créer un espace central.

// - Des éléments `<text>` sont utilisés pour ajouter du texte personnalisé au graphique, indiquant le score et un pourcentage.

// - La couleur de remplissage du cercle central est définie en blanc (`#fff`).

// - Les pourcentages et les textes sont positionnés avec les coordonnées `x` et `y` dans le texte.

// En résumé, ce composant utilise Recharts pour créer un graphique de barres radiales réactif pour afficher un score, avec des éléments de texte pour indiquer le pourcentage du score par rapport à l'objectif. Si vous avez des questions supplémentaires ou si quelque chose n'est pas clair, n'hésitez pas à demander !
