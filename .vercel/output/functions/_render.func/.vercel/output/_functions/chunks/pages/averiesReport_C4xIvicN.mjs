/* empty css                          */
import { c as createComponent, r as renderTemplate, m as maybeRenderHead, u as unescapeHTML } from '../astro_BWF5RzfA.mjs';
import 'kleur/colors';
import 'clsx';

const html = "<p>Averies Report is a project developed in an academic course but directed and developed for the Judicial Investigation Agency (OIJ) of Costa Rica, also with them during the development of the project communication was maintained during each stage of the process.\r\nWhat we elaborated:</p>\n<ul>\n<li>Views based on permissions level.</li>\n<li>Permission scheme and allowed actions.</li>\n<li>Double authentication factor for login.</li>\n<li>Ability to report and troubleshoot a facility failure.</li>\n</ul>";

				const frontmatter = {"title":"Averies Report - OIJ","url":"https://github.com/YarethLeal/","tags":["C#",".Net","Jquery","HTML","CSS","Angular","ASP.NET"],"date":2022};
				const file = "D:/Documents/GitHub/my-cv/src/pages/projects/averiesReport.md";
				const url = "/my-cv/projects/averiesReport";
				function rawContent() {
					return "\r\nAveries Report is a project developed in an academic course but directed and developed for the Judicial Investigation Agency (OIJ) of Costa Rica, also with them during the development of the project communication was maintained during each stage of the process.\r\nWhat we elaborated:\r\n- Views based on permissions level.\r\n- Permission scheme and allowed actions.\r\n- Double authentication factor for login.\r\n- Ability to report and troubleshoot a facility failure.";
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
