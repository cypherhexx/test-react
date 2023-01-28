export function checkToken(amount = "") {
  return new Promise<{ data: string }>((resolve) =>
    setTimeout(() => resolve({ data: amount }), 500)
  );
}

