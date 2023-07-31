import useKeyboardShortcut from "use-keyboard-shortcut";

export function CreateShorcut (keys: string[], callback:() => void) {
    const {flushHeldKeys} = useKeyboardShortcut(
        keys,
        shortcutKeys => callback(),
        {
          ignoreInputFields: false,
          overrideSystem: false,
          repeatOnHold: false
        }
      )
}