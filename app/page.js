import Dashboard from "@/components/Dashboard";
import Hero from "@/components/Hero";
import Login from "@/components/Login";
import Main from "@/components/Main";
import Image from "next/image";

export default function Home() {
  const isAuthenticated = false

  let children =(
    <Login />
  )

  if(isAuthenticated){
    children=(
      <Dashboard />
    )
  }

  return (
    <Main>
      {children}
    </Main>
  );
}
