import { useState } from "react";
import { Dialog, DialogTrigger, DialogContent, DialogTitle, DialogDescription, DialogClose } from "./Dialog"; // Adjust import as needed

export default function Example() {
  const [open, setOpen] = useState(false);

  return (
    <Dialog open={open} onOpenChange={setOpen}>
      <DialogTrigger className="px-4 py-2 bg-blue-500 text-white rounded">Open Dialog</DialogTrigger>
      <DialogContent>
        <DialogTitle>Dialog Title</DialogTitle>
        <DialogDescription>
          This is a sample dialog description.
        </DialogDescription>
        <DialogClose className="mt-4 px-4 py-2 bg-gray-300 rounded">Close</DialogClose>
      </DialogContent>
    </Dialog>
  );
}
