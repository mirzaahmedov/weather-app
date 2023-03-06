import { useEffect } from "react";
import { useSearchParams, useNavigate } from "react-router-dom";

const useURLSearchParams = () => {
  const navigate = useNavigate();

  const [searchParams, setSearchParams] = useSearchParams();

  useEffect(() => {
    if (!searchParams.has("latitude") || !searchParams.has("longitude")) {
      const newSearchParams = new URLSearchParams(searchParams);

      window.navigator.geolocation.getCurrentPosition((position) => {
        newSearchParams.set("latitude", position.coords.latitude.toString());
        newSearchParams.set("longitude", position.coords.longitude.toString());
        navigate("/?" + newSearchParams.toString());
      }, (error) => {
        if (error.code === error.PERMISSION_DENIED) {
          alert("Please allow location access to use this app.");
        }
      })
    }

    if (!searchParams.has("time")) {
      const newSearchParams = new URLSearchParams(searchParams);

      newSearchParams.set("time", Date.now().toString());
      navigate("/?" + newSearchParams.toString());
    }
  }, [searchParams, navigate]);

  return [searchParams, setSearchParams] as const;
}

export default useURLSearchParams;
