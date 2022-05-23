import { Reactive } from "@lincode/reactivity"
import Model from "./Model"

const url = "https://unpkg.com/lingo3d-dummy@1.0.0/assets/"

export default class Dummy extends Model {
    public constructor () {
        super()
        this.src = url + "ybot.fbx"
        this.width = 20
        this.depth = 20
        this.pbr = true
        this.physics = "character"

        this.animation = "idle"

        this.createEffect(() => {
            const preset = this.presetState.get()

            const prefix = preset === "rifle" ? "rifle-" : ""

            this.animations = {
                idle: url + prefix + "idle.fbx",
                running: url + prefix + "running.fbx",
                falling: url + prefix + "falling.fbx"
            }
            this.animation = "idle"

        }, [this.presetState.get])
    }

    private presetState = new Reactive<"default" | "rifle">("default")
    public get preset() {
        return this.presetState.get()
    }
    public set preset(val) {
        this.presetState.set(val)
    }
}