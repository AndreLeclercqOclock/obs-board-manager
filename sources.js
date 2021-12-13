const SOURCE = async (eventData) => {
  const slug = eventData.payload.slug;
  const source = slug.split("?")[1];
  const sourceElements = source.split("&");
  const sourceName = sourceElements[0];
  const sourceAction = sourceElements[1];
  const currentScene = await module["obs"].sceneGetCurrent();

  switch (sourceAction) {
    case "show": {
      const sourceSettings = await module["obs"].sceneItemGetSettings(currentScene, sourceName);
      sourceSettings.visible
        ? await BOARD.changeColor({ slug: slug, color: "SRC_DISABLE" })
        : await BOARD.changeColor({ slug: slug, color: "SRC_ENABLE" });
      await module["obs"].sceneItemVisibilityToggle(currentScene, sourceName);
      break;
    }
    case "mute": {
      const audioMuteInfo = await module["obs"].sourceGetMute(sourceName);
      audioMuteInfo.muted
        ? await BOARD.changeColor({ slug: slug, color: "SRC_ENABLE" })
        : await BOARD.changeColor({ slug: slug, color: "SRC_DISABLE" });
      await module["obs"].sourceMuteToggle(sourceName);
      break;
    }
    default:
      console.log("Action not found !");
  }
};
