import CustomLink from "@/components/CustomLink";

export default function Home() {
  return (
    <section className="min-h-screen min-w-full flex flex-col items-center justify-center">
      <div className="flex flex-col items-center justify-center">
        <h1 className="text-3xl font-bold">Review NextJS Yuk !</h1>
        <p className="text-lg text-gray-500">List dan Buat bercandaan disini</p>
        <div className="mt-4 mb-2">
          <p className="font-semibold text-center">
            Server Component (Direct Services)
          </p>
          <div className="flex gap-4">
            <CustomLink href="/bercandaan/server/direct/list">
              Lihat Bercandaan
            </CustomLink>
            <CustomLink href="/bercandaan/server/direct/create">
              Bikin Bercandaan
            </CustomLink>
          </div>
        </div>
        <div className="mt-2 mb-2">
          <p className="font-semibold text-center">
            Server Component (Route Handler)
          </p>
          <div className="flex gap-4">
            <CustomLink href="/bercandaan/server/route-handler/list">
              Lihat Bercandaan
            </CustomLink>
            <CustomLink href="/bercandaan/server/route-handler/create">
              Bikin Bercandaan
            </CustomLink>
          </div>
        </div>
        <div className="mt-2 mb-4">
          <p className="font-semibold text-center">Client Component</p>
          <div className="flex gap-4">
            <CustomLink href="/bercandaan/client/list">
              Lihat Bercandaan
            </CustomLink>
            <CustomLink href="/bercandaan/client/create">
              Bikin Bercandaan
            </CustomLink>
          </div>
        </div>
      </div>
    </section>
  );
}
