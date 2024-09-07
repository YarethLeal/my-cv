/* empty css                          */
import { c as createComponent, r as renderTemplate, m as maybeRenderHead, u as unescapeHTML } from '../astro_BWF5RzfA.mjs';
import 'kleur/colors';
import 'clsx';

const html = "<p>Admin module of a hotel reservation project for the UCR Software Engineering course.\r\nWhat you will find:</p>\n<ul>\n<li>Change the status of the rooms</li>\n<li>CRUD Rooms</li>\n<li>Change Hotel Info</li>\n</ul>";

				const frontmatter = {"title":"Admin Module - Hotel Reservations","url":"https://github.com/YarethLeal/ModuloCliente-HotelCocoMilk","tags":["C#",".Net","Jquery","HTML","CSS","Angular","ASP.NET"],"date":2023};
				const file = "D:/Documents/GitHub/my-cv/src/pages/projects/admin-hotelReservations.md";
				const url = "/my-cv/projects/admin-hotelReservations";
				function rawContent() {
					return "\r\nAdmin module of a hotel reservation project for the UCR Software Engineering course.\r\nWhat you will find:\r\n- Change the status of the rooms\r\n- CRUD Rooms\r\n- Change Hotel Info";
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
