import { useState, useEffect } from "react";
import { useSearchParams } from "react-router-dom";

type Params = {
  time: number | null;
  latitude: number | null;
  longitude: number | null;
}
const useURLSearchParams = () => {
  const [searchParams, setSearchParams] = useSearchParams();
  const [params, setParams] = useState<null | Params>();
  const [error, setError] = useState<null | GeolocationPositionError>();

  useEffect(() => {
    const time = JSON.parse(searchParams.get("time") || "null");
    const latitude = JSON.parse(searchParams.get("latitude") || "null");
    const longitude = JSON.parse(searchParams.get("longitude") || "null");

    if (!time) {
      const newParams = new URLSearchParams();
      newParams.set("time", JSON.stringify(Date.now()));
      setSearchParams(newParams);
      
      return
    }
    if (!latitude || !longitude) {
      const newParams = new URLSearchParams(searchParams);

      window.navigator.geolocation.getCurrentPosition((position) => {
        newParams.set("latitude", JSON.stringify(position.coords.latitude));
        newParams.set("longitude", JSON.stringify(position.coords.longitude));
        setSearchParams(newParams);
      }, (error) => {
          setError(error);
      });

      return
    }

    const values = {
      time,
      latitude,
      longitude
    }

    setParams(values);
  }, [searchParams]);

  return [params, error] as const
}

export default useURLSearchParams;
