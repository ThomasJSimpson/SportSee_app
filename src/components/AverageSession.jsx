import { React, useEffect, useState } from "react";
import { userService } from "../_services/userService.js";
import { LineChart, Line, XAxis, YAxis, Tooltip, ResponsiveContainer } from "recharts";
import { Rectangle } from "recharts";

export default function AverageSession({ id, isMocked }) {
  const [data, setData] = useState(null);
  const renderTooltip = ({ active, payload }) => {
    if (active && payload && payload.length) {
      if (payload[0].payload.day === "") {
        return null;
      }
      const sessionLength = payload[0].value;
      return (
        <div className="custom-tooltip">
          <p>{sessionLength}min</p>
        </div>
      );
    }
    return null;
  };
  const CustomCursor = ({ points, width, height }) => {
    const { x, y } = points[0];

    return <Rectangle x={x} y={y - 74} width={width} height={height + 113} fill="#000" opacity=".1" />;
  };
  const renderDot = (data) => {
    return ({ cx, cy, index }) => {
      if (index === 0 || index === 1 || index === data.length - 1 || index === data.length - 2) return null;

      return <circle cx={cx} cy={cy} r={5} fill="#fff" stroke="#fff" strokeWidth={10} strokeOpacity={0.2} />;
    };
  };

  useEffect(() => {
    userService.getAverage(setData, id, isMocked);
  }, [setData, id, isMocked]);
  return (
    <div className="average">
      {data && (
        <>
          <ResponsiveContainer width="100%" height="100%">
            <LineChart data={data.sessions}>
              <text className="content">
                <tspan x="13%" y="17%">
                  Durée moyenne des
                </tspan>
                <tspan x="13%" y="26%">
                  sessions
                </tspan>
              </text>
              <defs>
                <linearGradient id="colorGradient" x1="0" y1="0" x2="100%" y2="0">
                  <stop offset="0%" stopColor="#fa7a7a" />
                  <stop offset="35%" stopColor="#fa7a7a" />
                  <stop offset="100%" stopColor="#FFFFFF" />
                </linearGradient>
              </defs>
              <XAxis tick={{ fill: "#FFFFFF", opacity: "0.5", fontSize: "1.2rem", lineHeight: "24px", fontWeight: "500" }} dataKey="day" axisLine={false} tickLine={false} padding={{ right: -40, left: -40 }} />
              <YAxis domain={[-40, "dataMax+70"]} hide={true} dataKey="sessionLength" type="number" />

              <Tooltip content={renderTooltip} cursor={<CustomCursor />} />
              <Line type="natural" dataKey="sessionLength" stroke="url(#colorGradient)" strokeWidth={2} dot={false} activeDot={renderDot(data.sessions)} />
            </LineChart>
          </ResponsiveContainer>
        </>
      )}
    </div>
  );
}

// ### Composants Recharts utilisés :

// 1. **`ResponsiveContainer`** :
//    - Ajuste automatiquement la taille du graphique en fonction de la taille du parent.
//    - Aucune propriété spécifique n'est utilisée ici.

// 2. **`LineChart`** :
//    - `data`: Les données à afficher dans le graphique.
//    - `margin`: Les marges du graphique.

// 3. **`XAxis`** :
//    - `dataKey`: La clé dans les données correspondant à l'axe X.
//    - `tick`: Les propriétés de style des étiquettes.
//    - `axisLine`: Affiche ou masque la ligne de l'axe X.
//    - `tickLine`: Affiche ou masque les lignes de repère.
//    - `padding`: Les marges autour de l'axe X.

// 4. **`YAxis`** :
//    - `domain`: La plage de valeurs de l'axe Y.
//    - `hide`: Masque l'axe Y.
//    - `dataKey`: La clé dans les données correspondant à l'axe Y.
//    - `type`: Le type de données de l'axe Y (nombre dans ce cas).

// 5. **`Tooltip`** :
//    - `content`: Fonction de rendu personnalisée pour l'infobulle.
//    - `cursor`: Composant personnalisé pour le curseur.

// 6. **`Line`** :
//    - `type`: Type de courbe utilisé pour relier les points (`natural` dans ce cas).
//    - `dataKey`: La clé dans les données correspondant à la série de lignes.
//    - `stroke`: Couleur de la ligne.
//    - `strokeWidth`: Largeur de la ligne.
//    - `dot`: Affiche ou masque les points de données.
//    - `activeDot`: Fonction de rendu personnalisée pour les points de données actifs.

// ### Fonctions de rendu personnalisées :

// 1. **`renderTooltip`** :
//    - **Paramètres :**
//      - `active`: Indique si l'infobulle est active ou non.
//      - `payload`: Données de la ligne survolée.
//    - **Rôle :**
//      - Renvoie une infobulle personnalisée avec la durée moyenne de session.

// 2. **`CustomCursor`** :
//    - **Paramètres :**
//      - `points`: Les coordonnées du curseur.
//      - `width`, `height`: Largeur et hauteur du curseur.
//    - **Rôle :**
//      - Renvoie un composant `Rectangle` qui agit comme un curseur personnalisé.

// 3. **`renderDot`** :
//    - **Paramètre :**
//      - `data`: Les données pour lesquelles les points de données doivent être rendus.
//    - **Rôle :**
//      - Renvoie une fonction qui définit les points de données (cercles) avec certaines conditions.

// ### Remarques supplémentaires :

// - Un dégradé (`linearGradient`) est défini pour le remplissage de la ligne. Cela crée un effet de dégradé de couleur.

// - Les éléments `<text>` sont utilisés pour ajouter du texte personnalisé au graphique.

// - Les propriétés de style (par exemple, `fill`, `stroke`, `strokeWidth`, `fontSize`) sont utilisées pour personnaliser l'apparence des éléments du graphique.

// - L'effet d'opacité est utilisé pour créer un effet visuel pour le curseur (`CustomCursor`).
