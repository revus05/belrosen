export function SiteFooter() {
  return (
    <footer className="border-t border-white/60 bg-white/50 py-6">
      <div className="mx-auto flex w-full max-w-6xl flex-col items-start justify-between gap-2 px-4 text-sm text-muted-foreground md:flex-row md:items-center md:px-6">
        <p>
          © {new Date().getFullYear()} БелРёзен. Инженерные системы и сервис.
        </p>
      </div>
    </footer>
  );
}
