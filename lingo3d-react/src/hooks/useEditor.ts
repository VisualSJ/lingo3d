import { render, h as preactH } from "preact"
import "lingo3d/lib/editor"
import { useLayoutEffect, useRef } from "react"

export default (Component: any, props?: any) => {
    const divRef = useRef<HTMLDivElement>(null)

    useLayoutEffect(() => {
        const el = divRef.current
        if (!el) return

        render(preactH(Component, props, el), el)
        
    }, [props])

    useLayoutEffect(() => {
        const el = divRef.current
        if (!el) return

        return() => {
            render(undefined, el)
        }
    }, [])

    return divRef
}