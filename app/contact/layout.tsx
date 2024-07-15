import HomeNav from './../ui/home-nav';
 
export default function Layout({ children }: { children: React.ReactNode }) {
  return (
    <>
    <div className="m-0 antialiased">
      <HomeNav />
      <div className="flex-grow md:overflow-y-auto">{children}</div>

    </div>

    </>
  );
}