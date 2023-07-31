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
    achievementStatus: {
        [key: string]: boolean;
    }
  }
  

export default function AchievementPage({
    openState,
    onOpenChange,
    title, 
    desc,
    achievementStatus
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
        <p className="text-center">
        {desc}
        </p>
        {
            // check if all achievements are unlocked, if yes, show this
            Object.keys(achievementStatus).every((achievement) => {
                return achievementStatus[achievement as keyof typeof achievementStatus];
            }
            ) ? (
                <div>
                  <p className="text-lg text-center text-white font-black my-6">
        🎉 You completed all achievements! 🎉
        </p>
        <h1 className="text-blue-600 text-4xl font-black text-center">The Completionist</h1>
                </div>
            ) : (
                <></>
            )
        }
      </AlertDialogDescription>
    </AlertDialogHeader>
  </AlertDialogContent>
</AlertDialog>
    )
}