# Changelog

## 2.1.0

- Moved away from using style-loader to support apps using server-side rendering. CSS files now need to be imported separately.

## 2.0.0

### Added

- TypeScript support
- Started using style-loader so there's no need for importing .css files separately. Styles are now injected into `<head>` when importing `react-activity`.

### Changed

- Activity indicator color is now set using `currentColor` in css.
- The project now consists of two workspaces. This helps with creating a realistic environment to test the package in and makes sure we do not distribute code for the demo as part of the published package.
- Fixed windmill animation jittering.
- Improved how animations work with the `speed` prop.
