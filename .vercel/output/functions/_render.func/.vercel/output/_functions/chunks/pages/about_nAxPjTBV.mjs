/* empty css                          */
import { c as createComponent, r as renderTemplate, m as maybeRenderHead, u as unescapeHTML } from '../astro_BWF5RzfA.mjs';
import 'kleur/colors';
import 'clsx';

const html = "<p>Software Developer and Bachelor in Business Informatics from the University of Costa Rica, with a passion for acquiring new knowledge to allow me develop as a professional and accept new challenges.</p>\n<p>I have skills and knowledge in areas such as programming, databases, and project and data management. In addition, I have skills in teamwork, communication, problem solving and use of agile methodologies.</p>\n<p>These capabilities allow me to tackle new challenges and work on multidisciplinary projects with a mindset focused on continuous learning, constantly improving the quality of my work.</p>";

				const frontmatter = {"title":"about","name":"Yareth Leal","designation":"Software Developer","location":"Costa Rica"};
				const file = "D:/Documents/GitHub/my-cv/src/pages/about/about.md";
				const url = "/my-cv/about/about";
				function rawContent() {
					return "\r\nSoftware Developer and Bachelor in Business Informatics from the University of Costa Rica, with a passion for acquiring new knowledge to allow me develop as a professional and accept new challenges.\r\n\r\nI have skills and knowledge in areas such as programming, databases, and project and data management. In addition, I have skills in teamwork, communication, problem solving and use of agile methodologies.\r\n\r\nThese capabilities allow me to tackle new challenges and work on multidisciplinary projects with a mindset focused on continuous learning, constantly improving the quality of my work.\r\n";
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
