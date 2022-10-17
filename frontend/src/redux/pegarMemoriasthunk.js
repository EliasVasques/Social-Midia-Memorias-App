import { createAsyncThunk } from "@reduxjs/toolkit";

export const pegarMemorias = createAsyncThunk("pegarMemorias", async () => {
    return fetch("http://localhost:5000/api/memorias").then((resposta) => resposta.json())
});