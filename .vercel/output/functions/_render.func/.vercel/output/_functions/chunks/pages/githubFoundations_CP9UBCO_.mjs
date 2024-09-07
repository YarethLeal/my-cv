/* empty css                          */
import { c as createComponent, r as renderTemplate, m as maybeRenderHead, u as unescapeHTML } from '../astro_BWF5RzfA.mjs';
import 'kleur/colors';
import 'clsx';

const html = "<p>The GitHub Foundations certification exam validates subject matter expertise by measuring entry-level skills with GitHub basics like repositories, commits, branching, markdowns, and project management.</p>";

				const frontmatter = {"title":"GitHub Foundations","org":"GitHub","tags":["Git","GitHub","GitHub Certification","GitHub Foundations"],"url":"https://www.credly.com/badges/2702e283-9511-4663-8fc8-0e9a6c73e8c8/","date":2024};
				const file = "D:/Documents/GitHub/my-cv/src/pages/certificates/githubFoundations.md";
				const url = "/my-cv/certificates/githubFoundations";
				function rawContent() {
					return "\r\nThe GitHub Foundations certification exam validates subject matter expertise by measuring entry-level skills with GitHub basics like repositories, commits, branching, markdowns, and project management.\r\n";
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
