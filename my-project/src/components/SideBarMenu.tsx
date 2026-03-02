import MenuItem from "./MenuItem";

function SideBarMenu() {
    return (
    <nav>
      <p className="font-bold mb-2">Menú</p>
      <ul>
        <MenuItem label="Dashboard" active/>
        <MenuItem label="Ingresos"/>
        <MenuItem label="Gastos"/>
        <MenuItem label="Perfil"/>
      </ul>
    </nav>
    );
}

export default SideBarMenu;