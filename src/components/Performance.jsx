import { React, useState, useEffect } from "react";
import { userService } from "../_services/userService.js";
import { ResponsiveContainer, RadarChart, PolarGrid, PolarAngleAxis, Radar } from "recharts";

export default function Performance({ id, isMocked }) {
  const [data, setData] = useState(null);

  useEffect(() => {
    userService.getPerformance(setData, id, isMocked);
  }, [setData, id, isMocked]);

  return (
    <div className="performance">
      {data && (
        <div style={{ width: 258, height: 263 }}>
          <ResponsiveContainer width="100%" height="100%">
            <RadarChart cx="50%" cy="50%" outerRadius="65%" data={data.data}>
              {/* pass the props data(array of objects) to RadarChart */}
              <PolarGrid gridType="polygon" radialLines={false} />
              <PolarAngleAxis dataKey="kind" stroke="white" tickLine={false} axisLine={false} tick={{ fontSize: 10 }} />
              <Radar dataKey="value" stroke="#FF0101" fill="#FF0101" fillOpacity={0.7} />
            </RadarChart>
          </ResponsiveContainer>
        </div>
      )}
    </div>
  );
}

// ### Composants Recharts utilisés :

// 1. **`ResponsiveContainer`** :
//    - Ajuste automatiquement la taille du graphique en fonction de la taille du parent.
//    - `width`: Largeur du conteneur.
//    - `height`: Hauteur du conteneur.

// 2. **`RadarChart`** :
//    - `cx`: Coordonnée x du centre du graphique.
//    - `cy`: Coordonnée y du centre du graphique.
//    - `outerRadius`: Rayon extérieur du graphique.
//    - `data`: Les données à afficher dans le graphique.

// 3. **`PolarGrid`** :
//    - `gridType`: Type de grille (`polygon` dans ce cas).
//    - `radialLines`: Affiche ou masque les lignes radiales de la grille.

// 4. **`PolarAngleAxis`** :
//    - `dataKey`: La clé dans les données correspondant à l'axe des angles.
//    - `stroke`: Couleur de la ligne de l'axe des angles.
//    - `tickLine`: Affiche ou masque les lignes de repère des étiquettes.
//    - `axisLine`: Affiche ou masque la ligne de l'axe des angles.
//    - `tick`: Propriétés de style des étiquettes.

// 5. **`Radar`** :
//    - `dataKey`: La clé dans les données correspondant à la série radar.
//    - `stroke`: Couleur de la ligne radar.
//    - `fill`: Couleur de remplissage de la zone radar.
//    - `fillOpacity`: Opacité du remplissage de la zone radar.

// ### Remarques supplémentaires :

// - Les données utilisées dans le graphique (`data.data`) doivent avoir une structure spécifique avec des propriétés `kind` pour l'axe des angles et `value` pour les valeurs de la série radar.

// - Le composant `PolarGrid` est configuré pour afficher une grille polygonale sans lignes radiales.

// - `PolarAngleAxis` est utilisé pour définir l'axe des angles et styliser les étiquettes.

// - `Radar` représente la série radar avec une ligne de contour (`stroke`) et une zone de remplissage (`fill`) pour chaque point de données.

// - La couleur de la ligne radar et de la zone de remplissage est définie en utilisant `stroke` et `fill`.

// - `fillOpacity` est utilisé pour définir l'opacité de la zone de remplissage.

// - Le composant `ResponsiveContainer` est utilisé pour garantir que le graphique est réactif et s'adapte à la taille de son conteneur parent.
