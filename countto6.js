// Fonction html pour échapper les caractères spéciaux
function html(strings, ...values) {
    // Entités HTML à remplacer
    const escapeChars = {
        "'": '&apos;',
        '"': '&quot;',
        '<': '&lt;',
        '>': '&gt;',
        '&': '&amp;'
    };

    // Fonction d'échappement des caractères spéciaux dans chaque valeur
    const escape = (str) => {
        return str.replace(/[&<>'"]/g, char => escapeChars[char]);
    };

    // Créer la chaîne finale en utilisant les parties statiques (strings) et dynamiques (values)
    let result = strings[0];
    for (let i = 0; i < values.length; i++) {
        result += escape(values[i]) + strings[i + 1];
    }
    return result;
}

// Utilisation avec console.log
console.log(html`<b>${process.argv[2]} dit</b> : "${process.argv[3]}"`);
