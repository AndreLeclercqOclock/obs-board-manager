const BOARD = {
  changeColor: async ({ slug, color }) => {
    const COLORS = JSON.parse(file.read("shared/obs-board-manager/colors.json"));
    await newEvent("evntboard-tmp", {
      slug: slug,
      color: COLORS[color],
    });
  },
};
