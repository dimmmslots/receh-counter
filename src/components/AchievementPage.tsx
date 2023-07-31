import {
    AlertDialog,
    AlertDialogContent,
    AlertDialogDescription,
    AlertDialogHeader,
    AlertDialogTitle,
    AlertDialogTrigger,
  } from "../components/ui/alert-dialog"

  interface Props {
    openState: boolean;
    onOpenChange: (open: boolean) => void;
    title: string;
    desc: string;
  }
  

export default function AchievementPage({
    openState,
    onOpenChange,
    title, 
    desc
}: Props) {

    return (
        <AlertDialog open={openState} onOpenChange={
            // create function to open AlertDialog
            (newOpen) => {
                onOpenChange(newOpen);
            }
        }
        // close when user clicks outside of AlertDialog
        >
  <AlertDialogTrigger>Open</AlertDialogTrigger>
  <AlertDialogContent>
    <AlertDialogHeader>
      <AlertDialogTitle className="text-center">You unlocked an Achievement!!</AlertDialogTitle>
      <AlertDialogDescription>
        <p className="text-4xl text-center text-blue-600 font-black mb-4">
        {title}
        </p>
        <p>
        {desc}
        </p>
      </AlertDialogDescription>
    </AlertDialogHeader>
  </AlertDialogContent>
</AlertDialog>
    )
}