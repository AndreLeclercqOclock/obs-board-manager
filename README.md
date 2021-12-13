# OBS BOARD MANAGER

**This tool will allow you to create automated buttons for OBS management with the Board module of the EvntBoard project.**

[EvntBoard Project](https://github.com/EvntBoard)

## Install

### Require

- [Module Board](https://github.com/EvntBoard/module-board)
- [Module OBS](https://github.com/EvntBoard/module-obs)

Go to EvntBoard source folder ([EvntBoard documentation](https://www.evntboard.io/docs/))

Clone or copy the `obs-board-manager` folder into `shared` directory ([shared documentation](https://www.evntboard.io/docs/getting-started/advanced/shared)).

Copy and paste `_obsBoardManager.js` from source to `trigger` folder ([trigger documentation](https://www.evntboard.io/docs/getting-started/advanced/trigger))

**DO NOT FORGET TO RENAME FILE `_obsBoardManager.js` TO `obsBoardManager.js`**

## Quick start

- Edit the board module from EvntBoard dashboard.
- Create new button.
- Into the slug write this `scn?scene-name` The 'scene-name' must be strictly identical to the name of the scene on obs.
- Save and try your new button ;)

## Slugs List

**Please note that all scene and sources names must be strictly identical to those of OBS, including capitalization. So I advise you to rename all your sources and scenes in lower case with a - between each word. For example: my-scene**

### Scenes

Should start with `scn?`

**-> Change Scene**

After the `?` write the obs scene name.

Example:
`scn?waiting-screen`

---

### Sources

Should start with `src?`
After the `?` write the obs source name.

**-> Show/Hide Source**

After the source name add `&show`

Example:
`src?webcam&show`

**-> Mute/Unmute Audio Source**

After the source name add `&mute`

Example:
`src?Mic&mute`

## Advanced

### Colors

If you want you can change the colors of the buttons from the `colors.json` file.

## TODO

- Add Start and Stop streaming managment
- Add action with countdown
- Add twitch tchat 'say' manager
