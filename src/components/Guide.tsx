import {
    AlertDialog,
    AlertDialogCancel,
    AlertDialogContent,
    AlertDialogDescription,
    AlertDialogHeader,
    AlertDialogTitle,
    AlertDialogTrigger,
  } from "../components/ui/alert-dialog"
import { Button } from "./ui/button"


export function Guide() {
  return (
    <div className="mt-8">
        <AlertDialog>
<AlertDialogTrigger>
    <Button variant={'outline'} size={'lg'} className="w-full">
    Here is a guide for you!
    </Button>
</AlertDialogTrigger>
<AlertDialogContent>
<AlertDialogHeader>
  <AlertDialogTitle className="text-center">Receh Counter</AlertDialogTitle>
  <AlertDialogDescription>
  <p className="font-bold text-2xl">Shortcuts</p>
  <div className="flex flex-row justify-between">
    <p className="text-sm">Add 1 Coin 100</p>
    <p className="text-sm">Shift + Z</p>
  </div>
  <div className="flex flex-row justify-between">
    <p className="text-sm">Add 1 Coin 200</p>
    <p className="text-sm">Shift + X</p>
  </div>
  <div className="flex flex-row justify-between">
    <p className="text-sm">Add 1 Coin 500</p>
    <p className="text-sm">Shift + C</p>
  </div>
  <div className="flex flex-row justify-between">
    <p className="text-sm">Add 1 Coin 1000</p>
    <p className="text-sm">Shift + V</p>
  </div>
  <div className="flex flex-row justify-between">
    <p className="text-sm">Subtract 1 Coin</p>
    <p className="text-sm">Same as above, replace Shift with Ctrl</p>
  </div>
        <AlertDialogCancel asChild className="flex flex-row">
        <Button variant={'outline'} size={'lg'} className="w-full">
        I understand!
        </Button>
        </AlertDialogCancel>
  </AlertDialogDescription>
</AlertDialogHeader>
</AlertDialogContent>
</AlertDialog>
    </div>

  )
}
