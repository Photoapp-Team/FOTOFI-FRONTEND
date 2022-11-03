export const statusFormater = (packageStatusObject) => {
  const status = packageStatusObject;
  const statusArray = [];

  if (status.requested) {
    statusArray.push("Solicitada");
  }
  if (status.scheduled) {
    statusArray.push("Programada");
  }
  if (status.approved) {
    statusArray.push("Aprobada");
  }
  if (status.payed) {
    statusArray.push("Pagada");
  }
  if (status.cancelled) {
    statusArray.push("Cancelada");
  }
  if (status.preUploaded) {
    statusArray.push("Por seleccionar");
  }
  if (status.selected) {
    statusArray.push("Fotos seleccionadas");
  }
  if (status.delivered) {
    statusArray.push("Entregada");
  }

  return statusArray;
};
