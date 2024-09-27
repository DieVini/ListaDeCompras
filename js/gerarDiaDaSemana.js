export function gerarDiaDaSemana() {
    const data = new Date();
    const diaDaSemana = data.toLocaleDateString("pt-BR", { weekday: "long" });
    const dataCompleta = data.toLocaleDateString();
    const hora = data.toLocaleTimeString("pt-BR", { hour: "numeric", minute: "numeric" });

    return `${diaDaSemana} (${dataCompleta}) às ${hora}`;
}