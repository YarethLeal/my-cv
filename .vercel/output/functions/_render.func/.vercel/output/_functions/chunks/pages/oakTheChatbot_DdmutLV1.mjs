/* empty css                          */
import { c as createComponent, r as renderTemplate, m as maybeRenderHead, u as unescapeHTML } from '../astro_BWF5RzfA.mjs';
import 'kleur/colors';
import 'clsx';

const html = "<p>Digital Health Record is a simple Chatbot developed with React.\r\nWhat you will find:</p>\n<ul>\n<li>Chat Window</li>\n<li>Click mini game</li>\n</ul>";

				const frontmatter = {"title":"Oak The Chatbot","url":"https://github.com/YarethLeal/OakTheChatbot","tags":["React","Node.js","Express","HTML","CSS"],"date":2024};
				const file = "D:/Documents/GitHub/my-cv/src/pages/projects/oakTheChatbot.md";
				const url = "/my-cv/projects/oakTheChatbot";
				function rawContent() {
					return "\r\nDigital Health Record is a simple Chatbot developed with React.\r\nWhat you will find:\r\n- Chat Window\r\n- Click mini game";
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
