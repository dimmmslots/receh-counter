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
import { achievementLists } from "@/lib/achievement"

interface Props {
    achievements_status: {
        [key: string]: boolean;
    }
}


export function AchievementList({achievements_status}: Props) {

  return (
    <div className="mt-8">
        <AlertDialog>
<AlertDialogTrigger>
    <Button variant={'outline'} size={'lg'} className="w-full">
    Achievements
    </Button>
</AlertDialogTrigger>
<AlertDialogContent>
<AlertDialogHeader>
  <AlertDialogTitle className="text-center">Achievements</AlertDialogTitle>
  <AlertDialogDescription>
    {
        Object.keys(achievementLists).map((achievement) => {
            const { title, description } = achievementLists[achievement as keyof typeof achievementLists];
            const achieved = achievements_status[achievement];
            return (
                <div className="flex flex-row justify-between my-2">
                    {achieved ? <p className="text-sm">✅</p> : <p className="text-sm">❌</p>}
                    <p className={achieved ? "text-sm line-through" : "text-sm"}>{title}</p>
                    <p className={achieved ? "text-sm line-through" : "text-sm"}>{description}</p>
                </div>
            )
        })
    }
        <AlertDialogCancel asChild className="flex flex-row">
        <Button variant={'outline'} size={'lg'} className="w-full">
        Go back
        </Button>
        </AlertDialogCancel>
  </AlertDialogDescription>
</AlertDialogHeader>
</AlertDialogContent>
</AlertDialog>
    </div>

  )
}
