const fs = require('fs');
const path = require('path');

module.exports = (dirPath, extFilter, callback) => {
    // Lire les fichiers dans le répertoire
    fs.readdir(dirPath, (err, files) => {
        if (err) {
            return callback(err); // Appeler le callback avec l'erreur et arrêter
        }

        try {
            // Filtrer les fichiers avec la bonne extension
            const filteredFiles = files.filter(file => path.extname(file) === `.${extFilter}`);
            callback(null, filteredFiles); // Appeler le callback avec les fichiers filtrés
        } catch (error) {
            callback(error); // Gérer les erreurs éventuelles
        }
    });
};
