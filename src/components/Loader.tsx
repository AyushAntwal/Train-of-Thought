export default function Loader() {
  return (
    <main className="">
      <div className="main min-h-screen p-10 xl:p-20">
        <div className="flex animate-pulse space-x-4">
          <div className="flex-1 space-y-10 py-1">
            {Array.from({ length: 5 }).map((_, i) => (
              <div className="space-y-3" key={"index" + i + 1}>
                <div className="grid grid-cols-3 gap-4">
                  <div className="col-span-2 h-2 rounded bg-gray-200"></div>
                  <div className="col-span-1 h-2 rounded bg-gray-200"></div>
                </div>
                <div className="h-2 rounded bg-gray-200"></div>
              </div>
            ))}
          </div>
        </div>
      </div>
      <div className="divider-x mt-20"></div>
    </main>
  );
}
