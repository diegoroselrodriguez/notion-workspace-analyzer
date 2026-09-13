type Props = {

  sidebar: React.ReactNode;

  children: React.ReactNode;

};

export default function AppLayout({

  sidebar,

  children,

}: Props) {

  return (

    <div className="flex h-screen bg-slate-100">

      <aside className="w-72 border-r border-slate-800 bg-slate-900">

        {sidebar}

      </aside>

      <main className="flex-1 overflow-y-auto">

        {children}

      </main>

    </div>

  );

}