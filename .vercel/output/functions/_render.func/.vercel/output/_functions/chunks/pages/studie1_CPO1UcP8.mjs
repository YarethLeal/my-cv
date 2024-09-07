/* empty css                          */
import { c as createComponent, r as renderTemplate, m as maybeRenderHead, u as unescapeHTML } from '../astro_BWF5RzfA.mjs';
import 'kleur/colors';
import 'clsx';

const html = "";

				const frontmatter = {"title":"Bachelor in Business Informatics","location":"University of Costa Rica","url":"http://foeberoz.gm/kuj","institute":"University of Costa Rica","date":"2018-2024","tags":["Informatics","Business Informatics","Programming","Databases","Software Development"]};
				const file = "D:/Documents/GitHub/my-cv/src/pages/studies/studie1.md";
				const url = "/my-cv/studies/studie1";
				function rawContent() {
					return "";
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
