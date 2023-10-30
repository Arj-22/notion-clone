"use client"

import { api } from "@/convex/_generated/api"
import { Id } from "@/convex/_generated/dataModel"
import { useMutation } from "convex/react"
import { toast } from "sonner"
import { useRouter } from "next/navigation"
import { Button } from "@/components/ui/button"
import ConfirmModel from "@/components/models/ConfirmModel"


interface BannerProps {
    documentId: Id<"documents">
};

const Banner = ({
    documentId
}: BannerProps) => {

    const router = useRouter(); 

    const remove = useMutation(api.documents.remove);
    const restore = useMutation(api.documents.restore);

    const onRemove = () =>{
        const promice = remove({ id: documentId })
        toast.promise(promice, {
            loading: "Deleating note...",
            success: "Note deleted!",
            error: "Failed to delete note."
        })


        router.push("/documents");
    }


    const onRestore = () =>{
        const promice = restore({ id: documentId });
        toast.promise(promice, {
            loading: "Restoring note...",
            success: "Note restored!",
            error: "Failed to restore note."
        });
    }
    
    

  return (
    <div className="w-full bg-rose-500 text-center text-sm p-2 text-white flex items-center gap-x-2 justify-center">
        <p>
            This page is in the trash
        </p>
        <Button 
            size="sm"
            onClick={onRestore}
            variant="outline"
            className="border-white bg-transparent hover:bg-primary/5 text-white hover:text- p-1 px-2 h-auto font-normal"
        >
            Restore Page
        </Button>
        <ConfirmModel onConfirm={onRemove}>
        <Button 
            size="sm"
            variant="outline"
            className="border-white bg-transparent hover:bg-primary/5 text-white hover:text- p-1 px-2 h-auto font-normal"
        >
            Delete Forever
        </Button>
        </ConfirmModel>
    </div>
  )
}

export default Banner