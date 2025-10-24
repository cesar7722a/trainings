import { useNavigate } from "react-router";

function FormLogin() {
  const navigate = useNavigate();

  return (
    <div className="p-6 flex justify-center items-center h-full">
      <form className="space-y-4" onSubmit={() => navigate("bank")}>
        <div>
          <h1 className="text-center font-semibold text-4xl">Fazer o Login</h1>
          <h2 className="text-center">
            Entrar com o email ou contacto e a pass word
          </h2>
        </div>
        <div className="space-y-3 pb-6">
          <div className="flex flex-col space-y- w-96 space-y-1">
            <label htmlFor="">Email ou contacto</label>
            <input
              type="text"
              placeholder="cesar@gmail.com"
              className="h-9 px-2 outline-none border-2 rounded-md border-gray-6 focus:border-blue-8"
            />
          </div>
          <div className="flex flex-col space-y-1">
            <label htmlFor="">Pass word</label>
            <input
              type="text"
              placeholder="digete a pass word"
              className="h-9 px-2 outline-none border-2 rounded-md border-gray-6 focus:border-blue-8"
            />
          </div>
        </div>
        <div>
          <button
            type="submit"
            className="h-10 w-full border rounded-md bg-blue-9 text-blue-contrast"
          >
            Entrar
          </button>
        </div>
      </form>
    </div>
  );
}

export { FormLogin };
