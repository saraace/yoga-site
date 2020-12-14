import { useState, useEffect } from "react";
import Router from "next/router";
import useSWR from "swr";

const defaultState = { image: undefined, status: "loading" };
export const useImage = (url) => {
  const res = useState(defaultState);
  const image = res[0].image;
  const status = res[0].status;

  const setState = res[1];

  useEffect(() => {
    if (!url) return;
    const img = document.createElement("img");

    function onload() {
      setState({ image: img, status: "loaded" });
    }

    function onerror() {
      setState({ image: undefined, status: "failed" });
    }

    img.addEventListener("load", onload);
    img.addEventListener("error", onerror);
    //crossOrigin && (img.crossOrigin = crossOrigin);
    img.src = url;

    return () => {
      img.removeEventListener("load", onload);
      img.removeEventListener("error", onerror);
      setState(defaultState);
    };
  }, [url]);

  return [image, status];
};

export const useUser = ({
  redirectTo = false,
  redirectIfFound = false,
} = {}) => {
  const { data: user, mutate: mutateUser } = useSWR("/api/user");
  useEffect(() => {
    // if no redirect needed, just return (example: already on /dashboard)
    // if user data not yet there (fetch in progress, logged in or not) then don't do anything yet
    if (!redirectTo || !user) return;

    if (
      // If redirectTo is set, redirect if the user was not found.
      (redirectTo && !redirectIfFound && !user?.isLoggedIn) ||
      // If redirectIfFound is also set, redirect if the user was found
      (redirectIfFound && user?.isLoggedIn)
    ) {
      Router.push(redirectTo);
    }
  }, [user, redirectIfFound, redirectTo]);

  return { user, mutateUser };
};
