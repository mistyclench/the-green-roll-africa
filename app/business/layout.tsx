import HomeNav from './../ui/home-nav';
 
export default function Layout({ children }: { children: React.ReactNode }) {
  return (
    <>
    <div className="">
      <HomeNav />
      <div className="flex-grow p-6 md:overflow-y-auto">{children}</div>

    </div>

    </>
  );
}