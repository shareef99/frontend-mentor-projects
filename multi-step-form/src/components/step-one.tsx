import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";

type Props = {
  onUpdateStep: (_step: number) => void;
};

export default function StepOne({ onUpdateStep }: Props) {
  return (
    <form className="space-y-8">
      <div className="space-y-2">
        <div className="flex justify-between">
          <Label>Name</Label>
          <span className="text-xs text-p-strawberry-red font-bold">
            This field is required
          </span>
        </div>
        <Input placeholder="e.g. Stephen King" />
      </div>
      <div className="space-y-2">
        <div className="flex justify-between">
          <Label>Email Address</Label>
          <span className="text-xs text-p-strawberry-red font-bold">
            This field is required
          </span>
        </div>
        <Input placeholder="e.g. stephenking@lorem.com" type="email" />
      </div>
      <div className="space-y-2">
        <div className="flex justify-between">
          <Label>Phone Number</Label>
          <span className="text-xs text-p-strawberry-red font-bold">
            This field is required
          </span>
        </div>
        <Input placeholder="e.g. +1 234 567 890" />
      </div>
      <Button
        className="ml-auto flex"
        type="submit"
        onClick={() => onUpdateStep(2)}
      >
        Next Step
      </Button>
    </form>
  );
}
