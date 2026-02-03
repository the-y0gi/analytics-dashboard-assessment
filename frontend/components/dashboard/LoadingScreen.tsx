export const LoadingScreen = () => {
  return (
    <div className="h-screen w-full flex flex-col items-center justify-center bg-slate-50 dark:bg-[#020617] transition-colors duration-500">
      {/* Premium Outer Ring */}
      <div className="relative flex items-center justify-center">
        <div className="w-24 h-24 border-4 border-brand-primary/20 border-t-brand-primary rounded-full animate-spin"></div>
        {/* Inner Pulse Dot */}
        <div className="absolute w-4 h-4 bg-brand-primary rounded-full animate-pulse"></div>
      </div>
      
      {/* Branding & Text */}
      <div className="mt-8 text-center space-y-2">
        <h2 className="text-2xl font-black tracking-tighter text-slate-900 dark:text-white uppercase">
          MapUp <span className="text-brand-primary">Engine</span>
        </h2>
        <div className="flex items-center justify-center gap-2">
          <span className="text-sm font-medium text-slate-500 animate-pulse">
            Processing 50,000+ EV Records...
          </span>
        </div>
      </div>

      {/* Progress Bar Mockup (Optional for UI) */}
      <div className="mt-6 w-48 h-1.5 bg-slate-200 dark:bg-slate-800 rounded-full overflow-hidden">
        <div className="h-full bg-brand-primary animate-[loading_2s_ease-in-out_infinite] w-full origin-left"></div>
      </div>
    </div>
  );
};