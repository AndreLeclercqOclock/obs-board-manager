const SCENE = async (eventData) => {
  const currentScene = await module["obs"].sceneGetCurrent();
  const currentSlug = "scn?" + currentScene.name;
  const newSlug = eventData.payload.slug;
  const sceneName = newSlug.split("?")[1];

  await BOARD.changeColor({ slug: currentSlug, color: "SCN_DISABLE" });
  await BOARD.changeColor({ slug: newSlug, color: "SCN_ENABLE" });

  await module["obs"].sceneSetCurrent(sceneName);
};
