// @ts-check
/** @type {import('@docusaurus/plugin-content-docs').SidebarsConfig} */
const sidebars = {
  OPTools: [
    "LSE-OPTools/README",
    {
      type: "category",
      label: "安装使用",
      items: [
        "LSE-OPTools/Usage/Install",
        "LSE-OPTools/Usage/Plugin_OP",
        "LSE-OPTools/Usage/GUI_Main",
        "LSE-OPTools/Usage/GUI_Seting",
      ],
    },
    {
      type: "category",
      label: "配置文件",
      items: [
        "LSE-OPTools/Config/Config",
        "LSE-OPTools/Config/Main",
        "LSE-OPTools/Config/BindCmd",
        "LSE-OPTools/Config/Button",
      ],
    },
    "LSE-OPTools/Other/Plugin_API",
    "LSE-OPTools/Other/Update_Logs",
  ],
  ZoneCheckV3: [
    "ZoneCheckV3/index",
    "ZoneCheckV3/RegionChecker2D",
    "ZoneCheckV3/RegionChecker3D",
    "ZoneCheckV3/BoundaryChecker",
    "ZoneCheckV3/RandomAreaPosition",
    "ZoneCheckV3/FindPos",
  ],
};

export default sidebars;
