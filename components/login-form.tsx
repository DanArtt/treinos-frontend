import { cn } from "@/lib/utils"
import { Button } from "@/components/ui/button"
import { authClient } from "@/app/_lib/auth-client"
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card"
import {
  Field,
  FieldDescription,
  FieldGroup,
  FieldLabel,
} from "@/components/ui/field"
import { Input } from "@/components/ui/input"

export function LoginForm({
  className,
  ...props
}: React.ComponentProps<"div">) {

  const handleGoogleLogin = async () => {
    const { error } = await authClient.signIn.social({
      provider: "google",
      callbackURL: `${process.env.NEXT_PUBLIC_BASE_URL}/`,
    });

    if (error) {
      console.error(error.message);
    }
  };

  return (
    <div className={cn("flex flex-col gap-6", className)} {...props}>
      <Card>
        <CardHeader>
          <CardTitle>Faça Login na sua Conta</CardTitle>
          <CardDescription>
            Entre com seu e-mail para fazer o Login na sua conta.
          </CardDescription>
        </CardHeader>

        <CardContent>
          <form>
            <FieldGroup>

              <Field>
                <FieldLabel htmlFor="email">E-mail</FieldLabel>
                <Input
                  id="email"
                  type="email"
                  placeholder="example@gmail.com"
                  required
                />
              </Field>

              <Field>
                <div className="flex items-center">
                  <FieldLabel htmlFor="password">Senha</FieldLabel>
                  <a
                    href="#"
                    className="ml-auto inline-block text-sm underline-offset-4 hover:underline"
                  >
                    Esqueceu sua Senha ?
                  </a>
                </div>
                <Input id="password" type="password" placeholder="********" required />
              </Field>

              <Field>
                <Button type="submit">
                  Login
                </Button>

                <Button
                  variant="outline"
                  type="button"
                  onClick={handleGoogleLogin}
                >
                  Login com o Google
                </Button>

                <FieldDescription className="text-center">
                  Não tem uma conta ? <a href="#">Cadastre-se</a>
                </FieldDescription>
              </Field>

            </FieldGroup>
          </form>
        </CardContent>
      </Card>
    </div>
  )
}