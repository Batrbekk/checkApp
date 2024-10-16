"use client"

import * as React from "react"

import {useState} from "react";
import { cn } from "@/lib/utils"
import {Input} from "@/components/ui/input";
import { Icons } from "@/components/ui/icons";
import { Button } from "@/components/ui/button";
import {PasswordInput} from "@/components/ui/password-input";
import {useRouter} from "next/navigation";
import {toast} from "@/hooks/use-toast";

interface UserAuthFormProps extends React.HTMLAttributes<HTMLDivElement> {}

export function UserAuthForm({ className, ...props }: UserAuthFormProps) {
  const router = useRouter();

  const [name, setName] = useState('');
  const [mail, setMail] = useState('');
  const [password, setPassword] = useState('');
  const [isLoading, setIsLoading] = useState<boolean>(false);


  async function onSubmit(event: React.SyntheticEvent) {
    event.preventDefault();
    setIsLoading(true);

    const response = await fetch('https://check-app-admin.vercel.app/api/registration', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json'
      },
      body: JSON.stringify({
        name: name,
        email: mail,
        password: password
      })
    }).finally(() => {
      setIsLoading(false);
    });

    if (response.ok) {
      router.push('/login');
    } else {
      toast({
        variant: 'destructive',
        title: 'Упс! Что-то пошло не так...',
        description: 'Попробуйте еще раз'
      })
    }
  }

  return (
    <div className={cn("grid gap-6", className)} {...props}>
      <form onSubmit={onSubmit}>
        <div className="grid gap-2">
          <div className="grid gap-1">
            <Input
              id="name"
              value={name}
              onChange={(event) => setName(event.target.value)}
              placeholder="Ваше имя"
              type="text"
              autoComplete="name"
              disabled={isLoading}
              className="border-[#4B5162]"
            />
            <Input
              id="email"
              value={mail}
              onChange={(event) => setMail(event.target.value)}
              placeholder="email@example.com"
              type="email"
              autoCapitalize="none"
              autoComplete="email"
              autoCorrect="off"
              disabled={isLoading}
              className="border-[#4B5162]"
            />
            <PasswordInput
              id="password"
              value={password}
              onChange={(event) => setPassword(event.target.value)}
              placeholder="Пароль"
              type="password"
              autoComplete="password"
              disabled={isLoading}
              className="border-[#4B5162]"
            />
          </div>
          <Button disabled={isLoading} className="bg-[#1D7CBC] hover:bg-[#1D7CBC]">
            {isLoading && (
              <Icons.spinner className="mr-2 h-4 w-4 animate-spin" />
            )}
            Зарегистрироваться
          </Button>
        </div>
      </form>
    </div>
  )
}
