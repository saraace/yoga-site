import axios from "axios";

export default async function rest(...args) {
  try {
    const { data } = await axios(...args);
    return data;
  } catch (error) {
    if (!error.data) {
      error.data = { message: error.message };
    }
    throw error;
  }
}
