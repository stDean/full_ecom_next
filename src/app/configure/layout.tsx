import { ReactNode } from "react";
import { MaxWidthWrapper } from "@/components/MaxWidthWrapper";

export default function ConfigureLayout({
  children,
}: Readonly<{
  children: ReactNode;
}>) {
  return (
    <MaxWidthWrapper className='flex-1 flex flex-col'>
      {children}
    </MaxWidthWrapper>
  );
}
