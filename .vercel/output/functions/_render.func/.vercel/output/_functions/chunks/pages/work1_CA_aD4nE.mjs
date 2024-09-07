/* empty css                          */
import { c as createComponent, r as renderTemplate, m as maybeRenderHead, u as unescapeHTML } from '../astro_BWF5RzfA.mjs';
import 'kleur/colors';
import 'clsx';

const html = "<ul>\n<li>Ideveloped several information management requirements with CRUD functions for an ERP type project; using\r\nASP.NET Core with MVVM architecture, Bootstrap for style management and Microsoft SQL Server for the\r\ndatabase.</li>\n<li>Identified and fixed bugs through manual testing which resulted in visual and performance improvement.</li>\n<li>Implemented information retrieval and content deployment based on user roles.</li>\n<li>Improved the database through testing and error reporting.</li>\n</ul>";

				const frontmatter = {"title":"Full Stack Developer Intern","date":"Aug 2023 - Dec 2023","url":"https://www.linkedin.com/company/nearlinx/","location":"Costa Rica","org":"Nearlinx","tags":["Software Developer","Front end","Back end","Web Development"]};
				const file = "D:/Documents/GitHub/my-cv/src/pages/works/work1.md";
				const url = "/my-cv/works/work1";
				function rawContent() {
					return "\r\n- Ideveloped several information management requirements with CRUD functions for an ERP type project; using\r\n ASP.NET Core with MVVM architecture, Bootstrap for style management and Microsoft SQL Server for the\r\n database.\r\n- Identified and fixed bugs through manual testing which resulted in visual and performance improvement.\r\n- Implemented information retrieval and content deployment based on user roles.\r\n- Improved the database through testing and error reporting.\r\n";
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
