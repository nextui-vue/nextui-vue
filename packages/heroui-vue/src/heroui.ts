export { heroui } from "@heroui/theme";
import { heroui } from "@heroui/theme";

// For browser
window && (window.heroui = heroui);

export default heroui() as any;
