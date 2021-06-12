import tippy from "tippy.js";
import "tippy.js/dist/tippy.css";

export default {
  bind: (el, binding) => {
    if (!binding.value) return;

    let theme = Object.keys(binding.modifiers);
    theme = theme.length ? theme[0] : "dark";

    tippy(el, {
      content: binding.value,
      theme: theme,
      placement: binding.arg || "auto",
      allowHTML: true,
    });
  },
};
