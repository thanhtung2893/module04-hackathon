const STORAGE_KEY = "notes";
import { Note } from "./type";

export const getNotesFromLocalStorage = (): Note[] => {
  const notes = JSON.parse(localStorage.getItem(STORAGE_KEY) || "[]") as Note[];
  return notes;
};

export const saveNotesToLocalStorage = (notes: Note[]): void => {
  localStorage.setItem(STORAGE_KEY, JSON.stringify(notes));
};
