const fs = require('fs');
const path = require('path');

const cliPath = path.resolve(__dirname, 'dist/cli.js');
const shebang = '#!/usr/bin/env node\n';

fs.readFile(cliPath, 'utf8', (err, data) => {
    if (err) {
        console.error(err);
        process.exit(1);
    }
    if (!data.startsWith(shebang)) {
        fs.writeFile(cliPath, shebang + data, (err) => {
            if (err) {
                console.error(err);
                process.exit(1);
            }
            console.log('Shebang ajouté avec succès.');
        });
    } else {
        console.log('Shebang déjà présent.');
    }
});
