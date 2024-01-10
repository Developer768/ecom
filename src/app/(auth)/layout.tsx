const AuthLayout = ({ children }: { children: React.ReactNode }) => {
  return (
    <main className="flex h-screen w-full items-center justify-center bg-[url('/assets/images/leaves-bg.png')] bg-cover bg-center">
      {children}
    </main>
  );
};

export default AuthLayout;
