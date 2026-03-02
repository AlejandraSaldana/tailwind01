interface MenuItemProps {
  label: string
  active?: boolean;
}

function MenuItem ({label, active}: MenuItemProps) {
    return (
        <section className={`rounded px-3 py-2 mb-1 text-sm hover:bg-slate-100 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-slate-400 ${active ? "bg-slate-200" : ""}`}>
            {label}
        </section>
    );
}

export default MenuItem;