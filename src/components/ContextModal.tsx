import React from "react";
import { motion } from "framer-motion";
import { EnhancedButton } from "@/components/ui/enhanced-button";
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogFooter,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "@/components/ui/dialog";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { SquareMousePointer } from "lucide-react";

const ContextModal = ({ hover }: { hover: Boolean }) => {
  return (
    <Dialog>
      <DialogTrigger asChild className={`${!hover && 'hidden'}`}>
        <EnhancedButton className="motion-preset-slide-right-lg  h-6" effect="expandIcon" icon={SquareMousePointer} iconPlacement="right">Ver Contexto</EnhancedButton>
      </DialogTrigger>
      <DialogContent className="w-1/2 ">
        <DialogHeader>
          <DialogTitle>Lorem ipsum dolor sit amet.</DialogTitle>
        </DialogHeader>
        Lorem, ipsum dolor sit amet consectetur adipisicing elit. Iste, qui natus unde laudantium fuga consequuntur nihil hic illum accusantium assumenda quisquam ratione similique praesentium vero blanditiis. Ipsum, possimus nesciunt natus dicta voluptatem facere, molestiae odio consequuntur ipsa accusamus, quis reprehenderit. Voluptatem debitis mollitia blanditiis fuga quaerat pariatur! Omnis ratione qui aliquid autem quaerat nulla doloribus, quibusdam praesentium ipsum aut et. Hic earum voluptates quasi quidem veniam, sit aliquam maxime minus! Nostrum voluptates corrupti delectus itaque, nam eaque dignissimos porro mollitia aliquam distinctio veniam labore, beatae ex neque error sunt necessitatibus, commodi voluptatibus exercitationem dolore? Quae aliquam distinctio temporibus id officiis laudantium quis repellat eius nisi, praesentium alias. Vel consequatur consequuntur assumenda, necessitatibus in autem eaque dicta porro aut, nostrum excepturi fugiat numquam blanditiis sit nemo laboriosam voluptatibus modi laborum labore ipsum aperiam, asperiores exercitationem? Earum perferendis eius ullam saepe expedita architecto illum eum porro, quod ratione non ipsum ducimus asperiores.
        <DialogFooter>
          <EnhancedButton type="submit">Save changes</EnhancedButton>
        </DialogFooter>
      </DialogContent>
    </Dialog>
  );
};

export default ContextModal;
