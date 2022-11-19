const { REACT_APP_API_ENDPOINT } = process.env;

const SessionUrl = `${REACT_APP_API_ENDPOINT}/sessions/session`;

export const updateSession = async (id, values) => {
  const response = await fetch(`${SessionUrl}/${id}`, {
    method: "PATCH",

    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify(values),
  });
  const data = await response.json();

  return data;
};
