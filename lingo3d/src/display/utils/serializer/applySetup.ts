import { debounce } from "@lincode/utils"
import settings from "../../../api/settings"
import ISetup, { setupDefaults } from "../../../interface/ISetup"

export default debounce((node: ISetup) => {
    for (const key of Object.keys(settings))
        //@ts-ignore
        settings[key] = node[key] ?? setupDefaults[key]

}, 0, "trailing")