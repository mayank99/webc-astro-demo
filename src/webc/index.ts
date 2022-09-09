import __dirname from '__dirname';
import { WebC } from '@11ty/webc';
import pageUrl from './page.webc';
import myComponentPath from './my-component.webc';
import path from 'path';

const page = new WebC();

page.setInputPath(path.join(__dirname, pageUrl.substring(1)));
page.defineComponents({
	'my-component': path.join(__dirname, myComponentPath.substring(1)),
});

const { html, css, js, components } = await page.compile();

console.log(components);

export { html, css, js, components };
