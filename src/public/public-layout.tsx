import { Outlet } from "react-router";

function PublicLayout() {
  return (
    <div className="flex h-screen">
      <div className="w-1/2 bg-blue-4 p-6 flex flex-col justify-between">
        <div>
          <h1 className="font-semibold text-3xl text-blue-9">Nome do bank</h1>
        </div>
        <div className="text-center">
          Lorem ipsum, dolor sit amet consectetur adipisicing elit. Consequatur,
          doloremque enim magni incidunt ullam, numquam soluta amet autem earum
          necessitatibus, quas exercitationem facilis rerum. Est porro velit
          ipsa sed alias!
        </div>
      </div>
      <div className="flex-1">
        <Outlet />
      </div>
    </div>
  );
}

export { PublicLayout };
