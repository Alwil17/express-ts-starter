import * as fs from 'fs-extra';
import * as path from 'path';

export async function createProject(projectName: string) {
    try {
        const targetPath = path.resolve(process.cwd(), projectName);
        const templatePath = path.resolve(__dirname, '../template');
        console.log(`Target path: ${targetPath}`);
        console.log(`Template path: ${templatePath}`);

        if (fs.existsSync(targetPath)) {
            console.error(`Le dossier ${projectName} existe déjà.`);
            process.exit(1);
        }

        console.log(`Copie du template vers ${targetPath}`);
        await fs.copy(templatePath, targetPath);
        console.log(`Projet créé avec succès dans ${targetPath}`);
    } catch (error) {
        console.error('Erreur lors de la création du projet :', error);
        process.exit(1);
    }
}
