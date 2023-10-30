"use client"

import { Doc } from "@/convex/_generated/dataModel"
import IconPicker from "./IconPicker";
import { Button } from "./ui/button";
import { X } from "lucide-react";


interface ToolBarProps{
    initialData : Doc<"documents">;
    preview?: boolean;
}

const ToolBar = ({
    initialData,
    preview
} : ToolBarProps) => {
  return (
    <div className="pl-[54px] group relative:">
        {!!initialData.icon && !preview && (
            <div className="flex items=center gap-x-2 group/icon pt-6">
                <IconPicker onChange={() =>{}}>
                    <p className="text-6xl hover:opacity-75 transition">
                        {initialData.icon}
                    </p>
                </IconPicker>
                <Button onClick={() =>{}} className="rounded-full opacity-0 group-hover/icon:opacity-100 transition text-muted-foreground text-xs"
                variant="outline" size="icon">
                    <X className="h-4 w-4"/>
                </Button>
            </div>
        )}
    </div>
  )
}

export default ToolBar