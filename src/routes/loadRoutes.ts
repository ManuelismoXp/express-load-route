import path from "path";
import fs from 'fs';

const folderRoutes = './v1';

const folderPath = (folder: string) => {
    return path.join(__dirname, folder);
}

const filePath = (folder: string, file: string) => {
    return path.join(folder, file);
}

const files = (folder: string) => {
    const files = fs.readdirSync(folderPath(folder));
    return files;
}

const isFileRoute = (file: string) => {
    return file.endsWith('route.ts') ?? true;
}

const readRoutes = (app: any) => {
    files(folderRoutes).forEach(file => {
        if (isFileRoute(file)) {
            const routeFilePath = filePath(folderPath(folderRoutes), file);
            const routeModule = require(routeFilePath);
            if (typeof routeModule === 'function') {
                routeModule(app);
            }
        }
    });
}

export { readRoutes };


