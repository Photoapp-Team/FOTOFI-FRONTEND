const { REACT_APP_API_ENDPOINT } = process.env;

const USER_URL = `${REACT_APP_API_ENDPOINT}/sessions/session/rate`;

export const rateSession = async (rate, sessionId) => {
  const id = sessionId;
  const sessionRate = rate;
  const token = localStorage.getItem("token");

  const response = await fetch(`${USER_URL}/${id}`, {
    method: "PATCH",

    headers: {
      "Content-Type": "application/json",
      Authorization: `Bearer ${token}`,
    },
    body: JSON.stringify({ ratingValue: sessionRate }),
  });
  const data = await response.json();

  return data;
};
