# Image ratios

All images go in the `images/` folder. Until you add an image, the site shows a labelled placeholder in its place.

| Image | Ratio | Recommended size | File path |
|---|---|---|---|
| Website screenshots | **16:9** | 1920×1080 or 1440×810 | `images/projects/<project>-1.jpg`, `-2.jpg`, `-3.jpg` |
| Mobile app screenshots | **9:19.5** | 1179×2556 (iPhone) or 1080×2340 (Android) | `images/projects/<project>-1.jpg`, `-2.jpg`, `-3.jpg` |
| Portrait (optional) | **4:5** | 1200×1500 | `images/portrait.jpg`, then uncomment the portrait line in `index.html` |

## Where each screenshot appears

**Website projects** (`device: 'web'` in `data.js`)
- Screenshot 1: on the project card, and as the large image in the case study.
- Screenshots 2 onward: in a two-column grid below it in the case study (add as many as you like).

**Mobile projects** (`device: 'phone'` in `data.js`)
- Screenshots 1 and 2: on the project card.
- All screenshots listed in `shots` (3 or more): in the case study.

## Tips

- **Website screenshots:** capture only the browser viewport at 1440×810, without the browser's tabs or address bar. The site draws its own browser frame around the image.
- **Mobile screenshots:** a normal screenshot from a modern phone already has the right ratio.
- **Different shapes:** if an image isn't the exact ratio, it's cropped to fit with the top kept in view.
- **File names:** the paths for each project are listed in its `shots` field in `data.js`. If you rename a project or use `.png` files, update those paths to match.

## Current file names

| Project | Type | Files |
|---|---|---|
| Red Rose Admin | Website | `images/projects/red-rose-admin-1.jpg`, `-2.jpg`, `-3.jpg` |
| Bootcamp | Website | `images/projects/bootcamp-1.jpg` … `-6.jpg` |
| Docwo | Mobile | `images/projects/docwo-1.jpg` … `-8.jpg` |
| Red Rose Staff | Mobile | `images/projects/red-rose-staff-1.jpg`, `-2.jpg`, `-3.jpg`, `-4.jpg` |

Projects without screenshots (Feed Meals, Planet Zero, Finexs, Eyy Auto) appear in the **More projects** list. To move one into the carousel, add its screenshots, e.g. `images/projects/feed-meals-1.jpg` … `-3.jpg`, and list them in that project's `shots` in `data.js`.
