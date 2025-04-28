import { redirect } from "next/navigation";
import { auth } from "@/app/lib/auth";

// Rota protegida por autenticação. Somente acessível para usuários autenticados.
// Todas rotas /enviar-email/** são protegidas por essa autenticação.
export default async function LayoutPrivate({ children }) {
  const session = await auth();

  if (!session) {
    redirect("/");
  }

  return <>{children}</>;
}
