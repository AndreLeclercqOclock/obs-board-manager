const type = "CLASSIC"; //  CLASSIC / THROTTLE / QUEUE / QUEUE_LOCK / THROTTLE_LOCK

const locker = null; // Only required for QUEUE_LOCK & THROTTLE_LOCK types

const conditions = {
  "evntboard-click": ({ payload }) => payload.slug !== "",
};

async function reaction(eventData) {
  const slugPrefix = eventData.payload.slug.split("?")[0];

  if (slugPrefix) {
    switch (slugPrefix) {
      case "scn":
        await SCENE(eventData);
        break;
      case "src":
        await SOURCE(eventData);
        break;
      default:
        console.log("Slug Prefix not found");
    }
  }
}
