import { ReactNode } from 'react';

export default function PageWrapper({ children }: { children: ReactNode }) {
  return (
    <div className="flex flex-col pt-3 px-4 space-y-2 bg-zinc-100 flex-grow pb-4 w-screen  md:w-[calc(100vw-15rem)] -mr-1">
    {/* <div className="flex flex-col pt-3 px-4 space-y-2 bg-zinc-100 flex-grow pb-4 w-screen  md:w-full "> */}
      {children}
    </div>
  );
}