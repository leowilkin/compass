# How to create a new tab

:::[tip]
A tab is a collection of cards, like Sport, Safeguarding etc
:::

1. Create a new Component in `src/components/Tabs/` in the format `{Tab Name}Tab.astro` by copying the contents of `TemplateTab.astro`
2. Replace {title} with your title. Do not include the curly braces.
3. Replace {link} with the link to the app. Do not include the curly braces.
4. Replace {svg} with the SVG path. See `SVG Docs` for more info.
5. Add your tab to the Navbar by going to `src/components/Nav.astro`, and importing the Tab like this:
```
import {Tab Name} from './Tabs/{Tab Name}Tab.astro'
```

and by adding the Tab in the body like this:

```
    <{Tab Name} />
```
6. Make the page by duplicating the template page named `template.txt`, and renaming it to the link name. Make sure to change the extension of the file to `.astro`
7. Change the variables in the file in curly brackets. Do not include the curly brackets.

e.g for History

```
---
import Card from '../components/Card.astro';
import HistoryTab from '../components/Tabs/HistoryTab.astro';
import MainLayout from '../layouts/MainLayout.astro';
---

<MainLayout pagetitle="History" version="v0.1">
          <HistoryTab />
          <div class="grid grid-cols-3 gap-4">
          </div>
</MainLayout>

```
8. See the next doc page for info on how to add cards to your page.