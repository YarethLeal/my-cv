/* empty css                          */
import { c as createComponent, r as renderTemplate, m as maybeRenderHead, u as unescapeHTML } from '../astro_BWF5RzfA.mjs';
import 'kleur/colors';
import 'clsx';

const html = "<p>Client module of a hotel reservation project for the UCR Software Engineering course.\r\nWhat you will find:</p>\n<ul>\n<li>See if rooms are available</li>\n<li>Reserve a room</li>\n<li>Fake Payment Simulation</li>\n<li>View hotel information</li>\n</ul>";

				const frontmatter = {"title":"Client Module - Hotel Reservations","url":"https://github.com/YarethLeal/ModuloCliente-HotelCocoMilk","tags":["C#",".Net","Jquery","HTML","CSS","Angular","ASP.NET"],"date":2023};
				const file = "D:/Documents/GitHub/my-cv/src/pages/projects/client-hotelReservations.md";
				const url = "/my-cv/projects/client-hotelReservations";
				function rawContent() {
					return "\r\nClient module of a hotel reservation project for the UCR Software Engineering course.\r\nWhat you will find:\r\n- See if rooms are available\r\n- Reserve a room\r\n- Fake Payment Simulation\r\n- View hotel information";
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
