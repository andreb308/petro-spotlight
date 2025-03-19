import React from "react";
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
import { SquareMousePointer } from "lucide-react";

const ContextModal = ({ hover = true }: { hover?: Boolean }) => {
  return (
    <Dialog>
      {/* Is used to open the dialog when the button is clicked. Hidden if hover is false. */}
      <DialogTrigger asChild className={`\${!hover && 'hidden'}`}>
        <EnhancedButton
          className="motion-preset-slide-up-lg h-6" 
          effect="expandIcon"
          icon={SquareMousePointer}
          iconPlacement="right"
        >
          Ver Contexto
        </EnhancedButton>
      </DialogTrigger>

      {/* DialogContent defines the content of the modal, including header, body, and footer. */}
      <DialogContent className="w-1/2 max-lg:w-[90%] max-lg:h-3/4 max-lg:overflow-y-auto scrollbar max-lg:rounded-lg p-8">
        <DialogHeader>
          <DialogTitle>Lorem ipsum dolor sit amet.</DialogTitle>
        </DialogHeader>

        {/* Main content of the dialog, currently filled with placeholder text. */}
        Lorem, ipsum dolor sit amet consectetur adipisicing elit. Iste, qui natus unde laudantium fuga consequuntur nihil hic illum accusantium assumenda quisquam ratione similique praesentium vero blanditiis. Ipsum, possimus nesciunt natus dicta voluptatem facere, molestiae odio consequuntur ipsa accusamus, quis reprehenderit. Voluptatem debitis mollitia blanditiis fuga quaerat pariatur! Omnis ratione qui aliquid autem quaerat nulla doloribus, quibusdam praesentium ipsum aut et. Hic earum voluptates quasi quidem veniam, sit aliquam maxime minus! Nostrum voluptates corrupti delectus itaque, nam eaque dignissimos porro mollitia aliquam distinctio veniam labore, beatae ex neque error sunt necessitatibus, commodi voluptatibus exercitationem dolore? Quae aliquam distinctio temporibus id officiis laudantium quis repellat eius nisi, praesentium alias. Vel consequatur consequuntur assumenda, necessitatibus in autem eaque dicta porro aut, nostrum excepturi fugiat numquam blanditiis sit nemo laboriosam voluptatibus modi laborum labore ipsum aperiam, asperiores exercitationem? Earum perferendis eius ullam saepe expedita architecto illum eum porro, quod ratione non ipsum ducimus asperiores.

        <DialogFooter>
          {/* Button to save changes, placed in the footer of the dialog. */}
          <EnhancedButton type="submit">Save changes</EnhancedButton>
        </DialogFooter>
      </DialogContent>
    </Dialog>
  );
};

export default ContextModal;