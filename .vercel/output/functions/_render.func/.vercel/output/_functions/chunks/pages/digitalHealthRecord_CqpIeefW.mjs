/* empty css                          */
import { c as createComponent, r as renderTemplate, m as maybeRenderHead, u as unescapeHTML } from '../astro_BWF5RzfA.mjs';
import 'kleur/colors';
import 'clsx';

const html = "<p>Digital Health Record is a project for UCR’s Languages for Business Applications course.\r\nWhat you will find:</p>\n<ul>\n<li>Modules for patients and physicians</li>\n<li>Manage medical information such as treatments</li>\n</ul>";

				const frontmatter = {"title":"Digital Health Record","url":"https://github.com/YarethLeal/Proyecto3IF4101-ExpedienteSaludDigital","tags":["C#",".Net","Jquery","HTML","CSS","Angular","ASP.NET"],"date":2021};
				const file = "D:/Documents/GitHub/my-cv/src/pages/projects/digitalHealthRecord.md";
				const url = "/my-cv/projects/digitalHealthRecord";
				function rawContent() {
					return "\r\nDigital Health Record is a project for UCR's Languages for Business Applications course.\r\nWhat you will find:\r\n- Modules for patients and physicians\r\n- Manage medical information such as treatments";
				}
				function compiledContent() {
					return html;
				}
				function getHeadings() {
					return [];
				}

				const Content = createComponent((result, _props, slots) => {
					const { layout, ...content } = frontmatter;
					content.file = file;
					content.url = url;

					return renderTemplate`${maybeRenderHead()}${unescapeHTML(html)}`;
				});

export { Content, compiledContent, Content as default, file, frontmatter, getHeadings, rawContent, url };
