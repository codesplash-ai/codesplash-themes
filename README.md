# CodeSplash Themes

A powerful Obsidian plugin that lets you create, manage, and switch between custom color themes with an intuitive visual editor.

## Features

- **Visual Theme Editor**: Create and customize themes with a user-friendly interface
- **Two-Layer Color System**:
  - Define a color palette with custom variables
  - Assign palette colors to semantic UI elements
- **22 Built-in Themes**: Includes a curated collection of popular themes like Catppuccin, Dracula, Tokyo Night, Nord, Gruvbox, and more (all can be edited or deleted)
- **Theme Management**: Create, edit, duplicate, rename, and delete ALL themes (including built-in ones)
- **Color Variable Renaming**: Easily rename color variables and automatically update all references
- **Quick Switching**: Cycle through themes with commands or hotkeys
- **Import/Export**: Share themes as JSON files
- **Live Preview**: See changes in real-time as you edit colors
- **Self-Contained**: Includes all base styling - no need for separate CSS snippets
- **Light & Dark Mode Support**: Base styles work with both Obsidian light and dark themes

## Installation

### Manual Installation

1. Download the latest release from the releases page
2. Extract the files to your vault's `.obsidian/plugins/codesplash-themes/` directory
3. Reload Obsidian
4. Enable the plugin in Settings → Community Plugins

### From Source

```bash
# Clone the repository
cd /path/to/your/vault/.obsidian/plugins
git clone https://github.com/codesplash-ai/codesplash-themes.git

# Install dependencies
cd codesplash-themes
npm install

# Build the plugin
npm run build
```

## Usage

### Selecting a Theme

1. Open Settings → CodeSplash Themes
2. In the "Active Theme" section, choose a theme from the dropdown
3. The theme will be applied immediately

### Creating a New Theme

1. Open Settings → CodeSplash Themes
2. Click "New Theme" button
3. Click "Edit" on the newly created theme
4. Customize the theme:

#### Color Palette (Top Section)
- Each color has two editable fields: **color name** (left) and **color value** (right)
- Add new colors with names and hex values
- Example: `kiro-purple` → `#b080ff`
- **Rename colors**: Edit the name field and the plugin will automatically update all references
- Click "Rename" button to focus on the name field for easy editing
- Remove colors with the "Remove" button
- These are the available colors you can use in assignments

#### Color Assignments (Bottom Section)
- Assign palette colors to semantic variables
- Choose from dropdowns populated with your palette colors
- Semantic variables include:
  - **Background**: `BACKGROUND-DARK`, `BACKGROUND-PRIMARY`, `BACKGROUND-LIGHT`, etc.
  - **UI Elements**: `TITLE`, `ACCENT`, `ACTION`, `LIST`, `HEADER`, `CARET`, `LINK`
  - **Text Formatting**: `BOLD`, `ITALICS`, `HIGHLIGHT`, `STRIKETHROUGH`
  - **Headers**: `HEADER-1` through `HEADER-6`

### Managing Themes

- **Edit**: Modify theme name, colors, and assignments for ANY theme
- **Duplicate**: Create a copy of an existing theme as a starting point
- **Export**: Save a theme as a JSON file to share or back up
- **Delete**: Remove ANY theme (including the built-in starter themes!)
- **Import**: Load themes from JSON files
- **Rename Theme**: Edit the theme name at the top of the editor
- **Rename Colors**: Edit color variable names directly in the palette editor

### Commands

Access these commands via the Command Palette (Cmd/Ctrl+P):

- **Next theme**: Cycle to the next theme in your list
- **Previous theme**: Cycle to the previous theme
- **Toggle theme on/off**: Temporarily disable/enable the current theme

You can assign hotkeys to these commands in Settings → Hotkeys.

## Theme Structure

Themes follow this two-layer structure, based on your existing CSS patterns:

### Layer 1: Color Palette
Define reusable color variables:
```css
:root {
    --kiro-purple: #b080ff;
    --kiro-turquoise: #80f4ff;
    --kiro-pink: #ff80b5;
    /* ... more colors ... */
}
```

### Layer 2: Color Assignments
Map colors to semantic purposes:
```css
:root {
    --ACCENT: var(--kiro-turquoise);
    --ACTION: var(--kiro-pink);
    --TITLE: var(--kiro-green);
    /* ... more assignments ... */
}
```

This separation allows you to:
- Reuse the same color for multiple purposes
- Easily swap entire color schemes
- Maintain semantic meaning in your CSS

## Importing Existing Themes

If you have existing CSS theme files, you can convert them to the plugin format:

1. Extract color definitions from the top section
2. Extract color assignments from the bottom section
3. Create a JSON file with this structure:

```json
{
  "id": "my-theme",
  "name": "My Theme",
  "isBuiltin": false,
  "colors": {
    "color-name": "#hexvalue",
    "another-color": "#value"
  },
  "assignments": {
    "ACCENT": "var(--color-name)",
    "ACTION": "var(--another-color)"
  }
}
```

4. Import the JSON file via Settings → CodeSplash Themes → Import

## Compatibility

This plugin is **fully self-contained** and includes all necessary base styles. You don't need any external CSS snippets or custom stylesheets - everything works out of the box!

The plugin includes:
- Base structural styles (from base.css)
- Dark theme styles (from base-dark.css)
- Light theme styles (from base-light.css)
- Full support for Obsidian's built-in light and dark modes

It works alongside Obsidian's native themes, injecting comprehensive styling that covers:
- Text formatting (bold, italic, highlight, strikethrough)
- UI elements (tabs, sidebars, menus, buttons)
- Editor features (headers, links, lists, tables)
- Special elements (tags, dataview, math blocks)

## Development

### Building

```bash
npm run dev    # Development mode with watching
npm run build  # Production build
```

### Project Structure

```
codesplash-themes/
├── src/
│   ├── models/          # Data models (Theme, DefaultThemes)
│   │   └── themes/      # 22 built-in theme definitions
│   ├── services/        # Business logic (ThemeService, StyleService, WindowService)
│   ├── types/           # TypeScript type declarations
│   └── settings.ts      # Settings tab implementation
├── main.ts              # Plugin entry point
├── styles.css           # Plugin UI styles
└── manifest.json        # Plugin metadata
```

## Contributing

Contributions are welcome! Please feel free to submit a Pull Request.

## License

MIT

## Credits

Includes built-in themes inspired by popular color schemes including Catppuccin, Dracula, Tokyo Night, Nord, Gruvbox, One Dark Pro, Solarized, Monokai Pro, Rose Pine, Material Oceanic, Night Owl, Ayu, GitHub Dark, and more.

## Support

If you encounter any issues or have feature requests, please open an issue on GitHub.
