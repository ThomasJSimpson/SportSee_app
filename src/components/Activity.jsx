import { React, useEffect, useState } from "react";
import { userService } from "../_services/userService.js";
import { CartesianGrid, XAxis, YAxis, Tooltip, ResponsiveContainer, Legend, BarChart, Bar } from "recharts";

export default function Activity({ id, isMocked }) {
  const [data, setData] = useState(null);

  useEffect(() => {
    userService.getActivity(setData, id, isMocked);
  }, [setData, id, isMocked]);

  const renderTooltip = ({ payload, active }) => {
    return (
      active && (
        <ul className="tooltip">
          {payload.map((entry, index) => (
            <li key={index}>{entry.value + entry.unit}</li>
          ))}
        </ul>
      )
    );
  };

  const renderLegend = (payload) => {
    return (
      <div className="legend">
        <h3>Activité quotidienne</h3>
        <ul className="legend-list">
          {payload.payload.map((entry, index) => (
            <li key={index} className="legend-item">
              {entry.value}
            </li>
          ))}
        </ul>
      </div>
    );
  };
  return (
    <div className="activity">
      {data && (
        <div className="barChart">
          <ResponsiveContainer width="100%" height="100%">
            <BarChart data={data.sessions} barGap={8} barCategoryGap={1}>
              <CartesianGrid vertical={false} strokeDasharray="1 1" />

              <XAxis dataKey="day" className="xAxis" tickLine={false} stroke="#9b9eac" dy={14} />

              <YAxis dataKey="kilogram" yAxisId="kilogram" domain={[(dataMin) => Math.floor(dataMin - 1), (dataMax) => Math.round(dataMax + 1)]} className="yAxis" axisLine={false} tickLine={false} interval={0} allowDecimals={false} orientation="right" stroke="#9b9eac" dx={31} />

              <YAxis dataKey="calories" yAxisId="calories" domain={[0, (dataMax) => Math.round(dataMax + 25)]} hide />

              <Tooltip wrapperStyle={{ outline: "none" }} content={renderTooltip} />

              <Legend verticalAlign="top" content={renderLegend} />

              <Bar dataKey="kilogram" unit="kg" yAxisId="kilogram" className="bar kilogram" name="Poids (kg)" fill="#282D30" barSize={7} radius={[3, 3, 0, 0]} />

              <Bar dataKey="calories" unit="kCal" yAxisId="calories" className="bar calories" name="Calories brûlées (kCal)" fill="#E60000" barSize={7} radius={[3, 3, 0, 0]} />
            </BarChart>
          </ResponsiveContainer>
        </div>
      )}
    </div>
  );
}

// ### Composants Recharts utilisés :

// 1. **`ResponsiveContainer`** :
//    - **Propriétés :**
//      - Aucune propriété spécifique n'est utilisée ici. `ResponsiveContainer` ajuste automatiquement sa taille en fonction de la taille du parent.

// 2. **`BarChart`** :
//    - **Propriétés :**
//      - `data`: Les données à afficher dans le graphique.
//      - `barGap`: L'espace entre les barres.
//      - `barCategoryGap`: L'espace entre les catégories de barres.

// 3. **`CartesianGrid`** :
//    - **Propriétés :**
//      - `vertical`: Si la grille est verticale ou non.
//      - `strokeDasharray`: Le motif de pointillés de la grille.

// 4. **`XAxis`** :
//    - **Propriétés :**
//      - `dataKey`: La clé dans les données correspondant à l'axe X.
//      - `className`: Classe CSS pour personnaliser le style.
//      - `tickLine`: Affiche ou masque les lignes de repère.
//      - `stroke`: Couleur de la ligne de l'axe X.
//      - `dy`: Déplacement vertical des étiquettes.

// 5. **`YAxis`** :
//    - **Propriétés :**
//      - `dataKey`: La clé dans les données correspondant à l'axe Y.
//      - `yAxisId`: Identifiant de l'axe Y (utile lorsque plusieurs axes Y sont utilisés).
//      - `domain`: La plage de valeurs de l'axe Y.
//      - `className`: Classe CSS pour personnaliser le style.
//      - `axisLine`: Affiche ou masque la ligne de l'axe.
//      - `tickLine`: Affiche ou masque les lignes de repère.
//      - `interval`: Intervalle entre les étiquettes.
//      - `allowDecimals`: Permet ou non les valeurs décimales.
//      - `orientation`: Orientation de l'axe.
//      - `stroke`: Couleur de la ligne de l'axe Y.
//      - `dx`: Déplacement horizontal des étiquettes.

// 6. **`Tooltip`** :
//    - **Propriétés :**
//      - `wrapperStyle`: Style pour le conteneur de l'infobulle.
//      - `content`: Fonction de rendu personnalisée pour l'infobulle.

// 7. **`Legend`** :
//    - **Propriétés :**
//      - `verticalAlign`: Alignement vertical de la légende.
//      - `content`: Fonction de rendu personnalisée pour la légende.

// 8. **`Bar`** :
//    - **Propriétés :**
//      - `dataKey`: La clé dans les données correspondant à la série de barres.
//      - `unit`: Unité de la série de barres.
//      - `yAxisId`: Identifiant de l'axe Y auquel la série de barres appartient.
//      - `className`: Classe CSS pour personnaliser le style.
//      - `name`: Nom de la série de barres.
//      - `fill`: Couleur de remplissage des barres.
//      - `barSize`: Taille des barres.
//      - `radius`: Rayon des coins des barres.

// ### Fonctions de rendu personnalisées :

// 1. **`renderTooltip`** :
//    - **Paramètres :**
//      - `payload`: Données de la barre survolée.
//      - `active`: Indique si l'infobulle est active ou non.
//    - **Rôle :**
//      - Renvoie une liste stylisée des valeurs de la barre survolée.

// 2. **`renderLegend`** :
//    - **Paramètres :**
//      - `payload`: Données de la légende.
//    - **Rôle :**
//      - Renvoie une liste stylisée des noms de séries de barres pour la légende.

// Ces fonctions de rendu personnalisées sont utilisées pour personnaliser l'apparence de l'infobulle (`Tooltip`) et de la légende (`Legend`). Vous pouvez ajuster ces fonctions en fonction de vos besoins spécifiques de conception.
