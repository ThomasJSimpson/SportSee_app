export default async function fetchData(baseUrl) {
  try {
    const response = await fetch(baseUrl);
    // logique données mocké
    if (!response.ok) {
      throw new Error("La requête a échoué");
    }
    const jsonData = await response.json();
    return jsonData;
  } catch (error) {
    console.error("Erreur:", error);
  }
}
