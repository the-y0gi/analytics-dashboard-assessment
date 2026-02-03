import { Sidebar } from "./Sidebar";
import { Header } from "./Header";

export default function DashboardLayout({ children }: { children: React.ReactNode }) {
  return (
    // Dynamic background and text based on theme
    <div className="flex h-screen bg-ui-light-bg dark:bg-ui-dark-bg text-ui-light-text dark:text-ui-dark-text overflow-hidden transition-colors duration-300">
      <Sidebar />
      <div className="flex-1 flex flex-col overflow-hidden">
        <Header />
        <main className="flex-1 overflow-x-hidden overflow-y-auto p-4 md:p-8">
          {children}
        </main>
      </div>
    </div>
  );
}