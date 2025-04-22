import { Button } from "@/components/ui/button";
import {
  Dialog,
  DialogTrigger,
  DialogContent,
  DialogHeader,
  DialogTitle,
  DialogDescription,
  DialogFooter,
  DialogClose,
} from "@/components/ui/dialog";
import { Card } from "./ui/card";

interface InterestProps {
  title: string;
  description: string;
  longDescription: string;
  imageUrl: string;
  technologies: string[];
}

export const Interest = ({ title, description, longDescription, imageUrl, technologies }: InterestProps) => {
  return (
    <Dialog>
      <DialogTrigger asChild>
        {/* <div className="bg-linear-45 from-chart-2 via-chart-3 to-chart-4 p-5 rounded-lg"> */}
          {/* <div className="bg-background rounded-lg shadow-lg overflow-hidden transform transition-transform hover:scale-105 gap-2"> */}
          <Card className="bg-background rounded-lg shadow-lg overflow-hidden transform transition-transform hover:scale-105 gap-2 p-2">
            <img src={imageUrl} alt={title} className="w-full h-60 object-cover" />
            <div className="p-6">
              <h3 className="text-xl text-primary font-bold mb-2">{title}</h3>
              <p className="text-muted-foreground mb-4">{description}</p>
              {/* TODO - Create a page for each interest*/}
            </div>
          </Card>
        {/* </div> */}
      </DialogTrigger>
      <DialogContent className="max-w-4xl h-[80vh]">
        <DialogHeader>
          <DialogTitle>{title}</DialogTitle>
          <DialogDescription>{description}</DialogDescription>
        </DialogHeader>
        <div className="overflow-y-auto px-6 py-4 space-y-4">
          <img src={imageUrl} alt={title} className="w-full h-64 object-cover rounded-md" />

          <h4 className="text-lg font-bold">Long Description</h4>
          <p className="whitespace-pre-wrap">
            {longDescription}
          </p>
        </div>
        <DialogFooter>
          <DialogClose asChild>
            <Button>Close</Button>
          </DialogClose>
        </DialogFooter>
      </DialogContent>
    </Dialog>
  );
};
