import PrimaryButton from "./PrimaryButton";

interface InfoCardProps {
    label: string,
    img: string,

}

function InfoCard({label,img}: InfoCardProps) {
    return (
        <section className="max-w-sm rounded-xl border border-slate-200 bg-white p-4 shadow-sm">
            <h2 className="text-base font-semibold text-slate-900">
                {label}
            </h2>
            <img className="py-2 mt-2 text-sm text-slate-700" alt="Imagen" src={img} />
            <PrimaryButton label="Ver Más"/>
        </section>
    );
}

export default InfoCard;