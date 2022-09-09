import { dirname } from 'path';
import { fileURLToPath } from 'url';

const __dirname = dirname(fileURLToPath(import.meta.url));

export default import.meta.env.DEV
	? __dirname.split('src')[0] // remove src from path
	: __dirname; // return dist path as is
