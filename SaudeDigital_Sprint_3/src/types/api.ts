export const API_URL = "https://sprintfinaljava.onrender.com";

export const api = {
  // --- Lembretes ---
  getLembretes: async () => {
    const res = await fetch(`${API_URL}/lembretes`);
    return res.json();
  },
  createLembrete: async (data: any) => {
    const res = await fetch(`${API_URL}/lembretes`, {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(data),
    });

    const contentType = res.headers.get("content-type") || "";
    const body = contentType.includes("application/json")
      ? await res.json()
      : await res.text();

    return { status: res.status, ok: res.ok, body };
  },
  updateLembrete: async (id: number, data: any) => {
    const res = await fetch(`${API_URL}/lembretes/${id}`, {
      method: "PUT",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(data),
    });

    const contentType = res.headers.get("content-type") || "";
    const body = contentType.includes("application/json")
      ? await res.json()
      : await res.text();

    return { status: res.status, ok: res.ok, body };
  },
  deleteLembrete: async (id: number) => {
    const res = await fetch(`${API_URL}/lembretes/${id}`, {
      method: "DELETE"
    });

    const contentType = res.headers.get("content-type") || "";
    const body = contentType.includes("application/json")
      ? await res.json()
      : await res.text();

    return { status: res.status, ok: res.ok, body };
  },

  // --- Médicos ---
  getMedicos: async () => {
    const res = await fetch(`${API_URL}/medicos`);
    return res.json();
  },

  // --- Dependentes ---
  getDependentes: async () => {
    const res = await fetch(`${API_URL}/parentes`);
    return res.json();
  },
  createDependente: async (data: any) => {
    const res = await fetch(`${API_URL}/parentes`, {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(data),
    });

    const contentType = res.headers.get("content-type") || "";
    const body = contentType.includes("application/json")
      ? await res.json()
      : await res.text();

    return { status: res.status, ok: res.ok, body };
  },
  updateDependente: async (id: number, data: any) => {
    const res = await fetch(`${API_URL}/parentes/${id}`, {
      method: "PUT",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(data),
    });

    const contentType = res.headers.get("content-type") || "";
    const body = contentType.includes("application/json")
      ? await res.json()
      : await res.text();

    return { status: res.status, ok: res.ok, body };
  },
  deleteDependente: async (id: number) => {
    const res = await fetch(`${API_URL}/parentes/${id}`, {
      method: "DELETE"
    });

    const contentType = res.headers.get("content-type") || "";
    const body = contentType.includes("application/json")
      ? await res.json()
      : await res.text();

    return { status: res.status, ok: res.ok, body };
  },
};
