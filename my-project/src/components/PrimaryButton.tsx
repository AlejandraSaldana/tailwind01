interface PrimaryButtonProps {
  label: string;
}


function PrimaryButton ({ label }: PrimaryButtonProps) {
    return (
        <button className="rounded-lg px-4 py-2 text-white bg-slate-900 hover:bg-slate-300 text-sm flex focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-slate-500">
            {label}
        </button>
    );

}

export default PrimaryButton;