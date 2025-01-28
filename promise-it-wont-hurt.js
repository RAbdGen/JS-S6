// Créer une promesse accomplie avec Promise.resolve
const promise = Promise.resolve('Succès !');

// Simuler une erreur après un succès
promise
    .then((result) => {
        console.log(result); // Affiche "Succès !"
        throw new Error('Quelque chose a foiré !'); // On force une erreur
    })
    .catch((err) => {
        console.error('IL Y A UN SOUCI !');
        console.error(err.message); // Affiche "Quelque chose a foiré !"
    });
