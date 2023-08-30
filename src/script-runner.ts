import * as fs from 'fs';
import * as path from 'path';

// Get a list of .ts files in the src folder
const files = fs.readdirSync(path.join(__dirname)).filter(file => file.endsWith('.ts'));

// Execute each .ts file
files.forEach(file => {
    console.log(`<${file}>`)
  require(path.join(__dirname, file));
});
