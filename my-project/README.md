# Mis Finanzas

## Decisiones de diseño

El sidebar y el contenido principal están en un grid de dos columnas en pantallas grandes. En móvil se ponen uno abajo del otro automáticamente.Separé PrimaryButton, SidebarMenu, MenuItem e InfoCard para no repetir el mismo código varias veces. Los botones cambian de color con hover y con focus-visible se "iluminan" los botones al navegar con teclado, lo cual mejora la accesibilidad.

