import {
  Sheet,
  SheetTrigger,
  SheetContent,
  SheetHeader,
  SheetTitle,
  SheetDescription,
} from "@/components/ui/sheet";

function SheetHandler() {
  return (
    <Sheet>
      <SheetTrigger>
        <div>
          <span />
          <span />
          <span />
        </div>
      </SheetTrigger>
      <SheetContent className="bg-transparent">
        <SheetHeader>
          <SheetTitle>Vemynd Sheet</SheetTitle>
          <SheetDescription>Vemynd</SheetDescription>
        </SheetHeader>
      </SheetContent>
    </Sheet>
  );
}

export default SheetHandler;
