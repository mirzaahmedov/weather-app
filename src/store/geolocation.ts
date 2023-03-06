import { create } from "zustand";

const useGeolocation = create((set) => ({
  latitude: 0,
  longitude: 0,
  permission: false,
  error: false,
  setGeolocation: (latitude: number, longitude: number) => {
    localStorage.setItem("latitude", latitude.toString());
    localStorage.setItem("longitude", longitude.toString());

    set({ latitude, longitude });
  }
}));

export default useGeolocation;
