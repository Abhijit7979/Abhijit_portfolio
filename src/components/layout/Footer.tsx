'use client';

export const Footer = () => {
  const year = new Date().getFullYear();

  return (
    <footer className="w-full border-t border-border bg-card/30">
      <div className="mx-auto max-w-6xl px-4 py-10 md:px-8">
        <div className="flex flex-col items-center gap-6 md:flex-row md:justify-between">
          <div className="flex flex-col items-center md:items-start gap-1">
            <div className="h-px w-12 bg-primary/60 rounded-full" aria-hidden />
            <p className="text-sm text-muted-foreground mt-2">
              © {year} S. Abhijit Rao
            </p>
          </div>
        </div>
      </div>
    </footer>
  );
};
