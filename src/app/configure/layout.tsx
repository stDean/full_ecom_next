import { ReactNode } from "react";
import { MaxWidthWrapper } from "@/components/MaxWidthWrapper";
import { Steps } from "@/components/Steps";

export default function ConfigureLayout({
  children,
}: Readonly<{
  children: ReactNode;
}>) {
  return (
    <MaxWidthWrapper className="flex-1 flex flex-col">
      <Steps />
      {children}
    </MaxWidthWrapper>
  );
}
