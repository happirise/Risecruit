export default function MobileNavBar() {
  return (
    <nav className="w-screen bg-white fixed bottom-0 pt-2 pb-5 md:hidden border-t text-center text-xs">
      <div className="h-16 w-full grid grid-cols-5 ">
        <a className="h-full flex items-center bg-blue-100">
          <div className="m-auto">
            <div>icon</div>
            <span>menu 1</span>
          </div>
        </a>
        <a className="h-full flex items-center bg-blue-200">
          <div className="m-auto">
            <div>icon</div>
            <span>menu 2</span>
          </div>
        </a>
        <a className="h-full flex items-center bg-blue-300">
          <div className="m-auto">
            <div>icon</div>
            <span>menu 3</span>
          </div>
        </a>
        <a className="h-full flex items-center bg-blue-400">
          <div className="m-auto">
            <div>icon</div>
            <span>menu 4</span>
          </div>
        </a>
        <a className="h-full flex items-center bg-blue-500">
          <div className="m-auto">
            <div>icon</div>
            <span>menu 5</span>
          </div>
        </a>
      </div>
    </nav>
  );
}
