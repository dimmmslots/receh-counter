import useKeyboardShortcut from "use-keyboard-shortcut";

export function CreateShorcut (keys: string[], callback:() => void) {
    useKeyboardShortcut(
        keys,
        () => callback(),
        {
          ignoreInputFields: false,
          overrideSystem: false,
          repeatOnHold: false
        }
      )
}