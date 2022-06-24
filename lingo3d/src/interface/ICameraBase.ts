import { camNear, camFar } from "../engine/constants"
import { MIN_POLAR_ANGLE, MAX_POLAR_ANGLE } from "../globals"
import { bokehDefault } from "../states/useBokeh"
import { bokehApertureDefault } from "../states/useBokehAperture"
import { bokehFocusDefault } from "../states/useBokehFocus"
import { bokehMaxBlurDefault } from "../states/useBokehMaxBlur"
import IObjectManager, { objectManagerDefaults, objectManagerSchema } from "./IObjectManager"
import Defaults from "./utils/Defaults"
import { ExtractProps } from "./utils/extractProps"
import Nullable from "./utils/Nullable"

export type MouseControl = boolean | "drag"

export default interface ICameraBase extends IObjectManager {
    mouseControl: MouseControl
    
    fov: number
    zoom: number
    near: number
    far: number
    active: boolean
    transition: Nullable<boolean | number>

    bokeh: boolean
    bokehFocus: number
    bokehMaxBlur: number
    bokehAperture: number

    minPolarAngle: number
    maxPolarAngle: number

    minAzimuthAngle: number
    maxAzimuthAngle: number

    azimuthAngle: Nullable<number>
    polarAngle: Nullable<number>
}

export const cameraBaseSchema: Required<ExtractProps<ICameraBase>> = {
    ...objectManagerSchema,

    mouseControl: [Boolean, String],

    fov: Number,
    zoom: Number,
    near: Number,
    far: Number,
    active: Boolean,
    transition: [Boolean, Number],

    bokeh: Boolean,
    bokehFocus: Number,
    bokehMaxBlur: Number,
    bokehAperture: Number,

    minPolarAngle: Number,
    maxPolarAngle: Number,

    minAzimuthAngle: Number,
    maxAzimuthAngle: Number,

    azimuthAngle: Number,
    polarAngle: Number
}

export const cameraBaseDefaults: Defaults<ICameraBase> = {
    ...objectManagerDefaults,
    
    mouseControl: false,

    fov: 75,
    zoom: 1,
    near: camNear,
    far: camFar,
    active: false,
    transition: undefined,
    
    bokeh: bokehDefault,
    bokehFocus: bokehFocusDefault,
    bokehMaxBlur: bokehMaxBlurDefault,
    bokehAperture: bokehApertureDefault,

    minPolarAngle: MIN_POLAR_ANGLE,
    maxPolarAngle: MAX_POLAR_ANGLE,
    
    minAzimuthAngle: -Infinity,
    maxAzimuthAngle: Infinity,

    azimuthAngle: undefined,
    polarAngle: undefined
}