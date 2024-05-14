import Container from "../layout/shared/Container";

const LoadingSinglePage = () => {
  return (
    <Container className="lg:h-screen pt-10">
      <div className="grid grid-cols-12 gap-10 bg-white rounded-lg shadow-sm">
        <div className="lg:col-span-7 col-span-12 h-[500px] p-5">
          <div className="animate-pulse ">
            <div className="rounded-lg bg-slate-300 h-[450px] w-full"></div>
          </div>
        </div>
        <div className="lg:col-span-5 col-span-12">
          <div className="animate-pulse ">
            <div className="flex-1 space-y-6 py-1 pr-4">
              <div className="h-2 bg-slate-200 rounded mt-5"></div>
              <div className="h-2 bg-slate-200 rounded mt-10"></div>
              <div className="h-2 bg-slate-200 rounded mt-10"></div>
              <div className="h-2 bg-slate-200 rounded mt-10"></div>
              <div className="h-2 bg-slate-200 rounded mt-10"></div>
              <div className="h-2 bg-slate-200 rounded mt-10"></div>
              <div className="h-2 bg-slate-200 rounded mt-10"></div>
              <div className="h-2 bg-slate-200 rounded mt-10"></div>
              <div className="h-2 bg-slate-200 rounded mt-10"></div>
              <div className="h-2 bg-slate-200 rounded mt-10"></div>
              <div className="h-2 bg-slate-200 rounded mt-10"></div>
              <div className="h-2 bg-slate-200 rounded mt-10"></div>
              <div className="space-y-3 pt-5">
                <div className="grid grid-cols-3 gap-4">
                  <div className="h-2 bg-slate-200 rounded col-span-2"></div>
                  <div className="h-2 bg-slate-200 rounded col-span-1"></div>
                </div>
                <div className="h-5 bg-slate-200 rounded"></div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </Container>
  );
};

export default LoadingSinglePage;
