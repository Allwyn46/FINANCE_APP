import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { Blocks } from "lucide-react";
import LoginForm from "@/components/LoginForm";

export function Login() {
  return (
    <Card className="w-full max-w-md border-0 shadow-none">
      <CardContent className="p-8 space-y-8">
        {/* Mobile Brand Header */}
        <div className="lg:hidden text-center space-y-4">
          <div className="flex items-center justify-center gap-2">
            <div className="w-10 h-10 bg-primary/10 rounded-lg flex items-center justify-center">
              <Blocks className="h-5 w-5 text-primary" />
            </div>
            <span className="text-xl font-bold">Your Brand</span>
          </div>
        </div>

        <div className="space-y-2 text-center lg:text-left">
          <h1 className="text-3xl font-bold">Sign in to your account</h1>
          <p className="text-muted-foreground">
            Enter your credentials to access your dashboard
          </p>
        </div>

        <LoginForm />

        <div className="text-center text-sm text-muted-foreground">
          Don't have an account?{" "}
          <Button variant="link" className="px-0 font-medium">
            Sign up for free
          </Button>
        </div>
      </CardContent>
    </Card>
  );
}
