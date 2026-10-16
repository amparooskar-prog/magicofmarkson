# Magic of Markson

A responsive website for Magic of Markson Kids Party in Singapore, with service pages, an animated bubble, a photo gallery and floating contact options.

## Development

Requires Node.js 20 or later. No third-party packages are needed.

```sh
npm run build
npm run check
npm run dev
```

Open http://127.0.0.1:4173 to preview the website. The build creates the ready-to-host files in `dist/`.

## Project structure

- `build.mjs`: page content and shared layouts
- `contact-widget.mjs`: floating WhatsApp and enquiry links
- `public/site.css`: styles and responsive layouts
- `public/site.js`: navigation, gallery, animation and contact interactions
- `public/photos/`: event photography
- `public/art/`: decorative artwork and animation
- `references/photo-sources.json`: photo credits, dimensions and article links

## Hosting

Run `npm run build` and publish the contents of `dist/` using a static website host. For GitHub Pages, use a build workflow that uploads `dist/` as the Pages artifact. Upload the project files to a new repository; the build output is excluded by `.gitignore`.

## Contact behaviour

The floating button links to WhatsApp and the enquiry page. The enquiry form prepares a message for the visitor to review and send in WhatsApp. It does not send messages automatically, save submissions or reserve dates.

## Credits

Business information and event photographs are from the official [Magic of Markson website](https://www.magicofmarkson.com/). Original photo and article URLs are retained in `references/photo-sources.json`. Confirm permission to republish the photographs before using them outside this business website.

Typography uses Fraunces and DM Sans through Google Fonts. The bubble is decorative artwork, not a photograph of a performance or a claim that a bubble-show service is offered.
