import CustomLink from "@/components/CustomLink";
import type { PropsWithChildren } from "react";

const BercandaanLayout = ({ children }: PropsWithChildren) => {
  return (
    <>
      <section className="min-h-screen min-w-full flex flex-col gap-4 items-center justify-center text-slate-700">
        <div>
          <CustomLink href="/">Back to Home</CustomLink>
        </div>
        {children}
      </section>
    </>
  );
};

export default BercandaanLayout;
