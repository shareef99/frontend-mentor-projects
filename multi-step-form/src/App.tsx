import { useState } from "react";
import lgBgImage from "./assets/images/bg-sidebar-desktop.svg";
import { cn } from "@/lib/utils";
import StepOne from "@/components/step-one";

export default function App() {
  // States
  const [step, setStep] = useState<number>(1);

  // Functions
  const updateStep = (step: number) => {
    setStep(step);
  };
  return (
    <main className="flex container justify-center gap-32 items-center min-h-screen bg-p-white">
      <section className="relative">
        <div className="">
          <img src={lgBgImage} alt="Background Image" />
        </div>
        <div className="absolute top-12 left-12 z-50 space-y-8">
          <div className="flex gap-4">
            <div
              className={cn(
                "size-9 text-sm text-p-white flex justify-center font-bold items-center border border-solid border-p-pastel-blue rounded-full",
                step === 1 && "bg-p-pastel-blue text-p-marine-blue"
              )}
            >
              1
            </div>
            <div className="flex flex-col">
              <span className="uppercase text-xs text-p-pastel-blue">
                Step 1
              </span>
              <span className="uppercase leading-6 text-xs text-p-light-gray font-bold">
                Your info
              </span>
            </div>
          </div>
          <div className="flex gap-4">
            <div
              className={cn(
                "size-9 text-sm text-p-white flex justify-center font-bold items-center border border-solid border-p-pastel-blue rounded-full",
                step === 2 && "bg-p-pastel-blue text-p-marine-blue"
              )}
            >
              2
            </div>
            <div className="flex flex-col">
              <span className="uppercase text-xs text-p-pastel-blue">
                Step 2
              </span>
              <span className="uppercase leading-6 text-xs text-p-light-gray font-bold">
                Select plan
              </span>
            </div>
          </div>
          <div className="flex gap-4">
            <div
              className={cn(
                "size-9 text-sm text-p-white flex justify-center font-bold items-center border border-solid border-p-pastel-blue rounded-full",
                step === 3 && "bg-p-pastel-blue text-p-marine-blue"
              )}
            >
              3
            </div>
            <div className="flex flex-col">
              <span className="uppercase text-xs text-p-pastel-blue">
                Step 3
              </span>
              <span className="uppercase leading-6 text-xs text-p-light-gray font-bold">
                Add-ons
              </span>
            </div>
          </div>
          <div className="flex gap-4">
            <div
              className={cn(
                "size-9 text-sm text-p-white flex justify-center font-bold items-center border border-solid border-p-pastel-blue rounded-full",
                step === 4 && "bg-p-pastel-blue text-p-marine-blue"
              )}
            >
              4
            </div>
            <div className="flex flex-col">
              <span className="uppercase text-xs text-p-pastel-blue">
                Step 4
              </span>
              <span className="uppercase leading-6 text-xs text-p-light-gray font-bold">
                Summary
              </span>
            </div>
          </div>
        </div>
      </section>
      <section className="space-y-12">
        <div className="space-y-2">
          <h1 className="font-bold text-4xl text-p-marine-blue">
            Personal info
          </h1>
          <p className="text-p-cool-gray">
            Please provide your name, email address, and phone number.
          </p>
        </div>
        <div>
          {step === 1 ? (
            <StepOne onUpdateStep={updateStep} />
          ) : step === 2 ? (
            "Step 2"
          ) : step === 3 ? (
            "Step 3"
          ) : step === 4 ? (
            "Step 4"
          ) : null}
        </div>
      </section>
    </main>
  );
}
